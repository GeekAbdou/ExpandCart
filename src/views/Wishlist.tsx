import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetWishlist,
  cleanUpWishlistProductsFullInfo,
} from "@/store/wishlist/wishlistSlice";
import { Product } from "@/components/eCommerce";
import { GridList, Heading, Loader } from "@/components/shared/index";
import { productType } from "@/types";

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const { loading, error, productsFullInfo } = useAppSelector(
    (state) => state.wishlist
  );
  const cartItems = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(actGetWishlist());
    return () => {
      dispatch(cleanUpWishlistProductsFullInfo());
    };
  }, [dispatch]);

  const records = productsFullInfo.map((el) => ({
    ...el,
    quantity: cartItems[el.id],
    isLiked: true,
  }));

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
