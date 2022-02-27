module Commands.New exposing (..)

-- IMPORTS ---------------------------------------------------------------------

import Data.Error as Error exposing (Error)
import Data.String as String
import FFI.Chalk exposing (Chalk)
import FFI.Fs exposing (Fs)
import FFI.Path exposing (Path)
import FFI.Process exposing (Process)
import Json.Encode


{-| -}
run : { ffi | chalk : Chalk, fs : Fs, path : Path, process : Process } -> String -> Result String String
run ({ chalk } as ffi) name =
    check ffi name
        |> Result.map (\_ -> scaffold ffi name)
        |> Result.map (\_ -> "🎉 " ++ chalk.green "Setup successful!" ++ " 🎉")
        |> Result.mapError (Error.format chalk)



-- STEPS ----------------------------------------------------------------------


{-| -}
check : { ffi | fs : Fs, path : Path, process : Process } -> String -> Result Error ()
check { fs, path, process } name =
    if fs.exists <| path.join [ process.cwd (), name ] then
        Error.from "Setup Error" "I ran into an error setting up your Ren project"
            |> Error.withMessage ("A " ++ name ++ " directory already exists. Delete it or choose a different project name.")
            |> Err

    else
        Ok ()


{-| -}
scaffold : { ffi | fs : Fs, path : Path, process : Process } -> String -> ()
scaffold { fs, path, process } name =
    let
        entryDir =
            path.join [ process.cwd (), name ]

        srcDir =
            path.join [ entryDir, "src" ]

        renDir =
            path.join [ entryDir, ".ren" ]

        json =
            Json.Encode.encode 4 <|
                Json.Encode.object
                    [ ( "name", Json.Encode.string name )
                    , ( "version", Json.Encode.string "1.0.0" )
                    , ( "dependencies"
                      , Json.Encode.object
                            [ ( "ren/stdlib", Json.Encode.string "1.0.0" ) ]
                      )
                    ]

        main =
            String.join "\n"
                [ "pub let main = _argv =>"
                , "    console.log \"Hello world!\""
                ]
    in
    Basics.always ()
        [ fs.makeDir False entryDir
        , fs.writeFile (path.join [ entryDir, "ren.json" ]) json
        , fs.makeDir False renDir
        , fs.makeDir True <| path.join [ renDir, "deps" ]
        , fs.makeDir False srcDir
        , fs.writeFile (path.join [ srcDir, "main.ren" ]) main
        ]
