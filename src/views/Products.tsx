import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@/components/eCommerce";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { actGetProductsByCatPrefix } from "@/store/products/actions/actGetProductsByCatPrefix";
import { useParams } from "react-router-dom";

const Products = () => {
  const params = useParams<{ prefix: string }>();
  const dispatch = useAppDispatch();

  // Fetch products from the store
  const { loading, error, records } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix));
  }, [dispatch, params.prefix]);

  return (
    <Container>
      <Row>
        {loading === "pending" && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {records.map((product) => (
          <Col
            key={product.id}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Product ProductData={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
