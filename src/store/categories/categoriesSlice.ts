import { createSlice } from "@reduxjs/toolkit";
import { actGetCategories } from "@/store/categories/actions/actGetCategories";
import { categoryResponseType } from "@/types";

const initialState: categoryResponseType = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error?.message || null;
    });
  },
});

export { actGetCategories };
export default categoriesSlice.reducer;