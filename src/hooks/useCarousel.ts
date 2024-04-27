import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetCarouselItems,
  cleanUpCarouselItems,
} from "@/store/carousel/CarouselSlice";
import { useEffect } from "react";

const useCart = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.carousel);

  useEffect(() => {
    dispatch(actGetCarouselItems());
    return () => {
      dispatch(cleanUpCarouselItems());
    };
  }, [dispatch]);

  return {
    records,
    loading,
    error,
  };
};

export default useCart;