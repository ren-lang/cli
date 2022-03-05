module Commands.Add exposing (..)

-- IMPORTS ---------------------------------------------------------------------

import Data.Error as Error exposing (Error)
import Data.String as String
import Dict exposing (Dict)
import FFI.Chalk exposing (Chalk)
import FFI.Fs exposing (Fs)
import FFI.Gitly exposing (Gitly)
import FFI.Path exposing (Path)
import FFI.Process exposing (Process)
import Ren.AST.Module as Module exposing (Module)
import Ren.Compiler as Compiler exposing (typed)


{-| -}
run : { ffi | chalk : Chalk, fs : Fs, gitly : Gitly, path : Path } -> String -> String -> Result String ()
run ({ chalk, gitly } as ffi) rootPath pkg =
    verify ffi rootPath pkg
        |> Result.map
            (\{ author, repo, destPath } ->
                gitly.fetch author repo destPath
            )
        |> Result.mapError (Error.format chalk)



-- STEPS -----------------------------------------------------------------------


{-| -}
verify : { ffi | fs : Fs, path : Path } -> String -> String -> Result Error { destPath : String, author : String, repo : String }
verify { fs, path } rootPath pkg =
    let
        renJson =
            path.join [ rootPath, "ren.json" ]

        depsPath =
            path.join [ rootPath, ".ren", "deps" ]
    in
    if Basics.not <| fs.exists renJson then
        Error.from "Verification Error" "I ran into an error verifying your Ren project"
            |> Error.withMessage "Could not locate a valid ren.json."
            |> Error.withHint "You can run `ren new` to scaffold a new project."
            |> Err

    else if (Basics.not <| fs.exists depsPath) || (Basics.not <| fs.isDir depsPath) then
        Error.from "Verification Error" "I ran into an error verifying your Ren project"
            |> Error.withMessage "Could not locate your .ren/deps directory."
            |> Error.withHint "You can run `ren new` to scaffold a new project."
            |> Err

    else
        case String.split "/" pkg of
            [ author, repo ] ->
                Ok { destPath = path.join [ depsPath, author, repo ], author = author, repo = repo }

            _ ->
                Error.from "Invalid Package" "I ran into an error trying to fetch this package"
                    |> Error.withHint "Packages should be valid GitHub repo names of the format author/repo."
                    |> Err
