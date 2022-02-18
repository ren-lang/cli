export function pair (a) {
    return (b) => {
        return [a, b]
    }
}

export function from (a) {
    return [a, a]
}

export function mapFirst (f) {
    return ([a, b]) => {
        return [f (a), b]
    }
}

export function mapSecond (f) {
    return ([a, b]) => {
        return [a, f (b)]
    }
}

export function first ([a, _]) {
    return a
}

export function second ([_, b]) {
    return b
}

export function apply (f) {
    return ([a, b]) => {
        return f (a) (b)
    }
}
