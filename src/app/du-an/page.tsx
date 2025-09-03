"use client";

import { useState, useEffect } from "react";
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

const DuAn = () => {
  const [projectData, setProjectData] = useState<Project | null>(null);
  const [cardData, setCardData] = useState<Area[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/dictionary/DuAn");
        const data = response.data;

        console.log("Dữ liệu API trả về:", data);

        setProjectData(data.project || null);
        setCardData(data.areas || []);

        // ✅ Lấy images từ mảng areas
        setImages((data.areas || []).map((area: any) => area.image));
      } catch (err: any) {
        console.error("Lỗi khi lấy dữ liệu dự án:", err.message);
        setError("Không thể tải dữ liệu dự án. Vui lòng thử lại sau.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, []);

  if (loading) return <div>Đang tải dữ liệu...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      {/* Slider nhận danh sách ảnh từ API */}
      <SliderWithAlbumDuAn images={images} />

      <div className="home-page">
        <div className="form">
          <div className="left-section">
            <h2>Tổng quan dự án {projectData?.name}</h2>
            <InfoChiTietDuAn project={projectData} />
            <DiemNoiBat />

            <h2>Phân khu của dự án {projectData?.name}</h2>
            <PhanKhu cards={cardData} />

            <h2>Vị trí {projectData?.name}</h2>
            <ViTri />

            <h2>Tiện ích cảnh quan</h2>
            <TienIchCanhQuan />

            <h4>Danh sách tiện ích</h4>
            <DanhSachTienIch />

            <h2>Tài liệu {projectData?.name}</h2>
            <FileTaiLieu />

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
          </div>

          <div className="right-section">
            <TuVanForm />
          </div>
        </div>

        <div className="info-form">
          <div className="matbang3d-section">
            <MatBang3D />
            <DoiTac />
            <TinTuc />
          </div>
        </div>
      </div>
    </>
  );
};

export default DuAn;
