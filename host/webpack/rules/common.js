"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fontsRule = exports.imagesRule = exports.htmlRule = exports.javascriptRule = exports.typescriptRule = exports.eslintRule = exports.vueRule = void 0;
/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
var useLoaderRuleItems_1 = require("./useLoaderRuleItems");
exports.vueRule = {
    test: /\.vue$/,
    loader: "vue-loader",
};
exports.eslintRule = {
    test: /\.(jsx?|tsx?|vue)$/,
    loader: "eslint-loader",
    enforce: "pre",
};
/**
 * @see https://webpack.js.org/guides/typescript/#loader
 */
exports.typescriptRule = {
    test: /\.tsx?$/,
    loader: "ts-loader",
    options: {
        transpileOnly: true,
    },
    exclude: /node_modules/,
};
/**
 * @see https://webpack.js.org/loaders/babel-loader
 */
exports.javascriptRule = {
    test: /\.(js|jsx)$/,
    use: [useLoaderRuleItems_1.babelLoader],
    exclude: /node_modules/,
};
/**
 * @see https://webpack.js.org/loaders/html-loader
 */
exports.htmlRule = {
    test: /\.(html)$/,
    use: {
        loader: "html-loader",
    },
};
/**
 * @see https://webpack.js.org/guides/asset-modules/
 */
exports.imagesRule = {
    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    type: "asset/resource",
};
/**
 * @see https://webpack.js.org/guides/asset-modules/
 */
exports.fontsRule = {
    test: /\.(woff(2)?|eot|ttf|otf|)$/,
    type: "asset/inline",
};
