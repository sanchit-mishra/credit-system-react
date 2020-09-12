import { combineReducers } from "redux";
import facultyReducer from "./facultyReducer";
import branchReducer from "./branchReducer";
import errorReducer from "./errorReducer";

/* Combining all reducers */
export default combineReducers({
  faculty: facultyReducer,
  branch: branchReducer,
  error:errorReducer
});
