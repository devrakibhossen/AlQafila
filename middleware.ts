import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token =
    request.cookies.get("next-auth.session-token")?.value ||
    request.cookies.get("__Secure-next-auth.session-token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/accounts/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!accounts/sign-in|accounts/sign-up|_next/static|_next/image|favicon.ico).*)",
  ],
};
