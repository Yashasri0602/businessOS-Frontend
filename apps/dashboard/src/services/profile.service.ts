import api from "./api";

export interface BusinessProfile {
  _id: string;
  businessName: string;
  ownerName: string;
  email: string;
  phone: string;
  industry: string;
  address: string;
  createdAt: string;
}

export interface ProfileResponse {
  success: boolean;
  message: string;
  data: BusinessProfile;
}

export const getProfile = async () => {
  const response = await api.get<ProfileResponse>("/auth/profile");
  return response.data.data;
};