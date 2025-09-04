import React, { useState } from "react";
import Login_Components from "../../Login/Login_Components";
import login from "../../../../public/images/login.png";
import Image from "next/image";
import "./style.css";

const DatLichSanPham: React.FC = () => {
  const [showEmptyForm, setShowEmptyForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleBuyNowClick = () => {
    setShowEmptyForm(true);
  };

  const handleCloseEmptyForm = () => {
    setShowEmptyForm(false);
  };

  const handleOpenLoginForm = () => {
    setShowEmptyForm(false);
    setShowLoginForm(true);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  const handleSwitchToSignUp = () => {
    alert("Chuyển sang form đăng ký"); // Giả lập, thay bằng logic thật nếu có
  };

  const handleLoginSuccess = (userData: { name: string; email: string }) => {
    console.log("Đăng nhập thành công:", userData);
    setShowLoginForm(false);
    // Add your success logic here
  };

  return (
    <div className="sanpham-content">
      <h3>Đặt lịch xem nhà ngay hôm nay để nhận ưu đãi tốt nhất</h3>

      <div className="sanpham-best-price">
        <div className="label">Giá tốt nhất từ TDC</div>
        <div className="price">15.445.695.880 VNĐ</div>
        <div className="price-original">15.445.695.880 VNĐ</div>
      </div>

      <div className="sanpham-date-pick">
        <button>
          Thứ hai
          <br />
          7/7
        </button>
        <button>
          Thứ ba
          <br />
          8/7
        </button>
        <button>
          Thứ tư
          <br />
          9/7
        </button>
      </div>

      <button className="sanpham-booking-btn">Đặt lịch ngay</button>

      <div className="sanpham-actions">
        <button className="add-to-cart">Giỏ hàng</button>
        <button className="buy-now" onClick={handleBuyNowClick}>
          Mua ngay
        </button>
      </div>

      {showEmptyForm && (
        <div className="sanpham-modal-overlay">
          <div className="sanpham-modal-container">
            <button
              onClick={handleCloseEmptyForm}
              className="sanpham-modal-close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="sanpham-modal-content">
              <Image
                src={login}
                alt="Login Prompt"
                width={150}
                height={68}
                className="sanpham-modal-image"
              />
              <h2 className="sanpham-modal-text">
                Bạn cần phải đăng nhập mới sử dụng được chức năng này
              </h2>
              <button
                onClick={handleOpenLoginForm}
                className="sanpham-modal-login-btn"
              >
                Đăng nhập
              </button>
            </div>
          </div>
        </div>
      )}

      <Login_Components
        isOpen={showLoginForm}
        onClose={handleCloseLoginForm}
        onSwitchToSignUp={handleSwitchToSignUp}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
};

export default DatLichSanPham;
