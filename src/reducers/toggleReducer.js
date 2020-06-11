import { TOGGLE } from "../actions/types";

const initialState = {
  isOpen: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
}
