"use client";
import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

// 1. Khai báo interface cho prop
interface AccountInfo {
  fullName: string;
  birthDate: string;
  gender: string;
  address: string;
  phone: string;
  email: string;
}

interface InfoAccountProps {
  initialAccountInfo: AccountInfo;
}

const InfoAccount: React.FC<InfoAccountProps> = ({ initialAccountInfo }) => {
  const [accountInfo, setAccountInfo] = useState<AccountInfo>(initialAccountInfo);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAccountInfo({ ...accountInfo, [name]: value });
  };

  const handleSave = () => {
    console.log("Thông tin đã lưu:", accountInfo);
    alert("Thông tin đã được lưu!");
  };

  // Check tất cả các field phải có dữ liệu
  const isFormValid = Object.values(accountInfo).every(
    (value) => value.trim() !== ""
  );

  return (
    <div className="profile-info-account">
      <h1 className="profile-info-account__title">Thông tin tài khoản</h1>

      <h2 className="profile-info-account__section-title">Thông tin cá nhân</h2>
      <div className="profile-info-account__grid">
        <div>
          <label>Họ và tên</label>
          <input
            type="text"
            name="fullName"
            value={accountInfo.fullName}
            onChange={handleChange}
            className="profile-info-account__input"
          />
        </div>
        <div>
          <label>Ngày sinh</label>
          <input
            type="date"
            name="birthDate"
            value={accountInfo.birthDate}
            onChange={handleChange}
            className="profile-info-account__input"
          />
        </div>
        <div>
          <label>Giới tính</label>
          <select
            name="gender"
            value={accountInfo.gender}
            onChange={handleChange}
            className="profile-info-account__input"
          >
            <option value="">-- Chọn giới tính --</option>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            <option value="Khác">Khác</option>
          </select>
        </div>
        <div>
          <label>Địa chỉ</label>
          <input
            type="text"
            name="address"
            value={accountInfo.address}
            onChange={handleChange}
            className="profile-info-account__input"
          />
        </div>
      </div>

      <h2 className="profile-info-account__section-title">Thông tin liên hệ</h2>
      <div className="profile-info-account__grid">
        <div>
          <label>Số điện thoại</label>
          <input
            type="tel"
            name="phone"
            value={accountInfo.phone}
            onChange={handleChange}
            className="profile-info-account__input"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={accountInfo.email}
            onChange={handleChange}
            className="profile-info-account__input"
          />
        </div>
      </div>

      <div className="profile-info-account__footer">
        <div className="profile-info-account__note">
          <AiOutlineInfoCircle className="profile-info-account__note-icon" />
          <span>SĐT này dùng để đăng nhập và không thể thay đổi</span>
        </div>
        <button
          onClick={handleSave}
          disabled={!isFormValid}
          className={`profile-info-account__save-button ${
            !isFormValid ? "disabled" : ""
          }`}
        >
          Lưu thông tin
        </button>
      </div>
    </div>
  );
};

export default InfoAccount;
