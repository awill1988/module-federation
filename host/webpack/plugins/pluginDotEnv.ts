import DotEnv from "dotenv-webpack";

export const dotEnvPlugin = new DotEnv({
  defaults: true,
  systemvars: true,
});
