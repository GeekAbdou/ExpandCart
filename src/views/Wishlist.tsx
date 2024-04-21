import { Product } from "@/components/eCommerce";
import { GridList, Heading, Loader } from "@/components/shared/index";
import { productType } from "@/types";
import useWishlist from "@/hooks/useWishlist";

const Wishlist = () => {
  const { records, loading, error } = useWishlist();

  return (
    <>
      <Heading title="Your Wishlist" />
      <Loader status={loading} error={error}>
        <GridList<productType>
          records={records}
          renderItem={(productInfo) => (
            <Product key={productInfo.id} productData={productInfo} />
          )}
        />
      </Loader>
    </>
  );
};

export default Wishlist;
