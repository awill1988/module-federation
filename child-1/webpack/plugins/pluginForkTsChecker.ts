import {join} from "path";

import {ForkTsCheckerWebpackPluginOptions} from "fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPluginOptions";

import {isDev, rootDir} from "../utils";

import ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const config: ForkTsCheckerWebpackPluginOptions = {
  async: isDev,
  typescript: {
    configFile: join(rootDir, "/tsconfig.json"),
  },
  eslint: {enabled: true, files: "../src/**/*.{ts,tsx,js,jsx}"},
  logger: {infrastructure: "silent", issues: "console"},
};

export const forkTsCheckerWebpackPlugin = new ForkTsCheckerWebpackPlugin(
  config,
);
