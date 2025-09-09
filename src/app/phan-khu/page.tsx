"use client";

import { useState, useEffect, useRef } from "react";
import { MdDashboard, MdMiscellaneousServices } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { GiTreeGrowth } from "react-icons/gi";
import { HiDocumentText } from "react-icons/hi";
import Image from "next/image";

// Components
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

// Images
import Slide1 from "../../../public/images/baner1.png";
import Slide2 from "../../../public/images/khu-cong-nghiep.png";
import Slide3 from "../../../public/images/baner1.png";
import Slide4 from "../../../public/images/khu-cong-nghiep.png";
import Slide5 from "../../../public/images/baner1.png";
import Slide6 from "../../../public/images/khu-cong-nghiep.png";
import Slide7 from "../../../public/images/baner1.png";
import Slide8 from "../../../public/images/khu-cong-nghiep.png";
import Slide9 from "../../../public/images/baner1.png";

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
  {
    id: 1,
    image: Slide1.src,
    area: "Shop house",
    acreage: "100-140 m²",
    price: "Từ 17,2 tỷ - 20 tỷ",
    type: "Biệt thự",
  },
  {
    id: 2,
    image: Slide2.src,
    area: "Shop house",
    acreage: "100-140 m²",
    price: "Từ 17,2 tỷ - 20 tỷ",
    type: "Biệt thự",
  },
  {
    id: 3,
    image: Slide3.src,
    area: "Shop house",
    acreage: "100-140 m²",
    price: "Từ 17,2 tỷ - 20 tỷ",
    type: "Biệt thự",
  },
];

export default function PhanKhu() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const lastScrollY = useRef<number>(window.scrollY);

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentSlide(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const currentScrollY = window.scrollY;
        const isScrollingDown = currentScrollY > lastScrollY.current;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              isScrollingDown ? "visible-down" : "visible-up"
            );
          } else {
            entry.target.classList.remove("visible-down", "visible-up");
          }
        });

        lastScrollY.current = currentScrollY;
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      {/* Slider */}
      <div
        className="section"
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
      >
        <SliderWithMiniSlides
          images={images}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          handleImageClick={handleImageClick}
          title="Khu biệt thự cao cấp Cocoland / Phân Khu A"
          subtitle="Khám phá thiết kế và chi tiết hình ảnh"
        />
      </div>

      {/* Icon Section */}
      <div
        className="section phankhu-icon-section"
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
      >
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
          <div
            className="phankhu-fullscreen-content"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Ảnh phóng to"
              width={1200}
              height={800}
              className="phankhu-fullscreen-image"
            />
            <button className="phankhu-close-btn" onClick={closeFullscreen}>
              Đóng
            </button>
          </div>
        </div>
      )}

      <div className="form">
        <div className="left-section">
          <div
            className="section"
            ref={(el) => {
              sectionRefs.current[2] = el;
            }}
          >
            <h2>Tổng quan phân khu A</h2>
            <InfoChiTietPhanKhu />
          </div>

          <div
            className="section"
            ref={(el) => {
              sectionRefs.current[3] = el;
            }}
          >
            <DiemNoiBatPhanKhu />
          </div>

          <div
            className="section"
            ref={(el) => {
              sectionRefs.current[4] = el;
            }}
          >
            <h2>Loại hình của phân khu A</h2>
            <PhanKhuA cards={duLieuPhanKhuA} />
          </div>

          <div
            className="section"
            ref={(el) => {
              sectionRefs.current[5] = el;
            }}
          >
            <h2>Đánh giá tiêu biểu</h2>
            <Reviews />
          </div>

          <div
            className="section"
            ref={(el) => {
              sectionRefs.current[6] = el;
            }}
          >
            <h2>Vị Trí Phân Khu A</h2>
            <ViTriPhanKhu />
          </div>

          <div
            className="section"
            ref={(el) => {
              sectionRefs.current[7] = el;
            }}
          >
            <h2>Tiện ích cảnh quan</h2>
            <TienIchCanhQuanPhanKhu />
          </div>

          <div
            className="section"
            ref={(el) => {
              sectionRefs.current[8] = el;
            }}
          >
            <h2 style={{fontSize:"31px"}}>Phân khu A - Không gian sống “biệt thự” đẳng cấp</h2>
            <p>
              Sở hữu lợi thế kế cận Paradise Bay với các siêu tiện ích tầm cỡ,
              tiếp giáp khu giáo dục liên cấp. Bên trong nội khu là cảnh quan
              nghệ thuật lấy cảm hứng từ châu Âu: quảng trường Europe Square,
              vườn tượng nghệ thuật cổ điển, công viên BBQ.
            </p>
            <h2 style={{fontSize:"20px", margin :"20px 0px 0px 0px "}}>Danh Sách Tiện ích </h2>
            <DanhSachTienIch />
          </div>
        </div>

        <div
          className="right-section"
          ref={(el) => {
            sectionRefs.current[9] = el;
          }}
        >
          <TuVanFormPhanKhu />
        </div>
      </div>

      <div
        className="section title-with-legend"
        ref={(el) => {
          sectionRefs.current[10] = el;
        }}
      >
        <h2>Tổng mặt bằng biệt thự cao cấp Cocoland</h2>
        <div className="legend">
          <div className="legend-item">
            <span className="color-box dang-ban"></span> Đang bán
          </div>
          <div className="legend-item">
            <span className="color-box da-ban"></span> Đã bán
          </div>
          <div className="legend-item">
            <span className="color-box chua-mo-ban"></span> Chưa mở bán
          </div>
          <div className="legend-item">
            <span className="color-box giu-cho"></span> Giữ chỗ
          </div>
        </div>
      </div>

      <div
        className="section-3d"
        ref={(el) => {
          sectionRefs.current[11] = el;
        }}
      >
        <MatBang3DPhanKhu />
      </div>

      <div
        className="section"
        ref={(el) => {
          sectionRefs.current[12] = el;
        }}
      >
        <h1 className="price-table-title">Giá Quỹ Căn của Phân Khu A</h1>
        {/* .price-table-title {
  font-size: 2rem;
  font-weight: bold;
  color: #374151;
  margin: 0 0 20px 0;
  margin-left: 250px;
} */}
        <PriceTable />
      </div>

      <div
        className="section"
        ref={(el) => {
          sectionRefs.current[13] = el;
        }}
      >
        <TinTucPhanKhu />
      </div>
    </>
  );
}
