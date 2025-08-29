"use client";
import React, { useState } from "react";
import Menu from "@/components/Profile/MenuProfile";
import "../../styles/profile.css"; 
import "../../components/Profile/MenuProfile/MenuProfile.css"; 
import "../../components/Profile/TabDaXem/TabDaXem.css";
import "../../components/Profile/TabYeuThich/TabYeuThich.css";
import "../../components/Profile/QuanLyThongBao/QuanLyThongBao.css"
import "../../components/Profile/ThongTinTaiKhoan/ThongTinTaiKhoan.css"
import "../../components/Profile/ThayDoiMatKhau/ThayDoiMatKhau.css"
import "../../components/Profile/MucDanhSachLichHen/DanhSachLichHen.css"
import "../../components/Profile/MucDanhSachYeuCau/DanhSachYeuCau.css"
export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const categories = [
    "Đơn hàng",
    "Đã xem",
    "Yêu thích",
    "Cập nhật đơn hàng",
    "Khuyến mãi",
    "Thông tin tài khoản",
    "Thay đổi mật khẩu",
    "Danh sách yêu cầu",
    "Danh sách lịch hẹn"
  ];

  return (
    <div className="profile-container">
      <Menu 
        categories={categories}
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Nội dung page */}
      <div className={`profile-content ${isMenuOpen ? "" : "collapsed"}`}>
        {children}
        <h1></h1>
      </div>
    </div>
  );
}
