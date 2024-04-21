import { Product } from "@/components/eCommerce";
import { memo } from "react";
import useProducts from "@/hooks/useProducts";
import { GridList, Heading, Loader } from "@/components/shared/index";
import { productType } from "@/types";

const Products = memo(() => {
  const { loading, error, productsFullInfo, params } = useProducts();
  return (
    <Loader status={loading} error={error}>
      <Heading title={`${params.prefix?.toUpperCase()} Products`} />
      <GridList<productType>
        records={productsFullInfo}
        renderItem={(productInfo) => (
          <Product key={productInfo.id} productData={productInfo} />
        )}
      />
    </Loader>
  );
});

export default Products;
