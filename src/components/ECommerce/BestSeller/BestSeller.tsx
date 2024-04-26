import { useEffect } from "react";
import "./BestSeller.css"; // Ensure you create this CSS file
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetBestSeller,
  cleanUpBestSellerProductsFullInfo,
} from "@/store/bestSeller/bestSellerSlice";
import "./BestSellerItem";
import BestSellerItem from "./BestSellerItem";
import { Row } from "react-bootstrap";

function BestSeller() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(actGetBestSeller());
    return () => {
      dispatch(cleanUpBestSellerProductsFullInfo());
    };
  }, [dispatch]);

  const bestSellerState = useAppSelector((state) => state.bestSeller);

  const { productsFullInfo } = bestSellerState;

  return (
    <>
      <h2 className="bestsellerTitle">Best Sellers</h2>
      <Row className="bestsellerWrapper">
        {productsFullInfo.map((product) => (
          <BestSellerItem key={product.id} product={product} />
        ))}
      </Row>
    </>
  );
}

export default BestSeller;
