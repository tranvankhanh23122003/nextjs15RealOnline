import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

// Import images
import ImageDuanMau from "../../../public/images/ImageDuanMau.png";
import Image from "next/image";
interface Product {
  id: number;
  name: string;
  project: string;
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  status: string;
  image: string;
}

interface ProductSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  excludeIds: number[];
}

const ProductSelectionModal: React.FC<ProductSelectionModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  excludeIds,
}) => {
  // Sample products data
  const availableProducts: Product[] = [
    {
      id: 2,
      name: "Căn 01",
      project: "TDC Plaza",
      address: "Hùng Vương, Hoà Phú, Thủ Dầu Một, Bình Dương",
      price: "3.2 tỷ",
      bedrooms: 2,
      bathrooms: 2,
      area: "85 m²",
      status: "Đang bán",
      image: ImageDuanMau.src,
    },
    {
      id: 3,
      name: "Căn 01",
      project: "TDC Plaza",
      address: "Hùng Vương, Hoà Phú, Thủ Dầu Một, Bình Dương",
      price: "2.8 tỷ",
      bedrooms: 1,
      bathrooms: 1,
      area: "65 m²",
      status: "Đang bán",
      image: ImageDuanMau.src,
    },
    {
      id: 4,
      name: "Căn 01",
      project: "TDC Plaza",
      address: "Hùng Vương, Hoà Phú, Thủ Dầu Một, Bình Dương",
      price: "4.1 tỷ",
      bedrooms: 3,
      bathrooms: 2,
      area: "120 m²",
      status: "Đang bán",
      image: ImageDuanMau.src,
    },
  ];

  // Filter out products that are already being compared
  const filteredProducts = availableProducts.filter(
    (product) => !excludeIds.includes(product.id)
  );

  const handleSelectProduct = (product: Product) => {
    onSelectProduct(product);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">
            Sản phẩm đã yêu thích
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">
                Không có sản phẩm nào khác để so sánh
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Product Image */}
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium">
                        {product.status}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {product.project}
                    </p>
                    <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                      {product.address}
                    </p>

                    {/* Price */}
                    <div className="mb-3">
                      <span className="text-lg font-bold text-red-600">
                        {product.price}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <span>🛏️</span>
                        <span>{product.bedrooms}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>🚿</span>
                        <span>{product.bathrooms}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>📐</span>
                        <span>{product.area}</span>
                      </div>
                    </div>

                    {/* Compare Button */}
                    <button
                      onClick={() => handleSelectProduct(product)}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      So sánh
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSelectionModal;
