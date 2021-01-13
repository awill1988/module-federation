"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forkTsCheckerWebpackPlugin = void 0;
var path_1 = require("path");
var utils_1 = require("../utils");
var ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
var config = {
    async: utils_1.isDev,
    typescript: {
        configFile: path_1.join(utils_1.rootDir, "/tsconfig.json"),
    },
    eslint: { enabled: true, files: "../src/**/*.{ts,tsx,js,jsx}" },
    logger: { infrastructure: "silent", issues: "console" },
};
exports.forkTsCheckerWebpackPlugin = new ForkTsCheckerWebpackPlugin(config);
