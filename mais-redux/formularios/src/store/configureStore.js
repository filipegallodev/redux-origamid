import { combineReducers, configureStore } from "@reduxjs/toolkit";
import date from "./date";

const reducer = combineReducers({ date });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
