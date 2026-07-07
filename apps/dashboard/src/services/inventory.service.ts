import api from "./api";
import type { Product } from "../types/product";

interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<ApiResponse<Product[]>>("/products");
  return response.data.data;
};

export const createProduct = async (
  product: Product
): Promise<Product> => {
  const response = await api.post<ApiResponse<Product>>(
    "/products",
    product
  );

  return response.data.data;
};

export const updateProduct = async (
  id: string,
  product: Product
): Promise<Product> => {
  const response = await api.put<ApiResponse<Product>>(
    `/products/${id}`,
    product
  );

  return response.data.data;
};

export const deleteProduct = async (
  id: string
): Promise<void> => {
  await api.delete(`/products/${id}`);
};