import { NextResponse } from 'next/server';
import { checkPassword, createSessionToken, SESSION_COOKIE, sessionCookieOptions } from '@/lib/auth';

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }

  if (!checkPassword(body?.password)) {
    return NextResponse.json({ success: false, error: 'Incorrect password' }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(SESSION_COOKIE, await createSessionToken(), sessionCookieOptions);
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(SESSION_COOKIE, '', { ...sessionCookieOptions, maxAge: 0 });
  return response;
}
