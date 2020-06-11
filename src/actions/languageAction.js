import { LANGUAGE } from "./types";

export const selectLanguage = (val) => {
 
    return{
      type: LANGUAGE,
      payload: val
    };
  };