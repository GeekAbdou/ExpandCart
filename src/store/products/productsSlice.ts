import { createSlice } from "@reduxjs/toolkit";
import { productResponseType } from "@/types";
import { actGetProductsByCatPrefix } from "@/store/products/actions/actGetProductsByCatPrefix";

const initialState: productResponseType = {
  records: [],
  loading: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByCatPrefix.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByCatPrefix.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetProductsByCatPrefix.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error?.message || null;
    });
  },
});

// Export an object containing both the action creator and the reducer
export const productActions = {
  actGetProductsByCatPrefix,
};

export default productSlice.reducer;
