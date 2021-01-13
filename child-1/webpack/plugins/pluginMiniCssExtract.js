"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.miniCssExtractPlugin = void 0;
var mini_css_extract_plugin_1 = __importDefault(require("mini-css-extract-plugin"));
var config = {
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "[name].[contenthash].css",
    chunkFilename: "[id].[contenthash].css",
};
exports.miniCssExtractPlugin = new mini_css_extract_plugin_1.default(config);
