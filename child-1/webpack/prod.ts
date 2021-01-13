import {WebpackOptionsNormalized} from "webpack";

import * as plugins from "./plugins";

const config: Partial<WebpackOptionsNormalized> = {
  plugins: [
    plugins.cleanWebpackPlugin,
    plugins.miniCssExtractPlugin,
    plugins.bundleAnalyzer,
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

export default config;
