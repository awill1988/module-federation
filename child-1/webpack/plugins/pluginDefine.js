"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.definePlugin = void 0;
var webpack_1 = require("webpack");
var utils_1 = require("../utils");
var config = {
    "process.env": {
        NODE_ENV: JSON.stringify(utils_1.mode),
    },
    IS_PROD: utils_1.isProd,
    IS_DEV: utils_1.isDev,
    IS_DEV_SERVER: utils_1.isDevServer,
};
exports.definePlugin = new webpack_1.DefinePlugin(config);
