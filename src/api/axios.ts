import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

const client: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const api = {
  get: <T = any>(url: string, config?: AxiosRequestConfig) =>
    client.get<T>(url, config).then((r) => r.data),
  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
    client.post<T>(url, data, config).then((r) => r.data),
  put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
    client.put<T>(url, data, config).then((r) => r.data),
  patch: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
    client.patch<T>(url, data, config).then((r) => r.data),
  delete: <T = any>(url: string, config?: AxiosRequestConfig) =>
    client.delete<T>(url, config).then((r) => r.data),
};

export default api;


