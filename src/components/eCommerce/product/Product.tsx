import { useEffect, useState, memo } from "react";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/cart/cartSlice";
import { Button, Spinner } from "react-bootstrap";
import { productType } from "@/types";
import styles from "./styles.module.css";

interface ProductProps {
  productData: productType;
}

const Product: React.FC<ProductProps> = memo(({ productData }) => {
  const dispatch = useAppDispatch();
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const currentRemainingQuantity =
    productData.max - (productData.quantity ?? 0);
  const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

  useEffect(() => {
    if (!isBtnDisabled) {
      return;
    }

    const debounce = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [isBtnDisabled]);

  const addToCartHandler = () => {
    dispatch(addToCart(productData.id));
    setIsBtnDisabled(true);
  };

  return (
    <div className={styles.product}>
      <div className={styles.productImg}>
        <img src={productData.img} alt={productData.title} />
      </div>
      <h2>{productData.title}</h2>
      <h3>{productData.price} EGP</h3>
      <p className={styles.maximumNotice}>
        {quantityReachedToMax
          ? "You reach to the limit"
          : `You can add ${currentRemainingQuantity} item(s)`}
      </p>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={addToCartHandler}
        disabled={isBtnDisabled || quantityReachedToMax}
      >
        {isBtnDisabled ? (
          <>
            <Spinner animation="border" size="sm" /> Loading...
          </>
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
});

export default Product;
