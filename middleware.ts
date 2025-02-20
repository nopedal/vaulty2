import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // If the user does not have a token cookie and is trying to access /dashboard,
  // redirect them to /login
  const token = request.cookies.get('token')?.value;
  const isDashboardRoute = request.nextUrl.pathname.startsWith('/dashboard');

  if (!token && isDashboardRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Otherwise, continue
  return NextResponse.next();
}

// Only match the routes that need protection or that you want to intercept
export const config = {
  matcher: ['/dashboard/:path*'],
};
