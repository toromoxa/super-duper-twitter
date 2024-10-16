import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import userSlice from "./userSlice"

export const makeStore = configureStore({
  reducer: {
    modal: modalSlice,
    user: userSlice
  },
});