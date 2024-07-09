import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import jobsReducer from "../reducers/jobsReducer";

const rootReducer = combineReducers({
  preferiti: favouritesReducer,
  jobs: jobsReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
