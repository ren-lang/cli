import * as Chalk from 'chalk'
import * as Fs from 'fs'
import * as Path from 'path'
import * as Process from 'process'

import makeProxy from './js/proxy.js'
import { Elm } from './elm/Main.elm'

const compiler = Elm.Main.init({
    flags: {
        chalk: makeProxy(Chalk, 'FFI.Chalk'),
        // We need to be a bit ad-hoc here. The `Fs.Stats` object returned by
        // methods like `lstatSync` requires function calls to use but even with
        // our hacky Elm FFI shenanigans we wouldn't be able to call those, so
        // here we're defining a few functions that abstract that for us.
        fs: makeProxy(
            {
                isFile(path) {
                    return Fs.lstatSync(path).isFile()
                },
                isDirectory(path) {
                    return Fs.lstatSync(path).isDirectory()
                },
                ...Fs,
            },
            'FFI.Fs',
        ),
        path: makeProxy(Path, 'FFI.Path'),
        process: makeProxy(Process, 'FFI.Process'),
    },
})

compiler.ports.stdout?.subscribe((msg) => {
    console.log(msg)
})

compiler.ports.stderr?.subscribe((msg) => {
    console.error(msg)
})

compiler.ports.exec?.subscribe(([path, args]) => {
    import(path).then(({ main }) => {
        let result = typeof main == 'function' ? main(args) : main

        if (result != undefined) {
            console.log(result)
        }
    })
})
