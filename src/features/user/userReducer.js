import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes";

const initialState = {
  isLoading:false,
  data:[],
  error:""
}
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_REQUEST:return {
      ...state,
      isLoading:true,
    }
    case FETCH_USER_SUCCESS:return {
      ...state,
      isLoading:false,
      data: action.payload,
      error:""
    }
    case FETCH_USER_FAILURE: return {
      ...state,
      isLoading:false,
      data:[],
      error: action.payload
    }
    default:
      return state;
  }
}

