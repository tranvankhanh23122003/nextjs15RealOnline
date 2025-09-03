import moneyIcon from "../../../public/images/Icon_money.png";
import Image from "next/image";
const Cashback_section = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-100 via-blue-50 to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 order-2 lg:order-1">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <span className="relative">
                ✨ CASHBACK 100%
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
              </span>
            </div>

            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Đặt mua không lo nghi
              </span>
            </h2>

            <div className="space-y-5 mb-10">
              <div className="flex items-start space-x-4 group">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                <p className="text-lg lg:text-xl text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                  Hoàn tiền tự động về tài khoản ngân hàng
                </p>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                <p className="text-lg lg:text-xl text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                  Hủy bất cứ lúc nào
                </p>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                <p className="text-lg lg:text-xl text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                  Xử lý hoàn tiền trong vòng 3 phút
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105">
                <span className="relative">
                  ĐẶT MUA NGAY
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
                </span>
                <svg
                  className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

              <button className="group border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105">
                <span>TÌM HIỂU THÊM</span>
                <svg
                  className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full blur-3xl opacity-30 scale-110 group-hover:scale-125 transition-transform duration-700"></div>

              <div className="relative z-10 flex justify-center">
                <Image
                  src={moneyIcon.src}
                  alt="Money Cashback Illustration"
                  width={150}
                  height={68}
                  className="w-[400px] h-[400px] md:w-[450px] md:h-[450px] lg:w-[400px] lg:h-[400px] xl:w-[480px] xl:h-[480px] object-contain animate-float drop-shadow-2xl group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                />
              </div>

              <div className="absolute top-10 left-10 w-8 h-8 bg-yellow-400 rounded-full opacity-80 animate-bounce shadow-lg">
                <div className="absolute inset-1 bg-yellow-300 rounded-full"></div>
                <div className="absolute inset-2 bg-yellow-500 rounded-full"></div>
              </div>

              <div
                className="absolute bottom-20 right-10 w-6 h-6 bg-green-400 rounded-full opacity-80 animate-bounce shadow-lg"
                style={{ animationDelay: "1s" }}
              >
                <div className="absolute inset-1 bg-green-300 rounded-full"></div>
              </div>

              <div
                className="absolute top-32 right-16 w-4 h-4 bg-blue-400 rounded-full opacity-80 animate-bounce shadow-lg"
                style={{ animationDelay: "2s" }}
              >
                <div className="absolute inset-1 bg-blue-300 rounded-full"></div>
              </div>

              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-2 animate-pulse">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
    </section>
  );
};

export default Cashback_section;
