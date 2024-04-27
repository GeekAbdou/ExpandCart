import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetProductCatalog,
  cleanUpProductCatalogFullInfo,
} from "@/store/productCatalog/productCatalogSlice";
import { productType } from "@/types";
import { useEffect } from "react";

const useProductCatalog = () => {
  const dispatch = useAppDispatch();
  const wishListItemsId = useAppSelector((state) => state.wishlist.itemsId);
  const userAccessToken = useAppSelector((state) => state.auth.accessToken);
  const cartItems = useAppSelector((state) => state.cart.items);
  const { productsFullInfo } = useAppSelector((state) => state.productCatalog);

  const productCatalogFullInfo = productsFullInfo.map((el: productType) => ({
    ...el,
    quantity: cartItems[el.id],
    isLiked: wishListItemsId.includes(el.id),
    isAuthenticated: userAccessToken ? true : false,
  }));

  useEffect(() => {
    dispatch(actGetProductCatalog());
    return () => {
      dispatch(cleanUpProductCatalogFullInfo());
    };
  }, [dispatch]);

  return { productCatalogFullInfo };
};
export default useProductCatalog;
