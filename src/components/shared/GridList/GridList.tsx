import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface GridListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

const GridList = <T,>({ items, renderItem }: GridListProps<T>) => {
  return (
    <Container>
      <Row>
        {items.map((item, index) => (
          <Col
            key={index}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            {renderItem(item)}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GridList;
