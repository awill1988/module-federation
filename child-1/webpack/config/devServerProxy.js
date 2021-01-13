"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
Object.defineProperty(exports, "__esModule", { value: true });
exports.devServerProxyConfig = void 0;
var httpProxyTarget = {
    port: 80,
    protocol: "http",
};
var httpsProxyTarget = {
    port: 443,
    protocol: "https",
};
exports.devServerProxyConfig = {
// '/world-time': {
// 	target: `${httpsProxyTarget.protocol}://worldtimeapi.org:${httpsProxyTarget.port}`,
// 	pathRewrite: pathRewrite('^/world-time/test', '/api'),
// 	changeOrigin: true,
// 	secure: false,
// },
// '/someurl/test': {
// 	target: `${httpsProxyTarget.protocol}://reqres.in:${httpsProxyTarget.port}`,
// 	pathRewrite: pathRewrite('^/someurl/test', '/api'),
// 	changeOrigin: true,
// 	secure: false,
// },
};
