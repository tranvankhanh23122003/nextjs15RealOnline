import AxiosClient from "../apis/AxiosClient";
import {
  ApiResponse,
  PaginatedResponse,
  GiuCho,
  GiuChoRequest,
  PaginationParams,
} from "./types";

export interface TuVanRequest {
  maPGC: string;
  noiDung: string;
  khachHangId: string;
}

export interface ThaoLuanRequest {
  maPGC: string;
  noiDung: string;
  khachHangId: string;
}

const GiuChoService = {
  url: "/GiuCho",

  // Get all reservations
  getAll: (): Promise<ApiResponse<GiuCho[]>> => {
    return AxiosClient.get(`${GiuChoService.url}/all`);
  },

  // Get reservation detail by ID
  getDetail: (id: string): Promise<ApiResponse<GiuCho>> => {
    return AxiosClient.get(`${GiuChoService.url}/detail/${id}`);
  },

  // Get paginated reservations
  getPaged: (
    params: PaginationParams
  ): Promise<ApiResponse<PaginatedResponse<GiuCho>>> => {
    return AxiosClient.get(`${GiuChoService.url}/paged`, { params });
  },

  // Get successful reservations
  getSuccess: (): Promise<ApiResponse<GiuCho[]>> => {
    return AxiosClient.get(`${GiuChoService.url}/success`);
  },

  // Create new reservation
  create: (data: GiuChoRequest): Promise<ApiResponse> => {
    return AxiosClient.post(GiuChoService.url, data);
  },

  // Approve reservation
  approve: (id: string): Promise<ApiResponse> => {
    return AxiosClient.post(`${GiuChoService.url}/approve`, { id });
  },

  // Consultation (Tu van) endpoints
  getTuVan: (maPGC: string): Promise<ApiResponse> => {
    return AxiosClient.get(`${GiuChoService.url}/tuvan/${maPGC}`);
  },

  createTuVan: (data: TuVanRequest): Promise<ApiResponse> => {
    return AxiosClient.post(`${GiuChoService.url}/tuvan`, data);
  },

  deleteTuVan: (id: string): Promise<ApiResponse> => {
    return AxiosClient.delete(`${GiuChoService.url}/tuvan/${id}`);
  },

  // Discussion (Thao luan) endpoints
  getThaoLuan: (maPGC: string): Promise<ApiResponse> => {
    return AxiosClient.get(`${GiuChoService.url}/thaoluan/${maPGC}`);
  },

  createThaoLuan: (data: ThaoLuanRequest): Promise<ApiResponse> => {
    return AxiosClient.post(`${GiuChoService.url}/thaoluan`, data);
  },

  deleteThaoLuan: (id: string): Promise<ApiResponse> => {
    return AxiosClient.delete(`${GiuChoService.url}/thaoluan/${id}`);
  },
};

export default GiuChoService;
