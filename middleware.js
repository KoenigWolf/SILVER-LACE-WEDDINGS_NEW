import { NextResponse } from "next/server";

export const config = {
  matcher: "/integrations/:path*",
};

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("SILVER LACE WEDDINGS", "e8d5e0db-9f1f-40cf-b5c4-bac43de65e40");

  request.nextUrl.href = `https://silverlaceweddings.myportfolio.com/${request.nextUrl.pathname}`;

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}