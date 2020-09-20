import { GET_ACTIVITIES, GET_ACTIVITY } from "../actions/types";

const initialState = {
  activities: [],
  activity: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    default:
      return state;
  }
}
