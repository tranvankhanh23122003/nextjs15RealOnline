'use client';
import React, { useState } from 'react';
import Slide1 from "../../../assets/images/baner1.png";
import Slide2 from "../../../assets/images/khu-cong-nghiep.png";
import './style.css';

export default function DanhSachTienIchSanPham() {
  const [showMoreAmenities, setShowMoreAmenities] = useState(false);

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

  // Thêm tiện ích bổ sung (ẩn theo mặc định)
  const additionalAmenities = [
    {
      category: 'Mua sắm',
      categoryImage: Slide2,
      items: [
        { name: 'Chợ Mỹ Phước', image: Slide1 },
        { name: 'Siêu thị Co.opmart', image: Slide2 },
      ],
    },
    {
      category: 'Thể thao',
      categoryImage: Slide1,
      items: [{ name: 'Sân bóng mini', image: Slide2 }],
    },
  ];

  return (
    <div className="san-pham-amenities-list">
      <h2>Danh sách tiện ích sản phẩm</h2>
    
      <hr className="san-pham-divider" />

      {amenities.map((amenity, index) => (
        <React.Fragment key={index}>
          <div className="san-pham-amenity-row">
            <div className="san-pham-category-title">
              <img
                src={amenity.categoryImage.src}
                alt={amenity.category}
                className="san-pham-category-image"
              />
              <span>{`${amenity.category} (${amenity.items.length})`}</span>
            </div>

            <div className="san-pham-category-content">
              {amenity.items.map((item, itemIndex) => (
                <div key={itemIndex} className="san-pham-category-item">
                  <img
                    src={item.image.src}
                    alt={item.name}
                    className="san-pham-item-image"
                  />
                  <span className="san-pham-item-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {index < amenities.length - 1 && <hr className="san-pham-divider" />}
        </React.Fragment>
      ))}

      {showMoreAmenities && (
        <>
          {additionalAmenities.map((amenity, index) => (
            <React.Fragment key={index + amenities.length}>
              <div className="san-pham-amenity-row">
                <div className="san-pham-category-title">
                  <img
                    src={amenity.categoryImage.src}
                    alt={amenity.category}
                    className="san-pham-category-image"
                  />
                  <span>{`${amenity.category} (${amenity.items.length})`}</span>
                </div>

                <div className="san-pham-category-content">
                  {amenity.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="san-pham-category-item">
                      <img
                        src={item.image.src}
                        alt={item.name}
                        className="san-pham-item-image"
                      />
                      <span className="san-pham-item-name">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {index < additionalAmenities.length - 1 && <hr className="san-pham-divider" />}
            </React.Fragment>
          ))}
        </>
      )}
      <hr className="san-pham-divider" />

  <a
        href="#"
        className="san-pham-view-more"
        onClick={(e) => {
          e.preventDefault();
          setShowMoreAmenities(!showMoreAmenities);
        }}
      >
        {showMoreAmenities ? 'Thu gọn' : 'Xem thêm tiện ích khác'}
      </a>
    </div>
  );
}