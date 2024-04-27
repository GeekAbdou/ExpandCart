import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetProductsByCatPrefix,
  CleanUpProductsRecords,
} from "@/store/products/productsSlice";
import { useParams } from "react-router-dom";
import { productType } from "@/types";

const useProducts = () => {
  const params = useParams<{ prefix: string }>();
  const dispatch = useAppDispatch();
  const wishListItemsId = useAppSelector((state) => state.wishlist.itemsId);
  const userAccessToken = useAppSelector((state) => state.auth.accessToken);
  const { loading, error, records } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);

  const productsFullInfo = records.map((el: productType) => ({
    ...el,
    quantity: cartItems[el.id],
    isLiked: wishListItemsId.includes(el.id),
    isAuthenticated: userAccessToken ? true : false,
  }));

  useEffect(() => {
    const promise = dispatch(
      actGetProductsByCatPrefix(params.prefix as string)
    );
    return () => {
      promise.abort();
      dispatch(CleanUpProductsRecords());
    };
  }, [dispatch, params.prefix]);

  return { loading, error, productsFullInfo, params };
};
export default useProducts;
