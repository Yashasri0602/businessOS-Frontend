import api from "./api";
import type { Expense } from "../types/expense";

interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

export const getExpenses = async (): Promise<Expense[]> => {
  const response =
    await api.get<ApiResponse<Expense[]>>("/expenses");

  return response.data.data;
};

export const createExpense = async (
  expense: Expense
) => {
  const response = await api.post(
    "/expenses",
    expense
  );

  return response.data.data;
};

export const updateExpense = async (
  id: string,
  expense: Partial<Expense>
) => {
  const response = await api.put(
    `/expenses/${id}`,
    expense
  );

  return response.data.data;
};

export const deleteExpense = async (
  id: string
) => {
  await api.delete(`/expenses/${id}`);
};