"use client";

export function useStreams() {
  // Hook para obtener lista de streams
  // Usa fetch con Next.js cache
  return {
    streams: [],
    isLoading: false,
    error: null,
  };
}
