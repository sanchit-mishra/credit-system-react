import { combineReducers } from "redux";
import facultyReducer from "./facultyReducer";
import branchReducer from "./branchReducer";
import errorReducer from "./errorReducer";
import degreeReducer from "./degreeReducer";

/* Combining all reducers */
export default combineReducers({
  faculty: facultyReducer,
  branch: branchReducer,
  degree: degreeReducer,
  error: errorReducer,
});
