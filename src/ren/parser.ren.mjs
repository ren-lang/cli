import * as Array from './array.ren.mjs'
import { $continue, $stop } from './array.ren.mjs'
import * as Function from './function.ren.mjs'
import * as Maybe from './maybe.ren.mjs'
import { $just, $nothing } from './maybe.ren.mjs'
import * as Result from './result.ren.mjs'
import { $ok, $err } from './result.ren.mjs'
import * as String from './string.ren.mjs'

export function $badParser(a) {
    return ['#badParser', a]
}

export function $custom(a) {
    return ['#custom', a]
}

export var $eof = ['#eof']

export function $expected(a) {
    return (b) => {
        return ['#expected', a, b]
    }
}

export function $unexpectedInput(a) {
    return ['#unexpectedInput', a]
}

export function run(p) {
    return (input) => {
        return Result.map(([output]) => output)(p(input))
    }
}

export function succeed(a) {
    return (input) => {
        return $ok([a, input])
    }
}

export function fail(message) {
    return (_) => {
        return $err($custom(message))
    }
}

export function failWith(error) {
    return (_) => {
        return $err(error)
    }
}

export function lazy(parser) {
    return (input) => {
        return parser()(input)
    }
}

export function any(input) {
    return (($) => {
        if (Array.isArray($) && $.length >= 2 && $[0] == '#just') {
            var char = $[1]
            return $ok([char, String.drop(1)(input)])
        }

        if (Array.isArray($) && $.length >= 1 && $[0] == '#nothing') {
            return $err($eof)
        }
    })(String.take(1)(input))
}

export function eof(input) {
    return String.isEmpty(input)
        ? $ok([undefined, input])
        : $err($expected('End of file')(input))
}

export function string(s) {
    return (input) => {
        return (() => {
            var length = String.length(s)

            var expect = `A string that starts with '${s}'`

            return String.startsWith(s)(input)
                ? $ok([s, String.drop(length)(input)])
                : $err($expected(expect)(input))
        })()
    }
}

export var spaces = takeWhile((c) => c == ' ')

export var whitespace = takeWhile((c) => c == ' ' || c == '\t' || c == '\n')

export var int = (() => {
    var isDigit = (c) =>
        Array.member(c)(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])

    return andThen(fromMaybe)(map(String.toNumber)(takeIfAndWhile(isDigit)))
})()

export var float = (() => {
    var isDigit = (c) =>
        Array.member(c)(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])

    return andThen(fromMaybe)(
        map(String.toNumber)(
            keep(takeIfAndWhile(isDigit))(
                drop(string('.'))(
                    keep(takeIfAndWhile(isDigit))(succeed((x) => (y) => `${x}.${y}`)),
                ),
            ),
        ),
    )
})()

export function maybe(parser) {
    return (input) => {
        return $ok(
            Result.withDefault([$nothing, input])(
                Result.map(([result, output]) => [$just(result), output])(parser(input)),
            ),
        )
    }
}

export function fromMaybe(value) {
    return Maybe.withDefault($err($unexpectedInput('')))(Maybe.map(succeed)(value))
}

export function fromResult(value) {
    return Result.withDefault($err($unexpectedInput('')))(Result.map(succeed)(value))
}

export function takeWhile(predicate) {
    return (input) => {
        return (() => {
            var recurse = (c) =>
                (() => {
                    return map(String.append(c))(takeWhile(predicate))
                })()

            return (($) => {
                if (Array.isArray($) && $.length >= 2 && $[0] == '#just') {
                    var c = $[1]
                    if (predicate(c)) {
                        return recurse(c)(String.drop(1)(input))
                    }
                }

                if (Array.isArray($) && $.length >= 2 && $[0] == '#just') {
                    return $ok(['', input])
                }

                if (Array.isArray($) && $.length >= 1 && $[0] == '#nothing') {
                    return $ok(['', ''])
                }
            })(String.take(1)(input))
        })()
    }
}

export function takeIf(predicate) {
    return (input) => {
        return (($) => {
            if (Array.isArray($) && $.length >= 2 && $[0] == '#just') {
                var c = $[1]
                if (predicate(c)) {
                    return $ok([c, String.drop(1)(input)])
                }
            }

            if (Array.isArray($) && $.length >= 2 && $[0] == '#just') {
                return $err($unexpectedInput(input))
            }

            if (Array.isArray($) && $.length >= 1 && $[0] == '#nothing') {
                return $err($eof)
            }
        })(String.take(1)(input))
    }
}

export function takeIfAndWhile(predicate) {
    return keep(takeWhile(predicate))(keep(takeIf(predicate))(succeed(String.append)))
}

export function andThen(f) {
    return (parser) => (input) => {
        return Result.andThen(([value, next]) => f(value)(next))(parser(input))
    }
}

export function map(f) {
    return (parser) => (input) => {
        return Result.map(([a, s]) => [f(a), s])(parser(input))
    }
}

export function map2(f) {
    return (parserA) => (parserB) => (input) => {
        return Result.andThen(([a, s1]) =>
            Result.map(([b, s2]) => [f(a)(b), s2])(parserB(s1)),
        )(parserA(input))
    }
}

export function oneOf(parsers) {
    return (input) => {
        return Array.foldlUntil(
            (_) => (parser) =>
                (() => {
                    var result = parser(input)

                    return Result.isOk(result) ? $stop(result) : $continue(result)
                })(),
        )($err($badParser('The list of parsers supplied to `oneOf` is empty.')))(parsers)
    }
}

export function many(separator) {
    return (parser) => (input) => {
        return (() => {
            var recurse =
                (val) =>
                ([_, [arr, input]]) =>
                    $ok([[val, ...arr], input])

            return input == ''
                ? $ok([[], input])
                : (($) => {
                      if (
                          Array.isArray($) &&
                          $.length >= 2 &&
                          $[0] == '#ok' &&
                          Array.isArray($[1]) &&
                          $[1].length >= 2
                      ) {
                          var value = $[1][0]
                          var next = $[1][1]
                          return recurse(value)(many(separator)(parser)(next))
                      }

                      if (Array.isArray($) && $.length >= 2 && $[0] == '#err') {
                          return $ok([[], input])
                      }
                  })(drop(separator)(parser)(input))
        })()
    }
}

export function keep(parser) {
    return (mapper) => {
        return map2((f) => (a) => f(a))(mapper)(parser)
    }
}

export function drop(ignorer) {
    return (keeper) => {
        return map2(Function.discard)(ignorer)(keeper)
    }
}
