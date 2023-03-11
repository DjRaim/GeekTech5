import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "./photosSlice";

const reducer = combineReducers({
    photosReducer,
})

export const store = configureStore({
    reducer
})
