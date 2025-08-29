"use client";

import React, { useState } from "react";
import ChangePassword from "@/components/Profile/ThayDoiMatKhau";

export default function ThayDoiMatKhau() {
  // Dữ liệu giả lập cho passwordData
  const [passwordData] = useState({
    currentPassword: "OldPass123!",
    newPassword: "NewPass123!",
  });

  return (
    <div>
      <ChangePassword initialPasswordData={passwordData} />
    </div>
  );
}