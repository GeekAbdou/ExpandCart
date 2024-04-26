import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetCarouselItems,
  cleanUpCarouselItems,
} from "@/store/carousel/CarouselSlice";

const CarouselSlider: React.FC = () => {
  const dispatch = useAppDispatch();

  const { records } = useAppSelector((state) => state.carousel);

  useEffect(() => {
    dispatch(actGetCarouselItems());
    return () => {
      dispatch(cleanUpCarouselItems());
    };
  }, [dispatch]);

  return (
    <Carousel className="carousel">
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
