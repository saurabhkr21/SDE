import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const user = request.cookies.get("user")?.value;
    const pathname = request.nextUrl.pathname;

    const protectedPaths = ['/', '/profile', '/home'];
    if (protectedPaths.includes(pathname)) {
        if (!user) {
            // Use relative path for redirect
            const loginUrl = new URL('/login', request.url);
            return NextResponse.redirect(loginUrl);
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/profile", "/home"],
};
