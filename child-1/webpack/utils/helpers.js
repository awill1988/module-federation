"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathRewrite = exports.arrayFilterEmpty = exports.parseArguments = void 0;
var yargs_1 = require("yargs");
var parseArguments = function () {
    var _a = yargs_1.argv.env, env = _a === void 0 ? [] : _a;
    return env.reduce(function (accumulator, currentValue) {
        var _a;
        var _b = currentValue.split("="), key = _b[0], _c = _b[1], value = _c === void 0 ? true : _c;
        return __assign(__assign({}, accumulator), (_a = {}, _a[key] = value, _a));
    }, {});
};
exports.parseArguments = parseArguments;
// eslint-disable-next-line
var arrayFilterEmpty = function (array) {
    return array.filter(function (x) { return !!x; });
};
exports.arrayFilterEmpty = arrayFilterEmpty;
var pathRewrite = function (localUrl, remoteUrl) { return function (path) {
    return path.replace(new RegExp(localUrl.replace("/", "\\/"), "g"), remoteUrl);
}; };
exports.pathRewrite = pathRewrite;
