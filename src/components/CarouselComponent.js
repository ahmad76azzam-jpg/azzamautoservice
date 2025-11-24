import React from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselComponent.css";
import lmcarousel3 from "../assets/lmcarousel3.jpg";
import motulcarousel from "../assets/motulcarousel.jpg";
import fiammcarousel from "../assets/fiammcarousel.jpg";
import "./CarouselComponent.css";

function CarouselComponent() {
  return (
    <Carousel fade interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={motulcarousel}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={lmcarousel3}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
        src={fiammcarousel}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
