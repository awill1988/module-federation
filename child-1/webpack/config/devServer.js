"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.devServerConfig = exports.devServerUrl = void 0;
var is_windows_1 = __importDefault(require("is-windows"));
var devServerProxy_1 = require("./devServerProxy");
var port = parseInt((_a = process.env.DEV_PORT) !== null && _a !== void 0 ? _a : "8080", 10);
var host = is_windows_1.default() ? "127.0.0.1" : "0.0.0.0";
exports.devServerUrl = "http://" + host + ":" + port + "/";
exports.devServerConfig = {
    port: port,
    dev: {
        publicPath: "/",
    },
    historyApiFallback: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    proxy: devServerProxy_1.devServerProxyConfig,
    hot: true,
    overlay: true,
    liveReload: true,
    host: host,
    injectHot: true,
};
