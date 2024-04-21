import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByIDs from "./actions/actGetProductsByIDs";
import { productType, loadingType } from "@/types";

type cartStateType = {
  items: { [key: string]: number };
  productsFullInfo: productType[];
  loading: loadingType;
  error: null | string;
};

const initialState: cartStateType = {
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

    changeItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      state.items[id] = quantity;
    },
    cartItemRemove: (state, action) => {
      const id = action.payload;
      delete state.items[id];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(actGetProductsByIDs.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByIDs.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productsFullInfo = action.payload;
    });
    builder.addCase(actGetProductsByIDs.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export { actGetProductsByIDs };
export const { addToCart, changeItemQuantity, cartItemRemove } =
  cartSlice.actions;
export default cartSlice.reducer;
