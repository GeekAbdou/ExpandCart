import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByIDs from "./actions/actGetProductsByIDs";
import { productType, cartType, isString } from "@/types";

const initialState: cartType = {
  items: {},
  productsFullInfo: [],
  loading: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
    cleanUpCartProductsFullInfo: (state) => {
      state.productsFullInfo = [];
    },
    changeItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      state.items[id] = quantity;
    },
    cartItemRemove: (state, action) => {
      const id = action.payload;
      delete state.items[id];
      // This filter method will remove the product from the productsFullInfo array (veryImportant)
      state.productsFullInfo = state.productsFullInfo.filter(
        (product) => product.id !== id
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(actGetProductsByIDs.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByIDs.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productsFullInfo = action.payload as productType[];
    });
    builder.addCase(actGetProductsByIDs.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actGetProductsByIDs };
export const {
  addToCart,
  changeItemQuantity,
  cartItemRemove,
  cleanUpCartProductsFullInfo,
} = cartSlice.actions;
export default cartSlice.reducer;
