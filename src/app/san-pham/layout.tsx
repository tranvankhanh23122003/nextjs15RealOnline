"use client";

import { ReactNode } from "react";
import {
  MdDashboard,
  MdMiscellaneousServices,
} from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { GiTreeGrowth } from "react-icons/gi";
import { HiDocumentText } from "react-icons/hi";

import MenuSanPham from "@/components/DetailSanPham/MenuSanPham";
import TinTucSanPham from "@/components/DetailSanPham/TinTucSanPham";
import "@/styles/sanpham.css";

export default function SanPhamLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="sanpham-icon-section">
        <div className="sanpham-icon-wrapper">
          <div className="sanpham-icon-item">
            <MdDashboard className="sanpham-icon" />
            <span className="sanpham-icon-label">Tổng quan</span>
          </div>
          <div className="sanpham-icon-item">
            <FaProjectDiagram className="sanpham-icon" />
            <span className="sanpham-icon-label">Phân khu</span>
          </div>
          <div className="sanpham-icon-item">
            <GoLocation className="sanpham-icon" />
            <span className="sanpham-icon-label">Vị trí</span>
          </div>
          <div className="sanpham-icon-item">
            <MdMiscellaneousServices className="sanpham-icon" />
            <span className="sanpham-icon-label">Tiện ích</span>
          </div>
          <div className="sanpham-icon-item">
            <GiTreeGrowth className="sanpham-icon" />
            <span className="sanpham-icon-label">Cảnh quan</span>
          </div>
          <div className="sanpham-icon-item">
            <HiDocumentText className="sanpham-icon" />
            <span className="sanpham-icon-label">Tài liệu tổng mặt bằng</span>
          </div>
        </div>
      </div>

      {children}

      <div className="sanpham-menu-full">
        <MenuSanPham />
        <TinTucSanPham />
      </div>
    </>
  );
}
