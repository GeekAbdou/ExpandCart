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

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"],
};

const wishlistPersistConfig = {
  key: "wishlist",
  storage,
  whitelist: ["itemsId"],
};

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  shop: shopReducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
  wishlist: persistReducer(wishlistPersistConfig, wishlistReducer),
  bestSeller: bestSellerReducer,
  productCatalog: productCatalogReducer,
  carousel: carouselReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default { store, persistedStore };
