import { combineReducers } from "redux";
import milkReducer from "./milk/milkReducer";
import cakeReducer from "./cake/cakeReducer";
import userReducer from "./user/userReducer";

 const rootReducer= combineReducers({
    cake: cakeReducer,
    milk : milkReducer,
    users: userReducer
})
export default rootReducer