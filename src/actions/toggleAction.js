import { TOGGLE } from "./types";

export const handleToggle = () => (dispatch) => {
  dispatch({
    type: TOGGLE,
  });
};
