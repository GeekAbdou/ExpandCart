import { memo } from "react";
import { productType } from "@/types";
import { GridList } from "@/components/shared";

import styles from "./styles.module.css";
import Product from "../Product/Product";
import useProductCatalog from "@/hooks/useProductCatalog";
import { Loading } from "@/components/shared/loadingFallbacks";

const ProductCatalog = memo(() => {
  const { error, loading, productCatalogFullInfo } = useProductCatalog();

  return (
    <Loading status={loading} error={error} type="home">
      <h2 className={styles.productCatalogTitle}>Product Catalog</h2>
      <GridList<productType>
        emptyMessage="There are no products"
        records={productCatalogFullInfo}
        renderItem={(product) => (
          <Product key={product.id} productData={product} />
        )}
      />
    </Loading>
  );
});

export default ProductCatalog;
