"use client";

import { ReactNode } from "react";


import MenuSanPham from "@/components/DetailSanPham/MenuSanPham";
import TinTucSanPham from "@/components/DetailSanPham/TinTucSanPham";
import "@/styles/sanpham.css";

export default function SanPhamLayout({ children }: { children: ReactNode }) {
  return (
    <>
     

      {children}

      <div className="sanpham-menu-full">
        <MenuSanPham />
        <TinTucSanPham />
      </div>
    </>
  );
}
