module.exports = [
"[externals]/next/dist/build/adapter/setup-node-env.external.js [external] (next/dist/build/adapter/setup-node-env.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/build/adapter/setup-node-env.external.js", () => require("next/dist/build/adapter/setup-node-env.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/memory-cache.external.js [external] (next/dist/server/lib/incremental-cache/memory-cache.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/memory-cache.external.js", () => require("next/dist/server/lib/incremental-cache/memory-cache.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/shared-cache-controls.external.js [external] (next/dist/server/lib/incremental-cache/shared-cache-controls.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/shared-cache-controls.external.js", () => require("next/dist/server/lib/incremental-cache/shared-cache-controls.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/auth.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Edge-safe session helpers. Uses Web Crypto (not node:crypto) so the
 * same code runs in middleware and in route handlers.
 */ __turbopack_context__.s([
    "SESSION_COOKIE",
    ()=>SESSION_COOKIE,
    "checkPassword",
    ()=>checkPassword,
    "createSessionToken",
    ()=>createSessionToken,
    "sessionCookieOptions",
    ()=>sessionCookieOptions,
    "verifySessionToken",
    ()=>verifySessionToken
]);
const SESSION_COOKIE = 'bt_admin';
const MAX_AGE_SECONDS = 60 * 60 * 8;
const encoder = new TextEncoder();
function secret() {
    // Falls back to a built-in default so the admin panel works even
    // without the SESSION_SECRET env var being set.
    return process.env.SESSION_SECRET || 'bytech-default-session-secret-change-in-production';
}
async function hmacKey() {
    return crypto.subtle.importKey('raw', encoder.encode(secret()), {
        name: 'HMAC',
        hash: 'SHA-256'
    }, false, [
        'sign'
    ]);
}
function toBase64Url(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    for(let i = 0; i < bytes.length; i++)binary += String.fromCharCode(bytes[i]);
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
async function sign(payload) {
    const key = await hmacKey();
    return toBase64Url(await crypto.subtle.sign('HMAC', key, encoder.encode(payload)));
}
/** Compares without an early exit, so a mismatch position isn't timeable. */ function constantTimeEqual(a, b) {
    if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
    let diff = 0;
    for(let i = 0; i < a.length; i++)diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
    return diff === 0;
}
function randomToken(bytes = 12) {
    const buf = new Uint8Array(bytes);
    crypto.getRandomValues(buf);
    return toBase64Url(buf);
}
async function createSessionToken() {
    const payload = `${Date.now()}.${randomToken()}`;
    return `${payload}.${await sign(payload)}`;
}
async function verifySessionToken(token) {
    if (typeof token !== 'string') return false;
    const parts = token.split('.');
    if (parts.length !== 3) return false;
    const [issuedAt, nonce, mac] = parts;
    if (!constantTimeEqual(mac, await sign(`${issuedAt}.${nonce}`))) return false;
    const age = Date.now() - Number(issuedAt);
    return Number.isFinite(age) && age >= 0 && age < MAX_AGE_SECONDS * 1000;
}
function checkPassword(candidate) {
    // Falls back to '1234' so the admin panel works without ADMIN_PASSWORD
    // being set. Set ADMIN_PASSWORD in production to override this.
    const expected = process.env.ADMIN_PASSWORD || '1234';
    return constantTimeEqual(candidate, expected);
}
const sessionCookieOptions = {
    httpOnly: true,
    sameSite: 'lax',
    secure: ("TURBOPACK compile-time value", "development") === 'production',
    path: '/',
    maxAge: MAX_AGE_SECONDS
};
}),
"[project]/proxy.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>proxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.js [middleware] (ecmascript)");
;
;
async function proxy(request) {
    const { pathname } = request.nextUrl;
    const authed = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["verifySessionToken"])(request.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["SESSION_COOKIE"])?.value);
    if (pathname.startsWith('/api/admin')) {
        // The login route issues the session, so it must stay reachable.
        if (pathname.startsWith('/api/admin/login')) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
        if (!authed) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Not authorised'
            }, {
                status: 401
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    if (pathname === '/admin/login') {
        if (authed) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/admin/dashboard', request.url));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    if (pathname.startsWith('/admin')) {
        if (!authed) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/admin/login', request.url));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        '/admin/:path*',
        '/api/admin/:path*'
    ]
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0ek0_ls._.js.map