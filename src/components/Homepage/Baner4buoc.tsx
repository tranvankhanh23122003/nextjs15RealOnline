
const Baner4buoc = () => {
  const steps = [
    {
      id: 1,
      title: "Đăng ký/Đăng nhập",
      icon: "user",
      gradient: "from-yellow-400 to-orange-500",
      borderColor: "border-orange-300",
      bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
    },
    {
      id: 2,
      title: "Tìm kiếm BĐS",
      icon: "search",
      gradient: "from-orange-400 to-red-500",
      borderColor: "border-orange-300",
      bgColor: "bg-gradient-to-br from-orange-400 to-red-500",
    },
    {
      id: 3,
      title: "Đặt mua",
      icon: "cart",
      gradient: "from-cyan-400 to-blue-500",
      borderColor: "border-cyan-300",
      bgColor: "bg-gradient-to-br from-cyan-400 to-blue-500",
    },
    {
      id: 4,
      title: "Hoàn tất đơn hàng",
      icon: "check",
      gradient: "from-pink-400 to-red-500",
      borderColor: "border-pink-300",
      bgColor: "bg-gradient-to-br from-pink-400 to-red-500",
    },
  ];

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "user":
        return (
          <svg
            className="w-10 h-10 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4L13.5 4.68C13.1 4.89 12.6 5 12 5S10.9 4.89 10.5 4.68L9 4L3 7V9L10.5 12.5C11.3 12.8 12.7 12.8 13.5 12.5L21 9ZM12 13.5C11.2 13.5 10.5 13.7 9.8 14.1L3 17V19L9.8 21.9C11.1 22.6 12.9 22.6 14.2 21.9L21 19V17L14.2 14.1C13.5 13.7 12.8 13.5 12 13.5Z" />
          </svg>
        );
      case "search":
        return (
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 21l4-4 4 4"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 13a1 1 0 100-2 1 1 0 000 2z"
            />
          </svg>
        );
      case "cart":
        return (
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13v6a1 1 0 001 1h8a1 1 0 001-1v-6m-9 0h10"
            />
            <circle cx="9" cy="21" r="1" strokeWidth={2} />
            <circle cx="20" cy="21" r="1" strokeWidth={2} />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l2 2"
            />
          </svg>
        );
      case "check":
        return (
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 16l2 2 4-4"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            4 BƯỚC MUA ONLINE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center group">
              {/* Step Circle with Animation */}
              <div className="relative mb-6">
                {/* Outer Decorative Circles */}
                <div
                  className={`absolute inset-0 rounded-full border-4 ${step.borderColor} animate-pulse opacity-30`}
                ></div>
                <div
                  className={`absolute -inset-2 rounded-full border-2 ${step.borderColor} opacity-20`}
                ></div>

                {/* Main Circle */}
                <div
                  className={`relative w-32 h-32 rounded-full ${step.bgColor} shadow-2xl transform group-hover:scale-110 transition-all duration-500 flex items-center justify-center`}
                >
                  {/* Inner White Circle */}
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-inner">
                    <div
                      className={`w-16 h-16 rounded-full ${step.bgColor} flex items-center justify-center shadow-lg`}
                    >
                      {renderIcon(step.icon)}
                    </div>
                  </div>

                  {/* Decorative Dots */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                    <div
                      className={`w-3 h-3 rounded-full bg-white shadow-lg opacity-80`}
                    ></div>
                  </div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                    <div
                      className={`w-3 h-3 rounded-full bg-white shadow-lg opacity-80`}
                    ></div>
                  </div>
                  <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
                    <div
                      className={`w-3 h-3 rounded-full bg-white shadow-lg opacity-80`}
                    ></div>
                  </div>
                  <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                    <div
                      className={`w-3 h-3 rounded-full bg-white shadow-lg opacity-80`}
                    ></div>
                  </div>
                </div>

                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200">
                  <span className="text-sm font-bold text-gray-700">
                    {step.id}
                  </span>
                </div>
              </div>

              {/* Step Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center group-hover:text-blue-600 transition-colors duration-300">
                {step.title}
              </h3>

              {/* Connecting Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <div className="w-0 h-0 border-l-4 border-l-gray-400 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Bắt đầu hành trình sở hữu ngôi nhà mơ ước của bạn ngay hôm nay!
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
            <svg
              className="w-6 h-6 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Bắt đầu ngay
          </button>
        </div>
      </div>
    </section>
  );
};

export default Baner4buoc;
