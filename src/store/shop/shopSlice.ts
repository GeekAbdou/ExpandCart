import { createSlice } from "@reduxjs/toolkit";
import { actGetAllProducts } from "@/store/shop/actions/actGetAllProducts";
import { productResponseType, isString } from "@/types";

const initialState: productResponseType = {
  records: [],
  loading: "idle",
  error: null,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    CleanUpShopRecords: (state) => {
      state.records = [];
      state.loading = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetAllProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetAllProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetAllProducts.rejected, (state, action) => {
      state.loading = "failed";
      // state.error = action.error?.message || null;
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actGetAllProducts };
export const { CleanUpShopRecords } = shopSlice.actions;

export default shopSlice.reducer;
