import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { actGetAllProducts } from "@/store/shop/actions/actGetAllProducts";
import { CleanUpShopRecords } from "@/store/shop/shopSlice";
import { productType } from "@/types";
import { useEffect } from "react";

const useShop = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.shop);
  const wishListItemsId = useAppSelector((state) => state.wishlist.itemsId);
  const userAccessToken = useAppSelector((state) => state.auth.accessToken);
  const cartItems = useAppSelector((state) => state.cart.items);

  const productsFullInfo = records.map((el: productType) => ({
    ...el,
    quantity: cartItems[el.id],
    isLiked: wishListItemsId.includes(el.id),
    isAuthenticated: userAccessToken ? true : false,
  }));

  useEffect(() => {
    const promise = dispatch(actGetAllProducts());

    return () => {
      promise.abort();
      dispatch(CleanUpShopRecords());
    };
  }, [dispatch]);
  return { loading, error, productsFullInfo };
};
export default useShop;
