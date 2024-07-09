export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_TO_FAVOURITES = "REMOVE_TO_FAVOURITES";
export const ADD_JOBS_TO_ARRAY = "ADD_JOBS_TO_ARRAY";

export const addFavourite = (azienda) => {
  return { type: ADD_TO_FAVOURITES, payload: azienda };
};

export const removeFavourite = (azienda) => {
  return { type: REMOVE_TO_FAVOURITES, payload: azienda };
};

export const addJobsToArray = (jobs) => {
  return { type: ADD_JOBS_TO_ARRAY, payload: jobs };
};
