import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: {},
  status: null,
};

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id = null) => {
    const response = await axios.get(
      `https://localhost:5000/api/products/${id}`
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
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.status = "success";
      state.item = action.payload;
    },
    [fetchProduct.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default productSlice.reducer;
