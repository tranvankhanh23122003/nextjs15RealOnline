import React from "react";
import { GoLocation } from "react-icons/go";
import './style.css'
const MaCanSanPham: React.FC = () => {
  return (
    <div className="sanpham-content">
      <div className="sanpham-status-tag">ĐANG BÁN</div>
      <h2>#Macan01, Shophouse, khu A, biệt thự cao cấp Cocoland</h2>
      <div className="sanpham-location">
        <GoLocation />
        <span>Khu Công nghiệp và đô thị Mỹ Phước III</span>
      </div>
      <div className="sanpham-note">
        Tiêu chuẩn bàn giao: Thô. Bấm xem chi tiết <a href="#">tại đây</a>
      </div>
   
      <div className="sanpham-pricing-boxes">
        <div className="sanpham-price-box highlight">
          <div className="label">Giá tốt nhất</div>
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
