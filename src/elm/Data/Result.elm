module Data.Result exposing (..)

{-| -}


{-| -}
extract : (a -> b) -> (x -> b) -> Result x a -> b
extract f g result =
    case result of
        Ok a ->
            f a

        Err e ->
            g e


{-| -}
unwrap : Result a a -> a
unwrap result =
    case result of
        Ok a ->
            a

        Err e ->
            e
