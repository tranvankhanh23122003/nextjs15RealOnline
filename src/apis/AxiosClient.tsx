// src/api/axiosClient.js
import axios from 'axios';
import queryString from 'query-string';
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? '';
const AxiosClient = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
  timeout: 10000, // timeout sau 10 giây
});

// Add request interceptor (tự động thêm token nếu cần)
AxiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor (xử lý lỗi)
AxiosClient.interceptors.response.use(
  (response) => response, // chỉ trả về phần `data`
  (error) => {
    // xử lý lỗi tùy theo status code
    if (error.response) {
      console.error('API Error:', error.response.data.message || error.message);
    } else if (error.request) {
      console.error('No response received:', error.message);
    } else {
      console.error('Error setting up request:', error.message);
    }

    return Promise.reject(error);
  }
);

export default AxiosClient;
