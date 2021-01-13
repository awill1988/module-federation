"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyPlugin = void 0;
var path_1 = require("path");
var copy_webpack_plugin_1 = __importDefault(require("copy-webpack-plugin"));
var utils_1 = require("../utils");
var config = {
    patterns: [{ from: path_1.join(utils_1.rootDir, "src/assets"), to: "assets" }],
};
exports.copyPlugin = new copy_webpack_plugin_1.default(config);
