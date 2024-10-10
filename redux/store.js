import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";

export const makeStore = configureStore({
  reducer: {
    modal: modalSlice,
  },
});