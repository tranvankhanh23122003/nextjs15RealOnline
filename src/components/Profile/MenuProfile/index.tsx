"use client";

import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronDown, FaBars } from "react-icons/fa";
import Slide1 from "../../../../public/images/baner1.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuProps {
  categories: string[];

  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({
  selectedCategory,
  setSelectedCategory,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({
    "Quản lý căn": false,
    "Thông báo": false,
    "Quản lý yêu cầu": false,
    "Quản lý thông tin tài khoản": false,
  });
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Sync menu open state with localStorage
  useEffect(() => {
    const saved = localStorage.getItem("isMenuOpen");
    if (saved !== null) setIsMenuOpen(saved === "true");
  }, [setIsMenuOpen]);

  useEffect(() => {
    localStorage.setItem("isMenuOpen", isMenuOpen.toString());
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMenuOpen(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMenuOpen]);

  // Mở submenu chứa selectedCategory
  useEffect(() => {
    setExpanded({
      "Quản lý căn": ["Đơn hàng", "Đã xem", "Yêu thích"].includes(selectedCategory),
      "Thông báo": ["Cập nhật đơn hàng", "Khuyến mãi"].includes(selectedCategory),
      "Quản lý yêu cầu": ["Danh sách lịch hẹn", "Danh sách yêu cầu"].includes(selectedCategory),
      "Quản lý thông tin tài khoản": ["Thông tin tài khoản", "Thay đổi mật khẩu"].includes(selectedCategory),
    });
  }, [selectedCategory]);

  const toggleExpand = (category: string) => {
    setExpanded((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSelectCategory = (item: string) => {
    setSelectedCategory(item);
    if (isMobile) setIsMenuOpen(false);
  };

  return (
    <div className={`profile-menu-container ${isMenuOpen ? "" : "collapsed"}`}>
      <div className="profile-menu-header">
        {isMobile && <FaBars className="hamburger-icon" onClick={toggleMenu} />}
        {isMenuOpen && (
          <>
            <Image src={Slide1} alt="User" className="profile-menu-avatar profile-menu-avatar-small" />
            <div>
              <h2 className="profile-menu-title">Trần Văn Khánh</h2>
              <span className="profile-menu-position">Member</span>
            </div>
          </>
        )}
      </div>

      {isMenuOpen && (
        <div className="profile-menu-section">
          {/* Quản lý căn */}
          <div className="profile-menu-item" onClick={() => toggleExpand("Quản lý căn")}>
            <span className="profile-menu-item-text">Quản lý căn</span>
            {expanded["Quản lý căn"] ? <FaChevronDown /> : <FaChevronRight />}
          </div>
          {expanded["Quản lý căn"] && (
            <div className="profile-submenu">
              <Link href="/profile/don-hang" className={`profile-submenu-item ${selectedCategory === "Đơn hàng" ? "active" : ""}`} onClick={() => handleSelectCategory("Đơn hàng")}>Đơn hàng</Link>
              <Link href="/profile/da-xem" className={`profile-submenu-item ${selectedCategory === "Đã xem" ? "active" : ""}`} onClick={() => handleSelectCategory("Đã xem")}>Đã xem</Link>
              <Link href="/profile/yeu-thich" className={`profile-submenu-item ${selectedCategory === "Yêu thích" ? "active" : ""}`} onClick={() => handleSelectCategory("Yêu thích")}>Yêu thích</Link>
            </div>
          )}

          {/* Thông báo */}
          <div className="profile-menu-item" onClick={() => toggleExpand("Thông báo")}>
            <span className="profile-menu-item-text">Thông báo</span>
            {expanded["Thông báo"] ? <FaChevronDown /> : <FaChevronRight />}
          </div>
          {expanded["Thông báo"] && (
            <div className="profile-submenu">
              <Link href="/profile/cap-nhat-don-hang " className={`profile-submenu-item ${selectedCategory === "Cập nhật đơn hàng" ? "active" :""}`} onClick={()=> handleSelectCategory("Cập nhật đơn hàng")}>Cập nhật đơn hàng</Link>
              <Link href="/profile/khuyen-mai " className={`profile-submenu-item ${selectedCategory === "Khuyến mãi" ? "active" :""}`} onClick={()=> handleSelectCategory("Khuyến mãi")}>Khuyến mãi</Link>

          
            </div>
          )}

          {/* Quản lý yêu cầu */}
          <div className="profile-menu-item" onClick={() => toggleExpand("Quản lý yêu cầu")}>
            <span className="profile-menu-item-text">Quản lý yêu cầu</span>
            {expanded["Quản lý yêu cầu"] ? <FaChevronDown /> : <FaChevronRight />}
          </div>
          {expanded["Quản lý yêu cầu"] && (
            <div className="profile-submenu">
              <Link href="/profile/danh-sach-lich-hen" className={`profile-submenu-item ${selectedCategory === "Danh sách lịch hẹn" ? "active" :""}`} onClick={()=>handleSelectCategory("Danh sách lịch hẹn")}>Danh sách lịch hẹn</Link>
              <Link href="/profile/danh-sach-yeu-cau" className={`profile-submenu-item ${selectedCategory === "Danh sách yêu cầu" ? "active" :""}`} onClick={()=>handleSelectCategory("Danh sách yêu cầu")}>Danh sách yêu cầu</Link>
            </div>
          )}

          {/* Quản lý thông tin tài khoản */}
          <div className="profile-menu-item" onClick={() => toggleExpand("Quản lý thông tin tài khoản")}>
            <span className="profile-menu-item-text">Quản lý thông tin tài khoản</span>
            {expanded["Quản lý thông tin tài khoản"] ? <FaChevronDown /> : <FaChevronRight />}
          </div>
          {expanded["Quản lý thông tin tài khoản"] && (
            <div className="profile-submenu">
              <Link href="/profile/thong-tin-tai-khoan" className={`profile-submenu-item ${selectedCategory === "Thông tin tài khoản" ? "active" : ""}`} onClick={() => handleSelectCategory("Thông tin tài khoản")}>Thông tin tài khoản</Link>
              <Link href="/profile/thay-doi-mat-khau" className={`profile-submenu-item ${selectedCategory === "Thay đổi mật khẩu" ? "active" : ""}`} onClick={() => handleSelectCategory("Thay đổi mật khẩu")}>Thay đổi mật khẩu</Link>
            </div>
          )}

          <div className="profile-menu-logout" onClick={() => alert("Đăng xuất")}>Đăng xuất</div>
        </div>
      )}
    </div>
  );
};

export default Menu;
