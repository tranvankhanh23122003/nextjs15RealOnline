"use client";
import { useState } from "react";
import Slide1 from "../../../../public/images/baner1.png";
import Slide2 from "../../../../public/images/khu-cong-nghiep.png";
import Slide3 from "../../../../public/images/baner1.png";
import Image from "next/image";
import "./style.css";

const TinTucSanPham = () => {
  const [currentLarge] = useState(0);
  const [currentSmall1] = useState(0);
  const images = [Slide1, Slide2, Slide3];

  return (
    <div className="sanpham-page">
      <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Tin Tức</h2>
      <p>Thông tin ưu đãi</p>

      <div className="sanpham-container">
        <div className="sanpham-left-section">
          <div className="sanpham-slide-large">
            <Image
              src={images[currentLarge].src}
              alt="Slide lớn"
              width={150} height={68}
              className="sanpham-slide-image"
            />
          </div>
          <div className="sanpham-slide-info">
            <h3>Tiêu đề tin lớn</h3>
            <p>
              Nội dung ngắn gọn tóm tắt tin tức chính Nội dung ngắn gọn tóm tắt
              tin tức chính Nội dung ngắn gọn tóm tắt tin tức chính
            </p>
            <p className="sanpham-date">Ngày đăng: 08/07/2025 14:00</p>
          </div>
        </div>

        <div className="sanpham-right-section">
          <div className="sanpham-slide-small-wrapper">
            <div className="sanpham-slide-small">
              <Image
                src={images[currentSmall1].src}
                alt="Slide nhỏ 1"
                width={150} height={68}
                className="sanpham-slide-image"
              />
              <div className="sanpham-slide-info">
                <h3>Tiêu đề tin 1</h3>
                <p className="sanpham-date">08/07/2025 14:00</p>
              </div>
            </div>
            <div className="sanpham-slide-small">
              <Image
                src={images[1].src}
                alt="Slide nhỏ 2"
                width={150} height={68}
                className="sanpham-slide-image"
              />
              <div className="sanpham-slide-info">
                <h3>Tiêu đề tin 2</h3>
                <p className="sanpham-date">08/07/2025 14:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TinTucSanPham;
