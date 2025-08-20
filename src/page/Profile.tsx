"use client";

import { useState, useEffect } from "react";
import Table from "../components/Profile/DanhSach_BDS";
import SearchBar from "../components/Profile/TimKiem";
import Header from "../components/Profile/Header";
import Menu from "../components/Profile/MenuProfile";
import ProjectGridBDS from "../components/Profile/PropertyGrid_BDS";
import ProjectGridTDC from "../components/Profile/PropertyGrid_TDS";
import InfoAccount from "../components/Profile/ThongTinTaiKhoan";
import ChangePassword from "../components/Profile/ThayDoiMatKhau";
import RequestList from "../components/Profile/MucDanhSachYeuCau";
import AppointmentList from "../components/Profile/MucDanhSachLichHen";
import OrderDetail from "../components/Profile/OrderDetail";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

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

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState<CanItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const [data, setData] = useState<CanItem[]>(() =>
    [
      { id: 1, management: "Quản lý căn 1", code: "A5-02: Block A", project: "GreenLand Riverside", price: "2.500.000", status: "Đang giữ chỗ", dateTime: "2025-07-20 14:00" },
      { id: 2, management: "Quản lý căn 2", code: "A5-03: Block B", project: "Sunshine City", price: "3.000.000", status: "Đã hủy", dateTime: "2025-07-19 09:30" },
      { id: 3, management: "Quản lý căn 3", code: "A6-01: Block C", project: "Riverfront Park", price: "2.800.000", status: "Đã gia hạn", dateTime: "2025-07-21 11:15" },
      { id: 4, management: "Quản lý căn 4", code: "B1-02: Block D", project: "Golden Tower", price: "3.500.000", status: "Đang cọc", dateTime: "2025-07-18 16:45" },
      { id: 5, management: "Quản lý căn 5", code: "B2-03: Block E", project: "Sky Garden", price: "2.700.000", status: "Chờ duyệt", dateTime: "2025-07-22 08:20" },
      { id: 6, management: "Quản lý căn 6", code: "C1-01: Block F", project: "Ocean View", price: "3.200.000", status: "Đã ký HĐMB", dateTime: "2025-07-17 13:10" },
      { id: 7, management: "Quản lý căn 7", code: "C2-02: Block G", project: "Mountain Retreat", price: "2.900.000", status: "Đã bàn giao", dateTime: "2025-07-16 15:30" },
      { id: 8, management: "Quản lý căn 8", code: "D1-03: Block H", project: "City Heights", price: "3.100.000", status: "Đã mua", dateTime: "2025-07-15 10:00", paymentProgress: "1/3" },
      { id: 9, management: "Quản lý căn 9", code: "D2-01: Block I", project: "Lakefront Villa", price: "2.600.000", status: "Đã mua", dateTime: "2025-07-14 12:45", paymentProgress: "3/3" },
      { id: 10, management: "Quản lý căn 10", code: "A5-04: Block A", project: "GreenLand Riverside", price: "2.600.000", status: "Đang giữ chỗ", dateTime: "2025-07-20 15:00" },
      { id: 11, management: "Quản lý căn 11", code: "A5-05: Block B", project: "Sunshine City", price: "3.100.000", status: "Đã gia hạn", dateTime: "2025-07-19 10:30" },
      { id: 12, management: "Quản lý căn 12", code: "B1-03: Block D", project: "Golden Tower", price: "3.600.000", status: "Đang cọc", dateTime: "2025-07-18 17:45" },
      { id: 13, management: "Quản lý căn 13", code: "A5-06: Block A", project: "GreenLand Riverside", price: "2.550.000", status: "Đang giữ chỗ", dateTime: "2025-07-20 16:00" },
      { id: 14, management: "Quản lý căn 14", code: "B1-04: Block D", project: "Golden Tower", price: "3.520.000", status: "Đang cọc", dateTime: "2025-07-18 18:00" },
    ].map((item) => ({
      ...item,
      paymentProgress:
        item.status === "Đã mua"
          ? ["0/3", "1/3", "2/3", "3/3"][Math.floor(Math.random() * 4)]
          : undefined,
    }))
  );

  const categories = ["Tất cả", "Giữ chỗ", "Đã cọc", "Đã mua", "Chuyển nhượng", "Đã xem", "Yêu thích", "Bất động sản", "Thông tin tài khoản", "Thay đổi mật khẩu", "Danh sách yêu cầu", "Danh sách lịch hẹn", "Cập nhật đơn hàng"];

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

  const newSectionData = selectedItem
    ? `Chi tiết: Mã căn: ${selectedItem.code}, Dự án: ${selectedItem.project}, Giá: ${selectedItem.price}, Ngày giờ: ${selectedItem.dateTime}, Trạng thái: ${selectedItem.status}, Tiến độ thanh toán: ${selectedItem.paymentProgress || "N/A"}`
    : "";

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const viewedProperties = Array.from({ length: 16 }, (_, index) => ({
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

  useEffect(() => {
    console.log("Selected category:", selectedCategory);
    if (selectedCategory === "Bất động sản") {
      setSelectedCategory("Tất cả");
    }
  }, [selectedCategory]);

  return (
    <div className="flex h-screen">
      <Menu
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="flex-1 p-4 w-3/4 overflow-y-auto">
        {selectedCategory === "" && (
          <div className="text-center text-gray-500">
            Vui lòng chọn vào mục menu để xem chi tiết
          </div>
        )}
        {selectedCategory !== "" && (
          <>
            {selectedCategory === "Cập nhật đơn hàng" ? (
              <OrderDetail selectedItem={selectedItem} data={data} />
            ) : selectedCategory === "Đã xem" ? (
              <>
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Đã Xem</h1>
                <ProjectGridBDS properties={viewedProperties} />
              </>
            ) : selectedCategory === "Yêu thích" ? (
              <>
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Yêu Thích</h1>
                <div className="mb-6 ml-6 w-fit border border-gray-300 rounded-lg overflow-hidden flex">
                  <button
                    className={`px-4 py-1.5 text-sm font-medium ${
                      toggleState === "Bất động sản"
                        ? "bg-[#1B3459] text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setToggleState("Bất động sản")}
                  >
                    Bất động sản
                  </button>
                  <button
                    className={`px-4 py-1.5 text-sm font-medium ${
                      toggleState === "Dự án"
                        ? "bg-[#1B3459] text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setToggleState("Dự án")}
                  >
                    Dự án
                  </button>
                </div>
                {toggleState === "Bất động sản" ? (
                  <ProjectGridBDS properties={viewedProperties} />
                ) : (
                  <ProjectGridTDC projects={projectProperties} />
                )}
              </>
            ) : selectedCategory === "Thông tin tài khoản" ? (
              <InfoAccount />
            ) : selectedCategory === "Thay đổi mật khẩu" ? (
              <ChangePassword />
            ) : selectedCategory === "Danh sách yêu cầu" ? (
              <RequestList />
            ) : selectedCategory === "Danh sách lịch hẹn" ? (
              <AppointmentList />
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
                />
              </>
            )}
            {selectedItem && selectedCategory !== "Cập nhật đơn hàng" && (
              <div className="mt-4 p-4 bg-gray-100 rounded">
                <h3 className="text-lg font-bold">Chi tiết</h3>
                <p>{newSectionData}</p>
                <button
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={() => setSelectedItem(null)}
                >
                  Đóng
                </button>
              </div>
            )}
            {selectedCategory !== "Đã xem" &&
              selectedCategory !== "Yêu thích" &&
              selectedCategory !== "Thông tin tài khoản" &&
              selectedCategory !== "Thay đổi mật khẩu" &&
              selectedCategory !== "Danh sách yêu cầu" &&
              selectedCategory !== "Danh sách lịch hẹn" &&
              selectedCategory !== "Cập nhật đơn hàng" && (
                <div className="mt-4 flex justify-center items-center space-x-2 pb-10">
                  <button
                    className="profile-pagination-btn"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeftIcon className="w-5 h-5" />
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
                    <ChevronRightIcon className="w-5 h-5" />
                  </button>
                </div>
              )}
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;