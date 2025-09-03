import AxiosClient from "../apis/AxiosClient";
import { ApiResponse, RevenueReport } from "./types";

export interface ReportParams {
  startDate?: string;
  endDate?: string;
  duAnId?: string;
  loaiBDSId?: string;
}

export interface DailyReportParams {
  date: string;
  nhanVienId?: string;
}

const ReportsService = {
  url: "/reports",

  // Revenue reports
  getRevenuePlan: (
    params?: ReportParams
  ): Promise<ApiResponse<RevenueReport[]>> => {
    return AxiosClient.get(`${ReportsService.url}/revenue/plan`, { params });
  },

  getRevenueMonth: (
    params?: ReportParams
  ): Promise<ApiResponse<RevenueReport[]>> => {
    return AxiosClient.get(`${ReportsService.url}/revenue/month`, { params });
  },

  getRevenueDay: (
    params?: ReportParams
  ): Promise<ApiResponse<RevenueReport[]>> => {
    return AxiosClient.get(`${ReportsService.url}/revenue/day`, { params });
  },

  getRevenueDuAn: (
    params?: ReportParams
  ): Promise<ApiResponse<RevenueReport[]>> => {
    return AxiosClient.get(`${ReportsService.url}/revenue/duan`, { params });
  },

  getRevenueLoaiBDS: (
    params?: ReportParams
  ): Promise<ApiResponse<RevenueReport[]>> => {
    return AxiosClient.get(`${ReportsService.url}/revenue/loaibds`, { params });
  },

  // Sales reports
  getSaleDuAn: (params?: ReportParams): Promise<ApiResponse> => {
    return AxiosClient.get(`${ReportsService.url}/sale/duan`, { params });
  },

  getSaleLoaiBDS: (params?: ReportParams): Promise<ApiResponse> => {
    return AxiosClient.get(`${ReportsService.url}/sale/loaibds`, { params });
  },

  // Daily reports
  getDaily: (params: DailyReportParams): Promise<ApiResponse> => {
    return AxiosClient.get(`${ReportsService.url}/daily`, { params });
  },

  getDailyTopSaler: (date: string): Promise<ApiResponse> => {
    return AxiosClient.get(`${ReportsService.url}/daily/topsaler`, {
      params: { date },
    });
  },

  // Store reports
  getStoreStatus: (): Promise<ApiResponse> => {
    return AxiosClient.get(`${ReportsService.url}/store/status`);
  },

  getStoreDuAn: (duAnId?: string): Promise<ApiResponse> => {
    return AxiosClient.get(`${ReportsService.url}/store/duan`, {
      params: { duAnId },
    });
  },
};

export default ReportsService;
