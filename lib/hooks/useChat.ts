"use client";

export function useChat(channelId: string) {
  // Hook para conectar al chat con WebSocket
  // Usa socket.io-client
  return {
    messages: [],
    sendMessage: (message: string) => {},
    isConnected: false,
  };
}
