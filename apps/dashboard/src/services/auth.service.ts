import api from "./api";

export const login = async (email: string, password: string) => {
  return api.post("/auth/login", {
    email,
    password,
  });
};

export const register = async (
  businessName: string,
  ownerName: string,
  phone: string,
  email: string,
  password: string
) => {
  return api.post("/auth/register", {
    businessName,
    ownerName,
    phone,
    email,
    password,

    // Temporary defaults
    industry: "General",
    address: "Not Provided",
  });
};