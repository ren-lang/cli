import * as Compare from './compare.ren.mjs'
import { $just, $nothing } from './maybe.ren.mjs'

// CREATING ARRAYS -------------------------------------------------------------

// singleton : a -> Array a
export function singleton(a) {
    return [a]
}

// repeat : Number -> a -> Array a
export function repeat(length) {
    return (a) => {
        return Array.from({ length }, _ => a)
    }
}

// range : Number -> Number -> Array Number
export function range(start) {
    return (length) => {
        return Array.from({ length }, (_, i) => i + start)
    }
}

// cons : a -> Array a -> Array a
export function cons(head) {
    return (tail) => {
        return [head, ...tail]
    }
}

export function uncons(arr) {
    const [h, ...t] = arr

    return h === undefined
        ? $nothing
        : $just([h, t])
}

// join : Array a -> Array a -> Array a
export function join(xs) {
    return (ys) => {
        return [...xs, ...ys]
    }
}

// TRANSFORMING ARRAYS ---------------------------------------------------------

// map : (a -> b) -> Array a -> Array b
export function map(f) {
    return (arr) => {
        return arr.map(f)
    }
}

// map2 : (a -> b -> c) -> Array a -> Array b -> Array c
export function map2(f) {
    return (xs) => (ys) => {
        const shortestLength = [xs.length, ys.length].sort((a, b) => a - b)[0]
        const arr = []

        for (let i = 0; i < shortestLength; i++) {
            arr.push(f(xs[i])(ys[i]))
        }

        return arr
    }
}

// map3 : (a -> b -> c -> d) -> Array a -> Array b -> Array c -> Array d
export function map3(f) {
    return (xs) => (ys) => (zs) => {
        const shortestLength = [xs.length, ys.length, zs.length].sort((a, b) => a - b)[0]
        const arr = []

        for (let i = 0; i < shortestLength; i++) {
            arr.push(f(xs[i])(ys[i])(zs[i]))
        }

        return arr
    }

}

// indexedMap : (Number -> a -> b) -> Array a -> Array b
export function indexedMap(f) {
    return (arr) => {
        return arr.map((x, i) => f(i)(x))
    }
}

export function flatMap(f) {
    return (arr) => {
        return arr.flatMap(f)
    }
}

// foldl : (b -> a -> b) -> b -> Array a -> b
export function foldl(f) {
    return (x) => (arr) => {
        return arr.reduce((b, a) => f(b)(a), x)
    }
}

// foldr : (b -> a -> b) -> b -> Array a -> b
export function foldr(f) {
    return (x) => (arr) => {
        return arr.reduceRight((b, a) => f(b)(a), x)
    }
}

export function $continue(a) {
    return ['#continue', a]
}

export function $stop(a) {
    return ['#stop', a]
}

export function foldlUntil(f) {
    return (a) => (arr) => {
        for (let i = 0; i < arr.length; i++) {
            const [$, b] = f(a)(arr[i])

            if ($ == '#stop') {
                return b
            } else {
                a = b
            }
        }
    }
}

export function foldrUntil(f) {
    return (a) => (arr) => {
        for (let i = arr.length - 1; i >= 0; i--) {
            const [$, b] = f(a)(arr[i])

            if ($ == '#stop') {
                return b
            } else {
                a = b
            }
        }
    }
}

export function iterate(n) {
    return (f) => (a) => {
        return repeat(n)(f).reduce((b, f) => f(b), a)
    }
}

// filter : (a -> Boolean) -> Array a -> Array a
export function filter(f) {
    return (arr) => {
        return arr.filter(f)
    }
}

// filterMap : (a -> Maybe b) -> Array a -> Array b
export function filterMap(f) {
    return (arr) => {
        return arr.reduceRight((xs, x) => {
            const y = f(x)
            if (Array.isArray(y) && y.length === 1 && y[0] === '#nothing') {
                return xs
            }

            if (Array.isArray(y) && y.length === 2 && y[0] === '#just') {
                return [y[1], ...xs]
            }
        }, [])
    }
}

// forEach : (a -> ()) -> Array a -> ()
export function forEach(f) {
    return (arr) => {
        arr.forEach(a => f(a))
    }
}

export function updateAt(i) {
    return (f) => (arr) => {
        let newArr = [...arr]

        newArr[i] = f(newArr[i])

        return newArr
    }
}

// drop : Number -> Array a -> Array a
export function drop(n) {
    return (arr) => {
        return arr.filter((_, i) => i >= n)
    }
}

// take : Number -> Array a -> Array a
export function take(n) {
    return (arr) => {
        return arr.filter((_, i) => i < n)
    }
}

// partition : Number -> Array a -> [ Array a, Array a ]
export function partition(n) {
    return (arr) => {
        return [take(n)(arr), drop(n)(arr)]
    }
}

// UTILS -----------------------------------------------------------------------
// length : Array a -> Number
export function length(arr) {
    return arr.length
}

export function isEmpty(arr) {
    return arr.length === 0
}

// reverse : Array a -> Array a
export function reverse(arr) {
    return [...arr].reverse()
}

// head : Array a -> Maybe a
export function head(arr) {
    return arr.length >= 1
        ? $just(arr[0])
        : $nothing
}

// tail : Array a -> Array a
export function tail(arr) {
    const [, ...tail] = arr
    return tail
}

// member : a -> Array a
export function member(a) {
    return (arr) => {
        return arr.some(b => Compare.eq(a)(b))
    }
}

// any : (a -> Boolean) -> Array a -> Boolean
export function any(f) {
    return (arr) => {
        return arr.some(f)
    }
}

// all : (a -> Boolean) -> Array a -> Boolean
export function all(f) {
    return (arr) => {
        return arr.every(f)
    }
}

// isArray : * -> Bool
export function isArray(a) {
    return Array.isArray(a)
}

//
export function sort(arr) {
    return [...arr].sort()
}

//
export function sortBy(f) {
    return (arr) => {
        return [...arr].sort((a, b) => f(a) - f(b))
    }
}

// MATHS -----------------------------------------------------------------------

// sum : Array Number -> Number
export function sum(arr) {
    return arr.reduce((x, y) => x + y)
}

// product : Array Number -> Number
export function product(arr) {
    return arr.reduce((x, y) => x * y, 1)
}

// max : Array Number -> Number 
export function max(arr) {
    return arr.reduce((x, y) => Math.max(x, y))
}

// min : Array Number -> Number 
export function min(arr) {
    return arr.reduce((x, y) => Math.min(x, y))
}