import api from "./api";
import type { Customer } from "../types/customer";

interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

export const getCustomers = async (): Promise<Customer[]> => {
  const response = await api.get<ApiResponse<Customer[]>>("/customers");
  return response.data.data;
};

export const createCustomer = async (
  customer: Customer
): Promise<Customer> => {
  const response = await api.post<ApiResponse<Customer>>(
    "/customers",
    customer
  );

  return response.data.data;
};

export const updateCustomer = async (
  id: string,
  customer: Customer
): Promise<Customer> => {
  const response = await api.put<ApiResponse<Customer>>(
    `/customers/${id}`,
    customer
  );

  return response.data.data;
};

export const deleteCustomer = async (
  id: string
): Promise<void> => {
  await api.delete(`/customers/${id}`);
};