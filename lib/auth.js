/**
 * Edge-safe session helpers. Uses Web Crypto (not node:crypto) so the
 * same code runs in middleware and in route handlers.
 */

export const SESSION_COOKIE = 'bt_admin';
const MAX_AGE_SECONDS = 60 * 60 * 8;

const encoder = new TextEncoder();

function secret() {
  const value = process.env.SESSION_SECRET;
  if (!value) throw new Error('SESSION_SECRET is not set');
  return value;
}

async function hmacKey() {
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(secret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
}

function toBase64Url(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function sign(payload) {
  const key = await hmacKey();
  return toBase64Url(await crypto.subtle.sign('HMAC', key, encoder.encode(payload)));
}

/** Compares without an early exit, so a mismatch position isn't timeable. */
function constantTimeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function randomToken(bytes = 12) {
  const buf = new Uint8Array(bytes);
  crypto.getRandomValues(buf);
  return toBase64Url(buf);
}

/** token = <issuedAt>.<nonce>.<hmac> */
export async function createSessionToken() {
  const payload = `${Date.now()}.${randomToken()}`;
  return `${payload}.${await sign(payload)}`;
}

export async function verifySessionToken(token) {
  if (typeof token !== 'string') return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;

  const [issuedAt, nonce, mac] = parts;
  if (!constantTimeEqual(mac, await sign(`${issuedAt}.${nonce}`))) return false;

  const age = Date.now() - Number(issuedAt);
  return Number.isFinite(age) && age >= 0 && age < MAX_AGE_SECONDS * 1000;
}

export function checkPassword(candidate) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  return constantTimeEqual(candidate, expected);
}

export const sessionCookieOptions = {
  httpOnly: true,
  sameSite: 'lax',
  secure: process.env.NODE_ENV === 'production',
  path: '/',
  maxAge: MAX_AGE_SECONDS,
};
