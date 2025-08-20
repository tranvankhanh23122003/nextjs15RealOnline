import './style.css';

export default function ChiTietMaCan() {
  return (
    <div className="chitietspmacan-section">
      <h3 className="chitietspmacan-heading">Thông tin chi tiết</h3>
      <div className="chitietspmacan-columns">
        <div className="chitietspmacan-left">
          <p>
            <span className="chitietspmacan-label">Tổng số tầng :</span>
            <span className="chitietspmacan-value">5</span>
          </p>
          <hr />
          <p>
            <span className="chitietspmacan-label">Diện tích đất :</span>
            <span className="chitietspmacan-value">100.000 m²</span>
          </p>
          <hr />
          <p>
            <span className="chitietspmacan-label">Phân khu:</span>
            <span className="chitietspmacan-value">A</span>
          </p>
          <hr />
        
        </div>
        <div className="chitietspmacan-right">
          <p>
            <span className="chitietspmacan-label">Hướng cửa:</span>
            <span className="chitietspmacan-value">Đông Bắc</span>
          </p>
          <hr />
          <p>
            <span className="chitietspmacan-label">Xây dựng :</span>
            <span className="chitietspmacan-value">100.000 m²</span>
          </p>
          <hr />
          <p>
            <span className="chitietspmacan-label">Diện tích dự án :</span>
            <span className="chitietspmacan-value">Khu biệt thự cao cấp Cocoland</span>
          </p>
          <hr />
      
        </div>
      </div>
      
    </div>
  );
}
