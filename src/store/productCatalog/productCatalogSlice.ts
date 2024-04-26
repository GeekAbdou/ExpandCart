import { createSlice } from "@reduxjs/toolkit";
import actGetProductCatalog from "./actions/actGetProductCatalog";
import { isString, productCatalogType } from "@/types";

const initialState: productCatalogType = {
  productsFullInfo: [],
  error: null,
  loading: "idle",
};

const productCatalogSlice = createSlice({
  name: "productCatalog",
  initialState,
  reducers: {
    cleanUpProductCatalogFullInfo: (state) => {
      state.productsFullInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductCatalog.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductCatalog.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productsFullInfo = action.payload;
    });
    builder.addCase(actGetProductCatalog.rejected, (state, action) => {
      state.loading = "failed";
      // state.error = action.error?.message || null;
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actGetProductCatalog };
export const { cleanUpProductCatalogFullInfo } = productCatalogSlice.actions;
export default productCatalogSlice.reducer;
