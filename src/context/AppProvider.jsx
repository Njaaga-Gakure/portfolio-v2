import { useEffect, useReducer, createContext, useContext } from "react";
import reducer from "./reducer";
import {
  SET_SCROLL,
  SET_DARK,
  SET_LIGHT,
  CHANGE_PAGE,
  SET_PREV_PAGE,
  SET_NEXT_PAGE,
  SET_PROJECTS,
} from "../actions";
import { paginate } from "../paginate";
import { projects as projectsData } from "../utils";

const AppContext = createContext();
const data = paginate(projectsData);

const initialState = {
  isSidebarOpen: false,
  isDarkMode: false,
  scroll: 0,
  page: 0,
  projects: data[0],
};
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleScroll = () => {
    dispatch({ type: SET_SCROLL, payload: window.scrollY });
  };
  const handleDark = () => {
    dispatch({ type: SET_DARK });
  };
  const handleLight = () => {
    dispatch({ type: SET_LIGHT });
  };
  const handlePageChange = (index) => {
    dispatch({ type: CHANGE_PAGE, payload: index });
  };
  const handlePrev = () => {
    dispatch({ type: SET_PREV_PAGE, payload: data });
  };
  const handleNext = () => {
    dispatch({ type: SET_NEXT_PAGE, payload: data });
  };
  useEffect(() => {
    dispatch({ type: SET_PROJECTS, payload: data });
  }, [state.page]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <AppContext.Provider
      value={{
        ...state,
        handleDark,
        handleLight,
        handlePageChange,
        handlePrev,
        handleNext,
        data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
