"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Slide1 from "../../../../public/images/baner1.png";
import Image from "next/image";
import "./style.css";
import { PropertyGridProps } from "../../../types/property";

const PropertyGridBDS: React.FC<PropertyGridProps> = ({ properties }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCards, setVisibleCards] = useState<{ [key: string]: string }>({});
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const itemsPerPage = 6;

  const renderStars = (rating: number) => {
    return (
      <div className="profile-property-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-sm ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProperties = properties.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      setVisibleCards({}); // Reset trạng thái hiển thị khi đổi trang
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const cardId = entry.target.getAttribute("data-card-id");
        if (!cardId) return;

        const currentScrollY = window.scrollY;
        const isScrollingDown = currentScrollY > lastScrollY;

        if (entry.isIntersecting) {
          setVisibleCards((prev) => ({
            ...prev,
            [cardId]: isScrollingDown ? "visible-down" : "visible-up",
          }));
        } else {
          setVisibleCards((prev) => ({
            ...prev,
            [cardId]: "",
          }));
        }

        lastScrollY = currentScrollY;
      });
    }, observerOptions);

    Object.values(cardRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(cardRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [currentPage]); // Cập nhật observer khi đổi trang

  return (
    <div className="profile-property-grid-container">
      <div className="profile-property-grid">
        {currentProperties.map((property) => (
          <div
            key={property.id}
            className={`profile-property-card section ${visibleCards[property.id] || ""}`}
            data-card-id={property.id}
            ref={(el) => {
              cardRefs.current[property.id] = el;
            }}
          >
            <div className="relative">
              <Image
                src={Slide1}
                alt={`Property ${property.id}`}
                width={400} // Tỷ lệ hợp lý cho height: 12rem
                height={192} // 12rem = 192px
                className="profile-property-image"
              />
              <div className="profile-price-badge">{property.price}</div>
              <div className="profile-favorite-button">
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
              </div>
            </div>

            <div className="profile-property-content">
              {renderStars(property.rating)}
              <h3 className="profile-property-description">{property.description}</h3>
              <div className="profile-property-details">
                <div className="profile-property-detail">🏠 {property.bedrooms} phòng</div>
                <div className="profile-property-detail">📐 {property.area}</div>
              </div>
              <p className="profile-property-address">{property.address}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="profile-pagination">
        <button
          className="profile-pagination-btn"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`profile-pagination-btn ${currentPage === page ? "profile-active-page" : ""}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          className="profile-pagination-btn"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default PropertyGridBDS;