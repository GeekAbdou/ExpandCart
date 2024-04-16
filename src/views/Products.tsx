import { Product } from "@/components/eCommerce";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetProductsByCatPrefix,
  productsClearState,
} from "@/store/products/productsSlice";
import { useParams } from "react-router-dom";
import { productType } from "@/types";
import Loading from "@/components/shared/Loader/Loader";
import GridList from "@/components/shared/GridList/GridList";

const Products = () => {
  const params = useParams<{ prefix: string }>();
  const dispatch = useAppDispatch();

  // Fetch products from the store
  const { loading, error, records } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
    return () => {
      dispatch(productsClearState());
    };
  }, [dispatch, params.prefix]);

  return (
    <Loading loading={loading} error={error}>
      <GridList
        records={records}
        renderItem={(product) => (
          <Product key={product.id} ProductData={product} />
        )}
      />
    </Loading>
  );
};

export default Products;
