import {
  SET_DARK,
  SET_LIGHT,
  SET_SCROLL,
  CHANGE_PAGE,
  SET_PREV_PAGE,
  SET_NEXT_PAGE,
  SET_PROJECTS,
} from "../actions";

const reducer = (state, action) => {
  if (action.type === SET_SCROLL) {
    return { ...state, scroll: action.payload };
  }
  if (action.type === SET_DARK) {
    return { ...state, isDarkMode: true };
  }
  if (action.type === SET_LIGHT) {
    return { ...state, isDarkMode: false };
  }
  if (action.type === CHANGE_PAGE) {
    return { ...state, page: action.payload };
  }
  if (action.type === SET_PREV_PAGE) {
    const data = action.payload;
    const newPage = state.page === 0 ? data.length - 1 : state.page - 1;
    return { ...state, page: newPage };
  }
  if (action.type === SET_NEXT_PAGE) {
    const data = action.payload;
    const newPage = state.page === data.length - 1 ? 0 : state.page + 1;
    return { ...state, page: newPage };
  }
  if (action.type === SET_PROJECTS) {
    const data = action.payload;
    return { ...state, projects: data[state.page] };
  }
  throw new Error(`no type matching ${action.type}`);
};

export default reducer;
