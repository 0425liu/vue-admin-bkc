import * as types from "./mutations-types";
export const selectPage = ({ commit, state }, page) => {
  const mulitPage = state.mulitPage;
  let index = mulitPage.findIndex(n => n.name === page.name);
  if (index < 0) {
    mulitPage.push(page);
    index = mulitPage.length - 1;
  }
  commit(types.SET_CURRENT_PAGE, index);
  commit(types.SET_MULIT_PAGE, mulitPage);
};
export const deletPage = ({ commit, state }, index) => {
  const mulitPage = [...state.mulitPage];
  mulitPage.splice(index, 1);
  let currentPage = state.currentPage;
  if (index <= currentPage) {
    let pageIndex;
    if (index < currentPage) {
      pageIndex = state.currentPage - 1;
    } else {
      pageIndex = index - 1;
    }
    commit(types.SET_CURRENT_PAGE, pageIndex);
  }

  commit(types.SET_MULIT_PAGE, mulitPage);
};
