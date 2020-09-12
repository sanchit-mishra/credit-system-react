import { GET_FACULTY, GET_FACULTIES } from "../actions/types";

const initialState = {
  faculties: [],
  faculty: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FACULTIES:
      return {
        ...state,
        faculties: action.payload,
      };
    case GET_FACULTY:
      return {
        ...state,
        faculty: action.payload,
      };
    default:
      return state;
  }
}
