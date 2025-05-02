import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";
const isLoggin=false;
export function middleware(request) {
  if(!isLoggin && request.nextUrl.pathname!="/home"){
  return NextResponse.redirect(new URL("/home", request.url));
  }
}
