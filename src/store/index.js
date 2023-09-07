import { configureStore } from "@reduxjs/toolkit";
import bankSlice from "./bankSlice";

export const store = configureStore({
  reducer: {
    bankAccount: bankSlice,
  },
});

export default store;
