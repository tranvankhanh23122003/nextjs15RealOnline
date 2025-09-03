"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X, Home } from "lucide-react";
import KhuCongNghiep from "../../../public/images/khu-cong-nghiep.png";
import testImage from "../../../public/images/Bg_test.png";
import BookingModal from "../DatCho_LienHe/BookingModal";
import BookingTuVan from "../DatCho_LienHe/Booking_TuVan";
import Image from "next/image";
interface ApartmentItem {
  id: string;
  name: string;
  tower: string;
  floor: string;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  project: string;
  location: string;
  image: string;
}

export default function GioHang_component() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isTuVanOpen, setIsTuVanOpen] = useState(false);
  const router = useRouter();
  const [cartItems, setCartItems] = useState<ApartmentItem[]>([
    {
      id: "1",
      name: "Căn A01",
      tower: "Toà A",
      floor: "Tầng 26",
      price: 2700000000,
      area: 80,
      bedrooms: 3,
      bathrooms: 2,
      project: "TDC Plaza",
      location: "Bình Dương",
      image: KhuCongNghiep.src,
    },
    {
      id: "2",
      name: "Căn A01",
      tower: "Toà A",
      floor: "Tầng 26",
      price: 2700000000,
      area: 80,
      bedrooms: 3,
      bathrooms: 2,
      project: "TDC Plaza",
      location: "Bình Dương",
      image: KhuCongNghiep.src,
    },
    {
      id: "3",
      name: "Căn A01",
      tower: "Toà A",
      floor: "Tầng 26",
      price: 2700000000,
      area: 80,
      bedrooms: 3,
      bathrooms: 2,
      project: "TDC Plaza",
      location: "Bình Dương",
      image: KhuCongNghiep.src,
    },
    {
      id: "4",
      name: "Căn A01",
      tower: "Toà A",
      floor: "Tầng 26",
      price: 2700000000,
      area: 80,
      bedrooms: 3,
      bathrooms: 2,
      project: "TDC Plaza",
      location: "Bình Dương",
      image: KhuCongNghiep.src,
    },
  ]);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelectItem = (itemId: string, checked: boolean) => {
    if (checked) {
      setSelectedItems([...selectedItems, itemId]);
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    }
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
    setSelectedItems(selectedItems.filter((id) => id !== itemId));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + " đ";
  };

  const formatPriceShort = (price: number) => {
    return (price / 1000000000).toFixed(1) + " tỷ";
  };

  const selectedItemsData = cartItems.filter((item) =>
    selectedItems.includes(item.id)
  );
  const subtotal = selectedItemsData.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Home className="w-4 h-4" />
            <span className="cursor-pointer" onClick={() => router.push("/")}>
              Trang chủ
            </span>
            <span>/</span>
            <span
              className="text-gray-900 font-medium cursor-pointer"
              onClick={() => router.push("/gio-hang")}
            >
              Giỏ hàng
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Warning message */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-orange-400 rounded-lg p-4 mb-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-orange-800 text-sm">
                Thông báo quan trọng
              </h4>
              <p className="text-sm text-orange-700 mt-1">
                Giỏ hàng của bạn có{" "}
                <span className="font-bold">{cartItems.length} căn hộ</span>.
                Hãy <span className="font-bold">THANH TOÁN</span> hoặc xóa bớt
                sản phẩm để tiếp tục!
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                <div className="p-4">
                  <div className="flex gap-4">
                    {/* Checkbox */}
                    <div className="flex items-start pt-2">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={(e) =>
                          handleSelectItem(item.id, e.target.checked)
                        }
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </div>

                    {/* Image */}
                    <div className="flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-40 h-30 rounded-lg object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      {/* Header Info */}
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-xl text-gray-900 mb-2">
                            {item.name}
                          </h3>
                          <span className="text-orange-600 font-semibold text-sm bg-orange-50 px-3 py-1 rounded-full inline-block">
                            {item.tower}
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.floor}
                          </p>
                        </div>
                      </div>

                      {/* Property Details Grid */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
                          <div className="flex justify-between items-center py-1">
                            <span className="text-gray-600 font-medium">
                              Giá gốc:
                            </span>
                            <span className="font-semibold text-gray-900">
                              {formatPrice(item.price)}
                            </span>
                          </div>
                          <div className="flex justify-between items-center py-1">
                            <span className="text-gray-600 font-medium">
                              Diện tích:
                            </span>
                            <span className="font-semibold text-gray-900">
                              {item.area} m²
                            </span>
                          </div>

                          <div className="flex justify-between items-center py-1">
                            <span className="text-gray-600 font-medium">
                              Tầng:
                            </span>
                            <span className="font-semibold text-gray-900">
                              {item.floor.replace("Tầng ", "")}
                            </span>
                          </div>
                          <div className="flex justify-between items-center py-1">
                            <span className="text-gray-600 font-medium">
                              Phòng ngủ:
                            </span>
                            <span className="font-semibold text-gray-900">
                              {item.bedrooms} phòng
                            </span>
                          </div>

                          <div className="flex justify-between items-center py-1">
                            <span className="text-gray-600 font-medium">
                              Dự án:
                            </span>
                            <span className="font-semibold text-blue-600">
                              {item.project}
                            </span>
                          </div>
                          <div className="flex justify-between items-center py-1">
                            <span className="text-gray-600 font-medium">
                              Phòng tắm:
                            </span>
                            <span className="font-semibold text-gray-900">
                              {item.bathrooms} phòng
                            </span>
                          </div>

                          <div className="flex justify-between items-center py-1">
                            <span className="text-gray-600 font-medium">
                              Vị trí:
                            </span>
                            <span className="font-semibold text-gray-900">
                              {item.location}
                            </span>
                          </div>
                          <div className="flex justify-between items-center py-1">
                            <span className="text-gray-600 font-medium">
                              Hướng:
                            </span>
                            <span className="font-semibold text-green-600">
                              Nam
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Remove button */}
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="w-8 h-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Price Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border-2 border-orange-200 rounded-xl shadow-lg sticky top-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-t-xl">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  Báo giá ({selectedItems.length} căn hộ)
                </h3>
              </div>

              <div className="p-6">
                {selectedItems.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg
                        className="w-8 h-8 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm">
                      Chưa chọn căn hộ nào
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {selectedItemsData.map((item, index) => (
                        <div
                          key={item.id}
                          className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-semibold text-blue-900 text-sm">
                                Căn hộ #{index + 1}
                              </p>
                              <p className="text-xs text-blue-700">
                                {item.name} - {item.tower}
                              </p>
                            </div>
                            <p className="font-bold text-blue-600 text-sm">
                              {formatPriceShort(item.price)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 font-medium">
                          Tổng tiền trước thuế:
                        </span>
                        <span className="font-semibold text-gray-900">
                          {formatPrice(subtotal)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 font-medium">
                          Thuế VAT (10%):
                        </span>
                        <span className="font-semibold text-gray-900">
                          {formatPrice(tax)}
                        </span>
                      </div>
                      <hr className="border-gray-300" />
                      <div className="flex justify-between items-center bg-orange-50 p-3 rounded-lg">
                        <span className="font-bold text-lg text-gray-900">
                          Tổng thanh toán:
                        </span>
                        <span className="font-bold text-xl text-orange-600">
                          {formatPrice(total)}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="px-6 pb-6">
                <button
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg disabled:hover:scale-100"
                  disabled={selectedItems.length === 0}
                >
                  {selectedItems.length === 0 ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"
                        />
                      </svg>
                      Chọn căn hộ để thanh toán
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        />
                      </svg>
                      Tiếp tục thanh toán ({selectedItems.length} căn)
                    </span>
                  )}
                </button>

                {selectedItems.length > 0 && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-800 text-center flex items-center justify-center gap-2">
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Đã chọn {selectedItems.length} căn hộ
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="relative bg-gradient-to-r bg-black/60 rounded-lg overflow-hidden w-full max-w-6xl shadow-2xl">
          {/* Background image overlay */}
          <div className="absolute inset-0">
            <Image
              src={testImage.src}
              alt="Background"
              className="w-full h-full object-cover opacity-30"
            />
          </div>

          <div className="relative z-10 px-8 py-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Đăng ký tham quan dự án và căn hộ mẫu
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Để tìm ra ngôi nhà mơ ước, hãy nhận thông tin chi tiết và ưu đãi
              hấp dẫn từ tham quan
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors transform hover:scale-105 shadow-lg" onClick={() => setIsBookingOpen(true)}>
                Đăng ký tham quan
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors transform hover:scale-105" onClick={() => setIsTuVanOpen(true)}>
                Liên hệ tư vấn
              </button>
            </div>
          </div>
        </div>
      </div>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <BookingTuVan isOpen={isTuVanOpen} onClose={() => setIsTuVanOpen(false)} />
    </div>
  );
}
