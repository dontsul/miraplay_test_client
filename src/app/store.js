import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/authSlice";
import { gamesApi } from "../features/gamesApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gamesApi.middleware),
});
