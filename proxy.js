import { NextResponse } from 'next/server';
import { SESSION_COOKIE, verifySessionToken } from '@/lib/auth';

/** Gates every admin page and admin API route on a valid session. */
export default async function proxy(request) {
  const { pathname } = request.nextUrl;
  const authed = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);

  if (pathname.startsWith('/api/admin')) {
    // The login route issues the session, so it must stay reachable.
    if (pathname.startsWith('/api/admin/login')) return NextResponse.next();
    if (!authed) {
      return NextResponse.json({ success: false, error: 'Not authorised' }, { status: 401 });
    }
    return NextResponse.next();
  }

  if (pathname === '/admin/login') {
    if (authed) return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    return NextResponse.next();
  }

  if (pathname.startsWith('/admin')) {
    if (!authed) return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
