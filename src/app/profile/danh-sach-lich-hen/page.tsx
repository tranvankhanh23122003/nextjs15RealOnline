"use client"

import React, { useState } from "react";
import AppointmentList from "@/components/Profile/MucDanhSachLichHen";
import Slide1 from "@/assets/images/baner1.png";
import { StaticImageData } from "next/image";

interface AppointmentItem {
  id: number;
  appointment: string;
  location: string;
  createdTime: string;
  consultationTime: string;
  status: string;
}

interface PropertyCard {
  id: number;
  price: string;
  rating: number;
  description: string;
  bedrooms: number;
  area: string;
  address: string;
  image: StaticImageData;
}

export default function DanhSachLichHen() {
  const [data] = useState<AppointmentItem[]>([
    { id: 1, appointment: "LH001", location: "Trụ sở chính", createdTime: "2025-07-25 14:00", consultationTime: "2025-07-26 10:00", status: "Chờ xác nhận" },
    { id: 2, appointment: "LH002", location: "Chi nhánh Hà Nội", createdTime: "2025-07-24 09:30", consultationTime: "2025-07-25 14:00", status: "Đã hoàn thành" },
    { id: 3, appointment: "LH003", location: "Văn phòng TP.HCM", createdTime: "2025-07-23 11:15", consultationTime: "2025-07-24 15:00", status: "Đã xác nhận" },
    { id: 4, appointment: "LH004", location: "Chi nhánh Đà Nẵng", createdTime: "2025-07-22 16:45", consultationTime: "2025-07-23 09:00", status: "Đã hủy" },
    { id: 5, appointment: "LH005", location: "Trụ sở phụ", createdTime: "2025-07-21 08:20", consultationTime: "2025-07-22 13:00", status: "Đã hoàn thành" },
  ]);

  const [propertyData] = useState<PropertyCard[]>([
    { id: 1, price: "18.42 tỷ", rating: 5, description: "Sổ hồng riêng xây dựng", bedrooms: 5, area: "84.00 m²", address: "Trụ sở chính", image: Slide1 },
    { id: 2, price: "20.00 tỷ", rating: 4, description: "Nhà phố hiện đại", bedrooms: 4, area: "100.00 m²", address: "Chi nhánh Hà Nội", image: Slide1 },
    { id: 3, price: "15.50 tỷ", rating: 5, description: "Căn hộ cao cấp", bedrooms: 3, area: "70.00 m²", address: "Văn phòng TP.HCM", image: Slide1 },
    { id: 4, price: "22.00 tỷ", rating: 3, description: "Biệt thự biển", bedrooms: 6, area: "150.00 m²", address: "Chi nhánh Đà Nẵng", image: Slide1 },
    { id: 5, price: "17.80 tỷ", rating: 4, description: "Nhà phố thương mại", bedrooms: 5, area: "90.00 m²", address: "Trụ sở phụ", image: Slide1 },
  ]);

  return (
    <div>
      <AppointmentList data={data} propertyData={propertyData} />
    </div>
  );
}