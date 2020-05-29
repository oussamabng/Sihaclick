import { combineReducers } from "redux";
import authReducer from "./authReducer";
import BloodReducer from "./BloodReducer";
import languageReducer from "./languageReducer";
import newsReducer from "./newsReducer"
import drugsReducer from "./drugsReducer";

export default combineReducers({
  auth: authReducer,
  blood: BloodReducer,
  drugs:drugsReducer,
  language:languageReducer,
  news : newsReducer
});
