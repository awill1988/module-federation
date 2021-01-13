"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.esLintPlugin = void 0;
var path_1 = require("path");
var eslint_webpack_plugin_1 = __importDefault(require("eslint-webpack-plugin"));
var utils_1 = require("../utils");
var config = {
    context: path_1.join(utils_1.rootDir, "/src"),
    extensions: ["js", "jsx", "ts", "tsx", "vue"],
};
exports.esLintPlugin = new eslint_webpack_plugin_1.default(config);
