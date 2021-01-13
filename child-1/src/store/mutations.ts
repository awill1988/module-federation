import {State} from "@/store/state";
import {MutationTree} from "vuex";

export enum Types {
  SET_CLIENT_SITE_ID = "SET_CLIENT_SITE_ID",
  SET_LANG = "SET_LANG",
  SET_USER_LOGGED_IN = "SET_USER_LOGGED_IN",
}

export type Mutations<S = State> = {
  [Types.SET_CLIENT_SITE_ID](state: S, id: string): void;
  [Types.SET_LANG](state: S, lang: string): void;
  [Types.SET_USER_LOGGED_IN](state: S, loggedIn: boolean): void;
};

const mutations: MutationTree<State> & Mutations = {
  [Types.SET_CLIENT_SITE_ID]: (state: State, id: string) => {
    state.clientSiteID = id;
  },
  [Types.SET_LANG]: (state: State, lang: string) => {
    state.lang = lang;
  },
  [Types.SET_USER_LOGGED_IN]: (state: State, loggedIn: boolean) => {
    state.loggedIn = loggedIn;
  },
};

export default mutations;
