"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var config = {
    devtool: "cheap-module-source-map",
    plugins: [],
    devServer: config_1.devServerConfig,
};
exports.default = config;
