"use client";

import { useState, useEffect } from "react";
import Table from "@/components/Profile/DanhSach_BDS";
import SearchBar from "@/components/Profile/TimKiem";
import Header from "@/components/Profile/Header";
import ProjectGridBDS from "@/components/Profile/PropertyGrid_BDS";
import ProjectGridTDC from "@/components/Profile/PropertyGrid_TDS";
import InfoAccount from "@/components/Profile/ThongTinTaiKhoan";
import ChangePassword from "@/components/Profile/ThayDoiMatKhau";
import RequestList from "@/components/Profile/MucDanhSachYeuCau";
import AppointmentList from "@/components/Profile/MucDanhSachLichHen";
import OrderDetail from "@/components/Profile/CapNhatDonHang";
import InfoOrderDetails from "@/components/Profile/ThongTinChiTietDonHang";
import NotificationManager from "@/components/Profile/QuanLyThongBao";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Slide1 from "../../../public/images/baner1.png";
import { StaticImageData } from "next/image";

const Profile = () => {
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

  type AppointmentItem = {
    id: number;
    appointment: string;
    location: string;
    createdTime: string;
    consultationTime: string;
    status: string;
  };

  type RequestItem = {
    id: number;
    requestCode: string;
    requestType: string;
    createdTime: string;
    consultationTime: string;
    status: string;
  };

  type PropertyCard = {
    id: number;
    price: string;
    rating: number;
    description: string;
    bedrooms: number;
    area: string;
    address: string;
    image: StaticImageData;
  };

  type Notification = {
    id: string;
    title: string;
    description: string;
    date: string;
    status: "active" | "expired";
    image: StaticImageData;
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState<CanItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 3;

  const [accountInfo] = useState({
    fullName: "Trần Văn Khánh",
    birthDate: "2003-12-23",
    gender: "Nam",
    address: "123 Đường Láng, Đống Đa, Hà Nội",
    phone: "0901234567",
    email: "khantran12232003@gmail.com",
  });

  const [data, setData] = useState<CanItem[]>(() =>
    [
      { id: 1, management: "Quản lý căn 1", code: "A5-02: Block A", project: "GreenLand Riverside", price: "2.500.000", status: "Đang giữ chỗ", dateTime: "2025-07-20 14:00" },
      { id: 2, management: "Quản lý căn 2", code: "A5-03: Block B", project: "Sunshine City", price: "3.000.000", status: "Đã hủy", dateTime: "2025-07-19 09:30" },
    ].map((item) => ({
      ...item,
      paymentProgress:
        item.status === "Đã mua"
          ? ["0/3", "1/3", "2/3", "3/3"][Math.floor(Math.random() * 4)]
          : undefined,
    }))
  );

  const [appointmentData] = useState<AppointmentItem[]>([
    { id: 1, appointment: "LH001", location: "Trụ sở chính", createdTime: "2025-07-25 14:00", consultationTime: "2025-07-26 10:00", status: "Chờ xác nhận" },
    { id: 2, appointment: "LH002", location: "Chi nhánh Hà Nội", createdTime: "2025-07-24 09:30", consultationTime: "2025-07-25 14:00", status: "Đã hoàn thành" },
    { id: 3, appointment: "LH003", location: "Văn phòng TP.HCM", createdTime: "2025-07-23 11:15", consultationTime: "2025-07-24 15:00", status: "Đã xác nhận" },
    { id: 4, appointment: "LH004", location: "Chi nhánh Đà Nẵng", createdTime: "2025-07-22 16:45", consultationTime: "2025-07-23 09:00", status: "Đã hủy" },
    { id: 5, appointment: "LH005", location: "Trụ sở phụ", createdTime: "2025-07-21 08:20", consultationTime: "2025-07-22 13:00", status: "Đã hoàn thành" },
  ]);

  const [requestData, setRequestData] = useState<RequestItem[]>([
    {
      id: 1,
      requestCode: "23844",
      requestType: "Hỗ trợ kỹ thuật",
      createdTime: "2025-07-25 14:00",
      consultationTime: "2025-07-26 10:00",
      status: "Đang xử lý",
    },
    {
      id: 2,
      requestCode: "23845",
      requestType: "Khiếu nại",
      createdTime: "2025-07-24 09:30",
      consultationTime: "2025-07-25 14:00",
      status: "Đã hủy",
    },
    {
      id: 3,
      requestCode: "23846",
      requestType: "Tư vấn sản phẩm",
      createdTime: "2025-07-23 11:15",
      consultationTime: "2025-07-24 15:00",
      status: "Chưa xử lý",
    },
    {
      id: 4,
      requestCode: "23847",
      requestType: "Hỗ trợ thanh toán",
      createdTime: "2025-07-22 16:45",
      consultationTime: "2025-07-23 09:00",
      status: "Đã xử lý",
    },
    {
      id: 5,
      requestCode: "23848",
      requestType: "Đăng ký dịch vụ",
      createdTime: "2025-07-21 08:20",
      consultationTime: "2025-07-22 13:00",
      status: "Hoàn thành",
    },
  ]);

  const [propertyData] = useState<PropertyCard[]>([
    { id: 1, price: "18.42 tỷ", rating: 5, description: "Sổ hồng riêng xây dựng", bedrooms: 5, area: "84.00 m²", address: "Trụ sở chính", image: Slide1 },
    { id: 2, price: "20.00 tỷ", rating: 4, description: "Nhà phố hiện đại", bedrooms: 4, area: "100.00 m²", address: "Chi nhánh Hà Nội", image: Slide1 },
    { id: 3, price: "15.50 tỷ", rating: 5, description: "Căn hộ cao cấp", bedrooms: 3, area: "70.00 m²", address: "Văn phòng TP.HCM", image: Slide1 },
    { id: 4, price: "22.00 tỷ", rating: 3, description: "Biệt thự biển", bedrooms: 6, area: "150.00 m²", address: "Chi nhánh Đà Nẵng", image: Slide1 },
    { id: 5, price: "17.80 tỷ", rating: 4, description: "Nhà phố thương mại", bedrooms: 5, area: "90.00 m²", address: "Trụ sở phụ", image: Slide1 },
  ]);

  const [notifications] = useState<Notification[]>([
    {
      id: "KM001",
      title: "Ưu đãi 10% cho căn hộ mới",
      description: "Giảm 10% giá trị căn hộ nếu thanh toán trong vòng 7 ngày. Đặt mua ngay!",
      date: "2025-07-25",
      status: "active",
      image: Slide1,
    },
    {
      id: "KM002",
      title: "Lịch hẹn xác nhận",
      description: "Lịch hẹn của bạn đã được xác nhận. Vui lòng kiểm tra chi tiết.",
      date: "2025-07-24",
      status: "active",
      image: Slide1,
    },
    {
      id: "KM003",
      title: "Cập nhật chính sách",
      description: "Chính sách thanh toán mới đã được cập nhật. Xem chi tiết ngay!",
      date: "2025-07-23",
      status: "expired",
      image: Slide1,
    },
  ]);

  // Gọi API khi component mount
  useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch("/api/requests");
  //       if (!response.ok) {
  //         throw new Error("Không thể lấy dữ liệu yêu cầu");
  //       }
  //       const apiRequestData: RequestItem[] = await response.json();
  //       setRequestData(apiRequestData);

  //       setLoading(false);
  //     } catch (err) {
  //       setError(err instanceof Error ? err.message : "Đã xảy ra lỗi");
  //       setLoading(false);s
  //     }
  //   }

  //   fetchData();
    setLoading(false);
  }, []);

  const filteredData = data.filter(
    (item) =>
      (selectedCategory === "Tất cả" || item.status === selectedCategory) &&
      (selectedStatus === "" || item.status === selectedStatus) &&
      item.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleReviewClick = (item: CanItem) => {
    setSelectedItem(item);
    setShowReviewForm(true);
  };

  const handleBackToList = () => {
    setShowReviewForm(false);
    setSelectedItem(null);
  };

  const toggleStateData = Array.from({ length: 16 }, (_, index) => ({
    id: index + 1,
    price: "18.42 tỷ",
    rating: 5,
    description: "Sổ hồng riêng xây dựng",
    bedrooms: 5,
    area: "84.00 m²",
    address: "Căn 01, Nhà liền kề, Khu A, Dự án Concorde",
    image: "https://via.placeholder.com/300",
  }));

  const projectProperties = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    name: "Khu biệt thự cao cấp Concorde",
    area: "Diện tích từ 175-220 m²",
    price: "175.000.000đ",
    address: "Phường Nghĩa xa Số 16 Nj Phước 8",
    image: "https://via.placeholder.com/300",
    isHot: true,
  }));

  const [toggleState, setToggleState] = useState("Bất động sản");

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (error) {
    return <div>Lỗi: {error}</div>;
  }

  return (
    <div className="profile-content">
      {selectedCategory === "" && (
        <div className="profile-placeholder-text">
          Vui lòng chọn vào mục menu để xem chi tiết
        </div>
      )}
      {selectedCategory !== "" && (
        <>
          {showReviewForm ? (
            <InfoOrderDetails
              selectedItem={selectedItem}
              onBack={handleBackToList}
            />
          ) : selectedCategory === "Cập nhật đơn hàng" ? (
            <OrderDetail selectedItem={selectedItem} data={data} />
          ) : selectedCategory === "Đã xem" ? (
            <>
              <h1 className="profile-title">Đã Xem</h1>
              <ProjectGridBDS properties={toggleStateData} />
            </>
          ) : selectedCategory === "Yêu thích" ? (
            <>
              <h1 className="profile-title">Yêu Thích</h1>
              <div className="profile-toggle-container">
                <button
                  className={`profile-toggle-btn ${toggleState === "Bất động sản" ? "profile-toggle-btn-active" : ""}`}
                  onClick={() => setToggleState("Bất động sản")}
                >
                  Bất động sản
                </button>
                <button
                  className={`profile-toggle-btn ${toggleState === "Dự án" ? "profile-toggle-btn-active" : ""}`}
                  onClick={() => setToggleState("Dự án")}
                >
                  Dự án
                </button>
              </div>
              {toggleState === "Bất động sản" ? (
                <ProjectGridBDS properties={toggleStateData} />
              ) : (
                <ProjectGridTDC projects={projectProperties} />
              )}
            </>
          ) : selectedCategory === "Thông tin tài khoản" ? (
            <InfoAccount initialAccountInfo={accountInfo} />
          ) : selectedCategory === "Thay đổi mật khẩu" ? (
            <ChangePassword />
          ) : selectedCategory === "Danh sách yêu cầu" ? (
            <RequestList data={requestData} propertyData={propertyData} />
          ) : selectedCategory === "Danh sách lịch hẹn" ? (
            <AppointmentList data={appointmentData} propertyData={propertyData} />
          ) : selectedCategory === "Khuyến mãi" ? (
            <NotificationManager notifications={notifications} />
          ) : (
            <>
              <Header
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                data={data}
                setData={setData}
              />
              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedCategory={selectedCategory}
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
              />
              <Table
                data={currentItems}
                setSelectedItem={setSelectedItem}
                selectedCategory={selectedCategory}
                onReviewClick={handleReviewClick}
                onViewDetails={() => {}}
              />
              <div className="profile-pagination-container">
                <button
                  className="profile-pagination-btn"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeftIcon className="profile-icon" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      className={`profile-pagination-btn ${
                        currentPage === page ? "profile-active-page" : ""
                      }`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  )
                )}
                <button
                  className="profile-pagination-btn"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRightIcon className="profile-icon" />
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Profile;