  import './style.css';

  export default function TuVanForm() {
    return (
      <div className="duan-form-wrapper">
        <h3 className="duan-form-title">Tư vấn mua chuyên sâu</h3>
        <form className="duan-form-consultation">
          <p className="duan-benefit-text">Phân tích quỹ căn, chính sách, tiện ích.</p>
          <p className="duan-benefit-text">Giải đáp mọi thắc mắc khách hàng.</p>
          <p className="duan-benefit-text">Bảo mật thông tin cá nhân tuyệt đối.</p>

          <input type="text" required placeholder="Họ và tên *" />
          <input type="tel" required placeholder="Số điện thoại *" />

          <p className="duan-consent-text">
            Bằng việc tiếp tục, bạn đồng ý với TDC về Điều khoản dịch vụ và Chính sách bảo mật.
          </p>

          <button type="submit">Nhận tư vấn ngay</button>

          <p className="duan-or-text">Hoặc</p>

          <div className="duan-form-contact">
            <p className="duan-call-option">
              <span className="contact-icon">📞</span>
              <span>
                Gọi trực tiếp<br />
                0123 456 789
              </span>
            </p>
            <p className="duan-chat-option">
              <img src="/icons/zalo.svg" alt="Zalo" className="contact-icon zalo-icon" />
              <span>Chat qua Zalo</span>
            </p>
          </div>
        </form>
      </div>
    );
  }
