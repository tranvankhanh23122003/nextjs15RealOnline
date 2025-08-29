"use client";

import React, { useState, useEffect } from "react";
import RequestList from "@/components/Profile/MucDanhSachYeuCau";
import Slide1 from "../../../assets/images/baner1.png";
import { StaticImageData } from "next/image";

interface RequestItem {
  id: number;
  requestCode: string;
  requestType: string;
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

export default function DanhSachYeuCau() {
  // Dữ liệu tĩnh làm mặc định
  const defaultData: RequestItem[] = [
    {
      id: 1,
      requestCode: "23844",
      requestType: "Hỗ trợ kỹ thuật",
      createdTime: "2025-07-25 14:00",
      consultationTime: "2025-07-26 10:00",
      status: "Đang xử lý",
    },
    {
      id: 2,
      requestCode: "23845",
      requestType: "Khiếu nại",
      createdTime: "2025-07-24 09:30",
      consultationTime: "2025-07-25 14:00",
      status: "Đã hủy",
    },
    {
      id: 3,
      requestCode: "23846",
      requestType: "Tư vấn sản phẩm",
      createdTime: "2025-07-23 11:15",
      consultationTime: "2025-07-24 15:00",
      status: "Chưa xử lý",
    },
    {
      id: 4,
      requestCode: "23847",
      requestType: "Hỗ trợ thanh toán",
      createdTime: "2025-07-22 16:45",
      consultationTime: "2025-07-23 09:00",
      status: "Đã xử lý",
    },
    {
      id: 5,
      requestCode: "23848",
      requestType: "Đăng ký dịch vụ",
      createdTime: "2025-07-21 08:20",
      consultationTime: "2025-07-22 13:00",
      status: "Hoàn thành",
    },
  ];

  const defaultPropertyData: PropertyCard[] = [
    {
      id: 1,
      price: "18.42 tỷ",
      rating: 5,
      description: "Sổ hồng riêng xây dựng",
      bedrooms: 5,
      area: "84.00 m²",
      address: "Trụ sở chính",
      image: Slide1,
    },
    {
      id: 2,
      price: "20.00 tỷ",
      rating: 4,
      description: "Nhà phố hiện đại",
      bedrooms: 4,
      area: "100.00 m²",
      address: "Chi nhánh Hà Nội",
      image: Slide1,
    },
    {
      id: 3,
      price: "15.50 tỷ",
      rating: 5,
      description: "Căn hộ cao cấp",
      bedrooms: 3,
      area: "70.00 m²",
      address: "Văn phòng TP.HCM",
      image: Slide1,
    },
    {
      id: 4,
      price: "22.00 tỷ",
      rating: 3,
      description: "Biệt thự biển",
      bedrooms: 6,
      area: "150.00 m²",
      address: "Chi nhánh Đà Nẵng",
      image: Slide1,
    },
    {
      id: 5,
      price: "17.80 tỷ",
      rating: 4,
      description: "Nhà phố thương mại",
      bedrooms: 5,
      area: "90.00 m²",
      address: "Trụ sở phụ",
      image: Slide1,
    },
  ];

  // State để lưu dữ liệu từ API
  const [data, setData] = useState<RequestItem[]>(defaultData);
  const [propertyData, setPropertyData] = useState<PropertyCard[]>(defaultPropertyData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Gọi API khi component mount
  useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch("/api/requests");
  //       if (!response.ok) {
  //         throw new Error("Không thể lấy dữ liệu yêu cầu");
  //       }
  //       const apiData: RequestItem[] = await response.json();
  //       setData(apiData);

  //       const propertyResponse = await fetch("/api/properties");
  //       if (!propertyResponse.ok) {
  //         throw new Error("Không thể lấy dữ liệu bất động sản");
  //       }
  //       const apiPropertyData: PropertyCard[] = await propertyResponse.json();
  //       setPropertyData(apiPropertyData);

  //       setLoading(false);
  //     } catch (err) {
  //       setError(err instanceof Error ? err.message : "Đã xảy ra lỗi");
  //       setLoading(false);
  //     }
  //   }

  //   fetchData();
  setLoading(false);
  }, []);

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (error) {
    return <div>Lỗi: {error}</div>;
  }

  return (
    <div>
      <RequestList data={data} propertyData={propertyData} />
    </div>
  );
}