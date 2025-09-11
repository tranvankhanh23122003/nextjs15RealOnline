import React from "react";
import { GoLocation } from "react-icons/go";
import './style.css'
const MaCanSanPham: React.FC = () => {
  return (
    <div className="sanpham-content">
      <div className="content-map">
        <div className="left">
        <div className="sanpham-status-tag">ĐANG BÁN</div>
      <h2>#Macan01, Shophouse, khu A, biệt thự cao cấp Cocoland</h2>
      <div className="sanpham-location">
        <GoLocation />
        <span>Khu Công nghiệp và đô thị Mỹ Phước III</span>
      </div>
      <div className="sanpham-note">
        Tiêu chuẩn bàn giao: Thô. Bấm xem chi tiết <a href="#">tại đây</a>
      </div>
        </div>
        <div className="right">
        <div className="sanpham-header-right">
          <iframe
            title="mini-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.123456!2d106.625!3d10.824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1234567abc%3A0x1234567890abcdef!2sMy%20Phuoc%20Industrial%20Park!5e0!3m2!1sen!2s!4v1694381234567!5m2!1sen!2s"
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
        </div>
     
    
      </div>
    
   
      <div className="sanpham-pricing-boxes">
        <div className="sanpham-price-box highlight">
          <div className="label">Giá tốt nhất </div>
          <div className="price">15,45 tỷ</div>
          <span className="sanpham-discounted-price">
            <span className="sanpham-original-price">15,45 tỷ</span>
            <span className="sanpham-discount-percentage">-11,05%</span>
          </span>
          <div className="note">
            Thanh toán bằng vốn tự có theo tiến độ thanh toán sớm
          </div>
        </div>
        <div className="sanpham-price-box">
          <div className="label">Giá ưu đãi</div>
          <div className="price">15,45 tỷ</div>
          <span className="sanpham-discounted-price">
            <span className="sanpham-original-price">15,45 tỷ</span>
            <span className="sanpham-discount-percentage">-11,05%</span>
          </span>
          <div className="note">
            Thanh toán bằng vốn tự có theo tiến độ
          </div>
        </div>
        <div className="sanpham-price-box">
          <div className="label">Giá gốc</div>
          <div className="price">15,45 tỷ</div>
          <div className="note">Thanh toán thông thường</div>
        </div>
      </div>
 
    <div className="form-discount">
    <h2>Thanh toán bằng Vốn tự có theo tiến độ thanh toán sớm</h2>
      <div className="sanpham-discount-box">
        <div className="sanpham-discount-highlight">
          KHI THANH TOÁN SỚM 100% TRONG VÒNG 25 NGÀY KỂ TỪ NGÀY KÝ TDC HƯỞNG
          CHIẾT KHẤU 11%
        </div>
        <div className="sanpham-discount-value">-1.722.260.000 VNĐ</div>
        <div className="note">
          Tổng chiết khấu tạm tính khi đạt các điều kiện:
          <br />
          Giá sau chiết khấu (chưa bao gồm VAT & KPBT): 14.115.894.937 VNĐ
        </div>
      </div>
    </div>
  
    </div>
  );
};

export default MaCanSanPham;
