import React from 'react';
import Slide1 from "../../../assets/images/baner1.png";
import Slide2 from "../../../assets/images/khu-cong-nghiep.png";
import './style.css';

export default function DanhSachTienIch() {
  const amenities = [
    {
      category: 'Giải trí',
      categoryImage: Slide1.src,
      items: [{ name: 'Beta Cinema Bình Dương', image: Slide1 }],
    },
    {
      category: 'Trường học',
      categoryImage: Slide2.src,
      items: [
        { name: 'Trường THPT Đan Phượng', image: Slide2 },
        { name: 'Trường THCS Tân Hội', image: Slide1 },
      ],
    },
    {
      category: 'Y tế',
      categoryImage: Slide1.src,
      items: [
        { name: 'Trạm Y tế Bình Dương', image: Slide2 },
        { name: 'Bệnh viện Đa khoa Bình Dương', image: Slide1 },
      ],
    },
  ];

  return (
    <div className="amenities-list">
    <hr className="category-divider" />
  
    {amenities.map((amenity, index) => (
      <React.Fragment key={index}>
        <div className="amenity-row">
          <div className="category-title">
            <img src={amenity.categoryImage} alt={amenity.category} className="category-image" />
            <span>{`${amenity.category} (${amenity.items.length})`}</span>
          </div>
          <div className="category-content">
            {amenity.items.map((item, itemIndex) => (
              <div key={itemIndex} className="category-item">
                <img src={item.image.src} alt={item.name} className="item-image" />
                <span className="item-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
  
        {index < amenities.length - 1 && <hr className="category-divider" />}
      </React.Fragment>
    ))}
  
    <hr className="category-divider" />
  </div>
  
  );
}
