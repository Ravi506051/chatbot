import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    { error: "Guest sign-in is disabled. Please create an account or sign in." },
    { status: 410 }
  );
}
