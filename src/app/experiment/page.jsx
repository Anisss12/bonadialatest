"use client";

import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./page.module.css"; // Import styles properly
import kidimg from "../../../public/kids.jpg";
import kidimg2 from "../../../public/kid.jpg";
import Image from "next/image";

const slides = [kidimg, kidimg2, kidimg];

const Page = () => {
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
      <div className={styles.slider}>
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? styles.active : ""}
          />
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

export default Page;
