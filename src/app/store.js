import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "../functions/querySlice/querySlice";
import productsReducer from "../functions/productSlice/productSlice";

export const store = configureStore({
  reducer: {
    query: queryReducer,
    products: productsReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["products.setProducts"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        // Ignore these paths in the state
        ignoredPaths: ["items.dates"],
      },
    }),
});
