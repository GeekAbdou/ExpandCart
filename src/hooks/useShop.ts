import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { actGetAllProducts } from "@/store/shop/actions/actGetAllProducts";
import { CleanUpShopRecords } from "@/store/shop/shopSlice";
import { useEffect } from "react";

const useShop = () => {
  const dispatch = useAppDispatch();

  // Fetch All products from the store
  const { loading, error, records } = useAppSelector((state) => state.shop);

  useEffect(() => {
    const promise = dispatch(actGetAllProducts());

    return () => {
      promise.abort();
      dispatch(CleanUpShopRecords());
    };
  }, [dispatch]);
  return { loading, error, records };
};
export default useShop;
