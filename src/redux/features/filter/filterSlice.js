import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
  data: {},
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterData: (state, action) => {
      state.data = action.payload;
    },
    clearFilterData: (state, action) => {
      state.data = {};
    },
    activateFilter: (state, action) => {
      state.active = true;
    },
    deactivateFilter: (state, action) => {
      state.active = false;
    },
  },
});

export const {
  setFilterData,
  clearFilterData,
  activateFilter,
  deactivateFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
