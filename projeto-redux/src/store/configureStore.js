import { combineReducers, configureStore } from "@reduxjs/toolkit";
import feed from "./feed";
import photo from "./photo";
import token from "./token";
import user from "./user";

const reducer = combineReducers({ photo, user, token, feed });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
