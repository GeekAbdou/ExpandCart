import { memo } from "react";
import styles from "./styles.module.css";
import { productType } from "@/types";
import SingleProduct from "./SingleProduct";
import { GridList } from "@/components/shared";

const productData: productType[] = [
  {
    id: 1,
    title: "Jersey top",
    price: 249.0,
    cat_prefix: "men",
    img: "https://eg.hm.com/assets/styles/HNM/14482498/6103a8463876770c30cdba3535b7be1f333315fe/2/image-thumb__3464789__product_listing/cb91f8f128ac2125e0ec3a008a2e8d2497d15434.jpg",
    max: 4,
  },
  {
    id: 1,
    title: "Jersey top",
    price: 249.0,
    cat_prefix: "men",
    img: "https://eg.hm.com/assets/styles/HNM/14482498/6103a8463876770c30cdba3535b7be1f333315fe/2/image-thumb__3464789__product_listing/cb91f8f128ac2125e0ec3a008a2e8d2497d15434.jpg",
    max: 4,
  },
  {
    id: 1,
    title: "Jersey top",
    price: 249.0,
    cat_prefix: "men",
    img: "https://eg.hm.com/assets/styles/HNM/14482498/6103a8463876770c30cdba3535b7be1f333315fe/2/image-thumb__3464789__product_listing/cb91f8f128ac2125e0ec3a008a2e8d2497d15434.jpg",
    max: 4,
  },
  {
    id: 1,
    title: "Jersey top",
    price: 249.0,
    cat_prefix: "men",
    img: "https://eg.hm.com/assets/styles/HNM/14482498/6103a8463876770c30cdba3535b7be1f333315fe/2/image-thumb__3464789__product_listing/cb91f8f128ac2125e0ec3a008a2e8d2497d15434.jpg",
    max: 4,
  },
  {
    id: 1,
    title: "Jersey top",
    price: 249.0,
    cat_prefix: "men",
    img: "https://eg.hm.com/assets/styles/HNM/14482498/6103a8463876770c30cdba3535b7be1f333315fe/2/image-thumb__3464789__product_listing/cb91f8f128ac2125e0ec3a008a2e8d2497d15434.jpg",
    max: 4,
  },
  {
    id: 1,
    title: "Jersey top",
    price: 249.0,
    cat_prefix: "men",
    img: "https://eg.hm.com/assets/styles/HNM/14482498/6103a8463876770c30cdba3535b7be1f333315fe/2/image-thumb__3464789__product_listing/cb91f8f128ac2125e0ec3a008a2e8d2497d15434.jpg",
    max: 4,
  },
  {
    id: 1,
    title: "Jersey top",
    price: 249.0,
    cat_prefix: "men",
    img: "https://eg.hm.com/assets/styles/HNM/14482498/6103a8463876770c30cdba3535b7be1f333315fe/2/image-thumb__3464789__product_listing/cb91f8f128ac2125e0ec3a008a2e8d2497d15434.jpg",
    max: 4,
  },
  {
    id: 1,
    title: "Jersey top",
    price: 249.0,
    cat_prefix: "men",
    img: "https://eg.hm.com/assets/styles/HNM/14482498/6103a8463876770c30cdba3535b7be1f333315fe/2/image-thumb__3464789__product_listing/cb91f8f128ac2125e0ec3a008a2e8d2497d15434.jpg",
    max: 4,
  },
];

const ProductCatalog = memo(() => {
  return (
    <div>
      <h2>Product Catalog</h2>
      <GridList<productType>
        emptyMessage="There are no products"
        records={productData}
        renderItem={(product) => (
          <SingleProduct key={product.id} product={product} />
        )}
      />
    </div>
  );
});

export default ProductCatalog;
