import * as Maybe from './maybe.ren.mjs'

// get : String -> * -> Maybe a
export function get(key) {
    return (obj) => {
        return key in obj
            ? Maybe.just(obj[key])
            : Maybe.nothing
    }
}

// set : String -> a -> * -> *
export function set(key) {
    return (a) => (obj) => {
        return { ...obj, [key]: a }
    }
}

// has : String -> * -> Boolean
export function has(key) {
    return (obj) => {
        return key in obj
    }
}

//
export function construct(o) {
    return (args) => {
        return new o(...args)
    }
}