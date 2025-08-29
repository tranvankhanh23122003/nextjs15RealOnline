"use client";

import React, { useState } from "react";
import OrderDetail from "@/components/Profile/CapNhatDonHang";

export default function CapNhatDonHang() {
  // Dữ liệu giả lập cho selectedItem và data
  const [selectedItem] = useState({
    id: 1,
    management: "Quản lý A",
    code: "Tầng 5: Căn 501",
    project: "Dự án Vinhomes Grand Park",
    price: "3,000,000,000 VNĐ",
    status: "Đang xử lý",
    paymentProgress: "50%",
    dateTime: "01/09/2024",
    fullName: "Trần Văn Khánh",
    cccd: "012345678901",
    phone: "0901234567",
    email: "khantran12232003@gmail.com",
    permanentAddress: "123 Đường Láng, Đống Đa, Hà Nội",
    contactAddress: "456 Nguyễn Trãi, Thanh Xuân, Hà Nội",
  });

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
      fullName: "Trần Văn Khánh",
      cccd: "012345678901",
      phone: "0901234567",
      email: "khantran12232003@gmail.com",
      permanentAddress: "123 Đường Láng, Đống Đa, Hà Nội",
      contactAddress: "456 Nguyễn Trãi, Thanh Xuân, Hà Nội",
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
      fullName: "Nguyễn Thị Mai",
      cccd: "098765432101",
      phone: "0912345678",
      email: "mai.nguyen@example.com",
      permanentAddress: "789 Đường Giải Phóng, Hoàng Mai, Hà Nội",
      contactAddress: "789 Đường Giải Phóng, Hoàng Mai, Hà Nội",
    },
  ]);

  return (
    <div>
      <OrderDetail selectedItem={selectedItem} data={data} />
    </div>
  );
}