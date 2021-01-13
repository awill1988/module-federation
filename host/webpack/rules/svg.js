"use strict";
/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.svgRules = exports.svgRule = exports.svgReactComponentRule = void 0;
var useLoaderRuleItems_1 = require("./useLoaderRuleItems");
/**
 * Using @svgr/webpack for handling svg files in react components
 * @see https://react-svgr.com/docs/webpack/
 */
exports.svgReactComponentRule = {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    issuer: /\.[jt]sx$/,
    use: [
        useLoaderRuleItems_1.babelLoader,
        {
            loader: "@svgr/webpack",
            options: {
                babel: false,
                icon: true,
            },
        },
    ],
};
/**
 * Using file-loader for handling svg files
 * @see https://webpack.js.org/guides/asset-modules/
 */
exports.svgRule = {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    issuer: { not: [/\.[jt]sx$/] },
    type: "asset/inline",
};
exports.svgRules = [exports.svgReactComponentRule, exports.svgRule];
