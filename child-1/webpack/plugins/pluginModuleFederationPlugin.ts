import {join} from "path";

import {rootDir} from "../utils";

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require(join(rootDir, "package.json")).dependencies;
const shared = {};

Object.keys(deps).forEach(
  (d) =>
    (shared[d] = {
      singleton: true,
      strictVersion: true,
      eager: true,
    }),
);

export const moduleFederationPlugin = new ModuleFederationPlugin({
  name: "child",
  filename: "remoteEntry.js",
  remotes: {
    home: "home@http://localhost:4000/remoteEntry.js",
    child: "child@http://localhost:4010/remoteEntry.js",
  },
  exposes: {
    "./App": join(rootDir, "./src/main"),
  },
  // shared,
});
