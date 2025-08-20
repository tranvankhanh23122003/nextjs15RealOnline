import type React from "react";
import { useState } from "react";
import google from "../../assets/images/Icon-gg.png";
import mail from "../../assets/images/Icon-mail.png";

const SignUp_Components = ({
  isOpen,
  onClose,
  onSwitchToLogin,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("SignUp:", { phone, password });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50 backdrop-blur-sm p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl mx-auto max-h-[95vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 z-10 text-gray-500 hover:text-gray-700 bg-white rounded-full p-1.5 md:p-2 shadow-md"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row h-full min-h-[400px] lg:min-h-[600px]">
          {/* Left Section - Platform Information */}
          <div className="lg:w-1/2 p-4 md:p-6 lg:p-8 flex flex-col justify-center bg-gradient-to-br from-blue-50 to-blue-100 order-2 lg:order-1">
            <div className="max-w-md mx-auto lg:mx-0">
              <div className="mb-4 lg:mb-6">
                <p className="text-blue-600 text-xs md:text-sm font-medium mb-1">
                  Giải pháp giao dịch Bất động sản trực tuyến
                </p>
                <h2 className="text-gray-900 text-lg md:text-xl lg:text-2xl font-bold mb-2">
                  Sàn giao dịch BDS TDC
                </h2>
                <p className="text-gray-700 text-xs md:text-sm">
                  Đăng nhập ngay để khám phá toàn bộ thông tin và tận hưởng mọi
                  tính năng tuyệt vời trên Sàn giao dịch
                </p>
              </div>

              <div className="mb-4 lg:mb-6 hidden md:block">
                <h3 className="text-gray-900 font-semibold mb-3 text-xs md:text-sm">
                  Khách đã đăng nhập
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 text-xs">
                      Thông tin, tài liệu chi tiết, chuyên sâu về các dự án và
                      quỹ căn của Sàn giao dịch TDC
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 text-xs">
                      Công cụ tính giá, chiết khấu và dòng tiền
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 text-xs">
                      Cập nhật sớm những thông tin về dự án mới
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 text-xs">
                      Cập nhật biến động kinh tế vĩ mô, để xuất bất động sản phù
                      hợp
                    </span>
                  </li>
                </ul>
              </div>

              <div className="hidden md:block">
                <h3 className="text-gray-900 font-semibold mb-3 text-xs md:text-sm">
                  Khách chưa đăng nhập
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 text-xs">
                      Xem thông tin về các dự án của TDC
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 text-xs">
                      Chuyến tham quan ảo TDC 360
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section - SignUp Form */}
          <div className="lg:w-1/2 flex items-center justify-center p-4 md:p-6 lg:p-8 bg-white overflow-y-auto order-1 lg:order-2">
            <div className="max-w-sm w-full">
              <div className="text-center mb-6 lg:mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  Đăng ký hoặc đăng nhập
                </h2>
              </div>

              <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="tel"
                    placeholder="Số điện thoại"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-gray-900 placeholder-gray-500 text-sm md:text-base"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-gray-900 placeholder-gray-500 text-sm md:text-base"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                <div className="flex justify-between items-center mb-4 lg:mb-6">
                  <button
                    type="button"
                    onClick={onSwitchToLogin}
                    className="text-blue-600 hover:text-blue-500 text-xs md:text-sm font-medium"
                  >
                    Đăng nhập
                  </button>
                  <button
                    type="button"
                    className="text-blue-600 hover:text-blue-500 text-xs md:text-sm font-medium"
                  >
                    Quên mật khẩu?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-2.5 md:py-3 px-4 rounded-lg hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium transition duration-200 text-sm md:text-base"
                >
                  Tiếp tục với số điện thoại
                </button>

                <div className="mt-4 lg:mt-6">
                  <div className="text-center text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                    Truy cập bằng
                  </div>
                  <div className="flex justify-center space-x-3 md:space-x-4">
                    <button
                      type="button"
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200"
                    >
                      <img
                        src={google}
                        alt="Google"
                        className="w-4 h-4 md:w-5 md:h-5"
                      />
                    </button>
                    <button
                      type="button"
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200"
                    >
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200"
                    >
                      <img
                        src={mail}
                        alt="Mail"
                        className="w-4 h-4 md:w-5 md:h-5"
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp_Components;
