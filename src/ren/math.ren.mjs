// add : Number -> Number -> Number
export function add(x) {
    return (y) => {
        return x + y
    }
}

// sub : Number -> Number -> Number
export function sub(x) {
    return (y) => {
        return x - y
    }
}

// mul : Number -> Number -> Number
export function mul(x) {
    return (y) => {
        return x * y
    }
}

// div : Number -> Number -> Number
export function div(x) {
    return (y) => {
        return x / y
    }
}

// pow : Number -> Number -> Number
export function pow(x) {
    return (y) => {
        return x ** y
    }
}

// mod : Number -> Number -> Number
export function mod(x) {
    return (y) => {
        return x % y
    }
}

//
export function incr(n) {
    return n + 1
}

export function decr(n) {
    return n - 1
}

export function floor(n) {
    return Math.floor(n)
}

export function ceil(n) {
    return Math.ceil(n)
}

export function abs(n) {
    return Math.abs(n)
}

export function median(ns) {
    const mid = ceil(ns.length / 2)
    const sorted = ns.sort((a, b) => a - b)

    return ns.length % 2 === 0 ? (sorted[mid] + sorted[mid - 1]) / 2 : sorted[mid - 1]
}

export function mean(ns) {
    return ns.length == 0 ? 0 : ns.reduce((a, b) => a + b) / ns.length
}