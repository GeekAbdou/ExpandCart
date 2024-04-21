// CartItemList.tsx
import { memo } from "react";
import CartItem from "../CartItem/CartItem";
import { productType } from "@/types";

type CartItemListProps = {
  products: productType[];
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
  keyPrefix: number;
};

const CartItemList = memo(
  ({
    products,
    changeQuantityHandler,
    removeItemHandler,
    keyPrefix,
  }: CartItemListProps) => {
    const renderList = products.map((product) => (
      <CartItem
        key={`${keyPrefix}-${product.id}`}
        product={product}
        changeQuantityHandler={changeQuantityHandler}
        removeItemHandler={removeItemHandler}
      />
    ));

    return <div>{renderList}</div>;
  }
);

export default CartItemList;
