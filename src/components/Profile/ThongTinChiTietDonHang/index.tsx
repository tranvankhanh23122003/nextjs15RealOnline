"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";
import { MdWarning } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import Slide1 from "../../../assets/images/baner1.png";
import "./style.css";
import ContractTables from "../BangHopDong";
import Image from "next/image";

type CanItem = {
  id: number;
  management: string;
  code: string;
  project: string;
  price: string;
  status: string;
  paymentProgress?: string;
  dateTime?: string;
};

interface TimelineItem {
  time: string;
  type: "success" | "warning" | "info" | "alert";
  title: string;
  description: string;
  link?: string;
}

interface Contract {
  id: string;
  type: string;
  file: string;
  date: string;
  status: string;
}

interface PaymentProgress {
  phase: string;
  dueDate: string;
  amountDue: string;
  paymentPercentage: string;
  amountPaid: string;
  status: string;
  remainingDebt: string;
}

interface PaymentHistory {
  id: string;
  content: string;
  amount: string;
  transactionTime: string;
  confirmationLink: string;
  status: string;
  paymentMethod: string;
}

interface InfoOrderDetailsProps {
  selectedItem: CanItem | null;
  onBack: () => void;
}

const timelineData: TimelineItem[] = [
  {
    time: "13:36 26-07-2025",
    type: "success",
    title: "[Xác nhận] Đặt cọc thành công",
    description:
      "Chúng tôi đã nhận 50.000.000 VND tiền cọc cho căn B257. Quý khách hàng có thể tải hợp đồng hoàn chỉnh tại đây",
    link: "#",
  },
  {
    time: "13:36 26-07-2025",
    type: "info",
    title: "[Nhắc nhở] Chưa hoàn tất thủ tục đặt cọc",
    description:
      "Yêu cầu đặt cọc căn B257 của bạn đã được duyệt. Vui lòng hoàn tất quy trình thanh toán tiền cọc và ký hợp đồng trước 17:00 hôm nay để giữ quyền ưu tiên.",
    link: "#",
  },
  {
    time: "13:36 26-07-2025",
    type: "success",
    title: "[Xác nhận] Đã duyệt hợp đồng đặt cọc",
    description:
      "Hợp đồng của bạn đã được duyệt bởi TĐC. Vui lòng đọc và thực hiện các điều khoản có trong hợp đồng được đính kèm dưới đây",
    link: "#",
  },
  {
    time: "13:36 26-07-2025",
    type: "info",
    title: "[Thông báo] Đang chờ duyệt hợp đồng đặt cọc",
    description:
      "Yêu cầu đặt cọc của bạn đã được gửi cho chủ đầu tư. Chúng tôi sẽ phản hồi sẽ gửi trong vòng 2 ngày tiếp theo",
  },
  {
    time: "13:36 26-07-2025",
    type: "alert",
    title: "[Cảnh báo] Sắp hết hạn giữ chỗ",
    description:
      "Căn A725 của bạn sẽ được giữ đến 21h hôm nay. Sau thời gian này hệ thống sẽ tự động huỷ giữ chỗ nếu chưa đặt cọc",
  },
  {
    time: "13:36 26-07-2025",
    type: "success",
    title: "[Xác nhận] Đặt mua thành công",
    description:
      "Bạn đã giữ chỗ căn A725 thành công với số tiền đặt chỗ tạm tính là 50.000.000 VND. BĐS đang được giữ chỗ trong vòng 24h",
  },
];

const contractData: Contract[] = [
  {
    id: "HD001",
    type: "Hợp đồng mua bán",
    file: "hopdong001.pdf",
    date: "01/01/2025",
    status: "Đã ký",
  },
  {
    id: "HD002",
    type: "Hợp đồng đặt cọc",
    file: "hopdong002.pdf",
    date: "15/12/2024",
    status: "Hoàn tất",
  },
  {
    id: "HD003",
    type: "Hợp đồng chuyển nhượng",
    file: "hopdong003.pdf",
    date: "20/11/2024",
    status: "Đang xử lý",
  },
  {
    id: "HD004",
    type: "Hợp đồng bảo lãnh",
    file: "hopdong004.pdf",
    date: "10/10/2024",
    status: "Đã ký",
  },
  {
    id: "HD005",
    type: "Hợp đồng thanh toán",
    file: "hopdong005.pdf",
    date: "05/09/2024",
    status: "Đã hủy",
  },
];

