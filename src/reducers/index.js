import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import userReducers from "./users.reducer";
import eventReducer from "./event.reducer";
export default combineReducers ({
    userReducer,
    userReducers,
    eventReducer
})