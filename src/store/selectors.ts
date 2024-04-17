import { RootState } from "@/store/";
import { createSelector } from "@reduxjs/toolkit";

const getCartTotalItemsSelector = createSelector(
  (state: RootState) => state.cart.items,
  (item) => Object.values(item).reduce((acc, curr) => acc + curr, 0)
);
export { getCartTotalItemsSelector };
