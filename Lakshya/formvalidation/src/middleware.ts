//@ts-nocheck

import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export default async function middleware(request) {
    const cookieStore = await cookies();
    const user = cookieStore.get("user")?.value;
    const pathname = request.nextUrl.pathname;

    const protectedPaths = ['/', '/profile', '/home'];
    if (protectedPaths.includes(pathname)) {
        if (!user) {
            return NextResponse.redirect("http://localhost:3001/login");
        }
    }
    return NextResponse.next();
}
