module Data.String exposing (..)

{-| -}


{-| -}
indent : Int -> String -> String
indent spaces string =
    String.split "\n" string
        |> List.map ((++) (String.repeat spaces " "))
        |> String.join "\n"
