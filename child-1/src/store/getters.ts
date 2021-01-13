import {State as RootState} from "@/store/state";
import {GetterTree} from "vuex";

const getters: GetterTree<RootState, RootState> = {
  clientSiteID: (state) => state.clientSiteID,
  logoutUrl: (state) => state.logoutUrl,
  lang: (state) => state.lang,
  foundantUserUrl: (state) => state.foundantUserUrl,
};

export default getters;
