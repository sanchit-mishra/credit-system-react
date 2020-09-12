import axios from "axios";
import { GET_ERROR, GET_FACULTIES } from "./types";

export const addFaculty = (faculty, history) => async (dispatch) => {
  try {
    await axios.post("/faculty", faculty);
    //history.push("/facultyDashboard");
    dispatch({
      type: GET_ERROR,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};

export const getFaculties = () => async (dispatch) => {
  try {
    const res = await axios.get("");
    dispatch({
      type: GET_FACULTIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};
