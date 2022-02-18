// eq : a -> a -> Boolean
export function eq(x) {
    return (y) => {
        let values = [x, y]

        while (values.length !== 0) {
            let a = values.pop()
            let b = values.pop()

            if (a === b) continue
            if (a === null || a === undefined || b === null || b === undefined) return false

            if (typeof a === 'object' || typeof b === 'object') {
                if (a.valueOf() === b.valueOf()) continue
                if (a.constructor !== b.constructor) {
                    return false
                }
                if (a.constructor === Date) {
                    if (!(a > b || a < b)) {
                        continue
                    } else {
                        return false
                    }
                }

                for (let k of Object.getOwnPropertyNames(a)) {
                    values.push(a[k], b[k])
                }

                continue
            }

            return false
        }

        return true
    }
}

// notEq : a -> a -> Boolean
export function notEq(a) {
    return (b) => {
        return !eq(a)(b)
    }
}

// lt : a -> a -> Boolean
export function lt(a) {
    return (b) => {
        return a < b
    }
}

// lte : a -> a -> Boolean
export function lte(a) {
    return (b) => {
        return a <= b
    }
}

// gt : a -> a -> Boolean
export function gt(a) {
    return (b) => {
        return a > b
    }
}

// gte : a -> a -> Boolean
export function gte(a) {
    return (b) => {
        return a >= b
    }
}
