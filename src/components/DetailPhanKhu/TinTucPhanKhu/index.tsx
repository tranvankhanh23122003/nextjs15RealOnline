"use client";
import { useState } from "react";
import Slide1 from "../../../../public/images/baner1.png";
import Slide2 from "../../../../public/images/khu-cong-nghiep.png";
import Slide3 from "../../../../public/images/baner1.png";
import "./style.css";
import Image from "next/image";

const TinTucPhanKhu = () => {
  const [currentLarge] = useState(0);
  const [currentSmall1] = useState(0);

  const images = [Slide1.src, Slide2.src, Slide3.src];

  return (
    <div className="tintuc-page">
      <h2 style={{ fontSize: "2.5rem ", fontWeight: "bold" }}>Tin Tức</h2>
      <p>Thông tin ưu đãi</p>

      <div className="tintuc-container">
        <div className="left-section">
          <div className="slide-large">
            <Image
              src={images[currentLarge]}
              alt="Slide lớn"
              width={150}
              height={68}
              className="slide-image"
            />
          </div>
          <div className="slide-info">
            <h3>Tiêu đề tin lớn</h3>
            <p>Nội dung ngắn gọn tóm tắt tin tức chính</p>
            <p className="date">Ngày đăng: 08/07/2025 14:00</p>
          </div>
        </div>

        <div className="right-section-phan-khu">
          <div className="slide-small-wrapper">
            <div className="slide-small">
              <Image
                src={images[currentSmall1]}
                alt="Slide nhỏ 1"
                width={150}
                height={68}
                className="slide-image"
              />
              <div className="slide-info">
                <h3>Tiêu đề tin 1</h3>
                <p className="date">08/07/2025 14:00</p>
              </div>
            </div>
            <div className="slide-small">
              <Image
                src={images[1]}
                alt="Slide nhỏ 2"
                width={150}
                height={68}
                className="slide-image"
              />
              <div className="slide-info">
                <h3>Tiêu đề tin 2</h3>
                <p className="date">08/07/2025 14:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TinTucPhanKhu;
