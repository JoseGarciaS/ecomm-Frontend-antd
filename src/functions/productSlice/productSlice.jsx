import { createSlice } from "@reduxjs/toolkit";
import getProducts from "../httpRequests/httpRequests";

const initialState = {
  value: getProducts(),
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: () => {},
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
