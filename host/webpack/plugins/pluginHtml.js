"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlWebpackPlugin = void 0;
var path_1 = require("path");
var utils_1 = require("../utils");
var pkg = require(path_1.join(utils_1.rootDir, "package.json"));
var HtmlWebpackPlugin = require("html-webpack-plugin");
var config = {
    filename: "index.html",
    inject: true,
    title: pkg.name,
    favicon: path_1.join(utils_1.rootDir, "src/assets/icons/favicon.ico"),
    template: path_1.join(utils_1.rootDir, "src/index.html"),
};
exports.htmlWebpackPlugin = new HtmlWebpackPlugin(config);
