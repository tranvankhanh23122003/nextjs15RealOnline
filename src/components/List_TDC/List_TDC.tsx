"use client";

import { useState } from "react";
import { ChevronDownIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

// Import images
import testImage from "../../assets/images/Bg_test.png";
import imageTest from "../../assets/images/ImageTest.png";
import logoTDC from "../../assets/images/Logo.png";
import BookingModal from "../DatCho_LienHe/BookingModal";
interface ProjectCard {
  id: number;
  name: string;
  area: string;
  price: string;
  address: string;
  image: string;
  isHot: boolean;
}

const List_TDC = () => {
  const [sortBy, setSortBy] = useState("Phù hợp nhất");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const router = useRouter();
  const sortOptions = [
    "Phù hợp nhất",
    "Giá thấp đến cao",
    "Giá cao đến thấp",
    "Diện tích nhỏ đến lớn",
    "Diện tích lớn đến nhỏ",
    "Mới nhất",
  ];

  // Test data - 9 projects to match the image
  const projects: ProjectCard[] = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    name: "Khu biệt thự cao cấp Concorde",
    area: "Diện tích từ 175-220 m²",
    price: "175.000.000đ",
    address: "Phường Nghĩa xa Số 16 Nj Phước 8",
    image: imageTest.src,
    isHot: true,
  }));

  const totalResults = 34;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600">
            <span
              className="hover:text-blue-600 cursor-pointer text-2xl"
              onClick={() => {
                router.push("/");
              }}
            >
              Trang chủ
            </span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 text-2xl">Dự án</span>
          </nav>
        </div>
      </div>

      {/* Results header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-gray-700">
              <span className="font-medium">Có {totalResults} kết quả</span>
              <span className="mx-2">-</span>
              <span>Sắp xếp:</span>
            </div>

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none"
              >
                <span className="text-blue-600 font-medium">{sortBy}</span>
                <ChevronDownIcon
                  className={`w-4 h-4 text-gray-500 transform transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSortBy(option);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${
                        sortBy === option
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dự án của TDC</h1>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Project image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />

                {/* Hot badge */}
                {project.isHot && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
                      Dự án hot bán
                    </span>
                  </div>
                )}

                {/* TDC badge */}
                <div className="absolute top-3 right-3">
                  <img src={logoTDC.src} alt="" className="w-20 h-10" />
                </div>

                {/* Heart icon */}
                <div className="absolute bottom-3 right-3">
                  <button className="bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Project details */}
              <div className="p-4" onClick={() => router.push("/du-an")}>
                {/* Project name */}
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {project.name}
                </h3>

                {/* Area and price */}
                <div className="text-sm text-gray-600 mb-2">
                  <p>{project.area}</p>
                  <p className="font-medium text-red-600">{project.price}</p>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-2 text-sm text-gray-600">
                  <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{project.address}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-r from-blue-800 to-blue-900 rounded-lg overflow-hidden">
          {/* Background image overlay */}
          <div className="absolute inset-0 bg-opacity-40">
            <img
              src={testImage.src}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 px-8 py-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Đăng ký tham quan dự án và căn hộ mẫu
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Để tìm ra ngôi nhà mơ ước, hãy nhận thông tin chi tiết và ưu đãi
              hấp dẫn từ tham quan
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors" onClick={() => setIsBookingOpen(true)}>
                Đăng ký tham quan
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors">
                Liên hệ tư vấn
              </button>
            </div>
          </div>
        </div>
      </div>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default List_TDC;
