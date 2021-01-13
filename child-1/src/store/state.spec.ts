import generateState, {initState} from "./state";

describe("state", () => {
  it("generates initial state", () => {
    const expected = {
      clientSiteID: null,
      logoutUrl: process.env.VUE_APP_LOGOUT_URI || null,
      lang: "en",
      loggedIn: false,
      foundantUserUrl: process.env.VUE_APP_FOUNDANT_USER || null,
    };
    expect(expected).toStrictEqual(generateState());
  });
  it("initState", () => {
    expect(initState).toBeDefined();
  });
});
