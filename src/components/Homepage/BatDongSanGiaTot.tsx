"use client";

import { useState } from "react";
import ImageTest from "../../../public/images/ImageTest.png";
import Image from "next/image";
const BatDongSanGiaTot = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const properties = [
    {
      id: 1,
      image: ImageTest.src,
      price: "18.42 tỷ",
      rating: 4.8,
      pricePerM2: "58.18 triệu/m²",
      type: "xây dựng",
      bedrooms: 5,
      bathrooms: 3,
      area: "84.00 m²",
      description: "#MG căn, tiền ưu ãi",
    },
    {
      id: 2,
      image: ImageTest.src,
      price: "18.42 tỷ",
      rating: 4.8,
      pricePerM2: "58.18 triệu/m²",
      type: "xây dựng",
      bedrooms: 5,
      bathrooms: 3,
      area: "84.00 m²",
      description: "#MG căn, tiền ưu ãi",
    },
    {
      id: 3,
      image: ImageTest.src,
      price: "18.42 tỷ",
      rating: 4.8,
      pricePerM2: "58.18 triệu/m²",
      type: "xây dựng",
      bedrooms: 5,
      bathrooms: 3,
      area: "84.00 m²",
      description: "#MG căn, tiền ưu ãi",
    },
    {
      id: 4,
      image: ImageTest.src,
      price: "18.42 tỷ",
      rating: 4.8,
      pricePerM2: "58.18 triệu/m²",
      type: "xây dựng",
      bedrooms: 5,
      bathrooms: 3,
      area: "84.00 m²",
      description: "#MG căn, tiền ưu ãi",
    },
    {
      id: 5,
      image: ImageTest.src,
      price: "18.42 tỷ",
      rating: 4.8,
      pricePerM2: "58.18 triệu/m²",
      type: "xây dựng",
      bedrooms: 5,
      bathrooms: 3,
      area: "84.00 m²",
      description: "#MG căn, tiền ưu ãi",
    },
    {
      id: 6,
      image: ImageTest.src,
      price: "18.42 tỷ",
      rating: 4.8,
      pricePerM2: "58.18 triệu/m²",
      type: "xây dựng",
      bedrooms: 5,
      bathrooms: 3,
      area: "84.00 m²",
      description: "#MG căn, tiền ưu ãi",
    },
  ];

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(properties.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentProperties = () => {
    const start = currentSlide * itemsPerSlide;
    return properties.slice(start, start + itemsPerSlide);
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className="w-4 h-4 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
        >
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
          />
        </svg>
      );
    }

    return stars;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Bất động sản giá tốt
          </h2>

          <div className="flex space-x-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors duration-300"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors duration-300"
            >
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getCurrentProperties().map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={property.image}
                  alt={`Property ${property.id}`}
                  width={150}
                  height={68}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute bg-opacity-10 group-hover:bg-opacity-5 transition-all duration-300"></div>
                <div className="absolute top-4 right-4">
                  <button className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                    <svg
                      className="w-4 h-4 text-gray-600 hover:text-red-500"
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

              {/* Property Info */}
              <div className="p-5">
                {/* Price and Rating */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-2xl font-bold text-red-600">
                        {property.price}
                      </span>
                      <div className="flex items-center space-x-1">
                        {renderStars(property.rating)}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      {property.pricePerM2} {property.type}
                    </p>
                  </div>
                </div>

                {/* Property Details */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
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
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9-6 9 6M8 14v6h8v-6"
                      />
                    </svg>
                    <span>{property.bedrooms} lầng</span>
                  </div>

                  <div className="flex items-center space-x-1">
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
                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4v13a1 1 0 01-1 1H4a1 1 0 01-1-1V7z"
                      />
                    </svg>
                    <span>Đông Bắc</span>
                  </div>

                  <div className="flex items-center space-x-1">
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
                        d="M4 8V6a2 2 0 012-2h12a2 2 0 012 2v2M4 8v10a2 2 0 002 2h12a2 2 0 002-2V8M4 8h16"
                      />
                    </svg>
                    <span>{property.area}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 mb-4">
                  {property.description}
                </p>

                {/* Call to Action */}
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-blue-500 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BatDongSanGiaTot;
