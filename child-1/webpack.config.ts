import {WebpackOptionsNormalized} from "webpack";
import merge from "webpack-merge";

import baseConfig from "./webpack/base";
import devConfig from "./webpack/dev";
import prodConfig from "./webpack/prod";
import {isProd} from "./webpack/utils";

export default (): Partial<WebpackOptionsNormalized> =>
  isProd
    ? merge<Partial<WebpackOptionsNormalized>>(baseConfig, prodConfig)
    : merge<Partial<WebpackOptionsNormalized>>(baseConfig, devConfig);
