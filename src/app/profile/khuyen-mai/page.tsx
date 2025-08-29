"use client";

import React, { useState } from "react";
import NotificationManager from "@/components/Profile/QuanLyThongBao";
import Slide1 from "../../../assets/images/baner1.png";
import { StaticImageData } from "next/image";

interface Notification {
  id: string;
  title: string;
  description: string;
  date: string;
  status: "active" | "expired";
  image: StaticImageData;
}

export default function KhuyenMai() {
  const [notifications] = useState<Notification[]>([
    {
      id: "KM001",
      title: "Ưu đãi 11% thanh toán sớm",
      description: "Giảm 3-5% giá trị căn nếu thanh toán 95% trong 7 ngày. Đặt mua ngay!",
      date: "15/08/2025",
      status: "active",
      image: Slide1,
    },
    {
      id: "KM002",
      title: "Quà tặng tân gia",
      description: "Giảm 3-5% giá trị căn nếu thanh toán 95% trong 7 ngày. Đặt mua ngay!",
      date: "10/08/2025",
      status: "active",
      image: Slide1,
    },
    {
      id: "KM003",
      title: "Khuyến mãi mùa lễ hội",
      description: "Giảm giá 5% cho các hợp đồng ký trong dịp lễ hội cuối năm 2024.",
      date: "01/12/2024",
      status: "expired",
      image: Slide1,
    },
  ]);

  return (
    <div>
      <NotificationManager notifications={notifications} />
    </div>
  );
}