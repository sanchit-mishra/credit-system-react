import {
  GET_ALLOTED_ACTIVITY,
  GET_PENDING_ENROLL_STUDENT,
} from "../actions/types";

const initialState = {
  facultyActivityAlloted: {},
  pendingEnrollStudent: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALLOTED_ACTIVITY:
      return {
        ...state,
        facultyActivityAlloted: action.payload,
      };
    case GET_PENDING_ENROLL_STUDENT:
      return {
        ...state,
        pendingEnrollStudent: action.payload,
      };
    default:
      return state;
  }
}
