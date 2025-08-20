"use client";

import { useState } from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
// Import images - using placeholder since we don't have actual property images
import testImage from "../../assets/images/ImageTest.png";

interface PropertyCard {
  id: number;
  price: string;
  rating: number;
  description: string;
  bedrooms: number;
  area: string;
  address: string;
  image: string;
}

const List_BDS = () => {
  const [sortBy, setSortBy] = useState("Phù hợp nhất");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const sortOptions = [
    "Phù hợp nhất",
    "Giá thấp đến cao",
    "Giá cao đến thấp",
    "Diện tích nhỏ đến lớn",
    "Diện tích lớn đến nhỏ",
    "Mới nhất",
  ];

  // Test data - 16 properties to match the image
  const properties: PropertyCard[] = Array.from({ length: 16 }, (_, index) => ({
    id: index + 1,
    price: "18.42 tỷ",
    rating: 5,
    description: "Sổ hồng riêng xây dựng",
    bedrooms: 5,
    area: "84.00 m²",
    address: "Căn 01, Nhà liền kề, Khu A, Dự án Concorde",
    image: testImage.src,
  }));

  const totalPages = 5;
  const totalResults = 34;

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-sm ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const renderPagination = () => {
    const pages = [];

    // Previous button
    pages.push(
      <button
        key="prev"
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
      >
        <ChevronLeftIcon className="w-4 h-4" />
      </button>
    );

    // Page numbers
    for (let i = 1; i <= Math.min(totalPages, 5); i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-3 py-2 rounded ${
            currentPage === i
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          {i}
        </button>
      );
    }

    // Next button
    pages.push(
      <button
        key="next"
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
      >
        <ChevronRightIcon className="w-4 h-4" />
      </button>
    );

    return pages;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600">
            <span
              className="hover:text-blue-600 cursor-pointer"
              onClick={() => router.push("/")}
            >
              Trang chủ
            </span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Giao dịch bất động sản</span>
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

      {/* Property grid */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Property image */}
              <div className="relative">
                <img
                  src={property.image}
                  alt={`Property ${property.id}`}
                  className="w-full h-48 object-cover"
                />
                {/* Price tag */}
                <div className="absolute top-3 left-3">
                  <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">
                    {property.price}
                  </span>
                </div>
                {/* Heart icon */}
                <div className="absolute top-3 right-3">
                  <button className="bg-white bg-opacity-80 rounded-full p-1 hover:bg-opacity-100">
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

              {/* Property details */}
              <div className="p-4">
                {/* Rating */}
                <div className="mb-2">{renderStars(property.rating)}</div>

                {/* Description */}
                <h3 className="text-sm text-gray-800 mb-3">
                  {property.description}
                </h3>

                {/* Property specs */}
                <div className="flex items-center space-x-4 text-xs text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <span>🏠</span>
                    <span>{property.bedrooms} phòng</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>📐</span>
                    <span>Diện tích</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>{property.area}</span>
                  </div>
                </div>

                {/* Address */}
                <p className="text-xs text-gray-600 leading-relaxed">
                  {property.address}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {renderPagination()}
        </div>
      </div>
    </div>
  );
};

export default List_BDS;
