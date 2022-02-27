module Commands.Run exposing (..)

-- IMPORTS ---------------------------------------------------------------------

import Data.Error as Error exposing (Error)
import Data.String as String
import FFI.Chalk exposing (Chalk)
import FFI.Fs exposing (Fs)
import FFI.Path exposing (Path)
import FFI.Process exposing (Process)


run : { ffi | chalk : Chalk, fs : Fs, path : Path, process : Process } -> String -> Result String String
run ({ chalk } as ffi) filePath =
    check ffi filePath
        |> Result.mapError (Error.format chalk)



-- STEPS -----------------------------------------------------------------------


{-| -}
check : { ffi | fs : Fs, path : Path, process : Process } -> String -> Result Error String
check { fs, path, process } filePath =
    let
        correctedFilePath =
            if path.extname filePath == "" then
                filePath ++ ".ren"

            else
                filePath

        compiledFilePath =
            correctedFilePath ++ ".mjs"
    in
    if Basics.not <| fs.exists <| path.join [ process.cwd (), "ren.json" ] then
        Error.from "Invalid Project" "I ran into a problem validating your Ren project"
            |> Error.withMessage "Could not locate a valid ren.json."
            |> Error.withHint "You must run `ren run` from the root of your Ren project."
            |> Err

    else if Basics.not <| fs.exists correctedFilePath then
        Error.from "Missing Source" "I ran into an error trying to run your Ren project"
            |> Error.withMessage ("Could not locate " ++ correctedFilePath ++ ".")
            |> Err

    else if Basics.not <| fs.exists compiledFilePath then
        Error.from "Missing Output" "I ran into an error trying to run your Ren project"
            |> Error.withMessage ("Could not locate " ++ compiledFilePath ++ ".")
            |> Error.withHint "Make sure you have previously run `ren make` to compile your project."
            |> Err

    else
        Ok compiledFilePath
