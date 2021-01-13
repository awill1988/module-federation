import {deepCopy} from "@/utils";

export interface State {
  clientSiteID: string | null;
  logoutUrl: string | null;
  lang: string | null;
  loggedIn: boolean;
  foundantUserUrl: string | null;
}

export const initState: State = {
  clientSiteID: null,
  logoutUrl: process.env.VUE_APP_LOGOUT_URI || null,
  lang: "en",
  loggedIn: false,
  foundantUserUrl: process.env.VUE_APP_FOUNDANT_USER || null,
};

export default (): State =>
  deepCopy<State>({
    ...initState,
  });
