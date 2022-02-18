export function $just (a) {
    return ['#just', a]
}

export var $nothing = ['#nothing']

export function map (f) {
    return (m) => {
        if (Array.isArray(m) && m.length >= 2 && m[0] == '#just') {
            var a = m[1]
            return $just (f (a))
        }

        if (Array.isArray(m) && m.length >= 1 && m[0] == '#nothing') {
            
            return $nothing
        }
    }
}

export function map2 (f) {
    return (mA) => (mB) => {
        return (($) => {
            if (Array.isArray($) && $.length >= 2 && Array.isArray($[0]) && $[0].length >= 2 && $[0][0] == '#just' && Array.isArray($[1]) && $[1].length >= 2 && $[1][0] == '#just') {
                var a = $[0][1]
                var b = $[1][1]
                return $just (f (a) (b))
            }

            return $nothing
        })([mA, mB])
    }
}

export function andThen (f) {
    return (m) => {
        if (Array.isArray(m) && m.length >= 2 && m[0] == '#just') {
            var a = m[1]
            return f (a)
        }

        if (Array.isArray(m) && m.length >= 1 && m[0] == '#nothing') {
            
            return $nothing
        }
    }
}

export function withDefault (b) {
    return (m) => {
        if (Array.isArray(m) && m.length >= 2 && m[0] == '#just') {
            var a = m[1]
            return a
        }

        if (Array.isArray(m) && m.length >= 1 && m[0] == '#nothing') {
            
            return b
        }
    }
}

export var unwrap = withDefault ()

export function or (mB) {
    return (mA) => {
        if (Array.isArray(mA) && mA.length >= 2 && mA[0] == '#just') {
            var a = mA[1]
            return $just (a)
        }

        if (Array.isArray(mA) && mA.length >= 1 && mA[0] == '#nothing') {
            
            return mB
        }
    }
}
