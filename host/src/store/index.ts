import actions, {RootActionTree} from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import generateState, {State} from "@/store/state";
import Vue from "vue";
import Vuex, {MutationTree, Store} from "vuex";

Vue.use(Vuex);

export interface RootStore {
  namespaced: boolean;
  state: State;
  actions: RootActionTree;
  mutations: MutationTree<State>;
}

let store: Store<State>;

export function setupVuex(): Store<State> {
  store = new Store<State>({
    state: generateState(),
    actions,
    mutations,
    getters,
    modules: {},
    strict: true,
  });
  return store;
}

store = setupVuex();

export default store;

export type RootState = State;
