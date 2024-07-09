const intitialState = {
  preferiti: {
    content: [], //iniziamo con un array vuoto perchè riceveremo un array
  },

  jobs: {
    content: [],
  },
};

const mainReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        preferiti: {
          ...state.preferiti,
          content: [...state.preferiti.content, action.payload],
        },
      };
    case "REMOVE_TO_FAVOURITES":
      return {
        ...state,
        preferiti: {
          ...state.preferiti,
          content: state.preferiti.content.filter((_, i) => i !== action.payload),
        },
      };
    case "ADD_JOBS_TO_ARRAY":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          content: [...state.jobs.content, action.payload],
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
