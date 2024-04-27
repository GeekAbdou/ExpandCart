import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetBestSeller,
  cleanUpBestSellerProductsFullInfo,
} from "@/store/bestSeller/bestSellerSlice";

const useBestSeller = () => {
  const dispatch = useAppDispatch();
  const { productsFullInfo, error, loading } = useAppSelector(
    (state) => state.bestSeller
  );

  useEffect(() => {
    dispatch(actGetBestSeller());
    return () => {
      dispatch(cleanUpBestSellerProductsFullInfo());
    };
  }, [dispatch]);

  return { productsFullInfo, error, loading };
};

export default useBestSeller;
