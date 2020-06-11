import { FETCH_BLOOD, FETCH_BLOOD_DISTANCE } from "./types";

export const get_blood = (data) => (dispatch) => {
  dispatch({
    type: FETCH_BLOOD,
    payload: data,
  });
};

export const sort_blood_distance = (data) => (dispatch)=>{
  dispatch({
    type:FETCH_BLOOD_DISTANCE,
    payload:data
  })
}