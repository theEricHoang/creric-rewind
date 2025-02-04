import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ['/notes'];

export async function middleware(request: NextRequest) {
  if (protectedRoutes.includes(request.nextUrl.pathname)) {
    if (!request.cookies.has("better-auth.session_token")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}