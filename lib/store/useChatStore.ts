import { create } from "zustand";

type ChatStore = {
  // Estado del chat con Zustand
  // messages, addMessage, clearMessages, isConnected
};

export const useChatStore = create<ChatStore>((set) => ({
  // Implementación del store
}));
