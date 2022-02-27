port module Main exposing (..)

-- IMPORTS ---------------------------------------------------------------------

import Commands.Make as Make
import Commands.New as New
import Commands.Run as Run
import Data.Result as Result
import Data.String as String
import FFI.Chalk
import FFI.Fs
import FFI.Path
import FFI.Process
import Json.Decode
import Process
import Task



-- RUNNING THE CLI -------------------------------------------------------------


{-| -}
type alias FFI =
    { chalk : FFI.Chalk.Chalk
    , fs : FFI.Fs.Fs
    , path : FFI.Path.Path
    , process : FFI.Process.Process
    }


{-| -}
run : FFI -> Cmd Int
run ({ chalk, path, process } as ffi) =
    -- The first two elements in `argv` are the path of the Node executable and
    -- the path of the JavaScript file being executed respectively. I think we can
    -- safely ignore those, so we'll just drop them instead of pattern matching
    -- them.
    case List.drop 2 process.argv of
        "new" :: name :: _ ->
            New.run ffi name
                |> Result.extract (exitWithMessage 0) (exitWithError 1)

        "make" :: root :: _ ->
            path.join [ process.cwd (), root ]
                |> Make.run ffi
                |> Result.extract (exitWithMessage 0) (exitWithError 1)

        "make" :: [] ->
            process.cwd ()
                |> Make.run ffi
                |> Result.extract (exitWithMessage 0) (exitWithError 1)

        "run" :: "--make" :: args ->
            process.cwd ()
                |> Make.run ffi
                |> Result.mapError (exitWithError 1)
                |> Result.andThen
                    (\_ ->
                        path.join [ process.cwd (), "src", "main.ren" ]
                            |> Run.run ffi
                            |> Result.map (\filePath -> exec ( filePath, args ))
                            |> Result.mapError (exitWithError 1)
                    )
                |> Result.unwrap

        "run" :: args ->
            path.join [ process.cwd (), "src", "main.ren" ]
                |> Run.run ffi
                |> Result.extract (\filePath -> exec ( filePath, args )) (exitWithError 1)

        [ "repl" ] ->
            exit 0

        command :: _ ->
            exitWithError 1 <|
                String.join "\n"
                    [ chalk.red "[Unknown Command] I didn't recognise that command, did you mean one of these:"
                    , ""
                    , "  - ren " ++ chalk.green "new " ++ " <project_name>"
                    , "  - ren " ++ chalk.green "make"
                    , "  - ren " ++ chalk.green "run " ++ " <file_name>"
                    , ""
                    ]

        [] ->
            exitWithMessage 0 <|
                String.join "\n"
                    []



-- EXITS AND ERROR HANDLING ----------------------------------------------------


{-| -}
exit : Int -> Cmd Int
exit code =
    -- This sleep is necessary to stop Elm from synchronously calling `update`
    -- and exiting immediately.
    Task.perform (\_ -> code) (Process.sleep 0)


{-| -}
exitWithMessage : Int -> String -> Cmd Int
exitWithMessage code message =
    Cmd.batch [ exit code, stdout message ]


{-| -}
exitWithError : Int -> String -> Cmd Int
exitWithError code message =
    Cmd.batch [ exit code, stderr message ]



-- MAIN ------------------------------------------------------------------------


main : Program Json.Decode.Value (Maybe FFI) Int
main =
    Platform.worker
        { init =
            \flags ->
                let
                    ffiDecoder =
                        Json.Decode.map4 FFI
                            (Json.Decode.field "chalk" FFI.Chalk.decoder)
                            (Json.Decode.field "fs" FFI.Fs.decoder)
                            (Json.Decode.field "path" FFI.Path.decoder)
                            (Json.Decode.field "process" FFI.Process.decoder)
                in
                case Json.Decode.decodeValue ffiDecoder flags of
                    Ok ffi ->
                        ( Just ffi, run ffi )

                    Err _ ->
                        ( Nothing
                        , stderr <|
                            "Uh oh, it looks like there was an internal error while trying to "
                                ++ "initialise some FFI code. Please open an issue at "
                                ++ "https://ren-lang.github.com/cli."
                        )
        , update =
            \code ffi ->
                case ffi of
                    Just { process } ->
                        ( Basics.always ffi <| process.exit code, Cmd.none )

                    Nothing ->
                        ( ffi, Cmd.none )
        , subscriptions = \_ -> Sub.none
        }



-- PORTS -----------------------------------------------------------------------


port stdout : String -> Cmd msg


port stderr : String -> Cmd msg


port exec : ( String, List String ) -> Cmd msg
