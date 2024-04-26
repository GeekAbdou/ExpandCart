import useProduct from "@/hooks/useProduct";
import { productType } from "@/types";
import { Spinner, Button, Col } from "react-bootstrap";
import "./BestSeller.css";

const BestSellerItem = ({ product }: { product: productType }) => {
  const { addToCartHandler, isBtnDisabled, quantityReachedToMax } = useProduct({
    productData: product,
  });

  return (
    <Col className="product-card col-lg-4 col-sm-6 col-xs-6">
      <div className="product-image">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="product-details">
        <p>{product.title}</p>
        <p className="product-pricing">
          <span className="old-price">{product.oldPrice} EGP</span>
          <span className="current-price">{product.price.toFixed(2)} EGP</span>
        </p>

        <Button
          variant="info"
          className="add-to-cart-btn"
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
    </Col>
  );
};

export default BestSellerItem;
