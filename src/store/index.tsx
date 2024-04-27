import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import categoriesReducer from "@/store/categories/categoriesSlice";
import productsReducer from "@/store/products/productsSlice";
import cartReducer from "@/store/cart/cartSlice";
import wishlistReducer from "@/store/wishlist/wishlistSlice";
import shopReducer from "@/store/shop/shopSlice";
import bestSellerReducer from "@/store/bestSeller/bestSellerSlice";
import productCatalogReducer from "@/store/productCatalog/productCatalogSlice";
import carouselReducer from "@/store/carousel/CarouselSlice";
import auth from "./auth/authSlice";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "auth"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whiteList: ["user", "accessToken"],
};

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  categories: categoriesReducer,
  products: productsReducer,
  shop: shopReducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
  wishlist: wishlistReducer,
  bestSeller: bestSellerReducer,
  productCatalog: productCatalogReducer,
  carousel: carouselReducer,
});
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistedStore = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default { store, persistedStore };
