import AxiosClient from "../apis/AxiosClient";
import { ApiResponse, DictionaryItem } from "./types";

export interface UploadResponse {
  id: string;
  url: string;
  fileName: string;
  fileSize: number;
}

export interface QRCodeRequest {
  data: string;
  size?: number;
}

export interface LikeRequest {
  targetId: string;
  targetType: "du-an" | "san-pham";
}

export interface QuanTamRequest {
  sanPhamId: string;
  khachHangId: string;
}

export interface KhoaCanRequest {
  sanPhamId: string;
  lyDo: string;
}

const UtilityService = {
  // File upload services
  upload: (file: File): Promise<ApiResponse<UploadResponse>> => {
    const formData = new FormData();
    formData.append("file", file);
    return AxiosClient.post("/uploader", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  uploadImage: (file: File): Promise<ApiResponse<UploadResponse>> => {
    const formData = new FormData();
    formData.append("image", file);
    return AxiosClient.post("/uploader/image", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  uploadByte: (
    data: ArrayBuffer,
    fileName: string
  ): Promise<ApiResponse<UploadResponse>> => {
    return AxiosClient.post("/uploader/byte", { data, fileName });
  },

  deleteFile: (id: string): Promise<ApiResponse> => {
    return AxiosClient.delete(`/uploader/${id}`);
  },

  uploadFile: (file: File): Promise<ApiResponse<UploadResponse>> => {
    const formData = new FormData();
    formData.append("file", file);
    return AxiosClient.post("/uploader/file", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  uploadFileForm: (
    formData: FormData
  ): Promise<ApiResponse<UploadResponse>> => {
    return AxiosClient.post("/uploader/file-form", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  // QR Code services
  createQRCode: (data: QRCodeRequest): Promise<ApiResponse<string>> => {
    return AxiosClient.post("/qrcode/create", data);
  },

  encryptQRCode: (data: string): Promise<ApiResponse<string>> => {
    return AxiosClient.post("/qrcode/encrypt", { data });
  },

  decryptQRCode: (encryptedData: string): Promise<ApiResponse<string>> => {
    return AxiosClient.post("/qrcode/decrypt", { data: encryptedData });
  },

  // Like services
  like: (data: LikeRequest): Promise<ApiResponse> => {
    return AxiosClient.post("/Like", data);
  },

  unlike: (data: LikeRequest): Promise<ApiResponse> => {
    return AxiosClient.post("/Like/delete", data);
  },

  getLikedDuAn: (khachHangId: string): Promise<ApiResponse<string[]>> => {
    return AxiosClient.get("/Like/du-an", { params: { khachHangId } });
  },

  getLikedSanPham: (khachHangId: string): Promise<ApiResponse<string[]>> => {
    return AxiosClient.get("/Like/san-pham", { params: { khachHangId } });
  },

  // Interest (Quan tam) services
  getQuanTam: (khachHangId: string): Promise<ApiResponse> => {
    return AxiosClient.get("/v2/QuanTam", { params: { khachHangId } });
  },

  addQuanTam: (data: QuanTamRequest): Promise<ApiResponse> => {
    return AxiosClient.post("/v2/QuanTam", data);
  },

  // Lock/Block (Khoa can) services
  getKhoaCanHistory: (sanPhamId: string): Promise<ApiResponse> => {
    return AxiosClient.post("/v2/KhoaCan/history", { sanPhamId });
  },

  khoaCan: (data: KhoaCanRequest): Promise<ApiResponse> => {
    return AxiosClient.post("/v2/KhoaCan", data);
  },

  deleteKhoaCan: (id: string): Promise<ApiResponse> => {
    return AxiosClient.delete(`/v2/KhoaCan/${id}`);
  },

  // Transaction history services
  getLichSuGiaoDichDetail: (id: string): Promise<ApiResponse> => {
    return AxiosClient.get("/v2/LichSuGiaoDich/detail", { params: { id } });
  },

  getLichSuGiaoDich: (khachHangId: string): Promise<ApiResponse> => {
    return AxiosClient.get("/v2/LichSuGiaoDich", { params: { khachHangId } });
  },

  getLichSuGiaoDichBySanPham: (sanPhamId: string): Promise<ApiResponse> => {
    return AxiosClient.get("/v2/LichSuGiaoDich/by-sanpham", {
      params: { sanPhamId },
    });
  },

  approveLichSuGiaoDich: (id: string): Promise<ApiResponse> => {
    return AxiosClient.post("/v2/LichSuGiaoDich/approve", { id });
  },

  // Location services
  getTinh: (): Promise<ApiResponse<DictionaryItem[]>> => {
    return AxiosClient.get("/Tinh");
  },

  getXa: (huyenId: string): Promise<ApiResponse<DictionaryItem[]>> => {
    return AxiosClient.get("/Xa", { params: { huyenId } });
  },

  // Payment status
  getTrangThaiThanhToan: (): Promise<ApiResponse<DictionaryItem[]>> => {
    return AxiosClient.get("/TrangThaiThanhToan");
  },

  // Staff
  getNhanVien: (): Promise<ApiResponse> => {
    return AxiosClient.get("/nhan-vien");
  },

  // Permissions
  getPermissionActions: (): Promise<ApiResponse> => {
    return AxiosClient.get("/permission/action");
  },
};

export default UtilityService;
