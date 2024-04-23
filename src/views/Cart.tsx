import { Heading } from "@/components/shared";
import { CartItemList, CartSubtotalPrice } from "@/components/ECommerce/index";
import useCart from "@/hooks/useCart";
import { Loading, LottieHandler } from "@/components/shared/loadingFallbacks";

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
      <Loading status={loading} error={error} type="cart">
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
          <LottieHandler message="Your cart is empty" type="empty" />
        )}
      </Loading>
    </>
  );
};

export default Cart;
