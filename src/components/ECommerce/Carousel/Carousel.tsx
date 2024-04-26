import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.css";
import useCarousel from "@/hooks/useCarousel";

const CarouselSlider: React.FC = () => {
  const { records } = useCarousel();
  return (
    <Carousel className={styles.carousel}>
      {records.map((item) => (
        <Carousel.Item key={item.id}>
          <img className="d-block w-100" src={item.img} alt={item.title} />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.subTitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselSlider;
