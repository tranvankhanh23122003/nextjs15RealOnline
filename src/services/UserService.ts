import AxiosClient from "../apis/AxiosClient";
import { ApiResponse } from "./types";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
  email: string;
  fullName: string;
  phoneNumber?: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface UpdateUserRequest {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
  phoneNumber?: string;
  avatar?: string;
  isActive: boolean;
}

const UserService = {
  url: "/users",

  // Login
  login: (
    data: LoginRequest
  ): Promise<ApiResponse<{ token: string; user: User }>> => {
    return AxiosClient.post(`${UserService.url}/login`, data);
  },

  // OpenID login
  loginOpenId: (
    token: string
  ): Promise<ApiResponse<{ token: string; user: User }>> => {
    return AxiosClient.post(`${UserService.url}/openid`, { token });
  },

  // Register
  register: (data: RegisterRequest): Promise<ApiResponse> => {
    return AxiosClient.post(`${UserService.url}/register`, data);
  },

  // Forgot password
  forgotPassword: (data: ForgotPasswordRequest): Promise<ApiResponse> => {
    return AxiosClient.post(`${UserService.url}/forgot-email`, data);
  },

  // Authenticate token
  authenticateToken: (token: string): Promise<ApiResponse<User>> => {
    return AxiosClient.post(`${UserService.url}/authen-token`, { token });
  },

  // Update user info
  update: (data: UpdateUserRequest): Promise<ApiResponse> => {
    return AxiosClient.post(`${UserService.url}/update`, data);
  },

  // Reset notification count
  resetNotifyNum: (): Promise<ApiResponse> => {
    return AxiosClient.post(`${UserService.url}/reset-notifynum`);
  },

  // Reset care count
  resetCareNum: (): Promise<ApiResponse> => {
    return AxiosClient.post(`${UserService.url}/reset-carenum`);
  },

  // Get connection key
  getKeyConnect: (): Promise<ApiResponse<string>> => {
    return AxiosClient.get(`${UserService.url}/key-connect`);
  },
};

export default UserService;
