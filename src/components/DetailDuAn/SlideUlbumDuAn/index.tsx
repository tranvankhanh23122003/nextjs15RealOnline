"use client";
import { useState, useEffect, useRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import './style.css'
import Image from "next/image";
interface SliderWithAlbumProps {
  images: string[];
}

export default function SliderWithAlbumDuAn({ images }: SliderWithAlbumProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const albumRef = useRef<HTMLDivElement | null>(null);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentSlide(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    const album = albumRef.current;
    if (!album) return;

    const slideWidth = 210;
    const visibleCount = 6;
    const maxOffset = (images.length - visibleCount) * slideWidth;

    let offset = 0;
    if (currentSlide >= visibleCount) {
      offset = (currentSlide - visibleCount + 1) * slideWidth;
      if (offset > maxOffset) offset = 0;
    }

    album.style.transform = `translateX(-${offset}px)`;
  }, [currentSlide, images.length]);

  return (
    <>
      <div className="duan-slider-container">
        <div className="duan-slider">
          <Image
            src={images[currentSlide]}
            width={150}       // bắt buộc
            height={68} 
            alt={`Slide ${currentSlide + 1}`}
            className="duan-slider-image"
          />
          <div className="duan-top-left-text">
            Trang chủ / Khu biệt thự cao cấp Cocoland
            <br />
            <a href="/" className="duan-back-link">&lt; Về trang chủ</a>
          </div>
          <div className="duan-bottom-left-text">
            <h3>Khu biệt thự cao cấp Cocoland</h3>
            <p>Khu Công nghiệp và Đô thị Mỹ Phước III</p>
          </div>
        </div>
      </div>

      <div className="duan-album-controls">
        <button onClick={goToPrevSlide} className="duan-control-btn">
          <LeftOutlined />
        </button>

        <div className="duan-album">
          <div className="duan-album-inner" ref={albumRef}>
            {images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                width={150}       // bắt buộc
                height={68} 
                className={index === currentSlide ? "duan-active" : ""}
                onClick={() => handleImageClick(img, index)}
              />
            ))}
          </div>
        </div>

        <button onClick={goToNextSlide} className="duan-control-btn">
          <RightOutlined />
        </button>

        <div className="duan-image-count-overlay" onClick={toggleDropdown}>
          +{images.length} ảnh
        </div>

        {isDropdownOpen && (
          <div className="duan-dropdown-content">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Dropdown ${index + 1}`}
                width={150}       // bắt buộc
                height={68} 
                className="duan-dropdown-image"
                onClick={() => handleImageClick(image, index)}
              />
            ))}
          </div>
        )}
      </div>

      {isFullscreen && selectedImage && (
        <div className="duan-fullscreen-overlay" onClick={closeFullscreen}>
          <Image
            src={selectedImage}
            alt="Fullscreen"
            width={150}       // bắt buộc
            height={68} 
            className="duan-fullscreen-image"
          />
          <button className="duan-close-btn" onClick={closeFullscreen}>
            Đóng
          </button>
        </div>
      )}
    </>
  );
}
