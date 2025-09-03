import AxiosClient from "../apis/AxiosClient";
import {
  ApiResponse,
  PaginatedResponse,
  KhachHang,
  KhachHangDangKy,
  PaginationParams,
  SearchParams,
} from "./types";

export interface KhachHangUpdateRequest {
  id: string;
  ten?: string;
  soDienThoai?: string;
  email?: string;
  diaChi?: string;
}

const KhachHangService = {
  url: "/KhachHang",

  // Get customer detail
  getDetail: (id: string): Promise<ApiResponse<KhachHang>> => {
    return AxiosClient.get(`${KhachHangService.url}/detail`, {
      params: { id },
    });
  },

  // Get paginated customers
  getPaged: (
    params: PaginationParams
  ): Promise<ApiResponse<PaginatedResponse<KhachHang>>> => {
    return AxiosClient.get(`${KhachHangService.url}/paged`, { params });
  },

  // Search customers
  search: (keyword: string): Promise<ApiResponse<KhachHang[]>> => {
    return AxiosClient.get(`${KhachHangService.url}/search`, {
      params: { keyword },
    });
  },

  // Search customers with pagination
  searchPaged: (
    params: SearchParams
  ): Promise<ApiResponse<PaginatedResponse<KhachHang>>> => {
    return AxiosClient.get(`${KhachHangService.url}/search-paged`, { params });
  },

  // Get customer by mobile number
  getByMobile: (mobile: string): Promise<ApiResponse<KhachHang>> => {
    return AxiosClient.get(`${KhachHangService.url}/by-mobile`, {
      params: { mobile },
    });
  },

  // Create new customer
  create: (data: Omit<KhachHang, "id" | "ngayTao">): Promise<ApiResponse> => {
    return AxiosClient.post(KhachHangService.url, data);
  },

  // Update customer
  update: (data: KhachHangUpdateRequest): Promise<ApiResponse> => {
    return AxiosClient.post(`${KhachHangService.url}/update`, data);
  },

  // Delete customer
  delete: (id: string): Promise<ApiResponse> => {
    return AxiosClient.delete(`${KhachHangService.url}/${id}`);
  },
};

// Customer registration service
const KhachHangDangKyService = {
  url: "/KhachHangDangKy",

  // Get all registrations
  getAll: (): Promise<ApiResponse<KhachHangDangKy[]>> => {
    return AxiosClient.get(KhachHangDangKyService.url);
  },

  // Create new registration
  create: (data: KhachHangDangKy): Promise<ApiResponse> => {
    return AxiosClient.post(KhachHangDangKyService.url, data);
  },
};

export { KhachHangService, KhachHangDangKyService };
export default KhachHangService;
