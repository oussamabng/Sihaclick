import { FETCH_DOC } from "./types";

export const set_doc = (data) => (dispatch) => {
  dispatch({
    type: FETCH_DOC,
    payload: data,
  });
};
