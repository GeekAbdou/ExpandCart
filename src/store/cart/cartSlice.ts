import { createSelector, createSlice } from "@reduxjs/toolkit";
import { productType } from "@/types";
import { RootState } from "@/store/";

type cartStateType = {
  item: { [key: string]: number }; // index signature
  productFullInfo: productType[];
};
const initialState: cartStateType = {
  item: {},
  productFullInfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.item[id]) {
        state.item[id]++;
      } else {
        state.item[id] = 1;
      }
    },
  },
});

const getCartTotalItems = createSelector(
  (state: RootState) => state.cart.item,
  (item) => Object.values(item).reduce((acc, curr) => acc + curr, 0)
);

// Export an object containing both the action creator and the reducer
export const { addToCart } = cartSlice.actions;
export { getCartTotalItems };
export default cartSlice.reducer;
