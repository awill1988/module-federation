"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanWebpackPlugin = void 0;
var clean_webpack_plugin_1 = require("clean-webpack-plugin");
var config = {
    cleanOnceBeforeBuildPatterns: ["build/"],
};
exports.cleanWebpackPlugin = new clean_webpack_plugin_1.CleanWebpackPlugin(config);
