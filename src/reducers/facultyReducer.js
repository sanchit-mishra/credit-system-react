import { GET_FACULTY, GET_FACULTIES, DELETE_FACULTY } from "../actions/types";

const initialState = {
  faculty: {},
  faculties: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FACULTY:
      return {
        ...state,
        faculty: action.payload,
      };
    case GET_FACULTIES:
      return {
        ...state,
        faculties: action.payload,
      };
    case DELETE_FACULTY:
      return {
        ...state,
        faculties: state.faculties.filter(
          (faculty) => faculty.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
