"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var webpack_merge_1 = __importDefault(require("webpack-merge"));
var base_1 = __importDefault(require("./webpack/base"));
var dev_1 = __importDefault(require("./webpack/dev"));
var prod_1 = __importDefault(require("./webpack/prod"));
var utils_1 = require("./webpack/utils");
exports.default = (function () {
    return utils_1.isProd
        ? webpack_merge_1.default(base_1.default, prod_1.default)
        : webpack_merge_1.default(base_1.default, dev_1.default);
});
