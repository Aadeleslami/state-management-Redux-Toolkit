import axios from "axios";
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userTypes";

function fetchUserRequest(){
    return {
        type:FETCH_USER_REQUEST
    }
}
function fetchUserSuccess(users){
    return{
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}
function fetchUserFailure(error){
  return {
    type:FETCH_USER_FAILURE,
    payload:error
  }
}
export function fetchUsers() {
  return function (dispatch) {
    // dispatch({ type: FETCH_USER_REQUEST });
    dispatch(fetchUserRequest())
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatch(fetchUserSuccess(res.data)))
      .catch((err) =>
        // dispatch({ type: FETCH_USER_FAILURE, payload: err.message })
      dispatch(fetchUserFailure(err.message))
      );
  };
}
