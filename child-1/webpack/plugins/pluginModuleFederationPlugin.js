"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleFederationPlugin = void 0;
var path_1 = require("path");
var utils_1 = require("../utils");
var ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
var deps = require(path_1.join(utils_1.rootDir, "package.json")).dependencies;
var shared = {};
Object.keys(deps).forEach(function (d) {
    return (shared[d] = {
        singleton: true,
        strictVersion: true,
        eager: true,
    });
});
exports.moduleFederationPlugin = new ModuleFederationPlugin({
    name: "child",
    filename: "remoteEntry.js",
    remotes: {
        home: "home@http://localhost:4000/remoteEntry.js",
        child: "child@http://localhost:4010/remoteEntry.js",
    },
    exposes: {
        "./App": path_1.join(utils_1.rootDir, "./src/main"),
    },
});
