import React, { useState } from "react";
import Photo1 from "../assets/carouselPhoto1.png";
import Photo2 from "../assets/CarouselPhoto2.png";
import "../styles/Carousel.css";

const slides = [Photo1, Photo2];

function Carousel() {
  const [currIndex, setCurrIndex] = useState(0);

  const gotToNext = () => {
    setCurrIndex((currIndex + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrIndex(Math.abs(currIndex - 1) % slides.length);
  };

  return (
    <div className="slider">
      <i className="fas fa-chevron-left left-arrow" onClick={goToPrevious} />
      <img src={slides[currIndex]} alt="slide" />
      <i className="fas fa-chevron-right right-arrow" onClick={gotToNext} />
    </div>
  );
}

export default Carousel;
