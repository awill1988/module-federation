"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aliasItems = void 0;
/**
 * @see https://webpack.js.org/configuration/dev-server/
 */
var path_1 = require("path");
var utils_1 = require("../utils");
exports.aliasItems = {
    "@": path_1.join(utils_1.rootDir, "/src"),
};
