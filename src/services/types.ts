// Common API response types
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Common request types
export interface PaginationParams {
  page?: number;
  pageSize?: number;
}

export interface SearchParams extends PaginationParams {
  keyword?: string;
}

// Customer types
export interface KhachHang {
  id: string;
  ten: string;
  soDienThoai: string;
  email?: string;
  diaChi?: string;
  ngayTao: string;
}

export interface KhachHangDangKy {
  ten: string;
  soDienThoai: string;
  email: string;
  duAnId?: string;
}

// Product types
export interface SanPham {
  id: string;
  maSanPham: string;
  tenSanPham: string;
  gia: number;
  dienTich: number;
  duAnId: string;
  trangThai: string;
  hinhAnh?: string[];
}

export interface SanPhamSearch {
  duAnId?: string;
  loaiBDSId?: string;
  giaMin?: number;
  giaMax?: number;
  dienTichMin?: number;
  dienTichMax?: number;
  keyword?: string;
}

// Booking types
export interface GiuCho {
  id: string;
  sanPhamId: string;
  khachHangId: string;
  ngayGiuCho: string;
  trangThai: string;
  ghiChu?: string;
}

export interface GiuChoRequest {
  sanPhamId: string;
  khachHangId: string;
  ghiChu?: string;
}

// Dictionary types
export interface DictionaryItem {
  id: string;
  ten: string;
  ma?: string;
}

// Report types
export interface RevenueReport {
  period: string;
  revenue: number;
  target?: number;
  growth?: number;
}

// Transaction history
export interface LichSuGiaoDich {
  id: string;
  sanPhamId: string;
  khachHangId: string;
  loaiGiaoDich: string;
  soTien: number;
  ngayGiaoDich: string;
  trangThai: string;
}
