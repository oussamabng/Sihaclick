import { LOGIN, LOGOUT,OPEN } from "./types";

export const login = (token) => (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: token,
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
