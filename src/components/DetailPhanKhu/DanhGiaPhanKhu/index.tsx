"use client";

import { useState } from "react";
import Slide1 from "../../../../public/images/baner1.png";
import Slide2 from "../../../../public/images/khu-cong-nghiep.png";
import "./style.css";
import Image from "next/image";
const images = [Slide1.src, Slide2.src];

const reviewsData = [
  {
    id: 1,
    name: "Chị Nhật Vy",
    description: "Bạn trẻ hiện đang sinh sống và làm việc tại Cocoland",
    avatar: Slide1,
    rating: 5,
    comment:
      "Cocoland là một nơi tuyệt vời để đầu tư! Không gian sống hiện đại, tiện ích đầy đủ, và đội ngũ hỗ trợ rất chuyên nghiệp.",
  },
  {
    id: 2,
    name: "Anh Minh Tuấn",
    description: "Doanh nhân tại Cocoland",
    avatar: Slide2,
    rating: 4,
    comment:
      "Vị trí dự án rất thuận lợi, tiềm năng tăng giá cao. Chỉ hơi tiếc là tiến độ một số hạng mục chậm hơn kỳ vọng.",
  },
];

export default function ReviewsForm() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="reviews-form-container">
      <div className="reviews-form-card">
        <div className="reviews-form-header">
          <span className="reviews-form-rating">4.9</span>
          <h1 className="reviews-form-title">
            Xứng đáng để đầu tư - dựa trên 289 đánh giá từ khách hàng
          </h1>
        </div>
        <div className="reviews-form-content">
          {reviewsData.map((review) => (
            <div key={review.id} className="review-item">
              <Image
                src={review.avatar.src}
                alt={review.name}
                width={105}
                height={105}
                className="review-item-avatar"
              />
              <div className="review-item-details">
                <div className="review-item-name">
                  <h3>{review.name}</h3> -
                  <p className="review-item-description">{review.description}</p>
                </div>
                <div className="review-item-rating">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`star ${index < review.rating ? "filled" : ""}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="review-item-comment">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="reviews-form-footer">
          <div className="footer-slide">
            <Image
              src={images[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              width={150}
              height={68}
              className="slide-image"
            />
            <div className="footer-content">
              <div className="footer-text">
                Sở hữu ngay Nhà phố hiện đại - Tận hưởng không gian sống đẳng cấp
              </div>
              <div className="footer-stats">
                <p className="stats-text">Đã có 30.708 xem dự án</p>
                <button className="stats-button">Đặt lịch xem dự án ngay</button>
              </div>
            </div>
            <button className="slide-prev" onClick={prevSlide}>
              &lt;
            </button>
            <button className="slide-next" onClick={nextSlide}>
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}