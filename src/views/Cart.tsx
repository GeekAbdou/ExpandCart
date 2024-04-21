import { Heading, Loader } from "@/components/shared";
import { actGetProductsByIDs } from "@/store/cart/actions/actGetProductsByIDs";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useCallback, useEffect } from "react"; // Import useState
import { CartItemList, CartSubtotalPrice } from "@/components/eCommerce";
import {
  cartItemRemove,
  changeItemQuantity,
  cleanUpCartProductsFullInfo,
} from "@/store/cart/cartSlice";

function Cart() {
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

  return (
    <>
      <Heading title="Your Cart" />
      <Loader status={loading} error={error}>
        {products.length ? (
          <>
            <CartItemList
              products={products}
              changeQuantityHandler={changeItemQuantityHandler}
              removeItemHandler={removeItemHandler}
            />
            <CartSubtotalPrice products={products} />
          </>
        ) : (
          "Your Cart is empty"
        )}
      </Loader>
    </>
  );
}

export default Cart;
