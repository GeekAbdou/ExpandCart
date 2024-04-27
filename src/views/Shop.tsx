import { Product } from "@/components/ECommerce/index";
import { GridList, Heading } from "@/components/shared/index";
import { productType } from "@/types";
import useShop from "@/hooks/useShop";
import { Loading } from "@/components/shared/loadingFallbacks";

const Shop = () => {
  const { loading, error, productsFullInfo } = useShop();

  return (
    <Loading status={loading} error={error} type="product">
      <Heading title="All Products" />
      <GridList<productType>
        emptyMessage="There are no Products"
        records={productsFullInfo}
        renderItem={(product) => (
          <Product key={product.id} productData={product} />
        )}
      />
    </Loading>
  );
};

export default Shop;
