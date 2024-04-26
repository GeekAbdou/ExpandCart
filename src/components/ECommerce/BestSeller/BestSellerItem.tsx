import useProduct from "@/hooks/useProduct";
import { productType } from "@/types";
import { Spinner, Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { memo } from "react";

const BestSellerItem = memo(({ product }: { product: productType }) => {
  const { addToCartHandler, isBtnDisabled, quantityReachedToMax } = useProduct({
    productData: product,
  });

  return (
    <div className={`${styles.productCard}`}>
      <div className={styles.productImage}>
        <img src={product.img} alt={product.title} />
      </div>
      <div className={styles.productDetails}>
        <p>{product.title}</p>
        <p className={styles.productPricing}>
          <span className={styles.oldPrice}>{product.oldPrice} EGP</span>
          <span className={styles.currentPrice}>
            {product.price.toFixed(2)} EGP
          </span>
        </p>

        <Button
          variant="info"
          className={styles.addToCartBtn}
          style={{ color: "white" }}
          onClick={() => addToCartHandler()}
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
    </div>
  );
});

export default BestSellerItem;
