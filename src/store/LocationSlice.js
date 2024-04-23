import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "Location",
  initialState: { location: "Brooklyn" },
  reducers: {
    updateArea(state, action) {
      const newLocation = state.location !== "" ? action.payload : " ";
      return { ...state, location: newLocation };
    },
  },
});

export const { updateArea } = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
