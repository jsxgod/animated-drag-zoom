import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (params = {}) => {
    try {
      const response = await axios.get("http://localhost:5000/api/products", {
        params,
      });
      return response?.data;
    } catch (error) {
      console.log(error);
    }
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
