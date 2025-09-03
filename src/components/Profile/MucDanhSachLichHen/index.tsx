"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";

interface AppointmentItem {
  id: number;
  appointment: string;
  location: string;
  createdTime: string;
  consultationTime: string;
  status: string;
}

interface PropertyCard {
  id: number;
  price: string;
  rating: number;
  description: string;
  bedrooms: number;
  area: string;
  address: string;
  image: StaticImageData;
}

interface AppointmentListProps {
  data: AppointmentItem[];
  propertyData: PropertyCard[];
}

const AppointmentList: React.FC<AppointmentListProps> = ({ data, propertyData }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedItem, setSelectedItem] = useState<AppointmentItem | null>(null);
  const [isContactExpanded, setIsContactExpanded] = useState(false);

  const handleRowClick = (item: AppointmentItem) => {
    setSelectedItem(item);
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Đã hủy":
        return "#EA1616";
      case "Đã xác nhận":
        return "#1B3459";
      case "Chờ xác nhận":
        return "#DF5800";
      case "Đã hoàn thành":
        return "#50A34A";
      default:
        return "transparent";
    }
  };

  const getProperty = (item: AppointmentItem) => {
    return propertyData.find((prop) => prop.address === item.location) || propertyData[0];
  };

  return (
    <div className="profile-appointment-list">
      <h1 className="profile-title">Danh sách lịch hẹn</h1>
      <div className="profile-filters">
        <button className="profile-filter-button">Địa điểm hẹn</button>
        <button className="profile-filter-button">Trạng thái</button>
        <button className="profile-filter-button">Thời gian tạo</button>
      </div>
      <div className="profile-table-container">
        <table className="profile-appointment-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Lịch hẹn</th>
              <th>Địa điểm hẹn</th>
              <th>Thời gian tạo</th>
              <th>Thời gian hẹn/Tư vấn</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} onClick={() => handleRowClick(item)}>
                <td className="text-center">{item.id}</td>
                <td className="text-center">{item.appointment}</td>
                <td className="text-center">{item.location}</td>
                <td className="text-center">{item.createdTime}</td>
                <td className="text-center">{item.consultationTime}</td>
                <td className="text-center" style={{ color: getStatusColor(item.status) }}>
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showDetail && selectedItem && (
        <div className="profile-request-detail-overlay" onClick={handleCloseDetail}>
          <div className="profile-request-detail-container" onClick={(e) => e.stopPropagation()}>
            <div className="profile-request-detail-header">
              <h2>Lịch hẹn: #{selectedItem.appointment}</h2>
              <button className="profile-close-button" onClick={handleCloseDetail}>&times;</button>
            </div>
            <hr className="profile-info-separator" />
            <div className="profile-info-message">
              <svg className="profile-info-icon" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="6" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4h.01M12 8h.01" />
              </svg>
              <span>
                Lịch hẹn của Quý khách đang được hệ thống Vinhomes Market chuyển tới chuyên viên tư vấn. Vui lòng chờ phản hồi, hoặc trực tiếp liên hệ tới Hotline&nbsp;
                <a href="tel:1900000000" style={{ color: "#1B3459", textDecoration: "underline" }}>1900 000 000</a> để được hỗ trợ.
              </span>
            </div>

            <div className="profile-property-detail-section">
              <div className="profile-property-image-container">
                <Image src={getProperty(selectedItem).image} alt="Property" className="profile-property-image" />
                <div className="profile-price-badge">{getProperty(selectedItem).price}</div>
                <div className="profile-favorite-button">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <div className="profile-property-content">
                <div className="profile-property-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} style={{ color: star <= getProperty(selectedItem).rating ? "#facc15" : "#d1d5db" }}>
                      ★
                    </span>
                  ))}
                </div>
                <h3 className="profile-property-description">{getProperty(selectedItem).description}</h3>
                <div className="profile-property-details">
                  <div className="profile-property-detail">
                    <span>🏠</span>
                    <span>{getProperty(selectedItem).bedrooms} phòng</span>
                  </div>
                  <div className="profile-property-detail">
                    <span>📐</span>
                    <span>Diện tích</span>
                  </div>
                  <div className="profile-property-detail">
                    <span>{getProperty(selectedItem).area}</span>
                  </div>
                </div>
                <p className="profile-property-address">{getProperty(selectedItem).address}</p>
              </div>
            </div>

            <div className="profile-request-detail-content">
              <div className="profile-contact-info">
                <h3>Thông tin liên hệ</h3>
                <div className="profile-info-container">
                  <div className="profile-info-item">
                    <label>Thời gian hẹn/Tư vấn:</label>
                    <span>{selectedItem.consultationTime}</span>
                  </div>
                  <div className="profile-info-item">
                    <label>Số người tham dự - 2 người:</label>
                    <Image src="https://via.placeholder.com/40" alt="Avatar" className="profile-avatar" />
                    <span style={{ fontWeight: "bold" }}>Đặng Phương Thảo</span>
                  </div>
                </div>
                <div className="profile-expand-wrapper">
                  <button className="profile-expand-button" onClick={() => setIsContactExpanded(!isContactExpanded)}>
                    <ChevronDownIcon className="profile-expand-icon" />
                  </button>
                </div>
                {isContactExpanded && (
                  <div className="profile-expanded-info">
                    <div className="profile-info-item">
                      <label>Thông tin bổ sung:</label>
                      <span>Chi tiết thêm sẽ hiển thị ở đây.</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="profile-general-info">
                <h3>Thông tin chuyên viên chăm sóc</h3>
                <div className="profile-info-container">
                  <div className="profile-info-item">
                    <span style={{ fontWeight: "bold" }}>Đặng Phương Thảo</span>
                    <span>0901234567</span>
                    <span>phuongthao@example.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentList;
