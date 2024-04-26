import { Row, Col } from "react-bootstrap";
import { LottieHandler } from "../loadingFallbacks";

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
  emptyMessage: string;
};

const GridList = <T extends { id?: number }>({
  emptyMessage,
  records,
  renderItem,
}: GridListProps<T>) => {
  const renderList =
    records.length > 0 ? (
      records.map((record) => (
        <Col
          xs={6} // 50% width on extra small devices
          sm={4} // 25% width on small devices and up
          lg={3} // 33.33% width on large devices and up
          key={record.id}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          {renderItem(record)}
        </Col>
      ))
    ) : (
      <LottieHandler type="empty" message={emptyMessage} />
    );
  return <Row>{renderList}</Row>;
};

export default GridList;
