import { combineReducers, configureStore } from "@reduxjs/toolkit";
import login from "./login";
import photos from "./photos";
import localStorage from "./middleware/localStorage";

const reducer = combineReducers({ login, photos });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorage),
});

export default store;
