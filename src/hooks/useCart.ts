import { actGetProductsByIDs } from "@/store/cart/actions/actGetProductsByIDs";
import { useCallback, useEffect } from "react"; // Import useState
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  changeItemQuantity,
  cartItemRemove,
  cleanUpCartProductsFullInfo,
} from "@/store/cart/cartSlice";

const useCart = () => {
  const dispatch = useAppDispatch();

  const { items, productsFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(actGetProductsByIDs());
    return () => {
      dispatch(cleanUpCartProductsFullInfo());
    };
  }, [dispatch]);

  const changeItemQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(changeItemQuantity({ id, quantity }));
    },
    [dispatch]
  );

  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(cartItemRemove(id));
    },
    [dispatch]
  );

  const products = productsFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));
  return {
    products,
    loading,
    error,
    changeItemQuantityHandler,
    removeItemHandler,
  };
};

export default useCart;
