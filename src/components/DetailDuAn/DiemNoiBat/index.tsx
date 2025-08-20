import { useState } from "react";

import './style.css'
export default function DiemNoiBat() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="highlight-section">
      <h3>Điểm nổi bật Cocoland</h3>
      <p>
        Khu biệt thự Coco Land do Công ty Cổ phần Kinh doanh và Phát triển Bình Dương (TDC) làm chủ đầu tư, có được địa thế đắc địa đó chính là “tầm cao”.
      </p>
      <p>
        Nơi đây sẽ tạo cho cư dân một phong cách sống mới với những mảng xanh mà chủ đạo là những rặng dừa xanh mát.
      </p>
      <p>
        Với tuyến đường mới kết nối trực tiếp với quốc lộ 14, chỉ với hơn 01 phút đi xe, dễ dàng kết nối với các loại tiện ích đa dạng, phong phú từ ngay khu vực trung tâm thành phố mới Bình Dương.
      </p>
      {showMore && (
        <div className="extended-content">
          <p>
            Coco Land không chỉ là nơi an cư lý tưởng mà còn mang đến cơ hội discour tư hấp dẫn với tiềm năng tăng giá trị bất động sản trong tương lai. Dự án được thiết kế với các tiện ích nội khu hiện đại như hồ bơi vô cực, công viên cây xanh, khu vui chơi trẻ em, và trung tâm thương mại cao cấp.
          </p>
          <p>
            Ngoài ra, Coco Land chú trọng đến yếu tố bền vững với hệ thống năng lượng mặt trời và quản lý nước thải tiên tiến, đảm bảo một môi trường sống thân thiện với thiên nhiên. Các căn biệt thự được thiết kế theo phong cách hiện đại, tối ưu hóa không gian sống với ánh sáng tự nhiên và tầm nhìn thoáng đãng.
          </p>
          <p>
            Với vị trí chiến lược, cư dân tại Coco Land có thể dễ dàng di chuyển đến các khu công nghiệp lớn, trường học quốc tế, và bệnh viện đạt chuẩn quốc tế trong bán kính chỉ 5-10 phút di chuyển.
          </p>
        </div>
      )}
      <button onClick={() => setShowMore(!showMore)} className="view-more">
        {showMore ? "Thu gọn" : "Xem thêm"}
      </button>
    </div>
  );
}
