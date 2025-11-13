import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // Proxy for:
  // - Protecting routes that require authentication
  // - Validating Twitch tokens
  // - Redirecting if not authenticated

  return NextResponse.next();
}

export const config = {
  // Routes that apply the proxy
  matcher: [
    // Example: '/dashboard/:path*', '/profile/:path*'
  ],
};