const paymentProgressData: PaymentProgress[] = [
  {
    phase: "Đợt 1",
    dueDate: "01/09/2024",
    amountDue: "500,000,000 VNĐ",
    paymentPercentage: "17.22%",
    amountPaid: "500,000,000 VNĐ",
    status: "Hoàn tất",
    remainingDebt: "0 VNĐ",
  },
  {
    phase: "Đợt 2",
    dueDate: "01/12/2024",
    amountDue: "500,000,000 VNĐ",
    paymentPercentage: "17.22%",
    amountPaid: "500,000,000 VNĐ",
    status: "Hoàn tất",
    remainingDebt: "0 VNĐ",
  },
  {
    phase: "Đợt 3",
    dueDate: "01/03/2025",
    amountDue: "600,000,000 VNĐ",
    paymentPercentage: "20.66%",
    amountPaid: "0 VNĐ",
    status: "Chưa thanh toán",
    remainingDebt: "600,000,000 VNĐ",
  },
  {
    phase: "Đợt 4",
    dueDate: "01/06/2025",
    amountDue: "600,000,000 VNĐ",
    paymentPercentage: "20.66%",
    amountPaid: "0 VNĐ",
    status: "Chưa thanh toán",
    remainingDebt: "600,000,000 VNĐ",
  },
  {
    phase: "Đợt 5",
    dueDate: "01/09/2025",
    amountDue: "704,000,000 VNĐ",
    paymentPercentage: "24.24%",
    amountPaid: "0 VNĐ",
    status: "Chưa thanh toán",
    remainingDebt: "704,000,000 VNĐ",
  },
];

const paymentHistoryData = [
  {
    id: "TT001",
    content: "Thanh toán đợt 1",
    amount: "500,000,000 VNĐ",
    transactionTime: "01/09/2024 10:30",
    confirmationLink: "001.pdf",
    status: "Hoàn tất",
    paymentMethod: "Chuyển khoản",
  },
  {
    id: "TT002",
    content: "Thanh toán đợt 2",
    amount: "500,000,000 VNĐ",
    transactionTime: "01/12/2024 14:45",
    confirmationLink: "002.pdf",
    status: "Hoàn tất",
    paymentMethod: "Chuyển khoản",
  },
  {
    id: "TT003",
    content: "Thanh toán đặt cọc",
    amount: "50,000,000 VNĐ",
    transactionTime: "15/11/2024 09:15",
    confirmationLink: "003.pdf",
    status: "Hoàn tất",
    paymentMethod: "Tiền mặt",
  },
  {
    id: "TT004",
    content: "Phí bảo trì",
    amount: "10,000,000 VNĐ",
    transactionTime: "20/10/2024 16:20",
    confirmationLink: "004.pdf",
    status: "Đang xử lý",
    paymentMethod: "Chuyển khoản",
  },
  {
    id: "TT005",
    content: "Thanh toán phạt chậm",
    amount: "5,000,000 VNĐ",
    transactionTime: "05/08/2024 11:00",
    confirmationLink: "005.pdf",
    status: "Đã hủy",
    paymentMethod: "Tiền mặt",
  },
];

const getColor = (type: TimelineItem["type"]): string => {
  switch (type) {
    case "success":
      return "text-green-600 border-green-600";
    case "info":
      return "text-blue-600 border-blue-600";
    case "warning":
      return "text-yellow-600 border-yellow-600";
    case "alert":
      return "text-red-600 border-red-600";
    default:
      return "text-gray-600 border-gray-400";
  }
};

// Component mới cho tiêu đề
const OrderTitle: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="info-order-title">
      <span className="info-order-left" onClick={onBack}>
        &lt; Chi tiết căn
      </span>
      <span className="info-order-remaining-time">| Giữ chỗ còn 15 giờ 02 phút</span>
      <span className="info-order-reserve-btn">| Đặt chỗ</span>
    </div>
  );
};

