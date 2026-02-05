// services/Auth/authResetPasswordService.ts
import api from "../api";

export const resetPassword = async (email: string, password: string) => {
  const res = await api.post("/auth/reset-password", {
    email,
    password,
  });
  return res.data;
};
