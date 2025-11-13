import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Manejar OAuth callback de Twitch
  // 1. Obtener code del query param
  // 2. Intercambiar code por token
  // 3. Guardar token en cookie/session
  // 4. Redirect al usuario

  return NextResponse.json({});
}
