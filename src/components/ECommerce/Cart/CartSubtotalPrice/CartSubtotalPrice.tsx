import { productType } from "@/types";
import styles from "./styles.module.css";

type CartSubtotalPriceProps = { products: productType[] };

const CartSubtotalPrice = ({ products }: CartSubtotalPriceProps) => {
  const subtotal = products.reduce((accumulator, el) => {
    const price = el.price;
    const quantity = el.quantity;
    if (quantity && typeof quantity === "number") {
      return accumulator + price * quantity;
    } else {
      return accumulator;
    }
  }, 0);

  return (
    <div className={styles.container}>
      <span>Subtotal:</span>
      <span>{subtotal} EGP</span>
    </div>
  );
};

export default CartSubtotalPrice;
