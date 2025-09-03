"use client";

import { useState } from "react";

import Slide1 from "../../../public/images/baner1.png";
import Slide2 from "../../../public/images/khu-cong-nghiep.png";
import Slide3 from "../../../public/images/baner1.png";
import Slide4 from "../../../public/images/khu-cong-nghiep.png";
import Slide5 from "../../../public/images/baner1.png";
import Slide6 from "../../../public/images/khu-cong-nghiep.png";
import Slide7 from "../../../public/images/baner1.png";
import Slide8 from "../../../public/images/khu-cong-nghiep.png";
import Slide9 from "../../../public/images/baner1.png";
import {
  MdDashboard,
  MdMiscellaneousServices,
} from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { GiTreeGrowth } from "react-icons/gi";
import { HiDocumentText } from "react-icons/hi";
import Image from "next/image";

import SliderWithAlbumSanPham from "@/components/DetailSanPham/SlideAlbumSanPham";
import DatLichSanPham from "@/components/DetailSanPham/DatLichSanPham";
import MaCanSanPham from "@/components/DetailSanPham/MacanSanPham";
import UocTinhKhoanVay from "@/components/DetailSanPham/UocTinhKhoanVaySanPham";
import ViTriSanPham from "@/components/DetailSanPham/ViTriSanPham";
import ChiTietMaCan from "@/components/DetailSanPham/ChiTietMaCan";
import InFoChiTietSanPham from "@/components/DetailSanPham/infoChiTiet";
import TienIchCanhQuanSanPham from "@/components/DetailSanPham/TienIchCanhQuanSanPham";
import DanhSachTienIchSanPham from "@/components/DetailSanPham/DanhSachTienIchSanPham";

const images: string[] = [
  Slide1.src,
  Slide2.src,
  Slide3.src,
  Slide4.src,
  Slide5.src,
  Slide6.src,
  Slide7.src,
  Slide8.src,
  Slide9.src,
];

export default function SanPhamPage() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string, index: number): void => {
    setSelectedImage(image);
    setCurrentSlide(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = (): void => {
    setIsFullscreen(false);
    setSelectedImage(null);
  };

  return (
    <>
      {/* Slider hình ảnh */}
      <SliderWithAlbumSanPham
        images={images}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        handleImageClick={handleImageClick}
        title="Bộ sưu tập sản phẩm"
        subtitle="Khám phá thiết kế và chi tiết hình ảnh"
      />
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
      {isFullscreen && selectedImage && (
        <div className="sanpham-fullscreen-overlay" onClick={closeFullscreen}>
          <div
            className="sanpham-fullscreen-content"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Ảnh phóng to"
              width={150}
              height={68}
              className="sanpham-fullscreen-image"
            />
            <button className="sanpham-close-btn" onClick={closeFullscreen}>
              Đóng
            </button>
          </div>
        </div>
      )}

      <div className="sanpham-content-section">
        <div className="sanpham-content-wrapper">
          <div className="sanpham-content-left">
            <MaCanSanPham />
            <UocTinhKhoanVay />
            <ChiTietMaCan />
            <ViTriSanPham />
            <InFoChiTietSanPham />
            <TienIchCanhQuanSanPham />
            <DanhSachTienIchSanPham />
          </div>
          <div className="sanpham-content-right">
            <DatLichSanPham />
          </div>
        </div>
      </div>
    </>
  );
}
