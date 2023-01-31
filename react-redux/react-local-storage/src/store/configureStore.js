import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contador from "./contador";
import login from "./login";
import modal from "./modal";
import localStorage from "./middleware/localStorage";

const reducer = combineReducers({ contador, modal, login });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorage),
});

export default store;
