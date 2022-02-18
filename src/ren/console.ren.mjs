// log : a -> a
export function log(message) {
    console.dir(message, { depth: null })
    return message
}

// warn : a -> a
export function warn(message) {
    console.warn(message)
    return message
}

// error : a -> a
export function error(message) {
    console.error(message)
    return message
}