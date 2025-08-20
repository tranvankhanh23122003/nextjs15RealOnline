import './style.css';

export default function DocumentSection() {
  const currentDate = new Date().toLocaleString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Ho_Chi_Minh',
  }).replace(/\//g, '-').replace(', ', ' '); 

  return (
    <div className="document-section">
      <table className="document-table">
        <thead>
          <tr>
            <th>Tên tài liệu</th>
            <th>Loại tài liệu</th>
            <th>Ngày cập nhật</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CSBH Biệt thự Cocoland</td>
            <td>Chính sách bán hàng</td>
            <td>{currentDate}</td>
            <td>
              <a
                href="/assets/documents/csbh-cocoland.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="document-link"
              >
                Xem tài liệu
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <hr className="document-divider" />
    </div>
  );
}