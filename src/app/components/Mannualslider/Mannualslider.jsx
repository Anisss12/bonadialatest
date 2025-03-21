"use client";

import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./mannualslider.module.css";
import banner1 from "../../././../../public/banner.jpg";
import banner3 from "../../././../../public/banner2.jpg";
import Image from "next/image";

import slide1 from "../../../../public/slide/slide1.jpg";
import slide2 from "../../../../public/slide/slide2.jpg";
import slide3 from "../../../../public/slide/slide3.jpg";
import slide4 from "../../../../public/slide/slide4.jpg";
import slide5 from "../../../../public/slide/slide5.jpg";

const slides = [banner1, banner3, slide1, slide1, slide3, slide4, slide5];

const MannualSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right"); // Track animation direction

  const goToNextSlide = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setDirection("left");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  // Swipe event handlers
  const handlers = useSwipeable({
    onSwipedLeft: goToNextSlide, // Move right-to-left
    onSwipedRight: goToPrevSlide, // Move left-to-right
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className={styles.sliderContainer} {...handlers}>
      <div
        className={`${styles.slider} ${
          direction === "right" ? styles.rightToLeft : styles.leftToRight
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <Image key={index} src={slide} alt={`Slide ${index + 1}`} />
        ))}
      </div>

      {/* Indicators */}
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? styles.dotActive : styles.dot}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MannualSlider;
