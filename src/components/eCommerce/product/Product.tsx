import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
const { productContainer, productImg } = styles;
import { productType } from "@/types";
import { Link } from "react-router-dom";

interface Props {
  ProductData: productType;
}

const Product = ({ ProductData }: Props) => {
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
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </Link>
  );
};

export default Product;
