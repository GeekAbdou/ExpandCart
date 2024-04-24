import { Button, Spinner } from "react-bootstrap";
import Like from "@/assets/svg/like.svg?react";
import LikeFill from "@/assets/svg/fill-like.svg?react";
import useProduct from "@/hooks/useProduct";
import { memo } from "react";
import { productType } from "@/types";
import styles from "./styles.module.css";

const SingleProduct = memo(({ product }: { product: productType }) => {
  const {
    addToCartHandler,
    likeToggleHandler,
    quantityReachedToMax,
    isBtnDisabled,
    isLoading,
  } = useProduct({ productData: product });

  return (
    <div className={styles.product}>
      <div className={styles.wishlistBtn} onClick={likeToggleHandler}>
        {isLoading ? (
          <Spinner animation="border" size="sm" variant="primary" />
        ) : product.isLiked ? (
          <LikeFill />
        ) : (
          <Like />
        )}
      </div>

      <div className={styles.productImg}>
        <img src={product.img} alt={product.title} />
      </div>

      <div className={styles.ContentSec}>
        <h2>{product.title}</h2>
        <h3>{Number(product.price).toFixed(2)} EGP</h3>

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

export default SingleProduct;
