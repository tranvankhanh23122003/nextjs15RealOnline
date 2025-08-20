"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Import images
import logoImage from "../../assets/images/Logo.png";
import facebookIcon from "../../assets/images/Icon_fb.png";
import youtubeIcon from "../../assets/images/Icon_ytb.png";
import notificationIcon from "../../assets/images/Icon_noti.png";
import questionIcon from "../../assets/images/icon_question.png";
import colorBgIcon from "../../assets/images/Icon_color_bg.png";
import accountIcon from "../../assets/images/Icon_account.png";
import searchIcon from "../../assets/images/Icon_search.png";
import shopIcon from "../../assets/images/Icon_shop.png";
import trellIcon from "../../assets/images/Icon_trello.png";
// Removed react-router-dom import - using Next.js router instead
import Auth_Components from "../Login/Auth_Components";
import SignUp_Components from "../Login/SignUp_Components";

const Header_menu = () => {
  const [isClient, setIsClient] = useState(false);
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const [isLoaiHinhDropdownOpen, setIsLoaiHinhDropdownOpen] = useState(false);
  const [isKhoangGiaDropdownOpen, setIsKhoangGiaDropdownOpen] = useState(false);
  const [isDienTichDropdownOpen, setIsDienTichDropdownOpen] = useState(false);
  const [isThemBoLocDropdownOpen, setIsThemBoLocDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Thay đổi thành true để hiển thị UI đã đăng nhập
  const [userInfo, setUserInfo] = useState({
    name: "Nguyễn Văn A",
    email: "user@example.com"
  });
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Function to close all dropdowns
  const closeAllDropdowns = () => {
    setIsProjectDropdownOpen(false);
    setIsLoaiHinhDropdownOpen(false);
    setIsKhoangGiaDropdownOpen(false);
    setIsDienTichDropdownOpen(false);
    setIsThemBoLocDropdownOpen(false);
  };

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".dropdown-container")) {
        closeAllDropdowns();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleProjectDropdown: () => void = () => {
    closeAllDropdowns();
    setIsProjectDropdownOpen(!isProjectDropdownOpen);
  };

  const toggleLoaiHinhDropdown = () => {
    closeAllDropdowns();
    setIsLoaiHinhDropdownOpen(!isLoaiHinhDropdownOpen);
  };

  const toggleKhoangGiaDropdown = () => {
    closeAllDropdowns();
    setIsKhoangGiaDropdownOpen(!isKhoangGiaDropdownOpen);
  };

  const toggleDienTichDropdown = () => {
    closeAllDropdowns();
    setIsDienTichDropdownOpen(!isDienTichDropdownOpen);
  };

  const toggleThemBoLocDropdown = () => {
    closeAllDropdowns();
    setIsThemBoLocDropdownOpen(!isThemBoLocDropdownOpen);
  };

  const handleSearchClick = () => {
    setIsSearchLoading(true);
    closeAllDropdowns();
    // Small delay to show loading state, then navigate
    setTimeout(() => {
      router.push("/list-bds");
      setIsSearchLoading(false);
    }, 300);
  };

  const handleMobileMenuToggle = () => {
    closeAllDropdowns();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileSearchToggle = () => {
    closeAllDropdowns();
    setIsMobileSearchOpen(!isMobileSearchOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserInfo({ name: "", email: "" });
    // Có thể thêm logic xóa token, redirect, etc.
  };

  const handleLoginSuccess = (userData: { name: string; email: string }) => {
    setIsLoggedIn(true);
    setUserInfo(userData);
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
    // Có thể thêm logic lưu token, redirect, etc.
  };

  if (!isClient) {
    return (
      <div className="w-full bg-[#1B3459]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center">
              <img src={logoImage.src} alt="TDC Logo" className="h-10 lg:h-[68px]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#1B3459]">
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12 text-sm">
            <div className="flex items-center space-x-4 text-white">
              <span className="flex items-center space-x-1">
                <span>Tải ứng dụng</span>
              </span>
              <span>|</span>
              <span className="flex items-center space-x-2">
                <span>Kết nối</span>
                <img src={facebookIcon.src} alt="Facebook" className="w-5 h-5" />
                <img src={youtubeIcon.src} alt="YouTube" className="w-5 h-5" />
              </span>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <span className="flex items-center space-x-1 cursor-pointer hover:text-orange-400">
                <img
                  src={notificationIcon.src}
                  alt="Notification"
                  className="w-5 h-5"
                />
                <span>Thông báo</span>
              </span>
              <span>|</span>
              <span className="flex items-center space-x-1 cursor-pointer hover:text-orange-400">
                <img src={questionIcon.src} alt="Help" className="w-5 h-5" />
                <span>Hỗ trợ</span>
              </span>
              <span>|</span>
              <span className="flex items-center space-x-1 cursor-pointer hover:text-orange-400">
                <img src={colorBgIcon.src} alt="Theme" className="w-5 h-5" />
                <span>Màu nền</span>
              </span>
              
              {!isLoggedIn ? (
                <>
                  <span>|</span>
                  <span className="flex items-center space-x-1 relative">
                    <img src={accountIcon.src} alt="Account" className="w-5 h-5" />
                    <span
                      className="text-red-400 cursor-pointer hover:text-red-300"
                      onClick={() => setIsSignUpOpen(true)}
                    >
                      Đăng ký
                    </span>
                    <SignUp_Components
                      isOpen={isSignUpOpen}
                      onClose={() => setIsSignUpOpen(false)}
                      onSwitchToLogin={() => {
                        setIsSignUpOpen(false);
                        setIsLoginOpen(true);
                      }}
                    />
                    <span>/</span>
                    <div className="relative cursor-pointer">
                      <span 
                        className="hover:text-orange-400"
                        onClick={() => setIsLoginOpen(true)}
                      >
                        Đăng nhập
                      </span>
                      <Auth_Components
                        isOpen={isLoginOpen}
                        onClose={() => setIsLoginOpen(false)}
                        onLoginSuccess={handleLoginSuccess}
                      />
                    </div>
                  </span>
                </>
              ) : (
                <>
                  <span>|</span>
                  <div className="flex items-center space-x-2">
                    {/* Heart icon for favorites */}
                    <button 
                      className="p-1 hover:text-red-400 transition-colors"
                      onClick={() => router.push("/profile")}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 000-6.364 4.5 4.5 0 00-6.364 0L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    
                    {/* User info dropdown */}
                    <div className="relative group">
                      <div className="flex items-center space-x-2 cursor-pointer hover:text-orange-400">
                        <img src={accountIcon.src} alt="Account" className="w-5 h-5" />
                        <span className="max-w-[150px] truncate">{userInfo.name}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      
                      {/* Dropdown menu */}
                      <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="py-2">
                          <div className="px-4 py-2 border-b border-gray-200">
                            <p className="text-sm font-semibold text-gray-900">{userInfo.name}</p>
                            <p className="text-xs text-gray-500 truncate">{userInfo.email}</p>
                          </div>
                          <button
                            onClick={() => router.push("/profile")}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Thông tin tài khoản
                          </button>
                          <button
                            onClick={() => router.push("/profile")}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Quản lý đơn hàng
                          </button>
                          <button
                            onClick={() => router.push("/profile")}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Yêu thích
                          </button>
                          <div className="border-t border-gray-200"></div>
                          <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                          >
                            Đăng xuất
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>  x
      </div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
            <img src={logoImage.src} alt="TDC Logo" className="h-10 lg:h-[68px]" />
          </div>
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <div className="flex">
                <div className="relative dropdown-container">
                  <button
                    onClick={toggleProjectDropdown}
                    className="flex items-center space-x-2 bg-white px-4 py-3 border-r border-gray-300 rounded-l-lg hover:bg-gray-50 focus:outline-none"
                  >
                    <img src={trellIcon.src} alt="trell" className="w-4 h-4" />
                    <span className="text-gray-700">Dự án</span>
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isProjectDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10 border">
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Dự án 1
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Dự án 2
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Dự án 3
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Tìm BĐS theo khu vực hoặc dự án"
                  className="flex-1 px-4 py-3 text-gray-700 bg-white focus:outline-none"
                />
                <button
                  className={`bg-white text-white rounded-r-lg focus:outline-none transition-opacity ${
                    isSearchLoading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:opacity-80"
                  }`}
                  onClick={handleSearchClick}
                  disabled={isSearchLoading}
                >
                  {isSearchLoading ? (
                    <div className="flex items-center justify-center w-[68px] h-[48px]">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#1B3459]"></div>
                    </div>
                  ) : (
                    <img
                      src={searchIcon.src}
                      alt="Search"
                      className="w-[68px] h-[48px]"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Right Side */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Mobile Search Toggle */}
            <button
              onClick={handleMobileSearchToggle}
              className="p-2 text-white hover:text-orange-400"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Mobile Cart */}
            <button className="relative p-2" onClick={() => router.push("/gio-hang")}>
              <img src={shopIcon.src} alt="Shopping Cart" className="w-8 h-8" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={handleMobileMenuToggle}
              className="p-2 text-white hover:text-orange-400"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center pr-16">
            <button className="relative p-2" onClick={() => router.push("/gio-hang")}>
              <img src={shopIcon.src} alt="Shopping Cart" className="w-12 h-12" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isMobileSearchOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex">
              <input
                type="text"
                placeholder="Tìm BĐS theo khu vực hoặc dự án"
                className="flex-1 px-4 py-3 text-gray-700 bg-white rounded-l-lg focus:outline-none"
              />
              <button
                className={`px-4 py-3 bg-orange-500 text-white rounded-r-lg focus:outline-none transition-colors ${
                  isSearchLoading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-orange-600"
                }`}
                onClick={handleSearchClick}
                disabled={isSearchLoading}
              >
                {isSearchLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 h-16 pl-[420px]">
            <div className="relative dropdown-container">
              <button
                onClick={toggleLoaiHinhDropdown}
                className="flex items-center space-x-1 text-white hover:text-orange-400 focus:outline-none"
              >
                <span>Loại hình</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isLoaiHinhDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10 border">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Căn hộ
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Nhà phố
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Biệt thự
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Đất nền
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Khoảng giá */}
            <div className="relative dropdown-container">
              <button
                onClick={toggleKhoangGiaDropdown}
                className="flex items-center space-x-1 text-white hover:text-orange-400 focus:outline-none"
              >
                <span>Khoảng giá</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isKhoangGiaDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10 border">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Dưới 1 tỷ
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      1 - 3 tỷ
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      3 - 5 tỷ
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Trên 5 tỷ
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Diện tích */}
            <div className="relative dropdown-container">
              <button
                onClick={toggleDienTichDropdown}
                className="flex items-center space-x-1 text-white hover:text-orange-400 focus:outline-none"
              >
                <span>Diện tích</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDienTichDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10 border">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Dưới 50m²
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      50 - 80m²
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      80 - 120m²
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Trên 120m²
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Thêm bộ lọc */}
            <div className="relative dropdown-container">
              <button
                onClick={toggleThemBoLocDropdown}
                className="flex items-center space-x-1 text-white hover:text-orange-400 focus:outline-none"
              >
                <span>Thêm bộ lọc</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isThemBoLocDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10 border">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Hướng nhà
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Số phòng ngủ
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Số phòng tắm
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Đã bàn giao
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#1B3459] border-t border-gray-600">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Account Section */}
            <div className="border-b border-gray-600 pb-4 mb-4">
              {!isLoggedIn ? (
                <>
                  <div className="flex items-center space-x-2 text-white mb-3">
                    <img src={accountIcon.src} alt="Account" className="w-5 h-5" />
                    <div className="relative cursor-pointer">
                      <span
                        className="text-red-400 cursor-pointer"
                        onClick={() => setIsSignUpOpen(true)}
                      >
                        Đăng ký
                      </span>
                      <SignUp_Components
                        isOpen={isSignUpOpen}
                        onClose={() => setIsSignUpOpen(false)}
                        onSwitchToLogin={() => {
                          setIsSignUpOpen(false);
                          setIsLoginOpen(true);
                        }}
                      />
                      <span>/</span>
                    </div>
                    <div className="relative cursor-pointer">
                      <span onClick={() => setIsLoginOpen(true)}>Đăng nhập</span>
                      <Auth_Components
                        isOpen={isLoginOpen}
                        onClose={() => setIsLoginOpen(false)}
                        onLoginSuccess={handleLoginSuccess}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between text-white mb-3">
                    <div className="flex items-center space-x-2">
                      <img src={accountIcon.src} alt="Account" className="w-5 h-5" />
                      <div>
                        <p className="font-semibold">{userInfo.name}</p>
                        <p className="text-xs text-gray-300">{userInfo.email}</p>
                      </div>
                    </div>
                    <button 
                      className="p-2 hover:text-red-400 transition-colors"
                      onClick={() => router.push("/profile")}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 000-6.364 4.5 4.5 0 00-6.364 0L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="space-y-2 mb-3">
                    <button
                      onClick={() => router.push("/profile")}
                      className="w-full text-left text-white hover:text-orange-400 py-1"
                    >
                      Thông tin tài khoản
                    </button>
                    <button
                      onClick={() => router.push("/profile")}
                      className="w-full text-left text-white hover:text-orange-400 py-1"
                    >
                      Quản lý đơn hàng
                    </button>
                    <button
                      onClick={() => router.push("/profile")}
                      className="w-full text-left text-white hover:text-orange-400 py-1"
                    >
                      Yêu thích
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left text-red-400 hover:text-red-300 py-1"
                    >
                      Đăng xuất
                    </button>
                  </div>
                </>
              )}
              
              <div className="flex items-center space-x-4 text-white text-sm">
                <span className="flex items-center space-x-1 cursor-pointer hover:text-orange-400">
                  <img
                    src={notificationIcon.src}
                    alt="Notification"
                    className="w-4 h-4"
                  />
                  <span>Thông báo</span>
                </span>
                <span className="flex items-center space-x-1 cursor-pointer hover:text-orange-400">
                  <img src={questionIcon.src} alt="Help" className="w-4 h-4" />
                  <span>Hỗ trợ</span>
                </span>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-4">
              {/* Mobile Loại hình */}
              <div className="dropdown-container">
                <button
                  onClick={toggleLoaiHinhDropdown}
                  className="flex items-center justify-between w-full text-left text-white hover:text-orange-400 focus:outline-none py-2"
                >
                  <span>Loại hình</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isLoaiHinhDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isLoaiHinhDropdownOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Căn hộ
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Nhà phố
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Biệt thự
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Đất nền
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Khoảng giá */}
              <div className="dropdown-container">
                <button
                  onClick={toggleKhoangGiaDropdown}
                  className="flex items-center justify-between w-full text-left text-white hover:text-orange-400 focus:outline-none py-2"
                >
                  <span>Khoảng giá</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isKhoangGiaDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isKhoangGiaDropdownOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Dưới 1 tỷ
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      1 - 3 tỷ
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      3 - 5 tỷ
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Trên 5 tỷ
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Diện tích */}
              <div className="dropdown-container">
                <button
                  onClick={toggleDienTichDropdown}
                  className="flex items-center justify-between w-full text-left text-white hover:text-orange-400 focus:outline-none py-2"
                >
                  <span>Diện tích</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isDienTichDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isDienTichDropdownOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Dưới 50m²
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      50 - 80m²
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      80 - 120m²
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Trên 120m²
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Thêm bộ lọc */}
              <div className="dropdown-container">
                <button
                  onClick={toggleThemBoLocDropdown}
                  className="flex items-center justify-between w-full text-left text-white hover:text-orange-400 focus:outline-none py-2"
                >
                  <span>Thêm bộ lọc</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isThemBoLocDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isThemBoLocDropdownOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Hướng nhà
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Số phòng ngủ
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Số phòng tắm
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Đã bàn giao
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Social Links */}
            <div className="border-t border-gray-600 pt-4 mt-4">
              <div className="flex items-center space-x-4 text-white text-sm">
                <span>Kết nối:</span>
                <img src={facebookIcon.src} alt="Facebook" className="w-5 h-5" />
                <img src={youtubeIcon.src} alt="YouTube" className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header_menu;
