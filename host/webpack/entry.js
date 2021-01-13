"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var utils_1 = require("./utils");
var entry = {
    main: [
        path_1.join(utils_1.rootDir, "src/main.ts"),
        path_1.join(__dirname, "utils/cleanConsoleOnHMR.js"),
    ],
};
exports.default = entry;
