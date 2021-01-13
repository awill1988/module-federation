import {join} from "path";

import {rootDir} from "../utils";

const pkg = require(join(rootDir, "package.json"));

const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  filename: "index.html",
  inject: true,
  title: pkg.name,
  favicon: join(rootDir, "src/assets/icons/favicon.ico"),
  template: join(rootDir, "src/index.html"),
};

export const htmlWebpackPlugin = new HtmlWebpackPlugin(config);
