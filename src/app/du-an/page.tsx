"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { MdDashboard, MdMiscellaneousServices } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { GiTreeGrowth } from "react-icons/gi";
import { HiDocumentText } from "react-icons/hi";
import Slide1 from "../../../public/images/baner1.png"
import Slide2 from "../../../public/images/khu-cong-nghiep.png"
import SliderWithAlbumDuAn from "@/components/DetailDuAn/SlideUlbumDuAn";
import InfoChiTietDuAn from "@/components/DetailDuAn/InfoChiTiet";
import DiemNoiBat from "@/components/DetailDuAn/DiemNoiBat";
import PhanKhu from "@/components/DetailDuAn/PhanKhu";
import ViTri from "@/components/DetailDuAn/ViTri";
import TuVanForm from "@/components/DetailDuAn/TuVanForm";
import TienIchCanhQuan from "@/components/DetailDuAn/TienIchCanhQuan";
import DanhSachTienIch from "@/components/DetailDuAn/DanhSachTienIch";
import FileTaiLieu from "@/components/DetailDuAn/FileTaiLieu";
import MatBang3D from "@/components/DetailDuAn/MatBang3D";
import DoiTac from "@/components/DetailDuAn/DoiTac";
import TinTuc from "@/components/DetailDuAn/TinTuc";
import UuDai from "@/components/DetailDuAn/UuDai";
import { Area, Project } from "@/types/duan";
import { DictionaryService } from "@/services";

const DuAn = () => {
  const [projectData, setProjectData] = useState<Project | null>(null);
  const [cardData, setCardData] = useState<Area[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const matBang3DRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Lấy dữ liệu API
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        setLoading(true);
        const response = await DictionaryService.getDuAn();
        const data = response.data;

        setProjectData(data.project || null);
        setCardData(data.areas || []);
        setImages((data.areas || []).map((area: any) => area.image));
      } catch (err: any) {
        setError("Không thể tải dữ liệu dự án. Vui lòng thử lại sau.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, []);

  // Hiệu ứng cuộn
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver(
      (entries) => {
        const currentScrollY = window.scrollY;
        const isScrollingDown = currentScrollY > lastScrollY;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(isScrollingDown ? "visible-down" : "visible-up");
          } else {
            entry.target.classList.remove("visible-down", "visible-up");
          }
        });

        lastScrollY = currentScrollY;
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    if (matBang3DRef.current) {
      observer.observe(matBang3DRef.current);
    }

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      if (matBang3DRef.current) {
        observer.unobserve(matBang3DRef.current);
      }
    };
  }, []);

  if (loading) return <div>Đang tải dữ liệu...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div
        className="section"
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
      >
        <SliderWithAlbumDuAn images={images} />
      </div>

      {/* Icon Section */}
      <div
        className="section duan-icon-section"
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
      >
        <div className="duan-icon-wrapper">
          <div className="duan-icon-item">
            <MdDashboard className="duan-icon" />
            <span className="duan-icon-label">Tổng quan</span>
          </div>
          <div className="duan-icon-item">
            <FaProjectDiagram className="duan-icon" />
            <span className="duan-icon-label">Phân khu</span>
          </div>
          <div className="duan-icon-item">
            <GoLocation className="duan-icon" />
            <span className="duan-icon-label">Vị trí</span>
          </div>
          <div className="duan-icon-item">
            <MdMiscellaneousServices className="duan-icon" />
            <span className="duan-icon-label">Tiện ích</span>
          </div>
          <div className="duan-icon-item">
            <GiTreeGrowth className="duan-icon" />
            <span className="duan-icon-label">Cảnh quan</span>
          </div>
          <div className="duan-icon-item">
            <HiDocumentText className="duan-icon" />
            <span className="duan-icon-label">Tài liệu tổng mặt bằng</span>
          </div>
        </div>
      </div>

      <div className="home-page">
        <div className="form">
          <div className="left-section">
            <div className="section"
             ref={(el) => {
              sectionRefs.current[2] = el;
            }}
            >
<h2>Khu Biệt thự cao cấp Cocoland</h2>
<UuDai />
            </div>
            <div
              className="section"
              ref={(el) => {
                sectionRefs.current[3] = el;
              }}
            >
              <h2>Tổng quan dự án {projectData?.name}</h2>
              <InfoChiTietDuAn project={projectData} />
            </div>

            <div
              className="section"
              ref={(el) => {
                sectionRefs.current[4] = el;
              }}
            >
              <DiemNoiBat />
            </div>

            <div
              className="section"
              ref={(el) => {
                sectionRefs.current[5] = el;
              }}
            >
              <h2>Phân khu của dự án {projectData?.name}</h2>
              <PhanKhu cards={cardData} />
            </div>

            <div
              className="section"
              ref={(el) => {
                sectionRefs.current[6] = el;
              }}
            >
              <h2>Vị trí {projectData?.name}</h2>
              <ViTri />
            </div>

            <div
              className="section"
              ref={(el) => {
                sectionRefs.current[7] = el;
              }}
            >
              <h2>Tiện ích cảnh quan thế</h2>
              <TienIchCanhQuan />
            </div>

            <div
              className="section"
              ref={(el) => {
                sectionRefs.current[8] = el;
              }}
            >
              <h4>Danh sách tiện ích</h4>
              <DanhSachTienIch />
            </div>

            <div
              className="section"
              ref={(el) => {
                sectionRefs.current[9] = el;
              }}
            >
              <h2>Tài liệu {projectData?.name}</h2>
              <FileTaiLieu />
            </div>
          </div>

          <div
            className="right-section"
            ref={(el) => {
              sectionRefs.current[10] = el;
            }}
          >
            <TuVanForm />
          </div>
        </div>

        <div className="info-form">
          <div
            className="section title-with-legend"
            ref={(el) => {
              sectionRefs.current[11] = el;
            }}
          >
            <h2>Tổng mặt bằng {projectData?.name}</h2>
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
            ref={matBang3DRef}
          >
            <MatBang3D />
          </div>

          <div
            className="section"
            ref={(el) => {
              sectionRefs.current[12] = el;
            }}
          >
            <DoiTac />
          </div>

          <div
            className="section"
            ref={(el) => {
              sectionRefs.current[13] = el;
            }}
            >
            <TinTuc />
          </div>
        </div>
      </div>
    </>
  );
};

export default DuAn;