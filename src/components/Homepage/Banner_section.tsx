"use client";

import { useState, useEffect } from "react";
import banner1 from "../../assets/images/baner1.png";
const Banner_section = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 29,
    minutes: 12,
    seconds: 99,
  });

  // Dummy banner data - bạn có thể thay thế bằng ảnh thật
  const banners = [
    {
      id: 1,
      title: "BÌNH DƯƠNG NEWCITY SHOP HOUSE",
      subtitle: "Đăng cáo 1 phòng cách mới",
      discount: "UP to 80% OFF",
      image: banner1.src,
    },
    // {
    //   id: 2,
    //   title: "DỰ ÁN THƯƠNG MẠI HIỆN ĐẠI",
    //   subtitle: "Cơ hội đầu tư sinh lời cao",
    //   discount: "UP to 70% OFF",
    //   image: "https://via.placeholder.com/600x300/8b5cf6/ffffff?text=Banner+2",
    // },
    // {
    //   id: 3,
    //   title: "KHU ĐÔ THỊ SMART CITY",
    //   subtitle: "Công nghệ thông minh tương lai",
    //   discount: "UP to 60% OFF",
    //   image: "https://via.placeholder.com/600x300/06b6d4/ffffff?text=Banner+3",
    // },
    // {
    //   id: 4,
    //   title: "BIỆT THỰ VEN SÔNG",
    //   subtitle: "Không gian sống xanh lý tưởng",
    //   discount: "UP to 50% OFF",
    //   image: "https://via.placeholder.com/600x300/10b981/ffffff?text=Banner+4",
    // },
    // {
    //   id: 5,
    //   title: "CHUNG CƯ CAO CẤP",
    //   subtitle: "Tiện ích 5 sao đẳng cấp quốc tế",
    //   discount: "UP to 40% OFF",
    //   image: "https://via.placeholder.com/600x300/f59e0b/ffffff?text=Banner+5",
    // },
    // {
    //   id: 6,
    //   title: "ĐẤT NỀN PHÂN LÔ",
    //   subtitle: "Vị trí vàng đầu tư sinh lời",
    //   discount: "UP to 30% OFF",
    //   image: "https://via.placeholder.com/600x300/ef4444/ffffff?text=Banner+6",
    // },
    // {
    //   id: 7,
    //   title: "KHU RESORT NGHỈ DƯỠNG",
    //   subtitle: "Thiên đường nghỉ dưỡng riêng tư",
    //   discount: "UP to 90% OFF",
    //   image: "https://via.placeholder.com/600x300/8b5cf6/ffffff?text=Banner+7",
    // },
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [banners.length]);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="relative w-full h-[300px] lg:h-[350px] bg-gray-900 overflow-hidden rounded-xl shadow-lg">
              {banners.map((banner, index) => (
                <div
                  key={banner.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${banner.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="px-9 lg:px-10 h-full flex items-center">
                    <div className="max-w-lg text-white">
                      <h1 className="text-xl lg:text-3xl font-bold mb-3">
                        {banner.title}
                      </h1>
                      <p className="text-sm lg:text-lg mb-3">
                        {banner.subtitle}
                      </p>
                      <div className="text-lg lg:text-2xl font-bold text-orange-400">
                        {banner.discount}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all z-10"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all z-10"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1 z-10">
                {banners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-white"
                        : "bg-white bg-opacity-50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Countdown Timer - 1/3 width */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-6 text-white shadow-lg h-[300px] lg:h-[350px] flex flex-col justify-center">
              <div className="text-center mb-6">
                <h3 className="text-lg lg:text-xl font-bold">
                  MỞ BÁN DỰ ÁN CÒN
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {/* Days */}
                <div className="bg-yellow-500 rounded-lg p-4 text-center">
                  <div className="text-2xl lg:text-3xl font-bold">
                    {timeLeft.days.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs uppercase mt-1">DAYS</div>
                </div>

                {/* Hours */}
                <div className="bg-yellow-500 rounded-lg p-4 text-center">
                  <div className="text-2xl lg:text-3xl font-bold">
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs uppercase mt-1">HOURS</div>
                </div>

                {/* Minutes */}
                <div className="bg-yellow-500 rounded-lg p-4 text-center">
                  <div className="text-2xl lg:text-3xl font-bold">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs uppercase mt-1">MINUTES</div>
                </div>

                {/* Seconds */}
                <div className="bg-yellow-500 rounded-lg p-4 text-center">
                  <div className="text-2xl lg:text-3xl font-bold">
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs uppercase mt-1">SECONDS</div>
                </div>
              </div>

              <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                Đặt lịch ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner_section;
