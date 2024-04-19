import { Heading, Loader } from "@/components/shared";
import { actGetProductsByIDs } from "@/store/cart/actions/actGetProductsByIDs";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { CartItemList, CartSubtotalPrice } from "@/components/eCommerce";

function Cart() {
  const dispatch = useAppDispatch();
  const { items, productsFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(actGetProductsByIDs());
  }, [dispatch]);

  const products = productsFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));

  return (
    <>
      <Heading>Your Cart</Heading>
      <Loader status={loading} error={error}>
        {products.length ? (
          <>
            <CartItemList products={products} />
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
