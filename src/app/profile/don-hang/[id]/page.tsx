"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import InfoOrderDetails from "@/components/Profile/ThongTinChiTietDonHang";

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

export default function OrderDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const idParam = Array.isArray(params?.id) ? params.id[0] : params?.id;

  if (!idParam) {
    router.push("/profile/don-hang");
    return null;
  }
  
  const orderId = parseInt(idParam, 10);
  
  // Giả lập dữ liệu giống DonHang
  const [data] = useState<CanItem[]>(
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

  const selectedItem = data.find((item) => item.id === orderId) || null;

  const handleBack = () => {
    router.push("/profile/don-hang");
  };

  return (
    <div>
      <InfoOrderDetails selectedItem={selectedItem} onBack={handleBack} />
    </div>
  );
}