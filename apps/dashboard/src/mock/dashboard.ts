import type {
  DashboardStat,
  RevenuePoint,
  InventoryStatus,
  Order,
} from "../types/dashboard";

export const dashboardStats: DashboardStat[] = [
  {
    title: "Revenue",
    value: "$124K",
    change: "+18%"
  },
  {
    title: "Orders",
    value: "2,184",
    change: "+9%"
  },
  {
    title: "Customers",
    value: "845",
    change: "+12%"
  },
  {
    title: "Inventory",
    value: "1,287",
    change: "-4%"
  }
];
export const revenueData: RevenuePoint[] = [
  { month: "Jan", revenue: 32000 },
  { month: "Feb", revenue: 42000 },
  { month: "Mar", revenue: 38000 },
  { month: "Apr", revenue: 52000 },
  { month: "May", revenue: 61000 },
  { month: "Jun", revenue: 74000 },
];
export const inventoryStatus: InventoryStatus[] = [
  {
    name: "In Stock",

    value: 860,
  },
  {
    name: "Low Stock",
    value: 104,
  },
  {
    name: "Out of Stock",
    value: 29,
  },
];
export const recentOrders: Order[] = [
  {
    id: "#1024",
    customer: "John Smith",
    amount: "$240",
    status: "Completed",
  },
  {
    id: "#1025",
    customer: "Emma Wilson",
    amount: "$120",
    status: "Pending",
  },
  {
    id: "#1026",
    customer: "Michael Brown",
    amount: "$560",
    status: "Completed",
  },
  {
    id: "#1027",
    customer: "Sophia Davis",
    amount: "$89",
    status: "Processing",
  },
];
export const aiInsights = [
  "Revenue increased by 18% this month.",
  "3 products are running low on stock.",
  "Weekend sales are expected to be higher.",
];

export const notifications = [
  "New order received.",
  "Inventory updated.",
  "Employee attendance synced.",
];

export const quickActions = [
  "Add Product",
  "Create Order",
  "Add Customer",
  "Generate Report",
];
