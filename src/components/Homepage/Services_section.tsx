"use client";

import { useState } from "react";
import BookingModal from "../DatCho_LienHe/BookingModal";
import Booking_TuVan from "../DatCho_LienHe/Booking_TuVan";
import Image from "next/image";

const Services_section = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isTuVanOpen, setIsTuVanOpen] = useState(false);

  const services = [  
    {
      id: 1,
      title: "Đăng ký xem nhà",
      icon: <Image src="/images/Icon_dangkyxemnha.png" alt="Đăng ký" width={50} height={50} />,
      bgColor: "bg-blue-100",
      borderColor: "border-blue-300",
    },
    {
      id: 2,
      title: "Dự án",
      icon: <Image src="/images/Icon_duan.png" alt="Dự án" width={50} height={50} />,
      bgColor: "bg-blue-100",
      borderColor: "border-blue-300",
    },
    {
      id: 3,
      title: "Bảng hàng dự án",
      icon: <Image src="/images/Ico_banghangduan.png" alt="Bảng hàng dự án" width={50} height={50} />,
      bgColor: "bg-blue-100",
      borderColor: "border-blue-300",
    },
    {
      id: 4,
      title: "Bảng đồ số",
      icon: <Image src="/images/Icon_bandoso.png" alt="Bảng đồ số" width={50} height={50} />,
      bgColor: "bg-blue-100",
      borderColor: "border-blue-300",
    },
    {
      id: 5,
      title: "Xem nhà thực tế ảo",
      icon: <Image src="/images/Icon_xemnhathucteao.png" alt="Xem nhà ảo" width={50} height={50} />,
      bgColor: "bg-blue-100",
      borderColor: "border-blue-300",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-center group cursor-pointer"
                onClick={() => {
                  if (service.id === 1) setIsBookingOpen(true);
                  if (service.id === 2) setIsTuVanOpen(true);
                }}
              >
                <div
                  className={`
                    ${service.bgColor} 
                    ${service.borderColor}
                    rounded-full p-6 mb-4 
                    group-hover:scale-110 group-hover:shadow-xl
                    transition-all duration-300 
                    shadow-lg border-2
                    relative
                    w-20 h-20 lg:w-24 lg:h-24
                    flex items-center justify-center
                  `}
                >
                  {service.icon}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
                </div>

                <h3 className="text-sm lg:text-base font-medium text-gray-700 text-center leading-tight max-w-[80px] lg:max-w-[100px]">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <Booking_TuVan isOpen={isTuVanOpen} onClose={() => setIsTuVanOpen(false)} />
    </section>
  );
};

export default Services_section;
