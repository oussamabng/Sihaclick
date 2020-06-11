import {FETCH_NEWS} from "../actions/types";

const initialState = {
  data_news: []
};
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        data_news: action.payload
      };
    
    default:
      return state;
  }
}
