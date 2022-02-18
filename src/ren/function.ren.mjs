// identity : a -> a
export function identity(a) {
    return a
}

// always : a -> b -> a
export function always(x) {
    return (y) => {
        return x
    }
}

// discard : a -> b -> b
export function discard(x) {
    return (y) => {
        return y
    }
}

// pipe : a -> (a -> b) -> b
export function pipe(x) {
    return (f) => {
        return f(x)
    }
}

// compose (a -> b) -> (b -> c) -> a -> c
export function compose(f) {
    return (g) => (x) => {
        return g(f(x))
    }
}

// curry2 : ((a, b) -> c) -> a -> b -> c
export function curry2(f) {
    return (a) => (b) => {
        return f(a, b)
    }
}

// uncurry3 : ((a, b, c) -> d) -> a -> b -> c -> d
export function curry3(f) {
    return (a) => (b) => (c) => {
        return f(a, b, c)
    }
}

// uncurry2 : (a -> b -> c) -> (a, b) -> c
export function uncurry2(f) {
    return (a, b) => {
        return f(a)(b)
    }
}

// uncurry3 : (a -> b -> c -> d) -> (a, b, c) -> d
export function uncurry3(f) {
    return (a, b, c) => {
        return f(a)(b)(c)
    }
}