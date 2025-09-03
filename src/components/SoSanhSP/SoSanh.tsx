"use client";

import { useState } from "react";
import {
  ChevronLeftIcon,
  XMarkIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import Image from "next/image";
// Import components
import ProductSelectionModal from "./ProductSelectionModal";

// Import images
import ImageDuanMau from "../../../public/images/duanmau.png";

interface ProductInfo {
  id: number;
  name: string;
  image: string;
  project: string;
  developer: string;
  location: string;
  legalStatus: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  type: string;
  direction: string;
  floor: number;
  price: string;
  paymentMethod: string;
  deposit: string;
  nearbyAmenities: string[];
  surroundingAmenities: string[];
}

const SoSanh = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample data for demonstration
  const [comparedProducts, setComparedProducts] = useState<ProductInfo[]>([
    {
      id: 1,
      name: "Căn 01",
      image: ImageDuanMau.src,
      project: "TDC Plaza",
      developer:
        "Tổng Công ty Đầu tư và Phát triển Công nghiệp (Becamex IDC) - TDC",
      location: "Phường Hoà Phú, thành phố Thủ Dầu Một, tỉnh Bình Dương",
      legalStatus: "Sổ hồng lâu dài, sở hữu lâu dài",
      area: "68 m² ~ 120 m²",
      bedrooms: 2,
      bathrooms: 2,
      type: "Căn hộ chung cư cao cấp",
      direction: "Tây Bắc, Đông Nam",
      floor: 4,
      price: "3.018.933.000đ",
      paymentMethod: "Linh hoạt trong 6 đợt",
      deposit: "30 triệu đồng",
      nearbyAmenities: [
        "Khu sinh hoạt cộng đồng",
        "Phòng gym, hồ bơi, siêu thị mini",
      ],
      surroundingAmenities: [
        "Trung tâm hành chính tỉnh Bình Dương",
        "Đại học Quốc tế Miền Đông",
        "Bệnh viện quốc tế Becamex",
        "Bến xe Thủ Dầu Một",
      ],
    },
  ]);

  const addProduct = () => {
    if (comparedProducts.length < 3) {
      setIsModalOpen(true);
    }
  };

  const removeProduct = (id: number) => {
    setComparedProducts(
      comparedProducts.filter((product) => product.id !== id)
    );
  };

  const handleSelectProduct = (selectedProduct: any) => {
    // Convert the selected product to match ProductInfo interface
    const newProduct: ProductInfo = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      image: selectedProduct.image,
      project: selectedProduct.project,
      developer:
        "Tổng Công ty Đầu tư và Phát triển Công nghiệp (Becamex IDC) - TDC",
      location: selectedProduct.address,
      legalStatus: "Sổ hồng lâu dài, sở hữu lâu dài",
      area: selectedProduct.area,
      bedrooms: selectedProduct.bedrooms,
      bathrooms: selectedProduct.bathrooms,
      type: "Căn hộ chung cư cao cấp",
      direction: "Tây Bắc, Đông Nam",
      floor: Math.floor(Math.random() * 10) + 1,
      price: selectedProduct.price,
      paymentMethod: "Linh hoạt trong 6 đợt",
      deposit: "30 triệu đồng",
      nearbyAmenities: [
        "Khu sinh hoạt cộng đồng",
        "Phòng gym, hồ bơi, siêu thị mini",
      ],
      surroundingAmenities: [
        "Trung tâm hành chính tỉnh Bình Dương",
        "Đại học Quốc tế Miền Đông",
        "Bệnh viện quốc tế Becamex",
        "Bến xe Thủ Dầu Một",
      ],
    };

    setComparedProducts([...comparedProducts, newProduct]);
  };

  const renderComparisonColumn = (product?: ProductInfo) => {
    if (!product) {
      return (
        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center min-h-[600px]">
          <button
            onClick={addProduct}
            className="flex flex-col items-center justify-center space-y-4 text-gray-500 hover:text-blue-600 transition-colors"
          >
            <div className="w-16 h-16 border-2 border-gray-300 rounded-full flex items-center justify-center">
              <PlusIcon className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium">Thêm sản phẩm so sánh</span>
          </button>
        </div>
      );
    }

    return (
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        {/* Product Image and Basic Info */}
        <div className="relative">
          <Image
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <button
            onClick={() => removeProduct(product.id)}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors"
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4">
          <h3 className="font-bold text-lg text-center mb-2">{product.name}</h3>
          <p className="text-center text-sm text-gray-600 mb-4">
            Thêm sản phẩm so sánh
          </p>
        </div>

        {/* Thông tin tổng quan */}
        <div className="border-t border-gray-200">
          <div className="bg-gray-50 px-4 py-3">
            <h4 className="font-semibold text-gray-800 flex items-center justify-between">
              Thông tin tổng quan
              <ChevronLeftIcon className="w-4 h-4 transform rotate-90" />
            </h4>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Tên dự án:</span>
              <span className="text-red-600 font-medium">
                {product.project}
              </span>
            </div>
            <div className="text-sm text-gray-600">
              <p>{product.developer}</p>
              <p className="mt-1">{product.location}</p>
              <p className="mt-1">{product.legalStatus}</p>
            </div>
          </div>
        </div>

        {/* Thông tin chi tiết */}
        <div className="border-t border-gray-200">
          <div className="bg-gray-50 px-4 py-3">
            <h4 className="font-semibold text-gray-800 flex items-center justify-between">
              Thông tin chi tiết
              <ChevronLeftIcon className="w-4 h-4 transform rotate-90" />
            </h4>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Diện tích</span>
              <span className="font-medium">{product.area}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Phòng ngủ</span>
              <span className="font-medium">{product.bedrooms}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Phòng tắm</span>
              <span className="font-medium">{product.bathrooms}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Loại hình</span>
              <span className="font-medium">{product.type}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Hướng cửa - ban công</span>
              <span className="font-medium">{product.direction}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tầng</span>
              <span className="font-medium">{product.floor}</span>
            </div>
          </div>
        </div>

        {/* Giá và chi phí liên quan */}
        <div className="border-t border-gray-200">
          <div className="bg-gray-50 px-4 py-3">
            <h4 className="font-semibold text-gray-800 flex items-center justify-between">
              Giá và chi phí liên quan
              <ChevronLeftIcon className="w-4 h-4 transform rotate-90" />
            </h4>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Giá</span>
              <span className="font-bold text-red-600">{product.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Chính sách thanh toán</span>
              <span className="font-medium">{product.paymentMethod}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Phí giữ chỗ lót thiệu</span>
              <span className="font-medium">{product.deposit}</span>
            </div>
          </div>
        </div>

        {/* Tiện ích */}
        <div className="border-t border-gray-200">
          <div className="bg-gray-50 px-4 py-3">
            <h4 className="font-semibold text-gray-800 flex items-center justify-between">
              Tiện ích
              <ChevronLeftIcon className="w-4 h-4 transform rotate-90" />
            </h4>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <h5 className="font-medium text-gray-800 mb-2">
                Tiện ích nội khu
              </h5>
              <ul className="text-sm text-gray-600 space-y-1">
                {product.nearbyAmenities.map((amenity, index) => (
                  <li key={index}>• {amenity}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-gray-800 mb-2">
                Tiện ích xung quanh
              </h5>
              <ul className="text-sm text-gray-600 space-y-1">
                {product.surroundingAmenities.map((amenity, index) => (
                  <li key={index}>• {amenity}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="text-sm text-gray-600 mb-4">
            <span>Trang chủ</span>
            <span className="mx-2">/</span>
            <span>Danh sách bất động sản</span>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">
              So sánh bất động sản
            </span>
          </nav>

          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ChevronLeftIcon className="w-4 h-4" />
            <span>Danh sách bất động sản</span>
          </button>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Render existing products */}
          {comparedProducts.map((product) => (
            <div key={product.id}>{renderComparisonColumn(product)}</div>
          ))}

          {/* Render empty slots for adding more products */}
          {Array.from(
            { length: Math.max(0, 3 - comparedProducts.length) },
            (_, index) => (
              <div key={`empty-${index}`}>{renderComparisonColumn()}</div>
            )
          )}
        </div>

        {/* Note */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>Lưu ý:</strong> Bạn có thể so sánh tối đa 3 sản phẩm cùng
            lúc. Click vào dấu "+" để thêm sản phẩm hoặc dấu "×" để loại bỏ sản
            phẩm khỏi danh sách so sánh.
          </p>
        </div>
      </div>

      {/* Product Selection Modal */}
      <ProductSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectProduct={handleSelectProduct}
        excludeIds={comparedProducts.map((product) => product.id)}
      />
    </div>
  );
};

export default SoSanh;
