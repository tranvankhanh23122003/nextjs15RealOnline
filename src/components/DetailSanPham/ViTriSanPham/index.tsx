'use client';
import { useState } from 'react';
import {
  FaStar,
  FaGamepad,
  FaSchool,
  FaHospital,
  FaShoppingCart,
  FaCar,
} from 'react-icons/fa';
import './style.css';

type LocationCategory = 'notable' | 'entertainment' | 'school' | 'hospital' | 'shopping';

type LocationItem = {
  name: string;
  coords: string;
  address: string;
  distance: string;
  duration: string;
};

const locationData: Record<LocationCategory, LocationItem[]> = {
  notable: [
    {
      name: 'Công viên Mỹ Phước',
      coords: '10.987345,106.669123',
      address: 'Đường D1, Mỹ Phước III',
      distance: '1.2 km',
      duration: '5 phút',
    },
    {
      name: 'Trung tâm Văn hóa',
      coords: '10.985123,106.671234',
      address: 'Đường Lê Lợi, Mỹ Phước',
      distance: '1.5 km',
      duration: '7 phút',
    },
    {
      name: 'Khu vui chơi Coco',
      coords: '10.981234,106.673456',
      address: 'Đường Coco, Mỹ Phước III',
      distance: '0.9 km',
      duration: '4 phút',
    },
  ],
  entertainment: [
    {
      name: 'Rạp chiếu phim Galaxy',
      coords: '10.982345,106.675678',
      address: 'Đường Nguyễn Văn Cừ, Mỹ Phước',
      distance: '2.0 km',
      duration: '8 phút',
    },
    {
      name: 'Karaoke Star',
      coords: '10.984567,106.672890',
      address: 'Đường D2, Mỹ Phước III',
      distance: '1.8 km',
      duration: '6 phút',
    },
    {
      name: 'Sân bóng mini',
      coords: '10.986789,106.670123',
      address: 'Đường Thể Thao, Mỹ Phước',
      distance: '1.4 km',
      duration: '5 phút',
    },
  ],
  school: [
    {
      name: 'Trường Tiểu học Mỹ Phước',
      coords: '10.988885,106.674559',
      address: 'Đường Trường Học, Mỹ Phước III',
      distance: '2.2 km',
      duration: '9 phút',
    },
    {
      name: 'THCS Mỹ Phước',
      coords: '10.987654,106.676543',
      address: 'Đường Giáo Dục, Mỹ Phước',
      distance: '2.5 km',
      duration: '10 phút',
    },
    {
      name: 'Mầm non Hoa Sen',
      coords: '10.989012,106.672345',
      address: 'Đường Hoa Sen, Mỹ Phước III',
      distance: '1.9 km',
      duration: '7 phút',
    },
  ],
  hospital: [
    {
      name: 'Bệnh viện Đa khoa Mỹ Phước',
      coords: '10.983456,106.678901',
      address: 'Đường Y Tế, Mỹ Phước III',
      distance: '2.8 km',
      duration: '12 phút',
    },
    {
      name: 'Phòng khám Coco',
      coords: '10.984123,106.674567',
      address: 'Đường Coco, Mỹ Phước',
      distance: '1.6 km',
      duration: '6 phút',
    },
    {
      name: 'Trạm y tế Phước Hòa',
      coords: '10.982789,106.676123',
      address: 'Đường Phước Hòa, Mỹ Phước',
      distance: '2.0 km',
      duration: '8 phút',
    },
  ],
  shopping: [
    {
      name: 'Chợ Mỹ Phước',
      coords: '10.983214,106.677001',
      address: 'Đường Chợ, Mỹ Phước III',
      distance: '1.7 km',
      duration: '7 phút',
    },
    {
      name: 'Siêu thị Co.opmart',
      coords: '10.985678,106.673890',
      address: 'Đường Thương Mại, Mỹ Phước',
      distance: '1.9 km',
      duration: '8 phút',
    },
    {
      name: 'Cửa hàng tiện lợi VinMart',
      coords: '10.986234,106.671567',
      address: 'Đường D3, Mỹ Phước III',
      distance: '1.3 km',
      duration: '5 phút',
    },
  ],
};

export default function ViTriSanPham() {
  const [activeCategory, setActiveCategory] = useState<LocationCategory>('notable');
  const [selectedDest, setSelectedDest] = useState(locationData['notable'][0].coords);

  const origin = '10.980578,106.672468'; // Coco Land

  const mapUrl = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyDXExOrsvedXugoW3gBwIARlT0rfsl5IQk&origin=${origin}&destination=${selectedDest}&mode=driving`;

  const handleCategoryClick = (category: LocationCategory) => {
    setActiveCategory(category);
    setSelectedDest(locationData[category][0].coords);
  };

  return (
    
    <div className="vitrisanpham-content-section">
     <h2>Bản đồ khu vực</h2>

      <iframe
        width="100%"
        height="450"
        className="vitrisanpham-map-frame"
        style={{ border: 0 }}
        src={mapUrl}
        allowFullScreen
      ></iframe>

      <div className="vitrisanpham-category-container">
        {[
          { id: 'notable', icon: <FaStar />, label: 'Nổi bật' },
          { id: 'entertainment', icon: <FaGamepad />, label: 'Giải trí' },
          { id: 'school', icon: <FaSchool />, label: 'Trường học' },
          { id: 'hospital', icon: <FaHospital />, label: 'Y tế' },
          { id: 'shopping', icon: <FaShoppingCart />, label: 'Mua sắm' },
        ].map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id as LocationCategory)}
            className={`vitrisanpham-category-button ${activeCategory === category.id ? 'active' : ''}`}
          >
            <span className="vitrisanpham-category-icon">{category.icon}</span>
            <span className="vitrisanpham-category-label">{category.label}</span>
          </button>
        ))}
      </div>

      <div className="vitrisanpham-location-list">
        {locationData[activeCategory].map((item) => (
          <div
            key={item.coords}
            onClick={() => setSelectedDest(item.coords)}
            className={`vitrisanpham-location-item ${selectedDest === item.coords ? 'selected' : ''}`}
          >
            <div className="vitrisanpham-location-info">
              <p className="vitrisanpham-location-name">{item.name}</p>
              <p className="vitrisanpham-location-address">{item.address}</p>
            </div>
            <div className="vitrisanpham-location-travel">
              <FaCar className="vitrisanpham-travel-icon" />
              <div className="vitrisanpham-travel-details">
                <p className="vitrisanpham-travel-distance">{item.distance}</p>
                <p className="vitrisanpham-travel-duration">{item.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

  
    </div>
  );
}
