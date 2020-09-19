import { GET_STUDENT, GET_STUDENTS } from "../actions/types";

const initialState = {
  students: [],
  student: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_STUDENT:
      return {
        ...state,
        student: action.payload,
      };
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };
    default:
      return state;
  }
}
