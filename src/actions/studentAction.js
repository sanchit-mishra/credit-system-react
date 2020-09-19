import axios from "axios";
import { GET_ERROR, GET_STUDENTS } from "./types";

export const addStudent = (newStudent, history) => async (dispatch) => {
  try {
    await axios.post("/student", newStudent);
    history.push("/studentDashboard");
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

export const getStudents = () => async (dispatch) => {
  try {
    const res = await axios.get("/student");
    dispatch({
      type: GET_STUDENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};
