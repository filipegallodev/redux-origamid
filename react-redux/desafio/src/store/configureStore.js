import { combineReducers, configureStore } from "@reduxjs/toolkit";
import login from "./login";
import localStorage from "./middleware/localStorage";

const reducer = combineReducers({ login });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorage),
});

export default store;
