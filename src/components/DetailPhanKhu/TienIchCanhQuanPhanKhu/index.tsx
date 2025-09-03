"use client";
import { useState, useEffect, useRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./style.css";
import Slide1 from "../../../../public/images/baner1.png";
import Slide2 from "../../../../public/images/khu-cong-nghiep.png";
import Image from 'next/image';

type ImageItem = {
  src: string;
  title: string;
  description: string;
};

const images: ImageItem[] = [
  {
    src: Slide1.src,
    title: "Công viên Adventure Park",
    description:
      "Công viên Adventure Park với không gian xanh mát, khu vui chơi hiện đại, và tiện ích giải trí đa dạng cho gia đình.",
  },
  {
    src: Slide2.src,
    title: "Khu công nghiệp hiện đại",
    description:
      "Khu công nghiệp tích hợp đô thị với thiết kế hiện đại, kết nối giao thông thuận tiện, lý tưởng cho đầu tư.",
  },
  {
    src: Slide1.src,
    title: "Công viên Adventure Park",
    description:
      "Công viên Adventure Park với không gian xanh mát, khu vui chơi hiện đại, và tiện ích giải trí đa dạng cho gia đình.",
  },
];

export default function TienIchCanhQuanPhanKhu() {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const albumRef = useRef<HTMLDivElement | null>(null);

  const goToPrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openModal = (index: number) => {
    setCurrentImage(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const album = albumRef.current;
    if (!album) return;

    const imageWidth = 210;
    const visibleCount = 4;
    const maxOffset = (images.length - visibleCount) * imageWidth;

    let offset = 0;
    if (currentImage >= visibleCount) {
      offset = (currentImage - visibleCount + 1) * imageWidth;
      if (offset > maxOffset) offset = 0;
    }

    album.style.transform = `translateX(-${offset}px)`;
  }, [currentImage]);

  return (
    <div className="home-page">
      {/* Ảnh chính */}
      <div className="image-slider-container">
        <div className="image-slider">
          <Image
            src={images[currentImage].src}
            alt={images[currentImage].title}
            width={150}
            height={68}
            className="image-slide"
          />
        </div>
      </div>

      {/* Album nhỏ bên dưới */}
      <div className="image-album-controls">
        <button onClick={goToPrevImage} className="control-btn">
          <LeftOutlined />
        </button>

        <div className="image-album">
          <div className="image-album-inner" ref={albumRef}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`image-thumbnail-wrapper ${
                  index === currentImage ? "active" : ""
                }`}
                onClick={() => openModal(index)}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  width={150}
                  height={68}
                  className="image-thumbnail"
                />
                <span className="thumbnail-text">{image.title}</span>
              </div>
            ))}
          </div>
        </div>

        <button onClick={goToNextImage} className="control-btn">
          <RightOutlined />
        </button>
      </div>

      {isModalOpen && (
        <div className="image-modal">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-image-container">
              <Image
                src={images[currentImage].src}
                alt={images[currentImage].title}
                width={150}
                height={68}
                className="modal-image"
              />
            </div>
            <div className="modal-details">
              <h3>{images[currentImage].title}</h3>
              <p>{images[currentImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
