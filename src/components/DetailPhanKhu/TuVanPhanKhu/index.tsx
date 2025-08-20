import './style.css';

export default function TuVanForm() {
  return (
    <div className="phankhu-form-wrapper">
      <h3 className="phankhu-form-title">Tư vấn mua chuyên sâu</h3>
      <form className="phankhu-form">
        <p className="phankhu-benefit-text">Phân tích quỹ căn, chính sách, tiện ích.</p>
        <p className="phankhu-benefit-text">Giải đáp mọi thắc mắc khách hàng.</p>
        <p className="phankhu-benefit-text">Bảo mật thông tin cá nhân tuyệt đối.</p>

        <input type="text" required placeholder="Họ và tên *" />
        <input type="tel" required placeholder="Số điện thoại *" />

        <p className="phankhu-consent-text">
          Bằng việc tiếp tục, bạn đồng ý với TDC về Điều khoản dịch vụ và Chính sách bảo mật.
        </p>

        <button type="submit">Nhận tư vấn ngay</button>

        <p className="phankhu-or-text">Hoặc</p>

        <div className="phankhu-form-contact">
          <p className="phankhu-call-option">
            Gọi trực tiếp<br />
            0123 456 789
          </p>
          <p className="phankhu-chat-option">Chat qua Zalo</p>
        </div>
      </form>
    </div>
  );
}
