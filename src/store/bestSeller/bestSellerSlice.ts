import { createSlice } from "@reduxjs/toolkit";
import actGetBestSeller from "@/store/bestSeller/actions/actGetBestSeller";
import { isString, bestSellerType } from "@/types";

const initialState: bestSellerType = {
  productsFullInfo: [],
  error: null,
  loading: "idle",
};

const bestSellerSlice = createSlice({
  name: "bestSeller",
  initialState,
  reducers: {
    cleanUpBestSellerProductsFullInfo: (state) => {
      state.productsFullInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetBestSeller.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetBestSeller.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productsFullInfo = action.payload;
    });
    builder.addCase(actGetBestSeller.rejected, (state, action) => {
      state.loading = "failed";
      // state.error = action.error?.message || null;
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actGetBestSeller };
export const { cleanUpBestSellerProductsFullInfo } = bestSellerSlice.actions;
export default bestSellerSlice.reducer;
