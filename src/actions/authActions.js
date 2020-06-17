import { LOGIN, LOGOUT,OPEN } from "./types";

export const login = (data) => (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: data,
  });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
export const open = () => (dispatch) => {
  dispatch({
    type: OPEN,
  });
};
