"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bundleAnalyzer = void 0;
var webpack_bundle_analyzer_1 = require("webpack-bundle-analyzer");
exports.bundleAnalyzer = new webpack_bundle_analyzer_1.BundleAnalyzerPlugin({
    analyzerPort: 8889,
});
