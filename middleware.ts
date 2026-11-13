import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Security headers for all responses.
 * CSP allows self assets, Unsplash images, OSM map iframe, GTM/Analytics,
 * and inline styles used by Next/font + existing UI.
 * `unsafe-eval` is only for development (React/Turbopack debugging).
 */
export function middleware(_request: NextRequest) {
  const response = NextResponse.next();
  const isDev = process.env.NODE_ENV === "development";

  const csp = [
    "default-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    isDev
      ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com"
      : "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://images.unsplash.com https://www.googletagmanager.com https://www.google-analytics.com",
    "font-src 'self' data:",
    "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com",
    "frame-src https://www.openstreetmap.org https://www.googletagmanager.com",
    "upgrade-insecure-requests",
  ].join("; ");

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  );
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload",
  );
  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");

  return response;
}

export const config = {
  matcher: [
    /*
     * Apply to all paths except Next internals and static files with extensions.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
