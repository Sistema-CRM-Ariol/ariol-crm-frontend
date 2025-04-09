import { NextRequest, NextResponse } from "next/server";
import apiClient from "@/lib/apiClient";

const PUBLIC_PATHS = ["/auth", "/favicon.ico"];

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Permitir rutas públicas sin validación
    if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
        return NextResponse.next();
    }

    const token = req.cookies.get("ARIOL_TOKEN")?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    try {
        await apiClient.get("/auth/verify", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return NextResponse.next();
    } catch (error) {
        console.error("Token inválido:", error);
        return NextResponse.redirect(new URL("/auth/login", req.url));
    }
}

export const config = {
    matcher: [
        "/home/:path*",
        "/contacts/:path*",
        "/catalog/:path*",
        "/inventories/:path*",
        "/warehouses/:path*"
    ]
};
