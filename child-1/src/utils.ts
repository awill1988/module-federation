/* eslint-disable no-prototype-builtins, @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
import {Route} from "vue-router";

type DateWithOptions = Date & {startOfDay: () => Date};

export const localTimestamp = (): DateWithOptions => {
  const offset = new Date().getTimezoneOffset() / 60;
  const utc = new Date().toISOString();
  let tz = "Z";
  if (offset > 0) {
    tz = `-${Math.abs(offset) > 9 ? offset : `0${offset}`}:00`;
  } else if (offset < 0) {
    tz = `+${Math.abs(offset) > 9 ? offset : `0${offset}`}:00`;
  }
  const time = utc.substr(10).replace(/Z$/, tz.toString());
  const zeroedTime = utc
    .substr(10)
    .replace(/Z$/, tz.toString())
    .replace(/\d{2}:\d{2}:\d{2}\.\d{0,3}/, "00:00:00.000");
  const date = utc.substr(0, 10);
  const parsedDate: DateWithOptions = (new Date(
    date + time,
  ) as unknown) as DateWithOptions;
  parsedDate.toISOString = function () {
    const tzo = -this.getTimezoneOffset();
    const dif = tzo >= 0 ? "+" : "-";
    const pad = (num: number) => {
      const norm = Math.floor(Math.abs(num));
      return (norm < 10 ? "0" : "") + norm;
    };
    return (
      this.getFullYear() +
      "-" +
      pad(this.getMonth() + 1) +
      "-" +
      pad(this.getDate()) +
      "T" +
      pad(this.getHours()) +
      ":" +
      pad(this.getMinutes()) +
      ":" +
      pad(this.getSeconds()) +
      dif +
      pad(tzo / 60) +
      ":" +
      pad(tzo % 60)
    );
  };
  parsedDate.startOfDay = () => new Date(date + zeroedTime);
  return parsedDate;
};

export const localizedDate = (dateStr: string): Date => {
  const now = localTimestamp().startOfDay();
  return new Date(dateStr + now.toISOString().substr(10));
};

export const localizedDateFormatted = (dateStr: string) => {
  const d = localizedDate(dateStr);
  // TODO: align with i18n plugin
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const deepCopy = <
  T = Record<string, unknown> | Record<string, unknown>[]
>(
  inObject: any,
): T => {
  let outObject: T;
  let value: unknown;
  let key: string | number;

  if (typeof inObject !== "object" || inObject === null) {
    return inObject; // Return the value if inObject is not an object
  }

  // Create an array or object to hold the values
  // eslint-disable-next-line prefer-const
  outObject = (Array.isArray(inObject) ? [] : {}) as T;

  for (key in inObject) {
    value = inObject[key];
    // Recursively (deep) copy for nested objects, including arrays
    (outObject as any)[key] = deepCopy(value);
  }
  return outObject;
};
/* eslint-enable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */

export const clientSiteId = (to: Route): null | string => {
  const storage = window.localStorage;

  const urlCsId =
    ((to.query["client-site-id"] as unknown) as string | null) || "";

  if (urlCsId) {
    storage.setItem("clientSiteId", urlCsId);
    return urlCsId;
  }

  const csId = storage.getItem("clientSiteId") || "";
  if (!csId) {
    return null;
  }

  return csId;
};

export const difference = <T = Record<string, unknown>>(
  obj1: unknown = {},
  obj2: unknown = {},
  depth = 0,
): T => {
  const isObject = (arg: unknown) =>
    typeof arg === "object" && arg !== null && !Array.isArray(arg);
  if (!isObject(obj1)) {
    return obj2 as T; // Return the value if obj is not an object
  }
  if (Array.isArray(obj1) && Array.isArray(obj2) && obj1 !== obj2) {
    return (obj2 as unknown) as T;
  }
  if (Array.isArray(obj2) && depth > 0) {
    return (obj2 as unknown) as T;
  }
  const newObj: Record<string, unknown> = {};
  const mergeValues = (
    o1: Record<string, unknown>,
    o2: Record<string, unknown>,
  ) => ([key, value]: [string, unknown]) => {
    if (
      !newObj.hasOwnProperty(key) &&
      (!o2.hasOwnProperty(key) || (o2.hasOwnProperty(key) && o2[key] !== value))
    ) {
      newObj[key] =
        isObject(o2[key] ?? value) || Array.isArray(o2[key] ?? value)
          ? difference(
              value as Record<string, unknown>,
              o2[key] as Record<string, unknown>,
              depth + 1,
            )
          : o2[key] ?? value;
    }
  };
  Object.entries(obj1 as Record<string, unknown>).forEach(
    mergeValues(
      obj1 as Record<string, unknown>,
      obj2 as Record<string, unknown>,
    ),
  );
  Object.entries(obj2 as Record<string, unknown>).forEach(
    mergeValues(
      obj2 as Record<string, unknown>,
      obj1 as Record<string, unknown>,
    ),
  );
  return newObj as T;
};
