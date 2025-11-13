"use client";

export function useInfiniteScroll() {
  // Hook para infinite scroll
  // Usa Intersection Observer
  return {
    ref: null,
    isIntersecting: false,
  };
}
