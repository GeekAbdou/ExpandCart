import { productType } from "@/types";
import CartItem from "../CartItem/CartItem";

type CartItemListProps = {
  products: productType[];
};

const CartItemList = ({ products }: CartItemListProps) => {
  const renderList = products.map((product) => (
    <CartItem key={product.id} product={product} />
  ));

  return <div>{renderList}</div>;
};

export default CartItemList;
