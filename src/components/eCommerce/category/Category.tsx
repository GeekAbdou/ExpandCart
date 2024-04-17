import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { categoryType } from "@/types";

const { categoryContainer, categoryImg, categoryTitle } = styles;

interface CategoryProps {
  categoryData: categoryType;
}

const Category = ({ categoryData }: CategoryProps) => {
  return (
    <Link
      className={categoryContainer}
      to={`/categories/products/${categoryData.prefix}`}
    >
      <div className={categoryImg}>
        <img src={categoryData.img} alt={categoryData.title} />
      </div>
      <h4 className={categoryTitle}>{categoryData.title}</h4>
    </Link>
  );
};

export default Category;
