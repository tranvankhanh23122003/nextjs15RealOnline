"use client";

import { useState } from "react";
import { MdDashboard, MdMiscellaneousServices } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { GiTreeGrowth } from "react-icons/gi";
import { HiDocumentText } from "react-icons/hi";
import Image from "next/image";


import SliderWithMiniSlides from "@/components/DetailPhanKhu/SlideAlbumPhanKhu";
import DiemNoiBatPhanKhu from "@/components/DetailPhanKhu/DiemNoiBatPhanKhu";
import InfoChiTietPhanKhu from "@/components/DetailPhanKhu/InfoChiTietPhanKhu";
import TuVanFormPhanKhu from "@/components/DetailPhanKhu/TuVanPhanKhu";
import PhanKhuA from "@/components/DetailPhanKhu/PhanKhuA";
import Reviews from "@/components/DetailPhanKhu/DanhGiaPhanKhu";
import ViTriPhanKhu from "@/components/DetailPhanKhu/ViTriPhanKhu";
import TienIchCanhQuanPhanKhu from "@/components/DetailPhanKhu/TienIchCanhQuanPhanKhu";
import DanhSachTienIch from "@/components/DetailDuAn/DanhSachTienIch";
import MatBang3DPhanKhu from "@/components/DetailPhanKhu/MatBang3DPhanKhu";
import PriceTable from "@/components/DetailPhanKhu/PricePhanKhu";
import TinTucPhanKhu from "@/components/DetailPhanKhu/TinTucPhanKhu";

// import ảnh
import Slide1 from "../../../public/images/baner1.png";
import Slide2 from "../../../public/images/khu-cong-nghiep.png";
import Slide3 from  "../../../public/images/baner1.png";
import Slide4 from "../../../public/images/khu-cong-nghiep.png";
import Slide5 from  "../../../public/images/baner1.png";
import Slide6 from "../../../public/images/khu-cong-nghiep.png";
import Slide7 from "../../../public/images/baner1.png";
import Slide8 from"../../../public/images/khu-cong-nghiep.png";
import Slide9 from  "../../../public/images/baner1.png";

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

interface PhanKhuItem {
  id: number;
  image: string;
  area: string;
  acreage: string;
  price: string;
  type: string;
}

const duLieuPhanKhuA: PhanKhuItem[] = [
  { id: 1, image: Slide1.src, area: "Shop house", acreage: "100-140 m²", price: "Từ 17,2 tỷ - 20 tỷ", type: "Biệt thự" },
  { id: 2, image: Slide2.src, area: "Shop house", acreage: "100-140 m²", price: "Từ 17,2 tỷ - 20 tỷ", type: "Biệt thự" },
  { id: 3, image: Slide3.src, area: "Shop house", acreage: "100-140 m²", price: "Từ 17,2 tỷ - 20 tỷ", type: "Biệt thự" },
];

export default function PhanKhu() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentSlide(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setSelectedImage(null);
  };

  return (
    <>
      {/* Slider hình ảnh */}
      <SliderWithMiniSlides
        images={images}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        handleImageClick={handleImageClick}
        title="Bộ sưu tập sản phẩm"
        subtitle="Khám phá thiết kế và chi tiết hình ảnh"
      />

      {/* Mục lục icon */}
      <div className="phankhu-icon-section">
        <div className="phankhu-icon-wrapper">
          <div className="phankhu-icon-item">
            <MdDashboard className="phankhu-icon" />
            <span className="phankhu-icon-label">Tổng quan</span>
          </div>
          <div className="phankhu-icon-item">
            <FaProjectDiagram className="phankhu-icon" />
            <span className="phankhu-icon-label">Phân khu</span>
          </div>
          <div className="phankhu-icon-item">
            <GoLocation className="phankhu-icon" />
            <span className="phankhu-icon-label">Vị trí</span>
          </div>
          <div className="phankhu-icon-item">
            <MdMiscellaneousServices className="phankhu-icon" />
            <span className="phankhu-icon-label">Tiện ích</span>
          </div>
          <div className="phankhu-icon-item">
            <GiTreeGrowth className="phankhu-icon" />
            <span className="phankhu-icon-label">Cảnh quan</span>
          </div>
          <div className="phankhu-icon-item">
            <HiDocumentText className="phankhu-icon" />
            <span className="phankhu-icon-label">Tài liệu tổng mặt bằng</span>
          </div>
        </div>
      </div>

      {/* Fullscreen */}
      {isFullscreen && selectedImage && (
        <div className="phankhu-fullscreen-overlay" onClick={closeFullscreen}>
          <div className="phankhu-fullscreen-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Ảnh phóng to"
              width={1200}
              height={800}
              className="phankhu-fullscreen-image"
            />
            <button className="phankhu-close-btn" onClick={closeFullscreen}>Đóng</button>
          </div>
        </div>
      )}

      <div className="form">
        <div className="left-section">
          <h2>Thông tin chi tiết</h2>
          <InfoChiTietPhanKhu />
          <DiemNoiBatPhanKhu />

          <h2>Loại hình của phân khu A</h2>
          <PhanKhuA cards={duLieuPhanKhuA} />

          <h2>Đánh giá tiêu biểu</h2>
          <Reviews />

          <h2>Vị Trí Phân Khu A</h2>
          <ViTriPhanKhu />

          <h2>Tiện ích cảnh quan</h2>
          <TienIchCanhQuanPhanKhu />

          <h2>Phân khu A - Không gian sống “biệt thự” đẳng cấp</h2>
          <DanhSachTienIch />
        </div>

        <div className="right-section">
          <TuVanFormPhanKhu />
        </div>
      </div>

      <div className="title-with-legend">
        <h2>Tổng mặt bằng biệt thự cao cấp Cocoland</h2>
        <div className="legend">
          <div className="legend-item"><span className="color-box dang-ban"></span> Đang bán</div>
          <div className="legend-item"><span className="color-box da-ban"></span> Đã bán</div>
          <div className="legend-item"><span className="color-box chua-mo-ban"></span> Chưa mở bán</div>
          <div className="legend-item"><span className="color-box giu-cho"></span> Giữ chỗ</div>
        </div>
      </div>

      <MatBang3DPhanKhu />
      <PriceTable />
      <TinTucPhanKhu />
    </>
  );
}
