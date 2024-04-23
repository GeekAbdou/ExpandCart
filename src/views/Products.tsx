import { Product } from "@/components/ECommerce/index";
import { memo } from "react";
import useProducts from "@/hooks/useProducts";
import { GridList, Heading } from "@/components/shared/index";
import { productType } from "@/types";
import { Loading } from "@/components/shared/loadingFallbacks";

const Products = memo(() => {
  const { loading, error, productsFullInfo, params } = useProducts();
  return (
    <Loading status={loading} error={error} type="product">
      <Heading title={`${params.prefix?.toUpperCase()} Products`} />
      <GridList<productType>
        emptyMessage="There are no products"
        records={productsFullInfo}
        renderItem={(productInfo) => (
          <Product key={productInfo.id} productData={productInfo} />
        )}
      />
    </Loading>
  );
});

export default Products;
