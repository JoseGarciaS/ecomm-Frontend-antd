import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "../functions/querySlice/querySlice";
import productsReducer from "../functions/productSlice/productSlice";
import cartReducer from "../functions/cartSlice/cartSlice";

export const store = configureStore({
  reducer: {
    query: queryReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});
