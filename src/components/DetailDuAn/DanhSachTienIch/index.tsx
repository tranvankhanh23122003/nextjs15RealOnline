import React from "react";
import Image from "next/image";
import { FaChevronDown, FaTheaterMasks, FaSchool, FaHospital } from "react-icons/fa";
import Slide1 from "../../../../public/images/baner1.png";
import Slide2 from "../../../../public/images/khu-cong-nghiep.png";
import "./style.css";

type AmenityItem = {
  name: string;
  image: any;
};

type Amenity = {
  category: string;
  icon: React.ReactNode;
  items: AmenityItem[];
};

export default function DanhSachTienIch() {
  const amenities: Amenity[] = [
    {
      category: "Giải trí",
      icon: <FaTheaterMasks className="category-icon" />,
      items: [
        { name: "Beta Cinema Bình Dương", image: Slide1 }
      ],
    },
    {
      category: "Trường học",
      icon: <FaSchool className="category-icon" />,
      items: [
        { name: "Trường THPT Đan Phượng", image: Slide2 },
        { name: "Trường THCS Tân Hội", image: Slide1 },
      ],
    },
    {
      category: "Y tế",
      icon: <FaHospital className="category-icon" />,
      items: [
        { name: "Trạm Y tế Bình Dương", image: Slide2 },
        { name: "Bệnh viện Đa khoa Bình Dương", image: Slide1 },
      ],
    },
  ];

  return (
    <div className="amenities-list">
      <hr className="category-divider" />

      {amenities.map((amenity, index) => (
        <React.Fragment key={index}>
          <div className="amenity-row">
            {/* Trái: Tiêu đề */}
            <div className="category-title">
              {amenity.icon}
              <span>{`${amenity.category} (${amenity.items.length})`}</span>
            </div>

            {/* Phải: Nội dung (ảnh + tên) */}
            <div className="category-content">
              {amenity.items.map((item, itemIndex) => (
                <div key={itemIndex} className="category-item">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={60}
                    className="item-image"
                  />
                  <span className="item-name">{item.name}</span>
                </div>
              ))}
            </div>

            {/* Icon dropdown cuối hàng */}
            <div className="dropdown-icon">
              <FaChevronDown />
            </div>
          </div>

          {index < amenities.length - 1 && <hr className="category-divider" />}
        </React.Fragment>
      ))}

      <hr className="category-divider" />
    </div>
  );
}
