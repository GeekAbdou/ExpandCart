import { Product } from "@/components/eCommerce";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetProductsByCatPrefix,
  productsClearState,
} from "@/store/products/productsSlice";
import { useParams } from "react-router-dom";
import { GridList, Heading, Loader } from "@/components/shared/index";
import { productType } from "@/types";

const Products = () => {
  const params = useParams<{ prefix: string }>();
  const dispatch = useAppDispatch();

  // Fetch products from the store
  const { loading, error, records } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);
  const productInfo = records.map((product) => {
    return {
      ...product,
      quantity: cartItems[product.id] || 0,
    };
  });

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
    return () => {
      dispatch(productsClearState());
    };
  }, [dispatch, params.prefix]);

  return (
    <Loader status={loading} error={error}>
      <Heading children={<h1>Products</h1>} />
      <GridList<productType>
        records={productInfo}
        renderItem={(productInfo) => (
          <Product key={productInfo.id} productData={productInfo} />
        )}
      />
    </Loader>
  );
};

export default Products;
