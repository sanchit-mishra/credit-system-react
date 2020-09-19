import axios from "axios";
import { DELETE_FACULTY, GET_ERROR, GET_FACULTIES, GET_FACULTY } from "./types";

/* Add Faculty */
export const addFaculty = (faculty, history) => async (dispatch) => {
  try {
    console.log(faculty);
    await axios.post("/faculty", faculty);
    history.push("/facultyDashboard");
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

/* Get Faculty */
export const getFaculty = (id, history) => async (dispatch) => {
  try {
    const res = await axios.get(`/faculty/${id}`);

    dispatch({
      type: GET_FACULTY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};

/* Get All Faculties */
export const getFaculties = () => async (dispatch) => {
  try {
    const res = await axios.get("/faculty");
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

/* Update Faculty */
export const updateFaculty = (id, updatedFaculty, history) => async (
  dispatch
) => {
  try {
    await axios.put(`/faculty/${id}`, updatedFaculty);
    history.push("/facultyDashboard");
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

/* Delete a Faculty */
export const deleteFaculty = (id) => async (dispatch) => {
  try {
    if (
      window.confirm(
        "Are you sure? This will delete all the data related to it"
      )
    ) {
      await axios.delete(`/faculty/${id}`);
      dispatch({
        type: DELETE_FACULTY,
        payload: id,
      });
    }
  } catch (err) {}
};
