"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var TerserWebpackPlugin = require("terser-webpack-plugin");
var cacheGroups = {
    default: false,
    vendors: false,
    // vendor chunk
    vendor: {
        // name of the chunk
        name: "vendor",
        // async + async chunks
        chunks: "all",
        // import file path containing node_modules
        test: /[\\/]node_modules[\\/](!libphonenumber-js)(!vue.*)(!crypto-js)[\\/]/,
        // priority
        priority: 20,
        minSize: 30000,
        maxSize: 244000,
        minChunks: 1,
    },
    "crypto-js": {
        // name of the chunk
        name: "crypto-js",
        chunks: "all",
        // import file path containing node_modules
        test: /[\\/]node_modules\/crypto-js/,
        // priority
        priority: 15,
        minSize: 30000,
        maxSize: 244000,
        minChunks: 1,
    },
    "libphonenumber-js": {
        // name of the chunk
        name: "libphonenumber-js",
        chunks: "all",
        // import file path containing node_modules
        test: /[\\/]node_modules\/libphonenumber-js/,
        // priority
        priority: 15,
        minSize: 30000,
        maxSize: 244000,
        minChunks: 1,
    },
    vue: {
        // name of the chunk
        name: "vue",
        chunks: "all",
        // import file path containing node_modules
        test: /[\\/]node_modules\/vue/,
        // priority
        priority: 15,
        minSize: 30000,
        maxSize: 244000,
        minChunks: 1,
    },
    // common chunk
    commons: {
        test: /\.js$/,
        name: "commons",
        chunks: "all",
        minChunks: 2,
        minSize: 0,
        priority: 10,
        enforce: true,
    },
};
var splitChunks = utils_1.isProd
    ? {
        chunks: "all",
        cacheGroups: cacheGroups,
    }
    : false;
var optimization = {
    minimize: utils_1.isProd,
    // Only needed to bypass a temporary bug?
    runtimeChunk: false,
    splitChunks: splitChunks,
    minimizer: utils_1.isProd
        ? [
            new TerserWebpackPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 8,
                    compress: {
                        warnings: true,
                        conditionals: true,
                        unused: true,
                        comparisons: true,
                        sequences: true,
                        dead_code: true,
                        evaluate: true,
                        if_return: true,
                        join_vars: true,
                    },
                    mangle: true,
                    toplevel: false,
                    nameCache: null,
                    ie8: true,
                    keep_classnames: undefined,
                    keep_fnames: false,
                    safari10: true,
                },
                exclude: [/\.min\.js$/gi],
            }),
        ]
        : undefined,
};
exports.default = optimization;
