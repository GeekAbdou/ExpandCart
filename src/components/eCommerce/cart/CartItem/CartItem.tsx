import { memo, ChangeEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { productType } from "@/types";
import styles from "./styles.module.css";
const {
  cartItem,
  productContainer,
  productImg,
  productInfo,
  cartItemSelection,
} = styles;

type CartItemProps = {
  product: productType;
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
};

const CartItem = memo(
  ({ product, changeQuantityHandler, removeItemHandler }: CartItemProps) => {
    const renderOptions = Array(product.max)
      .fill(0)
      .map((_, i) => {
        const quantity = i + 1;
        return (
          <option key={quantity} value={quantity}>
            {quantity}
          </option>
        );
      });

    const handleRemoveItem = () => {
      removeItemHandler(product.id);
    };

    const handleChangeQuantity = (event: ChangeEvent<HTMLSelectElement>) => {
      const quantity = parseInt(event.target.value);
      changeQuantityHandler(product.id, quantity);
    };

    return (
      <div className={cartItem}>
        <div className={productContainer}>
          <div className={productImg}>
            <img src={product.img} alt={product.title} />
          </div>
          <div className={productInfo}>
            <h5>{product.title}</h5>
            <h6>{Number(product.price).toFixed(2)} EGP</h6>
            <Button
              variant="secondary"
              style={{ color: "white", width: "100px" }}
              className="mt-auto"
              onClick={handleRemoveItem}
            >
              Remove
            </Button>
          </div>
        </div>

        <div className={cartItemSelection}>
          <span className="d-block mb-1">Quantity</span>
          <Form.Select value={product.quantity} onChange={handleChangeQuantity}>
            {renderOptions}
          </Form.Select>
        </div>
      </div>
    );
  }
);

export default CartItem;
