import { ADD_JOBS_TO_ARRAY } from "../actions";

const initialState = {
  content: [],
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOBS_TO_ARRAY:
      return {
        ...state,

        content: [...state.content, action.payload],
      };
    default:
      return state;
  }
};

export default jobsReducer;
