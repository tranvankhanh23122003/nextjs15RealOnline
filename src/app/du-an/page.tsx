"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";

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

import { Area, Project } from "@/types/duan";
import { DictionaryService } from "@/services";

const DuAn = () => {
  const [projectData, setProjectData] = useState<Project | null>(null);
  const [cardData, setCardData] = useState<Area[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const matBang3DRef = useRef<HTMLDivElement | null>(null);

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

  // Hiệu ứng cuộn cho MatBang3D
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const currentScrollY = window.scrollY;
          const isScrollingDown = currentScrollY > lastScrollY;

          if (entry.isIntersecting) {
            entry.target.classList.add(isScrollingDown ? "visible-down" : "visible-up");
          } else {
            entry.target.classList.remove("visible-down", "visible-up");
          }

          lastScrollY = currentScrollY;
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (matBang3DRef.current) {
      observer.observe(matBang3DRef.current);
    }

    return () => {
      if (matBang3DRef.current) {
        observer.unobserve(matBang3DRef.current);
      }
    };
  }, []);

  if (loading) return <div>Đang tải dữ liệu...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div>
        <SliderWithAlbumDuAn images={images} />
      </div>

      <div className="home-page">
        <div className="form">
          <div className="left-section">
            <div>
              <h2>Tổng quan dự án {projectData?.name}</h2>
              <InfoChiTietDuAn project={projectData} />
            </div>

            <div>
              <DiemNoiBat />
            </div>

            <div>
              <h2>Phân khu của dự án {projectData?.name}</h2>
              <PhanKhu cards={cardData} />
            </div>

            <div>
              <h2>Vị trí {projectData?.name}</h2>
              <ViTri />
            </div>

            <div>
              <h2>Tiện ích cảnh quan thế</h2>
              <TienIchCanhQuan />
            </div>

            <div>
              <h4>Danh sách tiện ích</h4>
              <DanhSachTienIch />
            </div>

            <div>
              <h2>Tài liệu {projectData?.name}</h2>
              <FileTaiLieu />
            </div>
          </div>

          <div className="right-section">
            <TuVanForm />
          </div>
        </div>

        <div className="info-form">
          <div className="title-with-legend">
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

          <div className="section-3d" ref={matBang3DRef}>
            <MatBang3D />
          </div>

          <div>
            <DoiTac />
          </div>

          <div>
            <TinTuc />
          </div>
        </div>
      </div>
    </>
  );
};

export default DuAn;