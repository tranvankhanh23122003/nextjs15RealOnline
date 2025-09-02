"use client";

import { useState } from "react";

import Slide1 from "@/assets/images/baner1.png";
import Slide2 from "@/assets/images/khu-cong-nghiep.png";
import Slide3 from "@/assets/images/baner1.png";
import Slide4 from "@/assets/images/khu-cong-nghiep.png";
import Slide5 from "@/assets/images/baner1.png";
import Slide6 from "@/assets/images/khu-cong-nghiep.png";
import Slide7 from "@/assets/images/baner1.png";
import Slide8 from "@/assets/images/khu-cong-nghiep.png";
import Slide9 from "@/assets/images/baner1.png";

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

      {isFullscreen && selectedImage && (
        <div className="sanpham-fullscreen-overlay" onClick={closeFullscreen}>
          <div
            className="sanpham-fullscreen-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Ảnh phóng to"
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
