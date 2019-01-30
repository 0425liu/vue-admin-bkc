import * as types from "./mutations-types";
const mutations = {
  [types.SET_DEFAULT_PATH](state, path) {
    state.defaultPath = path;
  },
  [types.SET_MULIT_PAGE](state, pathArray) {
    state.mulitPage = pathArray;
  },
  [types.SET_CURRENT_PAGE](state, index) {
    state.currentPage = index;
  }
};

export default mutations;
