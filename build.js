#!/usr/bin/env node
const { build } = require('esbuild')
const elmPlugin = require('esbuild-plugin-elm')

const optimize = process.argv.includes('--production')
const watch = process.argv.includes('-w')

build({
    entryPoints: ['./src/main.js'],
    format: 'cjs',
    platform: 'node',
    outfile: './bin/cli.js',
    bundle: true,
    minify: optimize,
    watch,
    plugins: [elmPlugin({ optimize })],
})
