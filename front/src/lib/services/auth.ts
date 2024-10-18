import type { LoginPayload } from "$lib/types";
import api from "./api";

export const login = async (loginPayload: LoginPayload) => {
  return await api.post('/auth/login', loginPayload)
}