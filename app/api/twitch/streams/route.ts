import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Proxy para obtener streams de Twitch
  // Query params: category, language, first, after (pagination)
  // Agregar headers de autenticación
  // Cachear respuesta

  return NextResponse.json({});
}
