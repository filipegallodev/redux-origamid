import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contador from "./contador";
import login from "./login";
import modal from "./modal";

const reducer = combineReducers({ contador, modal, login });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
