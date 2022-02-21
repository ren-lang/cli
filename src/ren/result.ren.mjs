import * as Array from './array.ren.mjs'
import { not } from './logic.ren.mjs'
import * as Maybe from './maybe.ren.mjs'

export function $ok(a) {
    return ['#ok', a]
}

export function $err(a) {
    return ['#err', a]
}

export function fromMaybe(e) {
    return (m) => {
        return Maybe.withDefault($err(e))(Maybe.map($ok)(m))
    }
}

export function map(f) {
    return (r) => {
        if (Array.isArray(r) && r.length >= 2 && r[0] == '#ok') {
            var a = r[1]
            return $ok(f(a))
        }

        if (Array.isArray(r) && r.length >= 2 && r[0] == '#err') {
            var e = r[1]
            return $err(e)
        }
    }
}

export function map2(f) {
    return (rA) => (rB) => {
        return (($) => {
            if (
                Array.isArray($) &&
                $.length >= 2 &&
                Array.isArray($[0]) &&
                $[0].length >= 2 &&
                $[0][0] == '#ok' &&
                Array.isArray($[1]) &&
                $[1].length >= 2 &&
                $[1][0] == '#ok'
            ) {
                var a = $[0][1]
                var b = $[1][1]
                return $ok(f(a)(b))
            }

            if (
                Array.isArray($) &&
                $.length >= 2 &&
                Array.isArray($[0]) &&
                $[0].length >= 2 &&
                $[0][0] == '#ok' &&
                Array.isArray($[1]) &&
                $[1].length >= 2 &&
                $[1][0] == '#err'
            ) {
                var a = $[0][1]
                var a = $[1][1]
                return $err(e)
            }

            if (
                Array.isArray($) &&
                $.length >= 2 &&
                Array.isArray($[0]) &&
                $[0].length >= 2 &&
                $[0][0] == '#err'
            ) {
                var e = $[0][1]
                return $err(e)
            }
        })([rA, rB])
    }
}

export function andThen(f) {
    return (r) => {
        if (Array.isArray(r) && r.length >= 2 && r[0] == '#ok') {
            var a = r[1]
            return f(a)
        }

        if (Array.isArray(r) && r.length >= 2 && r[0] == '#err') {
            var e = r[1]
            return $err(e)
        }
    }
}

export function withDefault(b) {
    return (r) => {
        if (Array.isArray(r) && r.length >= 2 && r[0] == '#ok') {
            var a = r[1]
            return a
        }

        if (Array.isArray(r) && r.length >= 2 && r[0] == '#err') {
            return b
        }
    }
}

export var unwrap = withDefault()

export function isOk(result) {
    if (Array.isArray(result) && result.length >= 2 && result[0] == '#ok') {
        return true
    }

    return false
}

export var isErr = ($) => not(isOk($))

export function sequence(results) {
    return Array.foldr((rs) => (a) => map2(Array.cons)(a)(rs))($ok([]))(results)
}

export function toMaybe(result) {
    if (Array.isArray(result) && result.length >= 2 && result[0] == '#ok') {
        var a = result[1]
        return Maybe.$just(a)
    }

    return Maybe.$nothing
}
