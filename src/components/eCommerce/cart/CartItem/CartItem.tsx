import { memo } from "react";
import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { productType } from "@/types";
const {
  cartItem,
  productContainer,
  productImg,
  productInfo,
  cartItemSelection,
} = styles;

type CartItemProps = { product: productType };

const CartItem = memo(({ product }: CartItemProps) => {
  return (
    <div className={cartItem}>
      <div className={productContainer}>
        <div className={productImg}>
          <img src={product.img} alt={product.title} />
        </div>
        <div className={productInfo}>
          <h5>{product.title}</h5>
          <h6>{product.price} EGP</h6>
          <Button
            variant="secondary"
            style={{ color: "white", width: "100px" }}
            className="mt-auto"
          >
            Remove
          </Button>
        </div>
      </div>

      <div className={cartItemSelection}>
        <span className="d-block mb-1">Quantity</span>
      </div>
    </div>
  );
});

export default CartItem;
