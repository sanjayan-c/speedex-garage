import { http } from "./http";

export type LoginCredentials = { username: string; password: string };
export type AuthUser = { id: string; name: string; role: "ADMIN" | "STAFF" };
export type AuthResponse = { token: string; user: AuthUser };

export const AuthService = {
  login: (payload: LoginCredentials) =>
    http<AuthResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
