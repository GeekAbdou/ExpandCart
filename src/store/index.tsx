import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/categoriesSlice";
import productsReducer from "./products/productsSlice";
import cartReducer from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    items: cartReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;