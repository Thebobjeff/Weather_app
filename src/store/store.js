import { configureStore } from "@reduxjs/toolkit";
import { locationReducer } from "./LocationSlice";

export const store = configureStore({
  reducer: {
    locationState: locationReducer,
  },
});
