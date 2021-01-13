import * as path from "path";

import {WebpackOptionsNormalized} from "webpack";

import {aliasItems, devServerUrl, externalItems} from "./config";
import entry from "./entry";
import optimization from "./optimization";
import * as plugins from "./plugins";
import * as rules from "./rules";
import {isDevServer, isProd} from "./utils";
import {arrayFilterEmpty} from "./utils/helpers";

const config: Partial<WebpackOptionsNormalized> = {
  context: __dirname,
  target: ["web", "es5"],
  mode: isProd ? "production" : "development",
  entry,
  output: {
    uniqueName: "child",
    path: path.join(__dirname, "../build"),
    publicPath: "auto",
    filename: isDevServer ? "[name].[fullhash].js" : "[name].[contenthash].js",
  },
  module: {
    rules: arrayFilterEmpty([
      rules.cssRule,
      rules.javascriptRule,
      rules.typescriptRule,
      rules.vueRule,
      ...rules.lessRules,
      ...rules.sassRules,
      ...rules.svgRules,
      rules.imagesRule,
      rules.fontsRule,
    ]),
  },
  plugins: arrayFilterEmpty([
    plugins.dotEnvPlugin,
    plugins.vueLoaderPlugin,
    plugins.vuetifyLoaderPlugin,
    plugins.htmlWebpackPlugin,
    plugins.providePlugin,
    plugins.definePlugin,
    plugins.forkTsCheckerWebpackPlugin,
    plugins.esLintPlugin,
    plugins.copyPlugin,
    plugins.cleanWebpackPlugin,
    plugins.moduleFederationPlugin,
  ]),
  resolve: {
    alias: {
      ...aliasItems,
    },
    fallback: {
      // polyfills that are required for webpack 5 because features were dropped
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
    },
    extensions: [".tsx", ".ts", ".js", ".jsx", ".vue"],
  },
  optimization,
  externals: externalItems,
};

export default config;
