import { createSlice } from "@reduxjs/toolkit";
import actGetCarouselItems from "./actions/actGetCarouselItems";
import { carouselResponseType, isString } from "@/types";

const initialState: carouselResponseType = {
  records: [],
  loading: "idle",
  error: null,
};

const CarouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    cleanUpCarouselItems: (state) => {
      state.records = [];
      state.loading = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetCarouselItems.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCarouselItems.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetCarouselItems.rejected, (state, action) => {
      state.loading = "failed";
      // state.error = action.error?.message || null;
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actGetCarouselItems };
export const { cleanUpCarouselItems } = CarouselSlice.actions;
export default CarouselSlice.reducer;
