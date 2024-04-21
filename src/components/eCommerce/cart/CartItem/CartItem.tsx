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
/*
    Passing Handlers as Props:
          type CartItemProps = { 
            product: productType; 
            changeQuantityHandler: (id: number, quantity: number) => void; 
            removeItemHandler: (id: number) => void; 
          };
        Pros:
            Keeps the CartItem component more reusable and decoupled from the parent component. The CartItem component doesn't need to know where the handlers come from.
            Allows for better separation of concerns. The responsibility for managing state and handling actions remains with the parent component.
        Cons:
            Requires more props to be passed down to the CartItem component, which might make the code more verbose, especially if there are many handlers.
            Might lead to prop drilling if the handlers need to be passed through multiple layers of components.

    Defining Handlers Inside the CartItem Component:

        const changeItemQuantityHandler = (event: ChangeEvent<HTMLSelectElement>) => {
          const quantity = parseInt(event.target.value);
          console.log("quantity");
          dispatch(changeItemQuantity({ id: product.id, quantity }));
        };
        Pros:
            Reduces the number of props required for the CartItem component, making it cleaner and more concise.
            Encapsulates the logic related to quantity changes within the CartItem component itself, which can be beneficial for smaller components or if the logic is tightly coupled with the component.

        Cons:
            Reduces reusability, as the CartItem component becomes more tightly coupled with the specific use case of the parent component.
            Might violate the principle of separation of concerns, as the CartItem component is responsible for both rendering UI and managing state.
*/
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
