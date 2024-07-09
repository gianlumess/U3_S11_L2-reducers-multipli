import { ADD_JOBS_TO_ARRAY, ADD_QUERY_VALUE } from "../actions";

const initialState = {
  content: [],
  query: "",
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOBS_TO_ARRAY:
      return {
        ...state,

        content: [...state.content, action.payload],
      };
    case ADD_QUERY_VALUE:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
