module Commands.Make exposing (..)

-- IMPORTS ---------------------------------------------------------------------

import Data.Error as Error exposing (Error)
import Data.String as String
import Dict exposing (Dict)
import FFI.Chalk exposing (Chalk)
import FFI.Fs exposing (Fs)
import FFI.Path exposing (Path)
import FFI.Process exposing (Process)
import Ren.AST.Module as Module exposing (Module)
import Ren.Compiler as Compiler exposing (typed)


{-| -}
run : { ffi | chalk : Chalk, fs : Fs, path : Path, process : Process } -> String -> Result String String
run ({ chalk } as ffi) rootPath =
    verify ffi rootPath
        |> Result.andThen
            (\{ srcPath, renPath } ->
                collect ffi srcPath
                    |> compile ffi renPath
                    |> gather
                    |> write ffi
            )
        |> Result.map (\_ -> "🎉 " ++ chalk.green "Build successful!" ++ " 🎉")
        |> Result.mapError (Error.format chalk)



-- STEPS -----------------------------------------------------------------------


{-| -}
verify : { ffi | fs : Fs, path : Path } -> String -> Result Error { srcPath : String, renPath : String }
verify { fs, path } rootPath =
    let
        renJson =
            path.join [ rootPath, "ren.json" ]

        srcPath =
            path.join [ rootPath, "src" ]

        renPath =
            path.join [ rootPath, ".ren" ]
    in
    if Basics.not <| fs.exists renJson then
        Error.from "Verification Error" "I ran into an error verifying your Ren project"
            |> Error.withMessage "Could not locate a valid ren.json."
            |> Error.withHint "You can run `ren new` to scaffold a new project."
            |> Err

    else if (Basics.not <| fs.exists srcPath) || (Basics.not <| fs.isDir srcPath) then
        Error.from "Verification Error" "I ran into an error verifying your Ren project"
            |> Error.withMessage "Could not locate your src directory."
            |> Error.withHint "You can run `ren new` to scaffold a new project."
            |> Err

    else if (Basics.not <| fs.exists renPath) || (Basics.not <| fs.exists renPath) then
        Error.from "Verification Error" "I ran into an error verifying your Ren project"
            |> Error.withMessage "Could not locate your .ren directory."
            |> Error.withHint "You can run `ren new` to scaffold a new project."
            |> Err

    else
        Ok { srcPath = srcPath, renPath = renPath }


{-| -}
collect : { ffi | fs : Fs, path : Path } -> String -> List String
collect ({ fs, path } as ffi) dir =
    List.concatMap
        (\entry ->
            let
                absolutePath =
                    path.resolve [ dir, entry ]
            in
            if entry == ".ren" then
                -- Don't collect files in the `.ren` directory!
                []

            else if fs.isDir absolutePath then
                collect ffi absolutePath

            else if fs.isFile absolutePath && path.extname absolutePath == ".ren" then
                [ absolutePath ]

            else
                []
        )
        (fs.readDir dir)


{-| -}
compile : { ffi | fs : Fs, path : Path } -> String -> List String -> Dict String (Result Compiler.Error String)
compile ({ fs, path } as ffi) dotRenPath sources =
    let
        toolchain sourcePath =
            { typed | desugar = resolve ffi sourcePath dotRenPath >> typed.desugar }
    in
    List.foldl
        (\sourcePath files ->
            let
                -- For modules that have `ext` declarations, the compiler automatically
                -- inserts an import using the name passed in to `Compiler.run`
                -- plus `.ffi.mjs`.
                --
                -- This just gets the file name from the source path and strips
                -- the `.ren` extension.
                ffiPath =
                    "./" ++ path.basename sourcePath (Just ".ren")

                file =
                    fs.readFile sourcePath "utf8"
                        |> Result.fromMaybe (Compiler.ParseError [])
                        |> Result.andThen (Compiler.run ffiPath <| toolchain sourcePath)
            in
            Dict.insert sourcePath file files
        )
        Dict.empty
        sources


{-| -}
resolve : { ffi | path : Path } -> String -> String -> Module meta -> Module meta
resolve { path } sourcePath dotRenPath =
    let
        relativeDotRenDir =
            path.relative (path.dirname sourcePath) dotRenPath
    in
    Module.mapImports
        (\import_ ->
            { import_
                | path =
                    case import_.path of
                        -- We want to allow users to import packages without
                        -- explicitly specifying the entire path to ".ren/deps/"
                        -- the same way you don't have to have imports relative
                        -- to node_modules in JavaScript.
                        --
                        -- This here handy transformation resolves that path for
                        -- us!
                        Module.PackageImport importPath ->
                            let
                                relativeImportPath =
                                    path.join [ relativeDotRenDir, "deps", importPath ++ ".mjs" ]
                            in
                            Module.PackageImport <|
                                -- Node won't be happy if our would-be relative
                                -- import path doesn't start with a relative path
                                -- specifier like "./" or "../"
                                --
                                -- The `path.join` above won't add a "./" for us
                                -- so we check if we're at the top of the project
                                -- and if so, add the "./" manually.
                                if String.startsWith ".ren" relativeImportPath then
                                    "./" ++ relativeImportPath

                                else
                                    relativeImportPath

                        -- We need to transform local imports from ".ren" imports
                        -- to ".mjs" ones.
                        Module.LocalImport importPath ->
                            Module.LocalImport <|
                                if path.extname importPath == "" then
                                    importPath ++ ".ren.mjs"

                                else if path.extname importPath == ".ren" then
                                    importPath ++ ".mjs"

                                else
                                    importPath

                        -- External imports don't need to be modified
                        -- as they're assumed to already be correct.
                        _ ->
                            import_.path
            }
        )


{-| -}
gather : Dict String (Result Compiler.Error String) -> Result Error (List ( String, String ))
gather sources =
    let
        gatherErrors errors =
            if List.isEmpty errors then
                Error.from "Internal Error" <|
                    "I ran into a compiler error but could not locate the source "
                        ++ "file that caused it. Please open an issue on GitHub at: "
                        ++ "https://github.com/ren-lang/cli/issues."

            else
                Error.from "Compilation Error" "I ran into an error compiling the following files"
                    |> Error.withMessage (String.join "\n" <| List.map Tuple.first errors)
    in
    Result.mapError gatherErrors <|
        List.foldr
            (\( path, source ) files ->
                case ( source, files ) of
                    ( Ok source_, Ok files_ ) ->
                        Ok <| ( path, source_ ) :: files_

                    -- If we already encountered some errors while compiling past
                    -- modules, there's no sense part-compiling the project so we'll
                    -- just ignore the `Ok` result for now.
                    ( Ok _, Err _ ) ->
                        files

                    ( Err e, Err es ) ->
                        Err <| ( path, e ) :: es

                    -- Conversely, if we hit an error for the current module, even if
                    -- past compilations were successful we need to abort the process
                    -- and begin collecting errors for reporting.
                    ( Err e, Ok _ ) ->
                        Err [ ( path, e ) ]
            )
            (Ok [])
            (Dict.toList sources)


{-| -}
write : { ffi | fs : Fs } -> Result Error (List ( String, String )) -> Result Error ()
write { fs } =
    let
        writeFile ( path, contents ) _ =
            fs.writeFile (path ++ ".mjs") contents
    in
    Result.map (List.foldl writeFile ())
