export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_TO_FAVOURITES = "REMOVE_TO_FAVOURITES";
export const ADD_JOBS_TO_ARRAY = "ADD_JOBS_TO_ARRAY";

export const addFavouriteAction = (azienda) => {
  return { type: ADD_TO_FAVOURITES, payload: azienda };
};

export const removeFavouriteAction = (azienda) => {
  return { type: REMOVE_TO_FAVOURITES, payload: azienda };
};

export const addJobsToArrayAction = (jobs) => {
  return { type: ADD_JOBS_TO_ARRAY, payload: jobs };
};

export const getJobsAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(addJobsToArrayAction(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
