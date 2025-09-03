"use client";
import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./style.css";
import Image from "next/image";
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
    <div className="sanpham-slider-section">
      <div className="sanpham-slider-wrapper">
        <div className="sanpham-slider-container">
          <button
            onClick={goToPrevSlide}
            className="sanpham-control-btn prev-btn"
          >
            <LeftOutlined />
          </button>
          <div className="sanpham-slider">
            <Image
              src={images[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="sanpham-slider-image"
              width={150}
              height={68}
              onClick={() =>
                handleImageClick(images[currentSlide], currentSlide)
              }
            />
            <div className="sanpham-top-left-text">
              Trang chủ / {title}
              <br />
              <a href="/" className="sanpham-back-link">
                &lt; Về trang chủ
              </a>
            </div>
            <div className="sanpham-bottom-left-text">
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </div>
          </div>
          <button
            onClick={goToNextSlide}
            className="sanpham-control-btn next-btn"
          >
            <RightOutlined />
          </button>
        </div>
        <div className="sanpham-mini-slides">
          {images.slice(0, 4).map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Mini Slide ${index + 1}`}
              width={150}
              height={68}
              className={`sanpham-mini-slide ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => handleImageClick(img, index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
