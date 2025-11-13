import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Middleware para:
  // - Proteger rutas que requieren autenticación
  // - Validar tokens de Twitch
  // - Redirect si no está autenticado

  return NextResponse.next();
}

export const config = {
  // Rutas que aplican el middleware
  matcher: [
    // Ejemplo: '/dashboard/:path*', '/profile/:path*'
  ],
};
