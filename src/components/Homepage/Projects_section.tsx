"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import logoImage from "../../assets/images/Logo.png";
import ProjectApi from "../../services/ProjectApi";
const Projects_section = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProjectApi.getAll({});
        setProjects(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách dự án:", error);
      }
    };
    fetchData();
  }, []);

  const visibleProjects = projects.slice(currentSlide, currentSlide + 3);
  while (visibleProjects.length < 3 && projects.length > 3) {
    const remainingIndex =
      (currentSlide + visibleProjects.length) % projects.length;
    visibleProjects.push(projects[remainingIndex]);
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Dự án trọng điểm
          </h2>
          <span
            className="text-blue-500 text-2xl cursor-pointer"
            onClick={() => router.push("/list-tdc")}
          >
            Xem tất cả
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <div
              key={`${project.MaDA}-${index}`}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.ImageUrl}
                    alt={project.TenDA}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bg-opacity-10 group-hover:bg-opacity-5 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white rounded-full p-2 shadow-lg">
                      <img src={logoImage.src} alt="TDC" className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Đang mở bán"
                          ? "bg-green-500 text-white"
                          : "bg-orange-500 text-white"
                      }`}
                    >
                      {project.status || "Đang mở bán"}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.TenDA}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 7v10c0 2.21 3.79 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.79 4 8 4s8-1.79 8-4M4 7c0-2.21 3.79-4 8-4s8 1.79 8 4"
                        />
                      </svg>
                      <span>
                        Tổng diện tích: {project.DienTich || "Chưa cập nhật"}
                      </span>
                    </div>

                    <div className="flex items-start">
                      <svg
                        className="w-4 h-4 mr-2 mt-0.5 text-red-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="leading-tight">{project.DiaChi}</span>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => router.push("/du-an")}
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(projects.length / 3) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index * 3)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentSlide / 3) === index
                    ? "bg-blue-500 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects_section;
