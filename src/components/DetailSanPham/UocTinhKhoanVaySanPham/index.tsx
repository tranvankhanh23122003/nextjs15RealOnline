import React, { useState } from "react";
import './style.css';

const UocTinhKhoanVay: React.FC = () => {
  const [tiLeVay, setTiLeVay] = useState(50);
  const [laiSuat, setLaiSuat] = useState(10);
  const [soTienVay, setSoTienVay] = useState(2285500);
  const [thoiHan, setThoiHan] = useState(10);

  const vonTuCo = soTienVay;
  const vonVay = (soTienVay * tiLeVay) / 100;
  const laiCanTra = vonVay * (laiSuat / 100) * thoiHan;
  const tongPhaiTra = vonVay + laiCanTra;
  const thanhToanThangDau = Math.round(tongPhaiTra / (thoiHan * 12));

  return (
    <div className="loan-estimator">
    <h2>Ước tính khoản vay</h2>
  
    <div className="loan-flex-container">
      <div className="loan-inputs">
        <div className="input-group">
          <label>Số tiền vay</label>
          <input
            type="number"
            value={soTienVay}
            onChange={(e) => setSoTienVay(Number(e.target.value))}
          />
          <span>đ</span>
        </div>
        <div className="input-group">
          <label>Tỉ lệ vay</label>
          <input
            type="number"
            value={tiLeVay}
            onChange={(e) => setTiLeVay(Number(e.target.value))}
          />
          <span>%</span>
        </div>
        <div className="input-group">
          <label>Thời hạn vay</label>
          <input
            type="number"
            value={thoiHan}
            onChange={(e) => setThoiHan(Number(e.target.value))}
          />
          <span>năm</span>
        </div>
        <div className="input-group">
          <label>Lãi suất</label>
          <input
            type="number"
            value={laiSuat}
            onChange={(e) => setLaiSuat(Number(e.target.value))}
          />
          <span>%</span>
        </div>
  
        <div className="loan-note">
          <span>🕒 Trả lãi theo dư nợ giảm dần</span>
        </div>
        <button className="loan-detail-btn">Tải chi tiết khoản vay</button>
      </div>
  
      <div className="loan-summary">
        <div className="item">
          <span className="dot green" />
          Vốn tự có
          <span className="value">{vonTuCo.toLocaleString()} đ</span>
        </div>
        <div className="item">
          <span className="dot blue" />
          Vốn vay
          <span className="value">{vonVay.toLocaleString()} đ</span>
        </div>
        <div className="item">
          <span className="dot yellow" />
          Vốn lãi cần trả
          <span className="value">{laiCanTra.toLocaleString()} đ</span>
        </div>
  
        <div className="total">
          Tổng số tiền gốc và lãi phải trả
          <div className="amount">
            {tongPhaiTra.toLocaleString()} <span>VNĐ</span>
          </div>
        </div>
        <div className="first-month">
          Thanh toán gốc và lãi tháng đầu
          <div className="amount">{thanhToanThangDau.toLocaleString()} VNĐ</div>
        </div>
      </div>
    </div>

  </div>
  
  );
};

export default UocTinhKhoanVay;
