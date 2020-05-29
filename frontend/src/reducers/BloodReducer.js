import { FETCH_BLOOD ,FETCH_BLOOD_DISTANCE} from "../actions/types";

const initialState = {
  data_blood: [],
  sortDistance:false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BLOOD:
      return {
        ...state,
        data_blood: action.payload,
        sortDistance:false
      };
    case FETCH_BLOOD_DISTANCE:
      let tempArr = []
      action.payload.map(blood_don=>{
        //TODO 
      })
      return {
        ...state,
        data_blood:action.payload,
        sortDistance:true
      }
    default:
      return state;
  }
}
