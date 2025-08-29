
"use client";

import React, { useState } from "react";
import InfoAccount from "@/components/Profile/ThongTinTaiKhoan";

export default function ThongTinTaiKhoan() {
  // Dữ liệu giả lập tương tự customerInfo từ OrderDetail
  const [accountInfo] = useState({
    fullName: "Trần Văn Khánh",
    birthDate: "2003-12-23",
    gender: "Nam",
    address: "123 Đường Láng, Đống Đa, Hà Nội",
    phone: "0901234567",
    email: "khantran12232003@gmail.com",
  });

  return (
    <div>
      <InfoAccount initialAccountInfo={accountInfo} />
    </div>
  );
}