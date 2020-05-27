import { FETCH_BLOOD } from "../actions/types";

const initialState = {
  data_blood: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BLOOD:
      return {
        ...state,
        data_blood: action.payload,
      };

    default:
      return state;
  }
}
