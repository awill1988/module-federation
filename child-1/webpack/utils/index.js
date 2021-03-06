"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.webpackDir = exports.rootDir = exports.isDev = exports.isProd = exports.isDevServer = exports.mode = exports.NODE_ENV = void 0;
var path_1 = require("path");
var helpers_1 = require("./helpers");
var parsedArguments = helpers_1.parseArguments();
exports.NODE_ENV = (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : "development";
exports.mode = (_c = (_b = parsedArguments.mode) !== null && _b !== void 0 ? _b : exports.NODE_ENV) !== null && _c !== void 0 ? _c : "development";
exports.isDevServer = (_d = parsedArguments.isDevServer) !== null && _d !== void 0 ? _d : false;
exports.isProd = exports.mode === "production";
exports.isDev = !exports.isProd;
exports.rootDir = path_1.join(__dirname, "../../");
exports.webpackDir = path_1.join(__dirname, "../");
