// debug : a -> a
export function debug(message) {
    console.dir(message, { depth: null })
    return message
}

// print : a -> ()
export function print(message) {
    console.log(message)
    return undefined;
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
