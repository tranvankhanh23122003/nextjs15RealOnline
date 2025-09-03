import "./style.css";
import Slider1 from "../../../../public/images/baner1.png";
import Image from "next/image";
export default function InFoChiTietSanPham() {
  return (
    <div className="infochitiet-section">
      <h3 className="infochitiet-heading">Thông tin chi tiết</h3>
      <div className="infochitiet-columns">
        <div className="infochitiet-left">
          <p>
            <span className="infochitiet-label">Tổng số tầng :</span>
            <span className="infochitiet-value">5</span>
          </p>
          <hr />
          <p>
            <span className="infochitiet-label">Diện tích đất :</span>
            <span className="infochitiet-value">100.000 m²</span>
          </p>
          <hr />
          <p>
            <span className="infochitiet-label">Phân khu:</span>
            <span className="infochitiet-value">A</span>
          </p>
          <hr />
        </div>
        <div className="infochitiet-right">
          <p>
            <span className="infochitiet-label">Hướng cửa:</span>
            <span className="infochitiet-value">Đông Bắc</span>
          </p>
          <hr />
          <p>
            <span className="infochitiet-label">Xây dựng :</span>
            <span className="infochitiet-value">100.000 m²</span>
          </p>
          <hr />
          <p>
            <span className="infochitiet-label">Diện tích dự án :</span>
            <span className="infochitiet-value">
              Khu biệt thự cao cấp Cocoland
            </span>
          </p>
          <hr />
        </div>
      </div>
      <div className="highlight-section">
        <div className="highlight-columns">
          <div className="highlight-left">
            <Image
              src={Slider1}
              alt="Highlight Image"
              width={150}
              height={68}
              className="highlight-image"
            />
          </div>
          <div className="highlight-right">
            <h3>Điểm nổi bật Cocoland</h3>
            <p>
              Phân khu A được thiết kế theo phong cách hiện đại và sang trọng,
              giống với các phân khu B & Vịnh C. Với kiến trúc độc đáo, các căn
              nhà tại A mang đến không gian sống "resort" đích thực. Bạn sẽ được
              tận hưởng không gian xanh mát với công viên nội khu lớn, hồ bơi
              ngoài trời, sân thể thao, và nhiều tiện ích khác như BBQ, khu vui
              chơi cho trẻ em. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
