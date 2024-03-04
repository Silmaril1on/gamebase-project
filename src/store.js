import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modal";
import userReducer from "./features/user";
import gamesReducer from "./features/gamesSlice";
import consolesReducer from "./features/consolesSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
    games: gamesReducer,
    consoles: consolesReducer,
  },
});
