"use client";
import React, { useState } from "react";
import "./style.css";

interface Property {
  id: string;
  landArea: number;
  salePrice: number;
  pricePerM2: number;
  type: string;
  floors: number;
  direction: string;
  constructionArea: number;
}

const priceData: Property[] = [
  {
    id: "C01",
    landArea: 100,
    salePrice: 2500000000,
    pricePerM2: 25000000,
    type: "Nhà phố",
    floors: 2,
    direction: "Đông",
    constructionArea: 180,
  },
  {
    id: "C02",
    landArea: 120,
    salePrice: 3000000000,
    pricePerM2: 25000000,
    type: "Biệt thự",
    floors: 3,
    direction: "Nam",
    constructionArea: 220,
  },
  {
    id: "C03",
    landArea: 90,
    salePrice: 2250000000,
    pricePerM2: 25000000,
    type: "Nhà phố",
    floors: 2,
    direction: "Tây",
    constructionArea: 160,
  },
];

const PriceTable: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const openContactModal = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const closeContactModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Gửi dữ liệu ở đây
    alert("Thông tin đã được gửi!");
    closeContactModal();
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <div className="price-table-container">
      <h1 className="price-table-title">Bảng Giá Căn Hộ Coco Land</h1>
      <div className="price-table-wrapper">
        <table className="price-table">
          <thead>
            <tr>
              <th>Mã căn</th>
              <th>DT đất (m²)</th>
              <th>Giá bán</th>
              <th>Giá/m²</th>
              <th>Loại hình</th>
              <th>Số tầng</th>
              <th>Hướng cửa</th>
              <th>DTXD (m²)</th>
              <th>Liên hệ</th>
            </tr>
          </thead>
          <tbody>
            {priceData.map((property) => (
              <tr key={property.id}>
                <td>{property.id}</td>
                <td>{property.landArea}</td>
                <td>{formatPrice(property.salePrice)}</td>
                <td>{formatPrice(property.pricePerM2)}</td>
                <td>{property.type}</td>
                <td>{property.floors}</td>
                <td>{property.direction}</td>
                <td>{property.constructionArea}</td>
                <td>
                  <button
                    className="contact-button"
                    onClick={() => openContactModal(property)}
                  >
                    Liên hệ
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && selectedProperty && (
        <div className="contact-modal">
          <div className="modal-content">
            <button className="modal-close" onClick={closeContactModal}>
              ×
            </button>
            <h2>Liên hệ tư vấn</h2>
            <p>Căn: {selectedProperty.id}</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Họ và tên</label>
                <input type="text" id="name" placeholder="Nhập họ và tên" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Số điện thoại</label>
                <input type="tel" id="phone" placeholder="Nhập số điện thoại" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Nhập email" required />
              </div>
              <button type="submit" className="submit-button">
                Gửi thông tin
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceTable;
