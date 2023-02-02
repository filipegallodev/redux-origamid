import { combineReducers, configureStore } from "@reduxjs/toolkit";
import products from "./products";

const reducer = combineReducers({ products });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
