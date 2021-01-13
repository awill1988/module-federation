import getters from "@/store/getters";
import generateInitialState, {State as RootState} from "@/store/state";

const state: RootState = generateInitialState();
const rootGetters: Record<string, unknown> = {};

describe("root getters", () => {
  it("returns clientSiteID", () => {
    const actual = getters.clientSiteID(
      state,
      getters,
      ({} as unknown) as RootState,
      rootGetters,
    );
    expect(actual).toStrictEqual(null);
  });
  it("returns lang", () => {
    const actual = getters.lang(
      state,
      getters,
      ({} as unknown) as RootState,
      rootGetters,
    );
    expect(actual).toStrictEqual("en");
  });
  it("returns logoutUrl", () => {
    const actual = getters.logoutUrl(
      state,
      getters,
      ({} as unknown) as RootState,
      rootGetters,
    );
    expect(actual).toStrictEqual(process.env.VUE_APP_LOGOUT_URI || null);
  });
  it("returns foundantUserUrl", () => {
    const actual = getters.foundantUserUrl(
      state,
      getters,
      ({} as unknown) as RootState,
      rootGetters,
    );
    expect(actual).toStrictEqual(process.env.VUE_APP_FOUNDANT_USER || null);
  });
});
