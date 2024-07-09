import { ADD_TO_FAVOURITES, REMOVE_TO_FAVOURITES } from "../actions";

const initialState = {
  content: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,

        content: [...state.content, action.payload],
      };
    case REMOVE_TO_FAVOURITES:
      return {
        ...state,

        content: state.content.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
