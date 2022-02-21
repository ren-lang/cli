import * as Chalk from 'chalk'
import * as Fs from 'fs'
import * as Path from 'path'
import * as Process from 'process'

import { Elm } from './elm/Main.elm'

const compiler = Elm.Main.init({
    flags: {},
})

const [_execPath, _filePath, commandName, ...args] = Process.argv

function make() {
    const [dir] = args
    const entry = Path.resolve(Process.cwd(), dir)
    const renDir = Path.join(entry, '.ren')

    if (!Fs.lstatSync(entry).isDirectory()) {
        console.error('Entry must be a directory')
        Process.exit()
    }

    compiler.ports.fromFs?.send({
        $: 'GotProjectMetadata',
        0: renDir,
    })

    const files = (function gatherSourceFiles(dir) {
        return Fs.readdirSync(dir, { withFileTypes: true })
            .flatMap((dirent) => {
                const path = Path.resolve(dir, dirent.name)
                return dirent.isDirectory() ? gatherSourceFiles(path) : path
            })
            .filter((path) => Path.extname(path) === '.ren')
    })(entry)

    const entries = files.map((path) => [
        path,
        Fs.readFileSync(path, { encoding: 'utf8' }),
    ])

    compiler.ports.fromFs?.send({
        $: 'GotProject',
        0: Object.fromEntries(entries),
    })

    compiler.ports.toFs?.subscribe(({ $, ...data }) => {
        switch ($) {
            case 'WriteFiles': {
                // Compile each ren source file to javascript in place -----
                const { files } = data

                Object.entries(files).forEach(([path, { $, ...data }]) => {
                    switch ($) {
                        case 'Ok': {
                            const name = `${path}.mjs`
                            const relativeRenDir =
                                './' + Path.relative(Path.dirname(path), renDir)

                            const src = data.src.replaceAll(renDir, relativeRenDir)
                            Fs.writeFileSync(name, src, {
                                encoding: 'utf8',
                            })

                            break
                        }

                        case 'Err': {
                            console.error(`Error while compiling ${path}:`)
                            console.error(data.err, '\n')
                        }
                    }
                })

                // Copy over the standard library --------------------------
                // I know the "../src" bit looks unnecessary, but remember that this
                // file will be run from ./bin, not ./src.
                const stdlibDir = Path.resolve(__dirname, '../src/ren')

                try {
                    Fs.mkdirSync(`${renDir}/deps/ren`, { recursive: true })
                } catch {
                    // TODO: Should probably do something meaningful here at some
                    // point...
                }

                Fs.readdirSync(stdlibDir).forEach((stdlibModule) => {
                    Fs.copyFileSync(
                        Path.join(stdlibDir, stdlibModule),
                        `${renDir}/deps/ren/${stdlibModule}`,
                    )
                })

                break
            }
        }
    })
}

function run() {
    const [dir] = args
    const entry = Path.resolve(Process.cwd(), dir)

    make()

    import(Path.join(entry, 'main.ren.mjs')).then(({ main }) => {
        if (typeof main == 'function') {
            const res = main(args.slice(1))

            if (res != undefined) {
                console.log(res)
            }
        } else if (main != undefined) {
            console.log(main)
        }
    })
}

const commands = new Map([
    ['make', make],
    ['run', run],
])

function main() {
    const command = commands.get(commandName)

    if (!command) {
        console.error(`${Chalk.red('error')}: no such subcommand: "${commandName}"\n`)

        console.log('  Did you mean one of these?')

        for (const name of commands.keys()) {
            console.log(`    - ${Chalk.gray('ren')} ${name}`)
        }
        return
    }

    command()
}

main()
