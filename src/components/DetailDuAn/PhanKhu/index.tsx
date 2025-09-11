"use client";

import "./style.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface CardData {
  id: number;
  image: string;
  area: string;
  project: string;
  style: string;
  type: string;
}

export default function PhanKhu({ cards }: { cards: CardData[] }) {
  const router = useRouter();

  return (
    <div className="inform-card">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <p className="light-text">Phân khu</p>
          <p className="card-area">{card.area}</p>

          <Image
            src={card.image}
            alt={`Card ${card.id}`}
            width={400}
            height={200}
            className="card-image"
          />

          <div className="card-info">
            <p className="card-info-item">
              <span className="label">Tên dự án</span>
              <span className="value">{card.project}</span>
            </p>
            <p className="card-info-item">
              <span className="label">Phong cách xây dựng</span>
              <span className="value">{card.style}</span>
            </p>
            <p className="card-info-item">
              <span className="label">Giá bán</span>
              <span className="value gray">Đang cập nhật</span>
            </p>
            <p className="card-info-item">
              <span className="label">Loại hình</span>
              <span className="value">{card.type}</span>
            </p>
          </div>

          <div className="btn-wrapper">
            <button
              onClick={() => router.push("/phan-khu")}
              className="detail-btn"
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
