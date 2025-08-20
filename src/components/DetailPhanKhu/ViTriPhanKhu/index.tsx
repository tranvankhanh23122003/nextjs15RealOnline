"use client";
import { useState, useRef, useEffect } from "react";
import "./style.css";
import banDoImg from "../../../assets/images/baner1.png";

export default function ViTri() {
  const [showMore, setShowMore] = useState(false);
  const [scale, setScale] = useState(1);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleWheel = (e: WheelEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) return;
    e.preventDefault(); // Ngăn cuộn trang
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale((prev) => Math.min(Math.max(prev + delta, 1), 3));
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => {
        container.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  return (
    <div className="phan-khu-wrapper">
      <p className="phan-khu-intro-text">
        Trong cuộc sống, mọi người luôn hướng tới một giá trị mới, một đẳng cấp, một tầm cao mới...
      </p>

      <ul className="phan-khu-info-list">
        <li>
          Với diện tích 18 ha tọa lạc tại khu Công nghiệp và Đô thị Mỹ Phước III.
        </li>
        <li>Kết nối trực tiếp với quốc lộ 14, chỉ hơn 1 phút đi xe.</li>
      </ul>

      {showMore && (
        <div className="phan-khu-extended-content">
          <p>
            Vị trí của Coco Land được đánh giá là một trong những khu vực có
            tiềm năng phát triển mạnh mẽ, không chỉ thuận tiện kết nối mà còn
            là trung tâm văn hóa, giáo dục và thương mại của khu vực.
          </p>
        </div>
      )}

      <button
        className="phan-khu-view-more"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Thu gọn" : "Xem thêm"}
      </button>

      <div className="phan-khu-map-container" ref={containerRef}>
        <img
          src={banDoImg.src}
          alt="Bản đồ vị trí phân khu"
          className="phan-khu-map-image"
          style={{ transform: `scale(${scale})` }}
        />
      </div>
    </div>
  );
}
