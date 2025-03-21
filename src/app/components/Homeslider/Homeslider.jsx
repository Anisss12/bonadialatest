"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import styles from "./homeslider.module.css"; // Import styles properly
import slide1 from "../../../../public/slide/slide1.jpg";
import slide2 from "../../../../public/slide/slide2.jpg";
import slide3 from "../../../../public/slide/slide3.jpg";
import slide4 from "../../../../public/slide/slide4.jpg";
import slide5 from "../../../../public/slide/slide5.jpg";
import banner1 from "../../../../public/banner.jpg";
import banner3 from "../../../../public/banner2.jpg";
import { nanoid } from "nanoid";

const slides = [
  [banner3, banner1, slide1, slide2],
  [slide3, slide4, slide5, banner1],
  [banner3, slide1, slide2, slide3],
  [slide4, slide5, banner1, banner3],
];

const Homeslider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length),
    onSwipedRight: () =>
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
      ),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className={styles.sliderContainer} {...handlers}>
      <div
        className={styles.slider}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Moves slides leftward
      >
        {slides.map((slideSet, index) => (
          <div className={styles.slide} key={index}>
            {slideSet.map((slide, subIndex) => (
              <div className={styles.imgBox} key={subIndex}>
                <Image alt="image" height={500} width={500} src={slide} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={
              index === currentIndex
                ? `${styles.dot} ${styles.active}`
                : styles.dot
            }
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Homeslider;
