"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dotEnvPlugin = void 0;
var dotenv_webpack_1 = __importDefault(require("dotenv-webpack"));
exports.dotEnvPlugin = new dotenv_webpack_1.default({
    defaults: true,
    systemvars: true,
});
