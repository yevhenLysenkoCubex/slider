import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

import type { SliderProps } from "./types";
import "./slider.css";

const images = [
  { id: 1, url: "/images/1.jpg", alt: "Slide one" },
  { id: 2, url: "/images/2.jpg", alt: "Slide two" },
  { id: 3, url: "/images/3.jpg", alt: "Slide three" },
  { id: 4, url: "/images/4.jpg", alt: "Slide four" },
];

export default function Slider({
  arrowButtons = false,
  dotButtons = false,
}: SliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const handleNextSlide = () => {
    setImageIndex((prev) => {
      if (prev === images.length - 1) return 0;
      return prev + 1;
    });
  };

  const handlePrevSlide = () => {
    setImageIndex((prev) => {
      if (prev === 0) return images.length - 1;
      return prev - 1;
    });
  };

  const handleSelectSlide = (i: number) => {
    setImageIndex(i);
  };

  return (
    <section aria-label="React Slider" className="img-slider-box">
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map((img, index) => (
          <img
            key={img.id}
            alt={img.alt}
            className="img-slider-img"
            aria-hidden={imageIndex !== index}
            src={img.url}
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      {arrowButtons && (
        <button
          onClick={handlePrevSlide}
          className="img-slider-arrow"
          style={{ left: 0 }}
          aria-label="View Previous Slide"
        >
          <ArrowBigLeft aria-hidden />
        </button>
      )}
      {arrowButtons && (
        <button
          onClick={handleNextSlide}
          className="img-slider-arrow"
          style={{ right: 0 }}
          aria-label="View Next Slide"
        >
          <ArrowBigRight aria-hidden />
        </button>
      )}
      {dotButtons && (
        <div className="img-slider-btns-box">
          {images.map((img, index) => (
            <button
              key={img.id}
              className="img-slider-dot-btn"
              aria-label={`View Slide ${index + 1}`}
              onClick={() => handleSelectSlide(index)}
            >
              {index === imageIndex ? (
                <CircleDot aria-hidden />
              ) : (
                <Circle aria-hidden />
              )}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
