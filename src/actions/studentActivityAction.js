import axios from "axios";
import { GET_ENROLL_STATUS, GET_ERROR } from "./types";

export const enrollActivity = (enrollApplication, history) => async (
  dispatch
) => {
  try {
    await axios.post("/student/createActivity", enrollApplication, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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

export const getEnrollActivitiesStatus = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/student/activity/status/${id}`);
    dispatch({
      type: GET_ENROLL_STATUS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};
