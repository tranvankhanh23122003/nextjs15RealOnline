import React from 'react';
import Slide1 from "../../../../public/images/baner1.png";
import Slide2 from "../../../../public/images/khu-cong-nghiep.png";
import './style.css';
import Image from "next/image";

export default function DanhSachTienIch() {
  const amenities = [
    {
      category: 'Giải trí',
      categoryImage: Slide1,
      items: [{ name: 'Beta Cinema Bình Dương', image: Slide1 }],
    },
    {
      category: 'Trường học',
      categoryImage: Slide2,
      items: [
        { name: 'Trường THPT Đan Phượng', image: Slide2 },
        { name: 'Trường THCS Tân Hội', image: Slide1 },
      ],
    },
    {
      category: 'Y tế',
      categoryImage: Slide1,
      items: [
        { name: 'Trạm Y tế Bình Dương', image: Slide2 },
        { name: 'Bệnh viện Đa khoa Bình Dương', image: Slide1 },
      ],
    },
  ];

  return (
    <div className="phan-khu-amenities-list">
      <hr className="phan-khu-divider" />

      {amenities.map((amenity, index) => (
        <React.Fragment key={index}>
          <div className="phan-khu-amenity-row">
            <div className="phan-khu-category-title">
              <Image
                src={amenity.categoryImage}
                alt={amenity.category}
                className="phan-khu-category-image"
              />
              <span>{`${amenity.category} (${amenity.items.length})`}</span>
            </div>

            <div className="phan-khu-category-content">
              {amenity.items.map((item, itemIndex) => (
                <div key={itemIndex} className="phan-khu-category-item">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="phan-khu-item-image"
                  />
                  <span className="phan-khu-item-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {index < amenities.length - 1 && <hr className="phan-khu-divider" />}
        </React.Fragment>
      ))}

      <hr className="phan-khu-divider" />
    </div>
  );
}
