import { Container, Row, Col } from "react-bootstrap";
import { Category } from "@/components/eCommerce";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { actGetCategories } from "@/store/categories/actions/actGetCategories";

const Categories = () => {
  const dispatch = useAppDispatch();

  // Fetch categories from the store
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        {loading === "pending" && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {records.map((category) => (
          <Col
            key={category.id}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Category categoryData={category} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
