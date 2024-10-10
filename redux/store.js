import { configureStore } from '@reduxjs/toolkit';
import modalSlice from "./modalSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
        modals: modalSlice
    },
  })
}