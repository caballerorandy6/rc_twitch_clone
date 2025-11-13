"use client";

export function useSearch(query: string) {
  // Hook para búsqueda de streams/canales
  return {
    results: [],
    isLoading: false,
    error: null,
  };
}
