import {RootState} from "@/store";
import actions, {Types as A} from "@/store/actions";
import {Types} from "@/store/mutations";
import generateState, {State} from "@/store/state";
import Sinon, {SinonSpy, createSandbox, spy} from "sinon";

describe("actions", () => {
  let sandbox: Sinon.SinonSandbox;
  let commit: SinonSpy;
  let state: State;
  let mockedActionPayload: unknown;
  let getters: Record<string, unknown>;
  let rootGetters: Record<string, unknown>;
  let rootState: RootState;

  beforeEach(() => {
    sandbox = createSandbox();
    commit = spy();
    state = generateState();
    rootState = state;
  });

  afterEach(() => sandbox.restore());

  it(A.REGISTER_CLIENT_SITE_ID, async () => {
    getters = {
      newProfile: mockedActionPayload,
    };

    actions.REGISTER_CLIENT_SITE_ID(
      {
        commit,
        state,
        dispatch: () => Promise.resolve(),
        getters,
        rootGetters,
        rootState,
      },
      "1",
    );

    expect(commit.args).toStrictEqual([[Types.SET_CLIENT_SITE_ID, "1"]]);
  });
});
