"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sassRules = exports.sassRule = exports.sassModulesRule = exports.lessRules = exports.lessRule = exports.lessModulesRule = exports.cssRule = void 0;
var helpers_1 = require("../utils/helpers");
var useLoaderRuleItems_1 = require("./useLoaderRuleItems");
/** css **/
exports.cssRule = {
    test: /\.css$/,
    use: [useLoaderRuleItems_1.miniCssExtractLoader, useLoaderRuleItems_1.cssLoader, useLoaderRuleItems_1.postCssLoader, useLoaderRuleItems_1.resolveUrlLoader],
};
/** less **/
exports.lessModulesRule = {
    test: /\.module.less$/,
    use: helpers_1.arrayFilterEmpty(__spreadArrays(useLoaderRuleItems_1.cssModulesSupportLoaderItems, [
        useLoaderRuleItems_1.postCssLoader,
        useLoaderRuleItems_1.resolveUrlLoader,
        useLoaderRuleItems_1.lessLoader,
    ])),
};
exports.lessRule = {
    test: /\.less$/,
    exclude: /\.module.less$/,
    use: helpers_1.arrayFilterEmpty(__spreadArrays(useLoaderRuleItems_1.cssLoaderItems, [
        useLoaderRuleItems_1.postCssLoader,
        useLoaderRuleItems_1.resolveUrlLoader,
        useLoaderRuleItems_1.lessLoader,
    ])),
};
exports.lessRules = [exports.lessModulesRule, exports.lessRule];
/** sass **/
exports.sassModulesRule = {
    test: /\.module\.s([ca])ss$/,
    use: helpers_1.arrayFilterEmpty(__spreadArrays(useLoaderRuleItems_1.cssModulesSupportLoaderItems, [
        useLoaderRuleItems_1.postCssLoader,
        useLoaderRuleItems_1.resolveUrlLoader
    ], useLoaderRuleItems_1.sassLoaderItems)),
};
exports.sassRule = {
    test: /\.s([ca])ss$/,
    exclude: /\.module.scss$/,
    use: helpers_1.arrayFilterEmpty(__spreadArrays(useLoaderRuleItems_1.cssLoaderItems, [
        useLoaderRuleItems_1.postCssLoader,
        useLoaderRuleItems_1.resolveUrlLoader
    ], useLoaderRuleItems_1.sassLoaderItems)),
};
exports.sassRules = [exports.sassModulesRule, exports.sassRule];
