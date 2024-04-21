import { Heading, Loader } from "@/components/shared";
import { CartItemList, CartSubtotalPrice } from "@/components/eCommerce";
import useCart from "@/hooks/useCart";

const Cart = () => {
  const {
    products,
    loading,
    error,
    changeItemQuantityHandler,
    removeItemHandler,
  } = useCart();

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
};

export default Cart;
