import { createSlice } from "@reduxjs/toolkit";
import { isString, productResponseType } from "@/types";
import { actGetProductsByCatPrefix } from "@/store/products/actions/actGetProductsByCatPrefix";

const initialState: productResponseType = {
  records: [],
  loading: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    CleanUpProductsRecords: (state) => {
      state.records = [];
      state.loading = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByCatPrefix.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByCatPrefix.fulfilled, (state, action) => {
      console.log("Payload received:", action.payload);
      state.loading = "succeeded";
      state.records = action.payload;
    });
    
    builder.addCase(actGetProductsByCatPrefix.rejected, (state, action) => {
      state.loading = "failed";
      // state.error = action.error?.message || null;
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { CleanUpProductsRecords } = productSlice.actions;
export { actGetProductsByCatPrefix };
export default productSlice.reducer;
