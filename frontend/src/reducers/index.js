import { combineReducers } from "redux";
import authReducer from "./authReducer";
import BloodReducer from "./BloodReducer";

export default combineReducers({
  auth: authReducer,
  blood: BloodReducer,
});
