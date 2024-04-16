import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
const { productContainer, productImg } = styles;
import { productType } from "@/types";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/cart/cartSlice";

interface Props {
  ProductData: productType;
}

const Product = ({ ProductData }: Props) => {
  const dispatch = useAppDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(ProductData.id));
  };

  return (
    <Link
      className={productContainer}
      to={`/categories/products/${ProductData.cat_prefix}`}
    >
      <div className={productImg}>
        <img src={ProductData.img} alt={ProductData.title} />
      </div>
      <h6>{ProductData.title}</h6>
      <h3>{ProductData.price}</h3>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={addToCartHandler}
      >
        Add to cart
      </Button>
    </Link>
  );
};

export default Product;
