import {join} from "path";

import ESLintPlugin from "eslint-webpack-plugin";

import {rootDir} from "../utils";

const config = {
  context: join(rootDir, "/src"),
  extensions: ["js", "jsx", "ts", "tsx", "vue"],
};

export const esLintPlugin = new ESLintPlugin(config);
