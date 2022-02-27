export default function makeProxy(obj, key) {
    const error = e => new Error(
        `Uh oh, it looks like there was an internal error with ${key}. Please`
        + 'open an issue at https://ren-lang.github.com/cli quoting: \n\n'
        + e
    )

    return new Proxy(obj, {
        get(target, prop) {
            if (prop == key) {
                return true
            } else try {
                const { method, args } = JSON.parse(prop)

                return typeof target[method] == 'function'
                    ? target[method](...args)
                    : target[method]
            } catch (e) {
                throw error(e)
            }
        },

        has(target, prop) {
            if (prop == key) {
                return true
            } else try {
                const { method } = JSON.parse(prop)
                return method in target
            } catch (e) {
                throw error(e)
            }
        }
    })
}