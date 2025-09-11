import "./style.css"
export default function UuDai() {
  return (
    <div className="ticket-container">
      <div className="ticket-left">
        <p className="ticket-title">Sở hữu ngay Nhà phố từ</p>
        <p className="ticket-price">18,42 tỷ</p>
        <p className="ticket-old-price">21,52 tỷ</p>
        <span className="ticket-badge">Một bước kết nối tiện ích</span>
        <p className="ticket-desc">Địa thế Vượng khí sinh tài</p>
      </div>

      <div className="ticket-right">
        <p className="ticket-offer-title">Ưu đãi hấp dẫn từ Chủ đầu tư:</p>
        <ul className="ticket-offer-list">
          <li> Ưu đãi 1</li>
          <li> Ưu đãi 1</li>
          <li> Ưu đãi 1</li>
        </ul>
        <a href="#" className="ticket-link">
          Xem Thêm
        </a>
      </div>
    </div>
  );
}
