"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var config_1 = require("./config");
var entry_1 = __importDefault(require("./entry"));
var optimization_1 = __importDefault(require("./optimization"));
var plugins = __importStar(require("./plugins"));
var rules = __importStar(require("./rules"));
var utils_1 = require("./utils");
var helpers_1 = require("./utils/helpers");
var config = {
    context: __dirname,
    target: ["web", "es5"],
    mode: utils_1.isProd ? "production" : "development",
    entry: entry_1.default,
    output: {
        uniqueName: "child",
        path: path.join(__dirname, "../build"),
        publicPath: "auto",
        filename: utils_1.isDevServer ? "[name].[fullhash].js" : "[name].[contenthash].js",
    },
    module: {
        rules: helpers_1.arrayFilterEmpty(__spreadArrays([
            rules.cssRule,
            rules.javascriptRule,
            rules.typescriptRule,
            rules.vueRule
        ], rules.lessRules, rules.sassRules, rules.svgRules, [
            rules.imagesRule,
            rules.fontsRule,
        ])),
    },
    plugins: helpers_1.arrayFilterEmpty([
        plugins.dotEnvPlugin,
        plugins.vueLoaderPlugin,
        plugins.vuetifyLoaderPlugin,
        plugins.htmlWebpackPlugin,
        plugins.providePlugin,
        plugins.definePlugin,
        plugins.forkTsCheckerWebpackPlugin,
        plugins.esLintPlugin,
        plugins.copyPlugin,
        plugins.cleanWebpackPlugin,
        plugins.moduleFederationPlugin,
    ]),
    resolve: {
        alias: __assign({}, config_1.aliasItems),
        fallback: {
            // polyfills that are required for webpack 5 because features were dropped
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify"),
        },
        extensions: [".tsx", ".ts", ".js", ".jsx", ".vue"],
    },
    optimization: optimization_1.default,
    externals: config_1.externalItems,
};
exports.default = config;
