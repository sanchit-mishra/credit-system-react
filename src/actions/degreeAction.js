import axios from "axios";
import { GET_DEGREE, GET_DEGREES, GET_ERROR, DELETE_DEGREE } from "./types";

export const addDegree = (newDegree, history) => async (dispatch) => {
  try {
    await axios.post("/degree", newDegree);
    history.push("/degreeDashboard");
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

export const getDegrees = () => async (dispatch) => {
  try {
    const res = await axios.get("/degree");
    dispatch({
      type: GET_DEGREES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};
