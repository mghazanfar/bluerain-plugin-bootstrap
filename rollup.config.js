"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rollup_plugin_node_resolve_1 = require("rollup-plugin-node-resolve");
var rollup_plugin_commonjs_1 = require("rollup-plugin-commonjs");
var rollup_plugin_sourcemaps_1 = require("rollup-plugin-sourcemaps");
var lodash_camelcase_1 = require("lodash.camelcase");
var pkg = require('./package.json');
var libraryName = 'bluerain-plugin-bootstrap';
exports.default = {
    input: "compiled/" + libraryName + ".js",
    output: [
        { file: pkg.main, name: lodash_camelcase_1.default(libraryName), format: 'umd' },
        { file: pkg.module, format: 'es' },
    ],
    sourcemap: true,
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    external: [],
    watch: {
        include: 'compiled/**',
    },
    plugins: [
        // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
        rollup_plugin_commonjs_1.default(),
        // Allow node_modules resolution, so you can use 'external' to control
        // which external modules to include in the bundle
        // https://github.com/rollup/rollup-plugin-node-resolve#usage
        rollup_plugin_node_resolve_1.default(),
        // Resolve source maps to the original source
        rollup_plugin_sourcemaps_1.default(),
    ],
};
