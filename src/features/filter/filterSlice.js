import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedFilter: "all",
};

const selectedFilterSlice = createSlice({
  name: "selectedFilter",
  initialState,
  reducers: {
    selectedFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },
  },
});

export const { selectedFilter } = selectedFilterSlice.actions;

export default selectedFilterSlice.reducer;
