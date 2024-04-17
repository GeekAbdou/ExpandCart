import { createSlice } from "@reduxjs/toolkit";
import { productType } from "@/types";

type cartStateType = {
  items: { [key: string]: number }; // index signature
  productFullInfo: productType[];
};
const initialState: cartStateType = {
  items: {},
  productFullInfo: [],
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
  },
});

// Export an object containing both the action creator and the reducer
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
