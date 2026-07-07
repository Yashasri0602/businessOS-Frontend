import api from "./api";
import type { Employee } from "../types/employee";

interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

export const getEmployees = async (): Promise<Employee[]> => {
  const response =
    await api.get<ApiResponse<Employee[]>>("/employees");

  return response.data.data;
};

export const createEmployee = async (
  employee: Employee
) => {
  const response = await api.post(
    "/employees",
    employee
  );

  return response.data.data;
};

export const updateEmployee = async (
  id: string,
  employee: Partial<Employee>
) => {
  const response = await api.put(
    `/employees/${id}`,
    employee
  );

  return response.data.data;
};

export const deleteEmployee = async (
  id: string
) => {
  await api.delete(`/employees/${id}`);
};