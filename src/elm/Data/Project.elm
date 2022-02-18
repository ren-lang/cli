module Data.Project exposing (..)

-- IMPORTS ---------------------------------------------------------------------

import Dict exposing (Dict)



-- TYPES -----------------------------------------------------------------------


type alias Project a =
    { files : Dict String a
    }



-- CONSTRUCTORS ----------------------------------------------------------------


fromFiles : Dict String a -> Project a
fromFiles files =
    { files = files
    }



-- MANIPULATIONS ---------------------------------------------------------------


map : (a -> b) -> Project a -> Project b
map f project =
    { files = Dict.map (always f) project.files
    }



-- CONVERSIONS -----------------------------------------------------------------


toFiles : Project a -> Dict String a
toFiles project =
    project.files
