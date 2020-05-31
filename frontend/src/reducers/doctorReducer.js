import {FETCH_DOC} from "../actions/types";
const initialState = {
    data: [],
  };

  export default function (state = initialState, action) {
    switch (action.type) {
      case FETCH_DOC:
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  }
  