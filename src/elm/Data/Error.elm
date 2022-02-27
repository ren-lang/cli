module Data.Error exposing (..)

-- IMPORTS ---------------------------------------------------------------------

import Data.String as String
import FFI.Chalk exposing (Chalk)
import FFI.Fs exposing (Fs)
import FFI.Path exposing (Path)
import FFI.Process exposing (Process)



-- TYPES -----------------------------------------------------------------------


type alias Error =
    { label : String
    , summary : String
    , message : Maybe String
    , hint : Maybe String
    }



-- CONSTRUCTORS ----------------------------------------------------------------


from : String -> String -> Error
from label summary =
    { label = label
    , summary = summary
    , message = Nothing
    , hint = Nothing
    }



-- MANIPULATIONS ---------------------------------------------------------------


withMessage : String -> Error -> Error
withMessage message error =
    { error | message = Just message }


withHint : String -> Error -> Error
withHint hint error =
    { error | hint = Just hint }



-- CONVERSIONS -----------------------------------------------------------------


format : Chalk -> Error -> String
format chalk { label, summary, message, hint } =
    case ( message, hint ) of
        ( Just m, Just h ) ->
            String.join "\n"
                [ ""
                , chalk.red ("[" ++ label ++ "]") ++ " " ++ summary ++ ":"
                , ""
                , String.indent 4 m
                , ""
                , chalk.green "Hint" ++ ": " ++ h
                , ""
                ]

        ( Just m, Nothing ) ->
            String.join "\n"
                [ ""
                , chalk.red ("[" ++ label ++ "]") ++ " " ++ summary ++ ":"
                , ""
                , String.indent 4 m
                , ""
                ]

        ( Nothing, Just h ) ->
            String.join "\n"
                [ ""
                , chalk.red ("[" ++ label ++ "]") ++ " " ++ summary
                , ""
                , chalk.green "Hint" ++ ": " ++ h
                , ""
                ]

        ( Nothing, Nothing ) ->
            String.join "\n"
                [ ""
                , chalk.red ("[" ++ label ++ "]") ++ " " ++ summary
                , ""
                ]
