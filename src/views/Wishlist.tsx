import { Product } from "@/components/eCommerce";
import { GridList, Heading } from "@/components/shared/index";
import { productType } from "@/types";
import useWishlist from "@/hooks/useWishlist";
import { Loading } from "@/components/shared/loadingFallbacks";

const Wishlist = () => {
  const { records, loading, error } = useWishlist();

  return (
    <>
      <Heading title="Your Wishlist" />
      <Loading  status={loading} error={error} type="product">
        <GridList<productType>
          emptyMessage="Your wishlist is empty"
          records={records}
          renderItem={(productInfo) => (
            <Product key={productInfo.id} productData={productInfo} />
          )}
        />
      </Loading>
    </>
  );
};

export default Wishlist;
