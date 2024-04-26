import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetBestSeller,
  cleanUpBestSellerProductsFullInfo,
} from "@/store/bestSeller/bestSellerSlice";

const useBestSeller = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(actGetBestSeller());
    return () => {
      dispatch(cleanUpBestSellerProductsFullInfo());
    };
  }, [dispatch]);

  const bestSellerState = useAppSelector((state) => state.bestSeller);

  const { productsFullInfo } = bestSellerState;

  return productsFullInfo;
};

export default useBestSeller;
