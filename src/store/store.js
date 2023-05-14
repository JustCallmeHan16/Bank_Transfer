import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../api/userApi";
import userSlice from "../services/userSlice";

export const store = configureStore({
    reducer : {
        [userApi.reducerPath] : userApi.reducer,
        user : userSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})

