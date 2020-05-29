import { FETCH_DRUGS } from "../actions/types";

const initialState = {
  data_drugs: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DRUGS:
      return {
        ...state,
        data_drugs: action.payload,
      };

    default:
      return state;
  }
}
