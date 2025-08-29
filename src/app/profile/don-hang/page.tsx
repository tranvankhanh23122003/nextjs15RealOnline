"use client";

import React, { useState } from "react";
import Header from "@/components/Profile/Header"; 
import Table from "@/components/Profile/DanhSach_BDS";  
import { useRouter } from "next/navigation";

interface CanItem {
  id: number;
  code: string;
  project: string;
  price: string;
  status: string;
  management: string;
  paymentProgress?: string;
  dateTime?: string;
}

export default function DonHang() {
  const router = useRouter();
  
  const handleViewDetails = (item: CanItem) => {
    router.push(`/profile/don-hang/${item.id}`);
  };

  const handleReviewClick = (item: CanItem) => {
    router.push(`/profile/don-hang/thong-tin-chi-tiet-don-hang/${item.id}`);
  };

  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  // Dữ liệu giả lập
  const [data, setData] = useState<CanItem[]>(
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      code: `C${i + 1}:01`,
      project: `Dự án ${i + 1}`,
      price: `${(i + 1) * 2}`,
      status: "Chưa bàn giao",
      management: "Admin",
      paymentProgress: undefined,
      dateTime: undefined,
    }))
  );

  const handleSelectedItem = (item: CanItem) => {
    console.log("Căn chọn:", item);
  };

  return (
    <div className="profile-don-hang-container">
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        data={data}
        setData={setData}
      />
      <Table
        data={data.filter((item) =>
          selectedCategory === "Tất cả"
            ? true
            : item.status.toLowerCase().includes(selectedCategory.toLowerCase())
        )}
        selectedCategory={selectedCategory}
        setSelectedItem={handleSelectedItem}
        onReviewClick={handleReviewClick}
        onViewDetails={handleViewDetails}
      />
    </div>
  );
}