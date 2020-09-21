import axios from "axios";
import { GET_ACTIVITIES, GET_ERROR } from "./types";

export const addActivity = (newActivity, history) => async (dispatch) => {
  try {
    await axios.post("/activityDetails", newActivity);
    history.push("");
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

export const getActivities = () => async (dispatch) => {
  try {
    const res = await axios.get("/activityDetails");
    dispatch({
      type: GET_ACTIVITIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};

export const assignActFact = (assActFact, history) => async (dispatch) => {
  try {
    await axios.post("/activityDetails/map", assActFact);
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

export const getActFacts = () => async (dispatch) => {
  try {
    const res = await axios.get("activityDetails/withDetails");
    dispatch({
      type: GET_ACTIVITIES,
      payload: res.data,
    });
  } catch (err) {}
};
