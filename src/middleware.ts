
import NextAuth, { User } from "next-auth";
import { NextResponse } from "next/server";

import { authConfig } from "@/lib/auth.config";
import { ADMIN_ROUTES, API_AUTH_PREFIX, AUTH_ROUTES, PROTECTED_ROUTES } from "@/routes";

export const { auth } = NextAuth(authConfig);
const isAdmin = (user:User|undefined) => {
    const adminEmails = JSON.parse(process.env.ADMINS??"")
    return user && adminEmails.includes(user.email??"");
  };
  
export default auth(req => {
 const pathname = req.nextUrl.pathname;

 const isAuth = req.auth;
 const isAccessingApiAuthRoute = pathname.startsWith(API_AUTH_PREFIX);
 const isAccessingAdminRoute = pathname.startsWith(ADMIN_ROUTES);
 const isAccessingAuthRoute = AUTH_ROUTES.some(route => pathname.startsWith(route));
 const isAccessingProtectedRoute = PROTECTED_ROUTES.some(route => pathname.startsWith(route));
 if (isAccessingApiAuthRoute) {
  return NextResponse.next();
 }

 if (isAccessingAuthRoute) {
  if (isAuth) {
   return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}
  if (isAuth && isAccessingAdminRoute) {
    if (!isAdmin(req.auth?.user)) {
        return NextResponse.redirect(new URL("/not-found", req.url));
    }

    
    
  }
 

 if (!isAuth && isAccessingProtectedRoute) {
  return NextResponse.redirect(new URL("/login", req.url));
 }
});

export const config = {
 matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};