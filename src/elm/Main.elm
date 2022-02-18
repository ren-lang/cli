port module Main exposing (main)

-- IMPORTS ---------------------------------------------------------------------

import Data.IO exposing (IO)
import Data.Project
import Dict exposing (Dict)
import Json.Decode
import Json.Encode
import Ren.AST.Module exposing (Module)
import Ren.Compiler exposing (typed, untyped)



-- MAIN ------------------------------------------------------------------------


main : Program Flags Model Msg
main =
    Platform.worker
        { init = init
        , update = update
        , subscriptions = subscriptions
        }



-- MODEL -----------------------------------------------------------------------


type Model
    = Idle
    | Compiling
        { renDir : String
        }


type alias Flags =
    ()


init : Flags -> IO Msg Model
init _ =
    Data.IO.pure Idle



-- UPDATE ----------------------------------------------------------------------


type Msg
    = GotProject (Dict String String)
    | GotProjectMetadata String
    | None


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case ( msg, model ) of
        ( GotProjectMetadata renDir, Idle ) ->
            Data.IO.pure
                (Compiling
                    { renDir = renDir
                    }
                )

        ( GotProjectMetadata _, _ ) ->
            Data.IO.pure model

        ( GotProject project, Compiling { renDir } ) ->
            let
                toolchain =
                    -- Ren's type system is incomplete, if this is causing you
                    -- problems for now just disable type checking altogether by
                    -- using `untyped` instead.
                    { typed | validate = addStdlib >> resolveImports renDir >> typed.validate }
            in
            Data.IO.pure model
                |> Data.IO.with
                    (project
                        |> Data.Project.fromFiles
                        |> Data.Project.map (Ren.Compiler.run toolchain)
                        |> Data.Project.toFiles
                        |> writeFiles
                    )

        ( GotProject _, _ ) ->
            Data.IO.pure model

        ( None, _ ) ->
            Data.IO.pure model


port toFs : Json.Encode.Value -> Cmd msg


{-| Once upon a time this function was neccessary because you could use operators
as functions (by writing `(+) 1` for example) and it would compile to the relevent
function call.

These days, Ren has removed that behaviour (it was superceded by the placeholder
variable `(1 + _)`) so I'm not entirely sure if this is needed anymore. Still,
we'll keep it around for now.

Also once upon a time we had an optimisation pass that would remove unused imports
from the emitted code, but that has gone (but only temporarily) for now too.

-}
addStdlib : Module meta -> Module meta
addStdlib { imports, declarations } =
    let
        stdlib =
            [ Ren.AST.Module.Import "pkg ren/array" [ "Array" ] []
            , Ren.AST.Module.Import "pkg ren/compare" [ "Compare" ] []
            , Ren.AST.Module.Import "pkg ren/function" [ "Function" ] []
            , Ren.AST.Module.Import "pkg ren/logic" [ "Logic" ] []
            , Ren.AST.Module.Import "pkg ren/math" [ "Math" ] []
            , Ren.AST.Module.Import "pkg ren/maybe" [ "Maybe" ] []
            , Ren.AST.Module.Import "pkg ren/object" [ "Object" ] []
            , Ren.AST.Module.Import "pkg ren/promise" [ "Promise" ] []
            , Ren.AST.Module.Import "pkg ren/string" [ "String" ] []
            ]
    in
    { imports =
        stdlib
            -- It's a javascript error to `import` two things with the same name.
            -- This is a super crude workaround that just removes any stdlib imports
            -- from the list above, if there is already an import with the same
            -- name in the module.
            |> List.filter (\{ name } -> Basics.not (List.any (.name >> (==) name) imports))
            |> (++) imports
    , declarations = declarations
    }


{-| The compiler itself isn't really concerned with module paths and imports and
dependency resolution, so the path of an import is really open to interpretation
from the particular piece of tooling being written.

In this case, we're special-handling two non-standard paths:

    - import "ext ./some_local.js" as Local
    - import "pkg ren/maybe" as Maybe

The `ext` paths are for importing non-ren code (typically javascript, but you could
import some CSS and make use of CSS modules, for example). The proceeding path is
not altered at all: the resulting javascript import will use what is written exactly.

`pkg` paths are for importing external ren dependencies. The compiler throws these
in a `.ren/deps` directory in the project, and so we transform a path

-}
resolveImports : String -> Module meta -> Module meta
resolveImports renDir { imports, declarations } =
    { imports =
        List.map
            (\{ path, name, exposed } ->
                { path =
                    if String.startsWith "ext " path then
                        String.replace "ext " "" path

                    else if String.startsWith "pkg " path then
                        renDir
                            ++ "/deps/"
                            ++ String.replace "pkg " "" path
                            ++ ".ren.mjs"

                    else
                        path ++ ".ren.mjs"
                , name = name
                , exposed = exposed
                }
            )
            imports
    , declarations = declarations
    }


writeFiles : Dict String (Result error String) -> Cmd msg
writeFiles files =
    let
        encodeFile file =
            case file of
                Ok src ->
                    Json.Encode.object
                        [ ( "$", Json.Encode.string "Ok" )
                        , ( "src", Json.Encode.string src )
                        ]

                Err _ ->
                    Json.Encode.object
                        [ ( "$", Json.Encode.string "Err" )
                        , ( "err", Json.Encode.string "" )
                        ]
    in
    toFs <|
        Json.Encode.object
            [ ( "$", Json.Encode.string "WriteFiles" )
            , ( "files", Json.Encode.dict identity encodeFile files )
            ]



-- SUBSCRIPTIONS ---------------------------------------------------------------


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.batch
        [ fromFs (Json.Decode.decodeValue fromFsDecoder >> Result.withDefault None)
        ]


port fromFs : (Json.Decode.Value -> msg) -> Sub msg


fromFsDecoder : Json.Decode.Decoder Msg
fromFsDecoder =
    Json.Decode.field "$" Json.Decode.string
        |> Json.Decode.andThen
            (\tag ->
                case tag of
                    "GotProject" ->
                        Json.Decode.map GotProject
                            (Json.Decode.field "0" (Json.Decode.dict Json.Decode.string))

                    "GotProjectMetadata" ->
                        Json.Decode.map GotProjectMetadata
                            (Json.Decode.field "0" Json.Decode.string)

                    _ ->
                        Json.Decode.fail ""
            )
