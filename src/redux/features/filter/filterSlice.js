import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  active: false,
  status: null,
  data: {},
};

export const fetchFilterData = createAsyncThunk(
  "filter/fetchFilterData",
  async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    activateFilter: (state, action) => {
      state.active = true;
    },
    deactivateFilter: (state, action) => {
      state.active = false;
    },
  },
  extraReducers: {
    [fetchFilterData.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchFilterData.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
    [fetchFilterData.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export const { activateFilter, deactivateFilter } = filterSlice.actions;

export default filterSlice.reducer;
