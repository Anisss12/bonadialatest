"use client";
import { useState, useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./effectivehead.module.css";

const images = [
  "/slide/slide1.jpg",
  "/slide/slide2.jpg",
  "/slide/slide3.jpg",
  "/slide/slide4.jpg",
  "/slide/slide5.jpg",
  "/banner.jpg",
  "/banner2.jpg",
];

const miniImages = [
  "https://plus.unsplash.com/premium_photo-1697183203524-3e7c6da4d4e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1723575737806-ecd7f74bf3a1?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1723575737806-ecd7f74bf3a1?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1686823939646-69f76240e778?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1728163807630-0f30b4eb9390?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583656345883-5189c01c024f?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1664982803698-b6b514e9928b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1578897367002-2873f26520fd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1661776091539-f6f0874d14b3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1697183203538-08c30b0a6709?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Effectivehead = () => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(images.length - 1);
  const miniSliderRef = useRef(null);

  // Function to update index and sync mini slider
  const updateIndex = (newIndex) => {
    setPrevIndex(index);
    setIndex(newIndex);

    // Scroll mini slider to keep the active image in the center
    if (miniSliderRef.current) {
      const miniSlides = miniSliderRef.current.children;
      if (miniSlides[newIndex]) {
        miniSliderRef.current.scrollTo({
          left:
            miniSlides[newIndex].offsetLeft -
            miniSliderRef.current.offsetWidth / 2 +
            miniSlides[newIndex].offsetWidth / 2,
          behavior: "smooth",
        });
      }
    }
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex((index + 1) % images.length);
    }, 5000); // Slide every 0.5 seconds

    return () => clearInterval(interval);
  }, [index]);

  // Swipe handlers (applied to the whole container)
  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex((index + 1) % images.length),
    onSwipedRight: () =>
      updateIndex((index - 1 + images.length) % images.length),
    trackMouse: true, // Enables swipe support on desktop
  });

  return (
    <div className={styles.sliderContainer}>
      {/* Main Slider */}
      <div className={styles.mainSlider} {...handlers}>
        {images.map((img, i) => (
          <div
            key={i}
            className={`${styles.mainSlide} ${
              i === index
                ? styles.active
                : i === prevIndex
                ? styles.previous
                : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className={styles.fadeEffect} />
        <div className={styles.indicators}>
          {images.map((_, i) => (
            <div
              key={i}
              className={`${styles.indicator} ${
                i === index ? styles.activeIndicator : ""
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mini Card Slider */}
      <div className={styles.miniSliderContainer}>
        {miniImages.map((img, i) => (
          <div
            key={i}
            className={`${styles.miniSlide} ${
              i === index ? styles.activeMiniSlide : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
            onClick={() => updateIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Effectivehead;
