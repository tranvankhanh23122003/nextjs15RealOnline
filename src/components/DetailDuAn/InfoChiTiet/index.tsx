import './style.css'
export default function InfoChiTietDuAn() {
    return (
      <div className="info-section">
        <h3>Thông tin chi tiết</h3>
        <div className="info-columns">
          <div className="info-left">
            <p><span className="label">Tên dự án:</span><span className="value">Cocoland</span></p>
            <hr />
            <p><span className="label">Hình thức sở hữu:</span><span className="value">Sổ hồng lâu dài</span></p>
            <hr />
            <p><span className="label">Mật độ xây dựng:</span><span className="value">50%</span></p>
            <hr />
            <p><span className="label">Thời điểm khởi công:</span><span className="value">2024</span></p>
          </div>
          <div className="info-right">
            <p><span className="label">Chủ đầu tư:</span><span className="value">TĐC Lâm Chiểu</span></p>
            <hr />
            <p><span className="label">Tổng diện tích:</span><span className="value">100 ha</span></p>
            <hr />
            <p><span className="label">Quy mô phát triển:</span><span className="value">500 căn</span></p>
            <hr />
            <p><span className="label">Tiến độ:</span><span className="value">Đang triển khai</span></p>
          </div>
        </div>
      </div>
    );
  }
  