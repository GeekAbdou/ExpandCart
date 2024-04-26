import { memo } from "react";
import { Button, Spinner } from "react-bootstrap";
import { productType } from "@/types";
import styles from "./styles.module.css";
import Like from "@/assets/svg/like.svg?react";
import LikeFill from "@/assets/svg/fill-like.svg?react";
import useProduct from "@/hooks/useProduct";

interface ProductProps {
  productData: productType;
}

const Product = memo(({ productData }: ProductProps) => {
  const {
    addToCartHandler,
    likeToggleHandler,
    quantityReachedToMax,
    isBtnDisabled,
    isLoading,
  } = useProduct({ productData });

  return (
    <div className={styles.product}>
      <div className={styles.wishlistBtn} onClick={likeToggleHandler}>
        {isLoading ? (
          <Spinner animation="border" size="sm" variant="primary" />
        ) : productData.isLiked ? (
          <Like />
        ) : (
          <LikeFill />
        )}
      </div>

      <div className={styles.productImg}>
        <img src={productData.img} alt={productData.title} />
      </div>

      <div className={styles.ContentSec}>
        <h2>{productData.title}</h2>

        <h3>{Number(productData.price).toFixed(2)} EGP</h3>

        {/* <p className={styles.maximumNotice}>
            {quantityReachedToMax
              ? "You reach to the limit"
              : `You can add ${currentRemainingQuantity} item(s)`}
          </p>*/}

        <Button
          variant="info"
          className={styles.addToCartBtn}
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
    </div>
  );
});

export default Product;
