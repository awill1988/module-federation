import {CleanWebpackPlugin} from "clean-webpack-plugin";

const config = {
  cleanOnceBeforeBuildPatterns: ["build/"],
};

export const cleanWebpackPlugin = new CleanWebpackPlugin(config);
