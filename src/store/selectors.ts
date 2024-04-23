import { RootState } from "@/store/";
import { createSelector } from "@reduxjs/toolkit";

const getCartTotalItemsSelector = createSelector(
  (state: RootState) => state.cart.items,
  (item) => Object.values(item).reduce((acc, curr) => acc + curr, 0)
);
const getWishlistTotalItemsSelector = createSelector(
    (state: RootState) => state.wishlist.itemsId,
    (itemsId) => itemsId.length
  
);

export { getCartTotalItemsSelector,getWishlistTotalItemsSelector };
