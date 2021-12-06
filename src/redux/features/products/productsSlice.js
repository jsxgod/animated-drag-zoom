import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("http://localhost:5000/api/products");
    return response?.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = "success";
      state.products = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default productsSlice.reducer;
