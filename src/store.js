import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user";
import gamesReducer from "./features/gamesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    games: gamesReducer,
  },
});
