import { LOGIN, LOGOUT } from "../actions/types";

const initialState = {
  token: "",
  user: {},
  isLogin: false,
};
console.log({ initialState });

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      console.log(action);
      if (action.payload["token"]) {
        state.isLogin = true;
        state.token = action.payload["token"];
        state.user = action.payload["user"];
      } else if (action.payload["user"]) {
        state.user = action.payload["user"];
      }
      return {
        ...state,
      };
    case LOGOUT:
      state.user = {};
      state.token = "";
      state.isLogin = false;
      return {
        ...state,
      };
    default:
      return state;
  }
}
