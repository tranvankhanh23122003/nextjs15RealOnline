import AxiosClient from "../apis/AxiosClient";
import { ApiResponse } from "./types";

export interface DatCocRequest {
  sanPhamId: string;
  khachHangId: string;
  soTien: number;
  ghiChu?: string;
}

const DatCocService = {
  url: "/DatCoc",

  create: (data: DatCocRequest): Promise<ApiResponse> => {
    return AxiosClient.post(DatCocService.url, data);
  },
};

export default DatCocService;
