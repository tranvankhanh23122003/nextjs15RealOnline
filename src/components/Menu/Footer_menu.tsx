"use client";

import React, { useState, useEffect } from "react";

// Import images
import logoImage from "../../assets/images/Logo.png";
import youtubeIcon from "../../assets/images/Icon_ytb.png";
import sendIcon from "../../assets/images/Icon_send.png";

const Footer_menu = () => {
  const [isClient, setIsClient] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  if (!isClient) {
    return (
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center py-8">
            <img src={logoImage.src} alt="TDC Logo" className="h-12 mx-auto mb-4" />
            <p className="text-gray-600">© 2025 TDC. Tất cả các quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src={logoImage.src} alt="TDC Logo" className="h-12 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">TDC</h3>
              <p className="text-gray-600 text-sm mb-2">
                Công Ty CP Kinh Doanh Và Phát Triển Bình Dương
              </p>
              <p className="text-gray-600 text-sm">
                Số 26-27, Lô I, D. Đông Khối, P. Hòa Phú, Tp Thủ Dầu Một, Bình
                Dương
              </p>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <img src={youtubeIcon.src} alt="YouTube" className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Sản phẩm
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Chứng cư
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Căn hộ dịch vụ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Bất động sản nghỉ dưỡng
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Đất nền
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Hỗ trợ</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Hướng dẫn mua nhà online
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Hướng dẫn mua nhà offline
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Đăng ký nhận bản tin
            </h4>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="flex border-gray-300 border-2 rounded-lg">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Địa chỉ email của bạn"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-white rounded-r-lg transition-colors focus:outline-none focus:ring-2"
                >
                  <img src={sendIcon.src} alt="send" className="w-5 h-5" />
                </button>
              </div>
            </form>
            <div className="mt-12 mb-8">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Vị trí của chúng tôi
          </h4>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.7854166057823!2d106.68467841146614!3d11.054708689066056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d120a79ca57f%3A0xae6359c1a8c60d14!2zQ8O0bmcgVHkgQ-G7lSBQaOG6p24gS2luaCBEb2FuaCBWw6AgUGjDoXQgVHJp4buDbiBCw6xuaCBExrDGoW5nIChUREMp!5e0!3m2!1sen!2s!4v1751614956266!5m2!1sen!2s"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-150px h-150px md:h-[400px] lg:h-[450px]"
              />
            </div>
          </div>
        </div>
          </div>
        </div>  
       

        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2025 TDC. Tất cả các quyền được bảo lưu.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
              >
                Chính sách bảo mật
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
              >
                Điều khoản sử dụng
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer_menu;
