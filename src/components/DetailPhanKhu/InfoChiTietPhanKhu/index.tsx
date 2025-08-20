import './sytle.css'
export default function InfoChiTietPhanKhu() {
    return (
      <div className="info-section">
        <h3>Thông tin chi tiết</h3>
        <div className="info-columns">
          <div className="info-left">
            <p><span className="label">Tên dự án:</span><span className="value">Khu biệt thự cao cấp Cocoland</span></p>
            <hr />
            <p><span className="label">Hình thức sở hữu:</span><span className="value">Sở hữu lâu dài hoặc 50 năm </span></p>
            <hr />
            <p><span className="label">Mật độ xây dựng:</span><span className="value">60%</span></p>
            <hr />
            <p><span className="label">Thời điểm khởi công:</span><span className="value">Quý IV/2024</span></p>
          </div>
          <div className="info-right">
            <p><span className="label">Chủ đầu tư:</span><span className="value">Becamex Bình Dương</span></p>
            <hr />
            <p><span className="label">Tổng diện tích:</span><span className="value">133,4 ha</span></p>
            <hr />
            <p><span className="label">Quy mô phát triển:</span><span className="value">164 căn biệt thự đơn lập </span></p>
            <hr />
            <p><span className="label">Tiến độ:</span><span className="value">Đã hoàn thiện</span></p>
          </div>
        </div>
      </div>
    );
  }
  