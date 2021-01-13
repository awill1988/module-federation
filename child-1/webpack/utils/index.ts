import {join} from "path";

import {parseArguments} from "./helpers";

const parsedArguments = parseArguments();
export const NODE_ENV = process.env.NODE_ENV ?? "development";
export const mode = parsedArguments.mode ?? NODE_ENV ?? "development";

export const isDevServer = parsedArguments.isDevServer ?? false;
export const isProd = mode === "production";
export const isDev = !isProd;

export const rootDir = join(__dirname, "../../");
export const webpackDir = join(__dirname, "../");
