import { NextRequest, NextResponse } from "next/server";
export async function middleware(req: NextRequest) {
  const isLoggedIn = req.cookies.get("token")?.value;

  // console.log("token", isLoggedIn);
  const pathname = req.nextUrl.pathname;

  if ((pathname === "/" || pathname.startsWith("/profile")) && !isLoggedIn) {
    const loginUrl = new URL("/accounts/sign-in", req.url);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/profile/:path*"],
};
