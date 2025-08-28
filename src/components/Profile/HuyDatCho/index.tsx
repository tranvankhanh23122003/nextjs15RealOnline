import React, { useState } from 'react';
import { MdWarning, MdInfo } from "react-icons/md";
import "./style.css";

interface CancelBookingFormProps {
  code: string;
  onClose: () => void;
}

const CancelBookingForm: React.FC<CancelBookingFormProps> = ({ code, onClose }) => {
  const [cancelReason, setCancelReason] = useState("");
  const [otherReason, setOtherReason] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSubmit = () => {
    if (!isConfirmed) {
      alert("Vui lòng xác nhận hủy đặt chỗ trước khi gửi!");
      return;
    }
    alert(`Yêu cầu hủy đặt chỗ căn ${code} đã được gửi!`);
    onClose();
  };

  return (
    <div className="info-order-cancel-form">
      <div className="info-order-cancel-header">
        <MdWarning className="info-order-cancel-icon" />
        <span>Sau khi hủy đặt chỗ, bạn sẽ mất quyền ưu tiên căn này. Tiền sẽ được hoàn lại trong 15 ngày làm việc theo chính sách.</span>
      </div>
      <h2 className="info-order-cancel-title">Hủy đặt chỗ căn {code}</h2>
      <div className="info-order-cancel-content">
        <div className="info-order-cancel-left">
          <div className="info-order-cancel-item">
            <span className="info-order-cancel-label">Mã đặt chỗ:</span>
            <span className="info-order-cancel-value">{code}</span>
          </div>
          <div className="info-order-cancel-item">
            <span className="info-order-cancel-label">Dự án:</span>
            <span className="info-order-cancel-value">GreenLand Riverside</span>
          </div>
          <div className="info-order-cancel-item">
            <span className="info-order-cancel-label">Giá trị BĐS:</span>
            <span className="info-order-cancel-value">3,000,000,000 VNĐ</span>
          </div>
        </div>
        <div className="info-order-cancel-right">
          <div className="info-order-cancel-item">
            <span className="info-order-cancel-label">Ngày đặt chỗ:</span>
            <span className="info-order-cancel-value">26/07/2025</span>
          </div>
          <div className="info-order-cancel-item">
            <span className="info-order-cancel-label">Loại căn:</span>
            <span className="info-order-cancel-value">Căn hộ</span>
          </div>
          <div className="info-order-cancel-item">
            <span className="info-order-cancel-label">Số tiền đặt chỗ:</span>
            <span className="info-order-cancel-value">50,000,000 VNĐ</span>
          </div>
        </div>
      </div>
      <h3 className="info-order-cancel-subtitle">Thông tin khách hàng</h3>
      <div className="info-order-cancel-customer">
        <input
          type="text"
          placeholder="Số CCCD"
          className="info-order-cancel-input"
        />
        <input
          type="text"
          placeholder="Số điện thoại"
          className="info-order-cancel-input"
        />
      </div>
      <hr className="info-order-cancel-divider" />
      <h3 className="info-order-cancel-subtitle">Lý do hủy</h3>
      <div className="info-order-cancel-reason">
        <select
          className="info-order-cancel-select"
          value={cancelReason}
          onChange={(e) => setCancelReason(e.target.value)}
        >
          <option value="">Chọn lý do hủy</option>
          <option value="Thay đổi kế hoạch">Thay đổi kế hoạch</option>
          <option value="Tài chính">Tài chính</option>
          <option value="Không phù hợp">Không phù hợp</option>
          <option value="Khác">Khác</option>
        </select>
        <textarea
          placeholder="Lý do khác (nếu có)"
          className="info-order-cancel-textarea"
          value={otherReason}
          onChange={(e) => setOtherReason(e.target.value)}
        />
      </div>
      <h3 className="info-order-cancel-subtitle">
        Thông tin nhận hoàn tiền
        <div className="info-order-cancel-refund-note">
          <MdInfo className="info-order-cancel-refund-icon" />
          <span>Tiền sẽ được hoàn vào tài khoản này</span>
        </div>
      </h3>
      <div className="info-order-cancel-refund">
        <div className="info-order-cancel-left">
          <input
            type="text"
            placeholder="Ngân hàng"
            className="info-order-cancel-input"
          />
          <input
            type="text"
            placeholder="Tên chủ tài khoản"
            className="info-order-cancel-input"
          />
        </div>
        <div className="info-order-cancel-right">
          <input
            type="text"
            placeholder="Số tài khoản"
            className="info-order-cancel-input"
          />
          <input
            type="text"
            placeholder="Chi nhánh ngân hàng"
            className="info-order-cancel-input"
          />
        </div>
      </div>
      <div className="info-order-cancel-confirm">
        <input
          type="checkbox"
          id="confirm-cancel"
          checked={isConfirmed}
          onChange={(e) => setIsConfirmed(e.target.checked)}
          className="info-order-cancel-checkbox"
        />
        <label htmlFor="confirm-cancel" className="info-order-cancel-checkbox-label">
          Tôi xác nhận hủy đặt chỗ và đồng ý với chính sách hoàn tiền của chủ đầu tư.
        </label>
      </div>
      <button
        className="info-order-cancel-submit"
        onClick={handleSubmit}
      >
        Xác nhận
      </button>
    </div>
  );
};

export default CancelBookingForm;