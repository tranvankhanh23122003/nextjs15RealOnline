import AxiosClient from "../apis/AxiosClient";
import { ApiResponse, DictionaryItem } from "./types";

const DictionaryService = {
  // Project dictionary
  getDuAn: (): Promise<ApiResponse<DictionaryItem[]>> => {
    return AxiosClient.get("/dictionary/DuAn");
  },

  // Payment method dictionary
  getHinhThucThanhToan: (): Promise<ApiResponse<DictionaryItem[]>> => {
    return AxiosClient.get("/dictionary/HinhThucThanhToan");
  },

  // Direction dictionary
  getHuong: (): Promise<ApiResponse<DictionaryItem[]>> => {
    return AxiosClient.get("/dictionary/Huong");
  },

  // District dictionary
  getHuyen: (): Promise<ApiResponse<DictionaryItem[]>> => {
    return AxiosClient.get("/dictionary/Huyen");
  },

  // Zone dictionary
  getKhu: (): Promise<ApiResponse<DictionaryItem[]>> => {
    return AxiosClient.get("/dictionary/Khu");
  },

  // Real estate type dictionary
  getLoaiBDS: (): Promise<ApiResponse<DictionaryItem[]>> => {
    return AxiosClient.get("/dictionary/LoaiBDS");
  },

  // Project type dictionary
  getLoaiDuAn: (): Promise<ApiResponse<DictionaryItem[]>> => {
    return AxiosClient.get("/dictionary/LoaiDuAn");
  },

  // Sub-zone dictionary
  getPhanKhu: (): Promise<ApiResponse<DictionaryItem[]>> => {
    return AxiosClient.get("/dictionary/PhanKhu");
  },
};

export default DictionaryService;
