export interface DashboardStat {
  title: string;
  value: string;
  change: string;
}

export interface RevenuePoint {
  month: string;
  revenue: number;
}

export interface InventoryItem {
  name: string;
  value: number;
}

export interface DashboardStat {
  title: string;
  value: string;
  change: string;
}

export interface RevenuePoint {
  month: string;
  revenue: number;
}

export interface InventoryStatus {
  name: string;
  value: number;
}

export interface Order {
  id: string;
  customer: string;
  amount: string;
  status: string;
}