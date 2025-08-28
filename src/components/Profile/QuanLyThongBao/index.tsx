import React from "react";
import Slide1 from "../../../assets/images/baner1.png"; 
import { StaticImageData } from "next/image";
import Image from "next/image";

interface Notification {
  id: string;
  title: string;
  description: string;
  date: string;
  status: "active" | "expired";
  image: StaticImageData; 
}

const notifications: Notification[] = [
  {
    id: "KM001",
    title: "Ưu đãi 11% thanh toán sớm",
    description: "Giảm 3-5% giá trị căn nếu thanh toán 95% trong 7 ngày. Đặt mua ngay!",
    date: "15/08/2025",
    status: "active",
    image: Slide1, 
  },
  {
    id: "KM002",
    title: "Quà tặng tân gia",
    description: "Giảm 3-5% giá trị căn nếu thanh toán 95% trong 7 ngày. Đặt mua ngay!",
    date: "10/08/2025",
    status: "active",
    image: Slide1,
  },
  {
    id: "KM003",
    title: "Khuyến mãi mùa lễ hội",
    description: "Giảm giá 5% cho các hợp đồng ký trong dịp lễ hội cuối năm 2024.",
    date: "01/12/2024",
    status: "expired",
    image: Slide1,
  },
];

const NotificationManager: React.FC = () => {
  const handleViewDetails = (id: string) => {
    alert(`Xem chi tiết khuyến mãi: ${id}`);
   
  };

  return (
    <div className="notification-manager-container">
      <h1 className="profile-title">Khuyến mãi</h1>
      <div className="notification-list">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`notification-item ${
                notification.status === "active"
                  ? "notification-active"
                  : "notification-expired"
              }`}
            >
              <div className="notification-header">
                <Image
                  src={notification.image}
                  alt={notification.title}
                  className="notification-image"
                />
                <div className="notification-title-container">
                  <h3 className="notification-title">{notification.title}</h3>
                  <p className="notification-description">{notification.description}</p>
                  <span
                    className={`notification-status notification-status-${notification.status}`}
                  >
                    {notification.status === "active" ? "Đang áp dụng" : "Hết hạn"}
                  </span>
                </div>
                <button
                  className="notification-detail-btn"
                  onClick={() => handleViewDetails(notification.id)}
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="profile-placeholder-text">
            Chưa có thông báo khuyến mãi nào
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationManager;