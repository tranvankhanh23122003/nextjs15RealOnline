"use client";

import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./style.css";

interface Props {
  images: string[];
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
  handleImageClick: (image: string, index: number) => void;
  title: string;
  subtitle: string;
}

export default function SliderWithMiniSlides({
  images,
  currentSlide,
  setCurrentSlide,
  handleImageClick,
  title,
  subtitle,
}: Props) {
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="phankhu-slider-section">
      <div className="phankhu-slider-wrapper">
        <div className="phankhu-slider-container">
          <button onClick={goToPrevSlide} className="phankhu-control-btn prev-btn">
            <LeftOutlined />
          </button>
          <div className="phankhu-slider">
            <img
              src={images[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="phankhu-slider-image"
              onClick={() => handleImageClick(images[currentSlide], currentSlide)}
            />
            <div className="phankhu-top-left-text">
              Trang chủ / {title}
              <br />
              <a href="/" className="phankhu-back-link">
                &lt; Về trang chủ
              </a>
            </div>
            <div className="phankhu-bottom-left-text">
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </div>
          </div>
          <button onClick={goToNextSlide} className="phankhu-control-btn next-btn">
            <RightOutlined />
          </button>
        </div>
        <div className="phankhu-mini-slides">
          {images.slice(0, 4).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Mini Slide ${index + 1}`}
              className={`phankhu-mini-slide ${index === currentSlide ? "active" : ""}`}
              onClick={() => handleImageClick(img, index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}