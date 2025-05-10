import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/user-slices";

const rootReducer = combineReducers({
    user: userReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});