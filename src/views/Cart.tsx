// Cart.tsx
import { Heading, Loader } from "@/components/shared";
import { actGetProductsByIDs } from "@/store/cart/actions/actGetProductsByIDs";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react"; // Import useState
import { CartItemList, CartSubtotalPrice } from "@/components/eCommerce";
import { cartItemRemove, changeItemQuantity } from "@/store/cart/cartSlice";

function Cart() {
  const dispatch = useAppDispatch();
  const [keyPrefix, setKeyPrefix] = useState(0);

  const { items, productsFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(actGetProductsByIDs());
  }, [dispatch]);

  const changeItemQuantityHandler = (id: number, quantity: number) => {
    dispatch(changeItemQuantity({ id, quantity }));
  };

  const removeItemHandler = (id: number) => {
    setKeyPrefix((prevPrefix) => prevPrefix + 1);
    dispatch(cartItemRemove(id));
  };

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
            <CartItemList
              products={products}
              changeQuantityHandler={changeItemQuantityHandler}
              removeItemHandler={removeItemHandler}
              keyPrefix={keyPrefix}
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
