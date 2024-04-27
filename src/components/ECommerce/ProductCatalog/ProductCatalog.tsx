import { memo } from "react";
import { productType } from "@/types";
import { GridList } from "@/components/shared";

import styles from "./styles.module.css";
import Product from "../Product/Product";
import useProductCatalog from "@/hooks/useProductCatalog";

const ProductCatalog = memo(() => {
  const { productCatalogFullInfo } = useProductCatalog();

  return (
    <div>
      <h2 className={styles.productCatalogTitle}>Product Catalog</h2>
      <GridList<productType>
        emptyMessage="There are no products"
        records={productCatalogFullInfo}
        renderItem={(product) => (
          <Product key={product.id} productData={product} />
        )}
      />
    </div>
  );
});

export default ProductCatalog;
