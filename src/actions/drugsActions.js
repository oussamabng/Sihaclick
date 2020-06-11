import { FETCH_DRUGS } from "./types";

export const get_drugs = (data) => (dispatch) => {
  dispatch({
    type: FETCH_DRUGS,
    payload: data,
  });
};
