"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providePlugin = void 0;
/**
 * @example
 *  const config = {
 *       $: 'jquery',
 *  }
 */
var webpack_1 = require("webpack");
var config = {};
exports.providePlugin = new webpack_1.ProvidePlugin(config);
