import React from "react";
import { Container, Row, Col } from "react-bootstrap";

type GridListProps<T> = {
  records: T[];
  renderItem: (item: T) => React.ReactNode;
};
type hasID = { id?: number };

const GridList = <T extends hasID>({
  records,
  renderItem,
}: GridListProps<T>) => {
  return (
    <Container>
      <Row>
        {records.map((record) => (
          <Col
            key={record.id}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            {renderItem(record)}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GridList;
