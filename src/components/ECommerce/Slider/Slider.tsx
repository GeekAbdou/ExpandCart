import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Slider.css";

interface Image {
  src: string;
  label?: string;
  description?: string;
}

const getImg = (item: number): string => {
  return `/src/assets/img/${item}.jpg`;
};

const images: Image[] = [
  {
    src: getImg(1),
  },
  {
    src: getImg(1),
  },
  {
    src: getImg(1),
  },
];

const CarouselSlider: React.FC = () => {
  return (
    <Carousel className="carousel">
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={image.src} alt={image.label} />
          <Carousel.Caption>
            <h3>{image.label}</h3>
            <p>{image.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselSlider;
