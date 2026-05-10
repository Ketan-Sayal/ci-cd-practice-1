import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

const protectedRoutes = ["/dashboard"];

export default auth((req:any) => {
  const isLoggedIn = !!req.auth;
  const path = req.nextUrl.pathname;
  if (protectedRoutes.some((pathName)=>path.startsWith(pathName)) && !isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
});