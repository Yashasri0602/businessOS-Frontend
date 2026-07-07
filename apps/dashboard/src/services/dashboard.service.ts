import api from "./api";

export interface DashboardData {
  kpis: {
    totalRevenue: number;
    totalProducts: number;
    totalOrders: number;
    totalCustomers: number;
    totalExpenses: number;
    lowStockProducts: number;
  };

  monthlyRevenue: {
    month: string;
    revenue: number;
  }[];

  inventoryStatus: {
    inStock: number;
    lowStock: number;
    outOfStock: number;
  };

  recentOrders: any[];

  recentActivity: any[];
}

interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

export const getDashboard = async (): Promise<DashboardData> => {
  const response = await api.get<ApiResponse<DashboardData>>("/dashboard");

  return response.data.data;
};