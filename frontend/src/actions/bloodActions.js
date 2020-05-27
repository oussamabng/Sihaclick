import { FETCH_BLOOD } from "./types";

export const get_blood = (data) => (dispatch) => {
  dispatch({
    type: FETCH_BLOOD,
    payload: data,
  });
};
