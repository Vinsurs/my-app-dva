import { query } from "../services/list";
export default {
  namespace: "list",
  state: [],
  reducers: {
    get(state, { payload }) {
      return [...state, ...payload.list];
    },
    add(state, { payload: { txt } }) {
      let newState = [...state];
      newState.push(txt);
      return newState;
    },
    delete(state, { payload: { key } }) {
      return [...state].filter((txt, index) => index !== key);
    }
  },
  effects: {
    *getList(action, { call, put }) {
      const {
        data: {
          code,
          message,
          data: { list }
        }
      } = yield call(query);
      if (code === 0 && message === "success") {
        yield put({ type: "get", payload: { list } });
      }
    }
  },
  subscriptions: {
    setup({ history, dispatch }, done) {}
  }
};
