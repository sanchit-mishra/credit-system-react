import { combineReducers } from "redux";
import facultyReducer from "./facultyReducer";

/* Combining all reducers */
export default combineReducers({
  faculty: facultyReducer,
});
