
import ImageTest from "../../assets/images/ImageTest.png";

const TinTuc = () => {
  const mainNews = {
    id: 1,
    title: "LỄ ĐỘNG THỔ DỰ ÁN NHÀ Ở AN SINH XÃ HỘI - KHU 6 VIỆT SING",
    description:
      "Dự án với quy mô 5 khối nhà cao 22 tầng và 1 khối nhà xe 7 tầng trên diện tích khu đất 19.503m2, tổng mức đầu tư khoảng 1.337 tỷ tọa lạc tại Khu định cư Việt Sing, phường Thuận Giao, thành phố Thuận An, tỉnh Bình Dương.",
    image: ImageTest,
    date: "23 tháng 2, 2025",
    category: "Tin tức",
  };

  const sideNews = [
    {
      id: 2,
      title:
        "THÔNG CÁO BÁO CHÍ - CTCP KINH DOANH VÀ PHÁT TRIỂN BÌNH DƯƠNG TỔ CHỨC THÀNH CÔNG HỘI NGHỊ GẮP GỠ NHÀ ĐẦU TƯ NĂM 2025",
      image: ImageTest,
      date: "23 tháng 2, 2025",
      category: "Tin tức",
    },
    {
      id: 3,
      title:
        "THÔNG CÁO BÁO CHÍ - CTCP KINH DOANH VÀ PHÁT TRIỂN BÌNH DƯƠNG TỔ CHỨC THÀNH CÔNG HỘI NGHỊ GẮP GỠ NHÀ ĐẦU TƯ NĂM 2025",
      image: ImageTest,
      date: "23 tháng 2, 2025",
      category: "Tin tức",
    },
    {
      id: 4,
      title:
        "THÔNG CÁO BÁO CHÍ - CTCP KINH DOANH VÀ PHÁT TRIỂN BÌNH DƯƠNG TỔ CHỨC THÀNH CÔNG HỘI NGHỊ GẮP GỠ NHÀ ĐẦU TƯ NĂM 2025",
      image: ImageTest,
      date: "23 tháng 2, 2025",
      category: "Tin tức",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
            Tin tức
          </h2>
          <p className="text-lg text-gray-600">
            Thông tin dự án và ưu đãi của TDC
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="group cursor-pointer">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img
                  src={mainNews.image.src}
                  alt={mainNews.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>

                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {mainNews.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm font-medium">{mainNews.date}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {mainNews.title}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {mainNews.description}
                </p>

                <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300">
                  Đọc thêm
                  <svg
                    className="w-4 h-4 ml-2"
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
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {sideNews.map((news) => (
              <div
                key={news.id}
                className="flex space-x-4 group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="flex-shrink-0 w-32 h-24 lg:w-40 lg:h-28 overflow-hidden">
                  <img
                    src={news.image.src}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base lg:text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 mb-2">
                      {news.title}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-500">
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
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-sm">{news.date}</span>
                    </div>

                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      {news.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-8">
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Xem tất cả tin tức
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TinTuc;
