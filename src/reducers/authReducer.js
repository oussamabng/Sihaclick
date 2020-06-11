import { LOGIN, LOGOUT,OPEN } from "../actions/types";

const initialState = {
  token: "",
  user: {},
  isLogin: false,
  isOpen:false
};

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
      case OPEN:
        if (!state.isOpen){
          return {
            ...state,
            isOpen:true
          };
        }else {
          return{
            ...state,
            isOpen:false
          }
        }   
    default:
      return state;
  }
}
