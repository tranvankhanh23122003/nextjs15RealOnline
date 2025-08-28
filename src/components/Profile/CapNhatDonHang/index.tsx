"use client"
import React, { useState } from "react";
import Slide1 from "../../../assets/images/baner1.png";
import ContractTables from "../BangHopDong";
import Image from "next/image";
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
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
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

  const contractData = [
    {
      id: "HD001",
      type: "Hợp đồng mua bán",
      file: "hopdong001.pdf",
      date: "01/01/2025",
      status: "Đã ký",
    },
    {
      id: "HD002",
      type: "Hợp đồng đặt cọc",
      file: "hopdong002.pdf",
      date: "15/12/2024",
      status: "Hoàn tất",
    },
    {
      id: "HD003",
      type: "Hợp đồng chuyển nhượng",
      file: "hopdong003.pdf",
      date: "20/11/2024",
      status: "Đang xử lý",
    },
    {
      id: "HD004",
      type: "Hợp đồng bảo lãnh",
      file: "hopdong004.pdf",
      date: "10/10/2024",
      status: "Đã ký",
    },
    {
      id: "HD005",
      type: "Hợp đồng thanh toán",
      file: "hopdong005.pdf",
      date: "05/09/2024",
      status: "Đã hủy",
    },
  ];

  const paymentProgressData = [
    {
      phase: "Đợt 1",
      dueDate: "01/09/2024",
      amountDue: "500,000,000 VNĐ",
      paymentPercentage: "17.22%",
      amountPaid: "500,000,000 VNĐ",
      status: "Hoàn tất",
      remainingDebt: "0 VNĐ",
    },
    {
      phase: "Đợt 2",
      dueDate: "01/12/2024",
      amountDue: "500,000,000 VNĐ",
      paymentPercentage: "17.22%",
      amountPaid: "500,000,000 VNĐ",
      status: "Hoàn tất",
      remainingDebt: "0 VNĐ",
    },
    {
      phase: "Đợt 3",
      dueDate: "01/03/2025",
      amountDue: "600,000,000 VNĐ",
      paymentPercentage: "20.66%",
      amountPaid: "0 VNĐ",
      status: "Chưa thanh toán",
      remainingDebt: "600,000,000 VNĐ",
    },
    {
      phase: "Đợt 4",
      dueDate: "01/06/2025",
      amountDue: "600,000,000 VNĐ",
      paymentPercentage: "20.66%",
      amountPaid: "0 VNĐ",
      status: "Chưa thanh toán",
      remainingDebt: "600,000,000 VNĐ",
    },
    {
      phase: "Đợt 5",
      dueDate: "01/09/2025",
      amountDue: "704,000,000 VNĐ",
      paymentPercentage: "24.24%",
      amountPaid: "0 VNĐ",
      status: "Chưa thanh toán",
      remainingDebt: "704,000,000 VNĐ",
    },
  ];

  const paymentHistoryData = [
    {
      id: "TT001",
      content: "Thanh toán đợt 1",
      amount: "500,000,000 VNĐ",
      transactionTime: "01/09/2024 10:30",
      confirmationLink: "001.pdf",
      status: "Hoàn tất",
      paymentMethod: "Chuyển khoản",
    },
    {
      id: "TT002",
      content: "Thanh toán đợt 2",
      amount: "500,000,000 VNĐ",
      transactionTime: "01/12/2024 14:45",
      confirmationLink: "002.pdf",
      status: "Hoàn tất",
      paymentMethod: "Chuyển khoản",
    },
    {
      id: "TT003",
      content: "Thanh toán đặt cọc",
      amount: "50,000,000 VNĐ",
      transactionTime: "15/11/2024 09:15",
      confirmationLink: "003.pdf",
      status: "Hoàn tất",
      paymentMethod: "Tiền mặt",
    },
    {
      id: "TT004",
      content: "Phí bảo trì",
      amount: "10,000,000 VNĐ",
      transactionTime: "20/10/2024 16:20",
      confirmationLink: "004.pdf",
      status: "Đang xử lý",
      paymentMethod: "Chuyển khoản",
    },
    {
      id: "TT005",
      content: "Thanh toán phạt chậm",
      amount: "5,000,000 VNĐ",
      transactionTime: "05/08/2024 11:00",
      confirmationLink: "005.pdf",
      status: "Đã hủy",
      paymentMethod: "Tiền mặt",
    },
  ];

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
            <hr className="profile-price-info-divider" />
              <div className="profile-price-info-item">
                <span className="profile-price-info-label">Tổng chiết khấu:</span>
                <span className="profile-price-info-value">{priceInfo.totalDiscount}</span>
              </div>
              <div className="profile-price-info-note">
                <p>Ưu đãi 11% khi khách hàng chọn thanh toán sớm</p>
                <p>Ưu đãi 3,5% chương trình “Quà Tặng Tân Gia”</p>
              </div>
            <hr className="profile-price-info-divider" />
              <div className="profile-price-info-item">
                <span className="profile-price-info-label">Giá sau chiết khấu:</span>
                <span className="profile-price-info-value">{priceInfo.discountedPrice}</span>
              </div>
              <div className="profile-price-info-note">
                <p>Giá sau chiết khấu (chưa bao gồm VAT & KPBT)</p>
              </div>
            <hr className="profile-price-info-divider" />
          </div>
          <div className="profile-price-info-right">
              <div className="profile-price-info-item">
                <span className="profile-price-info-label">Tổng giá:</span>
                <span className="profile-price-info-value">{priceInfo.totalPrice}</span>
              </div>
              <div className="profile-price-info-note">
                <p>Tổng giá đã bao gồm VAT & KPBT</p>
              </div>
            <hr className="profile-price-info-divider" />
              <div className="profile-price-info-item">
                <span className="profile-price-info-label">Đã thanh toán:</span>
                <span className="profile-price-info-value">{priceInfo.paidAmount}</span>
              </div>
              <div className="profile-price-info-note">
                <p>Đã thanh toán (đợt 1 & 2)</p>
              </div>
            <hr className="profile-price-info-divider" />
              <div className="profile-price-info-item">
                <span className="profile-price-info-label">Dư nợ còn:</span>
                <span className="profile-price-info-value">{priceInfo.remainingDebt}</span>
              </div>
            <hr className="profile-price-info-divider" />
          </div>
        </div>
        <div className="profile-price-info-buttons">
          <button
            className={`profile-price-info-button ${selectedButton === "Hợp đồng liên quan" ? "profile-price-info-button-active" : ""}`}
            onClick={() => handleButtonClick("Hợp đồng liên quan")}
          >
            Hợp đồng liên quan
          </button>
          <button
            className={`profile-price-info-button ${selectedButton === "Tiến độ thanh toán" ? "profile-price-info-button-active" : ""}`}
            onClick={() => handleButtonClick("Tiến độ thanh toán")}
          >
            Tiến độ thanh toán
          </button>
          <button
            className={`profile-price-info-button ${selectedButton === "Lịch sử thanh toán" ? "profile-price-info-button-active" : ""}`}
            onClick={() => handleButtonClick("Lịch sử thanh toán")}
          >
            Lịch sử thanh toán
          </button>
        </div>
        <ContractTables
          selectedButton={selectedButton}
          contractData={contractData}
          paymentProgressData={paymentProgressData}
          paymentHistoryData={paymentHistoryData}
        />
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
            <Image
              src={Slide1}
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