import {argv} from "yargs";

interface ParsedArguments {
  mode: string;
  isDevServer: boolean;
}

export const parseArguments = (): ParsedArguments => {
  const {env = []} = argv;
  return (env as string[]).reduce((accumulator, currentValue) => {
    const [key, value = true] = currentValue.split("=");
    return {...accumulator, [key]: value};
  }, {}) as ParsedArguments;
};

// eslint-disable-next-line
export const arrayFilterEmpty = (array: any[]): any[] =>
  array.filter((x) => !!x);

export const pathRewrite = (localUrl: string, remoteUrl: string) => (
  path: string,
): string =>
  path.replace(new RegExp(localUrl.replace("/", "\\/"), "g"), remoteUrl);
