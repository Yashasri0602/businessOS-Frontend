import api from "./api";
import type { Order } from "../types/order";

interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

export const getOrders = async (): Promise<Order[]> => {
  const response =
    await api.get<ApiResponse<Order[]>>("/orders");

  return response.data.data;
};

export const updateOrder = async (
  id: string,
  data: Partial<Order>
) => {
  const response = await api.put(
    `/orders/${id}`,
    data
  );

  return response.data.data;
};

export const deleteOrder = async (
  id: string
) => {
  await api.delete(`/orders/${id}`);
};