"use client";
import { FaLayerGroup, FaTasks, FaCalendarAlt, FaClock } from "react-icons/fa";
import { MdCancel, MdCheckCircle, MdPendingActions, MdAutorenew } from "react-icons/md";

import { useState } from "react";
import { StaticImageData } from "next/image";

interface RequestItem {
  id: number;
  requestCode: string;
  requestType: string;
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

interface RequestListProps {
  data: RequestItem[];
  propertyData?: PropertyCard[]; 
}

const RequestList = ({ data, propertyData }: RequestListProps) => {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedItem, setSelectedItem] = useState<RequestItem | null>(null);

  const handleRowClick = (item: RequestItem) => {
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
      case "Đã xử lý":
        return "#50A34A";
      case "Chưa xử lý":
        return "#DF5800";
      case "Đang xử lý":
        return "#1B3459";
      case "Hoàn thành":
        return "#50A34A";
      default:
        return "#374151";
    }
  };

  return (
    <div className="profile-new-list">
      <h1 className="profile-title">Danh sách yêu cầu</h1>
     <div className="profile-filters">
        <button className="profile-filter-button">
          <FaLayerGroup style={{ marginRight: "8px" }} />
          Loại yêu cầu
        </button>
        <button className="profile-filter-button">
          <MdCheckCircle style={{ marginRight: "8px" }} />
          Trạng thái
        </button>
        <button className="profile-filter-button">
          <FaCalendarAlt style={{ marginRight: "8px" }} />
          Thời gian tạo
        </button>
      </div>
      <div className="profile-table-container">
        <table className="profile-request-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã yêu cầu</th>
              <th>Loại yêu cầu</th>
              <th>Thời gian tạo</th>
              <th>Thời gian hẹn/Tư vấn</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} onClick={() => handleRowClick(item)}>
                <td className="profile-text-center">{item.id}</td>
                <td className="profile-text-center">{item.requestCode}</td>
                <td className="profile-text-center">{item.requestType}</td>
                <td className="profile-text-center">{item.createdTime}</td>
                <td className="profile-text-center">{item.consultationTime}</td>
                <td
                  className="profile-text-center"
                  style={{ color: getStatusColor(item.status) }}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showDetail && selectedItem && (
        <div
          className="profile-request-detail-overlay"
          onClick={handleCloseDetail}
        >
          <div
            className="profile-request-detail-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="profile-request-detail-header">
              <h2>Mã yêu cầu: #{selectedItem.requestCode}</h2>
              <button
                className="profile-close-button"
                onClick={handleCloseDetail}
              >
                &times;
              </button>
            </div>
            <div className="profile-request-detail-content">
              <div className="profile-contact-info">
                <h3>Thông tin liên hệ</h3>
                <div className="profile-contact-row">
                  <div className="profile-contact-item">
                    <label>Họ tên:</label>
                    <span>Nguyễn Văn A</span>
                  </div>
                  <div className="profile-contact-item">
                    <label>Số điện thoại:</label>
                    <span>0901234567</span>
                  </div>
                </div>
                <div className="profile-consultation-info">
                  <label>Lịch hẹn tư vấn:</label>
                  <br />
                  <span>{selectedItem.consultationTime}</span>
                </div>
              </div>
              <div className="profile-general-info">
                <h3>Thông tin chung</h3>
                <div className="profile-info-container">
                  <div className="profile-info-item">
                    <label>Dự án quan tâm:</label>
                    <span>GreenLand Riverside</span>
                  </div>
                  <div className="profile-info-item">
                    <label>Khu:</label>
                    <span>Khu A</span>
                  </div>
                  <div className="profile-info-item">
                    <label>Bất động sản:</label>
                    <span>Căn hộ A5-02</span>
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

export default RequestList;