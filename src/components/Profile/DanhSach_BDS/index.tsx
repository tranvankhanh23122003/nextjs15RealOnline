import React from 'react';
import Slider1 from "../../../assets/images/baner1.png";
import Image from 'next/image';
import './style.css';

type CanItem = {
  id: number;
  code: string;
  project: string;
  price: string;
  status: string;
  management: string;
  paymentProgress?: string;
  dateTime?: string;
};

interface TableProps {
  data: CanItem[];
  setSelectedItem: (item: CanItem) => void;
  selectedCategory: string;
  onReviewClick: (item: CanItem) => void;
}

const getStatusClass = (status: string) => {
  switch (status.toLowerCase()) {
    case "chưa bàn giao":
      return "status-pending";
    case "hoàn thành":
      return "status-completed";
    case "đang xử lý":
      return "status-processing";
    case "đã hủy":
      return "status-cancelled";
    default:
      return "status-default";
  }
};

const Table: React.FC<TableProps> = ({ data, setSelectedItem, selectedCategory, onReviewClick }) => {
  return (
    <div className="profile-table__container">
      {data.map((item) => (
        <div
          key={item.id}
          className="profile-table__item"
          onClick={() => setSelectedItem(item)}
        >
          <div className="profile-table__header">
            <span className="profile-table__project-name">Dự án: {item.project}</span>
            <span className={`profile-table__status ${getStatusClass(item.status)}`}>
              {item.status}
            </span>
          </div>
          <hr className="profile-table__divider" />
          <div className="profile-table__details">
            <Image className="profile-table__image" src={Slider1} alt="" />
            <div className="profile-table__content">
              <div className="profile-table__name">Tên: {item.code}</div>
              <div className="profile-table__price">Giá: {item.price} tỷ</div>
              <div className="profile-table__block">Block {item.code.split(':')[1]}</div>
              <div className="profile-table__area">Diện tích: 75,5 m²</div>
              <div className="profile-table__type">Loại BĐS: Chung cư</div>
              <div className="profile-table__paid">Đã thanh toán: 50 triệu</div>
              <div className="profile-table__remaining">
                Còn lại: {parseFloat(item.price) - 0.05} tỷ
              </div>
            </div>
          </div>
          <div className="profile-table__action">
            <button
              className="profile-table__button"
              onClick={(e) => {
                e.stopPropagation();
                onReviewClick(item);
              }}
            >
              Đánh giá / Khiếu nại
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;