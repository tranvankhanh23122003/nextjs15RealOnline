"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CancelBookingForm from "@/components/Profile/HuyDatCho";

export default function HuyDonHang({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();

  // unwrap params (Next.js 15 yêu cầu)
  const { id } = React.use(params);

  // Dữ liệu giả lập
  const [data] = useState([
    {
      id: 1,
      management: "Quản lý A",
      code: "Tầng 5: Căn 501",
      project: "Dự án Vinhomes Grand Park",
      price: "3,000,000,000 VNĐ",
      status: "Đang xử lý",
      paymentProgress: "50%",
      dateTime: "01/09/2024",
    },
    {
      id: 2,
      management: "Quản lý B",
      code: "Tầng 10: Căn 1002",
      project: "Dự án Vinhomes Ocean Park",
      price: "2,500,000,000 VNĐ",
      status: "Hoàn tất",
      paymentProgress: "100%",
      dateTime: "15/08/2024",
    },
  ]);

  // lấy item theo id param
  const selectedItem =
    data.find((item) => item.id === parseInt(id)) || {
      id: 0,
      management: "",
      code: "N/A",
      project: "N/A",
      price: "N/A",
      status: "N/A",
      dateTime: "N/A",
    };

  const handleClose = () => {
    router.push(`/profile/don-hang/${id}`);
  };

  return (
    <div>
      <CancelBookingForm code={selectedItem.code} onClose={handleClose} />
    </div>
  );
}
