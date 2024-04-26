import { memo, useEffect } from "react";
import { productType } from "@/types";
import { GridList } from "@/components/shared";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetProductCatalog,
  cleanUpProductCatalogFullInfo,
} from "@/store/productCatalog/productCatalogSlice";
import styles from "./styles.module.css";
import Product from "../Product/Product";

const ProductCatalog = memo(() => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actGetProductCatalog());
    return () => {
      dispatch(cleanUpProductCatalogFullInfo());
    };
  }, [dispatch]);

  const productCatalogState = useAppSelector((state) => state.productCatalog);

  const { productsFullInfo } = productCatalogState;

  return (
    <div>
      <h2 className={styles.productCatalogTitle}>Product Catalog</h2>
      <GridList<productType>
        emptyMessage="There are no products"
        records={productsFullInfo}
        renderItem={(product) => (
          <Product key={product.id} productData={product} />
        )}
      />
    </div>
  );
});

export default ProductCatalog;
