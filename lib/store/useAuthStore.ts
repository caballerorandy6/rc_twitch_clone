import { create } from "zustand";

type AuthStore = {
  // Estado de autenticación con Zustand
  // user, token, isAuthenticated, login, logout
};

export const useAuthStore = create<AuthStore>((set) => ({
  // Implementación del store
}));
