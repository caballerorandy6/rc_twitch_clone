import { NextRequest, NextResponse } from "next/server";

// This API Route is kept because OAuth callbacks need to be public endpoints
// that external services (Twitch) can redirect to

export async function GET(request: NextRequest) {
  // Handle Twitch OAuth callback
  // 1. Get code from query param
  // 2. Exchange code for token
  // 3. Save token in cookie/session
  // 4. Redirect user to home or previous page

  return NextResponse.json({});
}
