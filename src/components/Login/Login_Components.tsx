import type React from "react"
import { useState } from "react"

const Login_Components = ({isOpen, onClose, onSwitchToSignUp}: {
  isOpen: boolean, 
  onClose: () => void,
  onSwitchToSignUp: () => void
}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login:", { email, password })
  }
  
  if(!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full mx-4 max-h-[95vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 bg-white rounded-full p-2 shadow-md"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex h-full min-h-[600px]">
          {/* Left Section - Platform Information */}
          <div className="w-1/2 p-8 flex flex-col justify-center bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="max-w-md">
              <div className="mb-6">
                <p className="text-blue-600 text-sm font-medium mb-1">Giải pháp giao dịch Bất động sản trực tuyến</p>
                <h2 className="text-gray-900 text-2xl font-bold mb-2">Sàn giao dịch BDS TDC</h2>
                <p className="text-gray-700 text-sm">
                  Đăng nhập ngay để khám phá toàn bộ thông tin và tận hưởng mọi tính năng tuyệt vời trên Sàn giao dịch
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-gray-900 font-semibold mb-3 text-sm">Khách đã đăng nhập</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 text-xs">
                      Thông tin, tài liệu chi tiết, chuyên sâu về các dự án và quỹ căn của Sàn giao dịch TDC
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 text-xs">Công cụ tính giá, chiết khấu và dòng tiền</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 text-xs">Cập nhật sớm những thông tin về dự án mới</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 text-xs">Cập nhật biến động kinh tế vĩ mô, đề xuất bất động sản phù hợp</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-gray-900 font-semibold mb-3 text-sm">Khách chưa đăng nhập</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 text-xs">Xem thông tin về các dự án của TDC</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 text-xs">Chuyến tham quan ảo TDC 360</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section - Login Form */}
          <div className="w-1/2 flex items-center justify-center p-8 bg-white overflow-y-auto">
            <div className="max-w-sm w-full">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Đăng nhập
                </h2>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="email"
                    placeholder="Số điện thoại hoặc email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-gray-900 placeholder-gray-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                        />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                <div className="flex items-center justify-end">
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                    Quên mật khẩu?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-3 px-4 rounded-lg hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium transition duration-200"
                >
                  Đăng nhập
                </button>

                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    Chưa có tài khoản?{" "}
                    <button
                      type="button"
                      onClick={onSwitchToSignUp}
                      className="text-blue-600 hover:text-blue-500 font-medium"
                    >
                      Đăng ký
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login_Components