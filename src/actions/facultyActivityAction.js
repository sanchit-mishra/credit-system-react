import axios from "axios";
import {
  GET_ALLOTED_ACTIVITY,
  GET_ERROR,
  GET_PENDING_ENROLL_STUDENT,
} from "./types";

export const getAllotedActivities = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/faculty/activity/${id}`);
    dispatch({
      type: GET_ALLOTED_ACTIVITY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};

export const getStudentsEnrolledActivity = (pendingData) => async (
  dispatch
) => {
  try {
    const res = await axios.post("/faculty/activity/student", pendingData);
    dispatch({
      type: GET_PENDING_ENROLL_STUDENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};

export const approveStudentActivity = (approveStudent,history) => async dispatch => {
  try {
    
    await axios.post("/faculty/activity",approveStudent);
    dispatch({
      type:GET_ERROR,
      payload:{}
    })
  } catch (err) {
    dispatch({
      type:GET_ERROR,
      payload:err.response.data,
    })
  }
}
