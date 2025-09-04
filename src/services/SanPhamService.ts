import AxiosClient from "../apis/AxiosClient";
import {
  ApiResponse,
  PaginatedResponse,
  SanPham,
  SanPhamSearch,
  PaginationParams,
} from "./types";

export interface CompareRequest {
  sanPhamIds: string[];
}

export interface MapParams {
  duAnId?: string;
  bounds?: {
    north: number;
    south: number;
    east: number;
    west: number;
  };
}

export interface PriceCalculationParams {
  sanPhamId: string;
  khuyenMaiId?: string;
}

const SanPhamService = {
  url: "/SanPham",

  // Compare products
  compare: (data: CompareRequest): Promise<ApiResponse<SanPham[]>> => {
    return AxiosClient.get(`${SanPhamService.url}/compare`, { params: data });
  },

  // Get highlighted products
  getHighlight: (): Promise<ApiResponse<SanPham[]>> => {
    return AxiosClient.get(`${SanPhamService.url}/highlight`);
  },

  // Get highlighted products by project
  getHighlightByProject: (duAnId: string): Promise<ApiResponse<SanPham[]>> => {
    return AxiosClient.get(`${SanPhamService.url}/highlight-by-project`, {
      params: { duAnId },
    });
  },

  // Check if product is buyable
  isBuy: (sanPhamId: string): Promise<ApiResponse<boolean>> => {
    return AxiosClient.get(`${SanPhamService.url}/isbuy`, {
      params: { sanPhamId },
    });
  },

  // Get products for map
  getMap: (params: MapParams): Promise<ApiResponse<SanPham[]>> => {
    return AxiosClient.get(`${SanPhamService.url}/map`, { params });
  },

  // Search products (version 1)
  search: (
    params: SanPhamSearch & PaginationParams
  ): Promise<ApiResponse<PaginatedResponse<SanPham>>> => {
    return AxiosClient.get(`${SanPhamService.url}/search`, { params });
  },

  // Search products (version 2)
  search2: (
    params: SanPhamSearch & PaginationParams
  ): Promise<ApiResponse<PaginatedResponse<SanPham>>> => {
    return AxiosClient.get(`${SanPhamService.url}/search2`, { params });
  },

  // Get all products
  getAll: (
    params?: PaginationParams
  ): Promise<ApiResponse<PaginatedResponse<SanPham>>> => {
    return AxiosClient.get(SanPhamService.url, { params });
  },

  // Get product detail
  getDetail: (id: string): Promise<ApiResponse<SanPham>> => {
    return AxiosClient.get(`${SanPhamService.url}/detail`, { params: { id } });
  },

  // Get product details (chitiet)
  getChiTiet: (id: string): Promise<ApiResponse> => {
    return AxiosClient.get(`${SanPhamService.url}/chitiet`, { params: { id } });
  },

  // Get product details with transaction info
  getChiTietDaGiaDich: (id: string): Promise<ApiResponse> => {
    return AxiosClient.get(`${SanPhamService.url}/chitiet-dagia-dich`, {
      params: { id },
    });
  },

  // Calculate value after promotion
  calculatePromotionValue: (
    params: PriceCalculationParams
  ): Promise<ApiResponse<number>> => {
    return AxiosClient.get(
      `${SanPhamService.url}/tinh-gia-tri-sau-khuyen-mai`,
      { params }
    );
  },

  // Get maps data
  getMaps: (duAnId?: string): Promise<ApiResponse> => {
    return AxiosClient.get(`${SanPhamService.url}/maps`, {
      params: { duAnId },
    });
  },

  // Get price list
  getBangHang: (duAnId: string): Promise<ApiResponse> => {
    return AxiosClient.get(`${SanPhamService.url}/bang-hang`, {
      params: { duAnId },
    });
  },

  // Price calculation endpoints
  getPriceList: (): Promise<ApiResponse> => {
    return AxiosClient.get(`${SanPhamService.url}/tinh-gia/bang-gia`);
  },

  calculatePrice: (sanPhamId: string): Promise<ApiResponse> => {
    return AxiosClient.get(`${SanPhamService.url}/tinh-gia`, {
      params: { sanPhamId },
    });
  },

  calculateLTTPrice: (sanPhamId: string): Promise<ApiResponse> => {
    return AxiosClient.get(`${SanPhamService.url}/tinh-gia/ltt`, {
      params: { sanPhamId },
    });
  },

  getPricePDF: (sanPhamId: string): Promise<ApiResponse> => {
    return AxiosClient.get(`${SanPhamService.url}/tinh-gia/pdf`, {
      params: { sanPhamId },
    });
  },
};

export default SanPhamService;