const InfoOrderDetails: React.FC<InfoOrderDetailsProps> = ({ selectedItem, onBack }) => {
  const router = useRouter();
  const item = selectedItem || {
    id: 0,
    management: "",
    code: "N/A",
    project: "N/A",
    price: "3,000,000",
    status: "N/A",
    dateTime: "N/A",
  };

  const priceInfo = {
    originalPrice: item.price || "3,000,000,000 VNĐ",
    totalDiscount: "360,000,000 VNĐ",
    discountedPrice: "2,640,000,000 VNĐ",
    totalPrice: "2,904,000,000 VNĐ",
    paidAmount: "1,000,000,000 VNĐ",
    remainingDebt: "1,904,000,000 VNĐ",
  };

  const customerInfo = {
    fullName: "Trần Văn Khánh",
    cccd: "285501035",
    phone: "0966233290",
    email: "khantran12232003@gmail.com",
    address: "Ấp 8 Nghĩa Trung, huyện Bù Đăng, tỉnh Bình Phước",
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  const handleReviewClick = () => {
    alert("Chức năng Đánh giá / Khiếu nại đang được phát triển!");
  };

  const handleCancelBooking = () => {
    router.push(`/profile/don-hang/${item.id}/huy`);
  };

  return (
    <div className="info-order-container">
      <OrderTitle onBack={onBack} />
      <h2 className="info-order-subtitle text-xl font-semibold text-gray-600 mb-6">Thông tin BĐS</h2>
      
      {/* Phần Thông tin chung */}
      <div className="info-order-content">
        <div className="info-order-left">
          <div className="info-order-item">
            <span className="info-order-label">Mã căn:</span>
            <span className="info-order-value">{item.code}</span>
          </div>
          <div className="info-order-item">
            <span className="info-order-label">Dự án:</span>
            <span className="info-order-value">{item.project}</span>
          </div>
          <div className="info-order-item">
            <span className="info-order-label">Phân khu:</span>
            <span className="info-order-value">{item.code.split(":")[1]?.trim() || "N/A"}</span>
          </div>
          <div className="info-order-item">
            <span className="info-order-label">Tầng:</span>
            <span className="info-order-value">{item.code.split(":")[0]?.trim() || "N/A"}</span>
          </div>
          <div className="info-order-item">
            <span className="info-order-label">Trạng thái:</span>
            <span className="info-order-value">{item.status}</span>
          </div>
          {isExpanded && (
            <>
              <div className="info-order-item">
                <span className="info-order-label">Giá:</span>
                <span className="info-order-value">{item.price}</span>
              </div>
              <div className="info-order-item">
                <span className="info-order-label">Tiến độ thanh toán:</span>
                <span className="info-order-value">{item.paymentProgress || "N/A"}</span>
              </div>
            </>
          )}
          <button 
            className="info-order-more-btn" 
            onClick={toggleExpand}
          >
            {isExpanded ? "Thu gọn" : "Xem thêm"}
          </button>
        </div>
        <div className="info-order-right">
          <div className="info-order-image-container">
            <Image
              src={Slide1}
              alt="Property"
              className="info-order-image"
            />
            <div className="info-order-actions">
              <button 
                className="info-order-review-btn"
                onClick={handleReviewClick}
              >
                Đánh giá / Khiếu nại
              </button>
              <button 
                className="info-order-cancel-btn"
                onClick={handleCancelBooking}
              >
                Hủy đặt chỗ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Phần Giá bán và thanh toán */}
      <div className="info-order-price-section">
        <h3>Giá bán và thanh toán</h3>
        <div className="info-order-price-columns">
          <div className="info-order-price-left">
            <div>
              <div className="info-order-price-item">
                <span className="info-order-price-label">Giá gốc:</span>
                <span className="info-order-price-value">{priceInfo.originalPrice}</span>
              </div>
            </div>
            <hr className="info-order-price-divider" />
            <div>
              <div className="info-order-price-item">
                <span className="info-order-price-label">Tổng chiết khấu:</span>
                <span className="info-order-price-value">{priceInfo.totalDiscount}</span>
              </div>
              <div className="info-order-price-note">
                <p>Ưu đãi 11% khi khách hàng chọn thanh toán sớm</p>
                <p>Ưu đãi 3,5% chương trình “Quà Tặng Tân Gia”</p>
              </div>
            </div>
            <hr className="info-order-price-divider" />
            <div>
              <div className="info-order-price-item">
                <span className="info-order-price-label">Giá sau chiết khấu:</span>
                <span className="info-order-price-value">{priceInfo.discountedPrice}</span>
              </div>
              <div className="info-order-price-note">
                <p>Giá sau chiết khấu (chưa bao gồm VAT & KPBT)</p>
              </div>
            </div>
            <hr className="info-order-price-divider" />
          </div>
          <div className="info-order-price-right">
            <div>
              <div className="info-order-price-item">
                <span className="info-order-price-label">Tổng giá:</span>
                <span className="info-order-price-value">{priceInfo.totalPrice}</span>
              </div>
              <div className="info-order-price-note">
                <p>Tổng giá đã bao gồm VAT & KPBT</p>
              </div>
            </div>
            <hr className="info-order-price-divider" />
            <div>
              <div className="info-order-price-item">
                <span className="info-order-price-label">Đã thanh toán:</span>
                <span className="info-order-price-value">{priceInfo.paidAmount}</span>
              </div>
              <div className="info-order-price-note">
                <p>Đã thanh toán (đợt 1 & 2)</p>
              </div>
            </div>
            <hr className="info-order-price-divider" />
            <div>
              <div className="info-order-price-item">
                <span className="info-order-price-label">Dư nợ còn:</span>
                <span className="info-order-price-value">{priceInfo.remainingDebt}</span>
              </div>
            </div>
            <hr className="info-order-price-divider" />
          </div>
        </div>
      </div>

      {/* Phần OrderTimeline */}
      <div className="info-order-timeline-section">
        <div className="flex w-full p-6 gap-10">
          {/* Left Panel */}
          <div className="w-1/3 text-sm">
            <h2 className="text-xl font-bold mb-4">Thông tin đơn hàng</h2>
            <p className="font-semibold">{customerInfo.fullName}</p>
            <p>{customerInfo.cccd}</p>
            <p>{customerInfo.phone}</p>
            <p>{customerInfo.email}</p>
            <p>{customerInfo.address}</p>
          </div>

          {/* Right Panel */}
          <div className="relative w-2/3 pl-6 border-l-2 border-gray-300">
            {timelineData.map((item, index) => (
              <div key={index} className="mb-8 relative">
                <div className="info-order-timeline-header flex items-center gap-4">
                  <div className="text-xs text-gray-500">{item.time}</div>
                  <div className="absolute -left-3 text-blue-600">
                    <GiNotebook size={18} />
                  </div>
                  <div className={`font-semibold ${getColor(item.type)}`}>{item.title}</div>
                </div>
                <div className="info-order-timeline-description flex items-center gap-4">
                  <div className={`absolute -left-3 ${item.type === "alert" ? "text-yellow-600" : "text-green-600"}`}>
                    {item.type === "alert" ? <MdWarning size={16} /> : <FaCheckCircle size={16} />}
                  </div>
                  <div className="text-sm text-gray-800 description-align">
                    {item.description}
                    {item.link && (
                      <>
                        {" "}
                        <a href={item.link} className="text-green-500 underline">
                          link HĐĐC
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phần Hợp đồng và Thanh toán */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-600 mb-4">Hợp đồng và Thanh toán</h3>
        <div className="profile-price-info-buttons">
          <button
            className={`profile-price-info-button ${selectedButton === "Hợp đồng liên quan" ? "profile-price-info-button-active" : ""}`}
            onClick={() => handleButtonClick("Hợp đồng liên quan")}
          >
            Hợp đồng liên quan
          </button>
          <button
            className={`profile-price-info-button ${selectedButton === "Tiến độ thanh toán" ? "profile-price-info-button-active" : ""}`}
            onClick={() => handleButtonClick("Tiến độ thanh toán")}
          >
            Tiến độ thanh toán
          </button>
          <button
            className={`profile-price-info-button ${selectedButton === "Lịch sử thanh toán" ? "profile-price-info-button-active" : ""}`}
            onClick={() => handleButtonClick("Lịch sử thanh toán")}
          >
            Lịch sử thanh toán
          </button>
        </div>
        <ContractTables
          selectedButton={selectedButton}
          contractData={contractData}
          paymentProgressData={paymentProgressData}
          paymentHistoryData={paymentHistoryData}
        />
      </div>
    </div>
  );
};

export default InfoOrderDetails;