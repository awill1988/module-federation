import isWindows from "is-windows";

import {devServerProxyConfig} from "./devServerProxy";

const port = parseInt(process.env.DEV_PORT ?? "8080", 10);

const host = isWindows() ? "127.0.0.1" : "0.0.0.0";

export const devServerUrl = `http://${host}:${port}/`;

export const devServerConfig = {
  port,
  dev: {
    publicPath: "/",
  },
  historyApiFallback: true,
  headers: {"Access-Control-Allow-Origin": "*"},
  proxy: devServerProxyConfig,
  hot: true,
  overlay: true,
  liveReload: true,
  host,
  injectHot: true,
};
