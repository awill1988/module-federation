import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";

export const bundleAnalyzer = new BundleAnalyzerPlugin({
  analyzerPort: 8889,
});
