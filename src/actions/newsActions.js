import { FETCH_NEWS } from "./types";

export const get_news = (data) => (dispatch) => {
  dispatch({
    type: FETCH_NEWS,
    payload: data,
  });
};

