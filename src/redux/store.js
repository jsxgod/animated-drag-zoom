import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import productsReducer from "./features/products/productsSlice";
import productReducer from "./features/products/productSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    product: productReducer,
  },
});
