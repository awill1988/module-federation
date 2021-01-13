import {RootState} from "@/store/index";
import {Types as M, Mutations} from "@/store/mutations";
import {ActionContext, ActionTree} from "vuex";

export enum Types {
  REGISTER_CLIENT_SITE_ID = "REGISTER_CLIENT_SITE_ID",
  MODIFY_LANGUAGE = "MODIFY_LANGUAGE",
}

export type RootActionTree = ActionTree<RootState, RootState> & Actions;

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState, RootState>, "commit">;

export interface Actions {
  [Types.REGISTER_CLIENT_SITE_ID](
    context: AugmentedActionContext,
    id: string,
  ): void;
  [Types.MODIFY_LANGUAGE](context: AugmentedActionContext, lang: string): void;
}

const actions: RootActionTree = {
  [Types.REGISTER_CLIENT_SITE_ID]: ({commit}, id: string): void => {
    commit(M.SET_CLIENT_SITE_ID, id);
  },
  [Types.MODIFY_LANGUAGE]: ({commit}, id: string): void => {
    commit(M.SET_LANG, id);
  },
};

export default actions;
