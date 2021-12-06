import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: {},
  status: null,
};

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id = null) => {
    const response = await axios.get(
      `http://localhost:5000/api/products/${id}`
    );
    return response?.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProduct.pending]: (state, action) => {
      state.status = "pending";
      state.data = {};
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
    [fetchProduct.rejected]: (state, action) => {
      state.status = "rejected";
      state.data = {};
    },
  },
});

export default productSlice.reducer;
