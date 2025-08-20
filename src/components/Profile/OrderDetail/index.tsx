"use client";

import React, { useState } from "react";
import Slide1 from "../../../assets/images/baner1.png";
import "./style.css";

interface CanItem {
  id: number;
  management: string;
  code: string;
  project: string;
  price: string;
  status: string;
  paymentProgress?: string;
  dateTime?: string;
  fullName?: string;
  cccd?: string;
  phone?: string;
  email?: string;
  permanentAddress?: string;
  contactAddress?: string;
}

interface OrderDetailProps {
  selectedItem: CanItem | null;
  data: CanItem[];
}

const OrderDetail: React.FC<OrderDetailProps> = ({ selectedItem, data }) => {
  const item = selectedItem || data[0];
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const customerInfo = {
    fullName: "Trần Văn Khánh",
    email: "khantran12232003@gmail.com",
    cccd: "012345678901",
    phone: "0901234567",
    permanentAddress: "123 Đường Láng, Đống Đa, Hà Nội",
    contactAddress: "456 Nguyễn Trãi, Thanh Xuân, Hà Nội",
  };

  const priceInfo = {
    originalPrice: item.price || "3,000,000,000 VNĐ",
    totalDiscount: "360,000,000 VNĐ",
    discountedPrice: "2,640,000,000 VNĐ",
    totalPrice: "2,904,000,000 VNĐ",
    paidAmount: "1,000,000,000 VNĐ",
    remainingDebt: "1,904,000,000 VNĐ",
  };

  function ProjectPriceInfo() {
    return (
      <div className="profile-price-info-section">
        <h3>Giá bán và thanh toán</h3>
        <div className="profile-price-info-columns">
          <div className="profile-price-info-left">
            <div className="profile-price-info-item">
              <span className="profile-price-info-label">Giá gốc:</span>
              <span className="profile-price-info-value">{priceInfo.originalPrice}</span>
            </div>
            <hr />
            <div className="profile-price-info-item">
              <span className="profile-price-info-label">Tổng chiết khấu:</span>
              <span className="profile-price-info-value">{priceInfo.totalDiscount}</span>
            </div>
            <div className="profile-price-info-note">
              <p>Ưu đãi 11% khi khách hàng chọn thanh toán sớm</p>
              <p>Ưu đãi 3,5% chương trình "Quà Tặng Tân Gia"</p>
            </div>
            <hr />
            <div className="profile-price-info-item">
              <span className="profile-price-info-label">Giá sau chiết khấu:</span>
              <span className="profile-price-info-value">{priceInfo.discountedPrice}</span>
            </div>
            <div className="profile-price-info-note">
              <p>Giá sau chiết khấu (chưa bao gồm VAT & KPBT)</p>
            </div>
            <hr />
          </div>
          <div className="profile-price-info-right">
            <div className="profile-price-info-item">
              <span className="profile-price-info-label">Tổng giá:</span>
              <span className="profile-price-info-value">{priceInfo.totalPrice}</span>
            </div>
            <div className="profile-price-info-note">
              <p>Tổng giá đã bao gồm VAT & KPBT</p>
            </div>
            <hr />
            <div className="profile-price-info-item">
              <span className="profile-price-info-label">Đã thanh toán:</span>
              <span className="profile-price-info-value">{priceInfo.paidAmount}</span>
            </div>
            <div className="profile-price-info-note">
              <p>Đã thanh toán (đợt 1 & 2)</p>
            </div>
            <hr />
            <div className="profile-price-info-item">
              <span className="profile-price-info-label">Dư nợ còn:</span>
              <span className="profile-price-info-value">{priceInfo.remainingDebt}</span>
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-order-detail-container">
      <h1 className="profile-order-detail-title">Chi tiết căn</h1>
      
      {/* Phần Thông tin chung */}
      <h2 className="profile-order-detail-subtitle">Thông tin chung</h2>
      <div className="profile-order-detail-content">
        <div className="profile-order-detail-left">
          <div className="profile-order-detail-item">
            <span className="profile-order-detail-label">Mã căn:</span>
            <span className="profile-order-detail-value">{item.code}</span>
          </div>
          <div className="profile-order-detail-item">
            <span className="profile-order-detail-label">Dự án:</span>
            <span className="profile-order-detail-value">{item.project}</span>
          </div>
          <div className="profile-order-detail-item">
            <span className="profile-order-detail-label">Phân khu:</span>
            <span className="profile-order-detail-value">{item.code.split(":")[1]?.trim() || "N/A"}</span>
          </div>
          <div className="profile-order-detail-item">
            <span className="profile-order-detail-label">Tầng:</span>
            <span className="profile-order-detail-value">{item.code.split(":")[0]?.trim() || "N/A"}</span>
          </div>
          <div className="profile-order-detail-item">
            <span className="profile-order-detail-label">Trạng thái:</span>
            <span className="profile-order-detail-value">{item.status}</span>
          </div>
          {isExpanded && (
            <>
              <div className="profile-order-detail-item">
                <span className="profile-order-detail-label">Giá:</span>
                <span className="profile-order-detail-value">{item.price}</span>
              </div>
              <div className="profile-order-detail-item">
                <span className="profile-order-detail-label">Tiến độ thanh toán:</span>
                <span className="profile-order-detail-value">{item.paymentProgress || "N/A"}</span>
              </div>
            </>
          )}
          <button className="profile-order-detail-more-btn" onClick={toggleExpand}>
            {isExpanded ? "Thu gọn" : "Xem thêm"}
          </button>
        </div>
        <div className="profile-order-detail-right">
          <div className="profile-order-detail-image-container">
            <img
              src={Slide1.src}
              alt="Property"
              className="profile-order-detail-image"
            />
          </div>
        </div>
      </div>

      {/* Phần Thông tin khách hàng */}
      <div className="profile-order-detail-customer-content">
        <div className="profile-order-detail-customer-left">
          <h2 className="profile-order-detail-subtitle">Thông tin khách hàng</h2>
          <div className="profile-order-detail-item">
            <span className="profile-order-detail-label">Họ tên:</span>
            <span className="profile-order-detail-value">{customerInfo.fullName}</span>
          </div>
          <div className="profile-order-detail-item">
            <span className="profile-order-detail-label">Số CCCD:</span>
            <span className="profile-order-detail-value">{customerInfo.cccd}</span>
          </div>
          <div className="profile-order-detail-item">
            <span className="profile-order-detail-label">Điện thoại:</span>
            <span className="profile-order-detail-value">{customerInfo.phone}</span>
          </div>
          <div className="profile-order-detail-item">
            <span className="profile-order-detail-label">Email:</span>
            <span className="profile-order-detail-value">{customerInfo.email}</span>
          </div>
          <div className="profile-order-detail-item">
            <span className="profile-order-detail-label">Địa chỉ thường trú:</span>
            <span className="profile-order-detail-value">{customerInfo.permanentAddress}</span>
          </div>
          <div className="profile-order-detail-item">
            <span className="profile-order-detail-label">Địa chỉ liên lạc:</span>
            <span className="profile-order-detail-value">{customerInfo.contactAddress}</span>
          </div>
        </div>
        <div className="profile-order-detail-customer-right"></div>
      </div>

      {/* Phần Giá bán và thanh toán */}
      <ProjectPriceInfo />
    </div>
  );
};

export default OrderDetail;