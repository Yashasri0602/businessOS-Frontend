import api from "./api";

interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

export const getReports = async () => {
  const response =
    await api.get<ApiResponse<any>>(
      "/insights/reports"
    );

  return response.data.data;
};

export const getSummary = async () => {
  const response =
    await api.get<ApiResponse<any>>(
      "/insights/summary"
    );

  return response.data.data;
};