module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/lib/db.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ensureSchema",
    ()=>ensureSchema,
    "sql",
    ()=>sql
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
/**
 * Shared PostgreSQL pool. The Neon integration provides DATABASE_URL
 * (and POSTGRES_URL as an alias), so a connection string is preferred.
 * The discrete PG* vars remain as a fallback for other providers.
 *
 * A single module-level pool is reused across requests. In development
 * Next.js clears the module registry on hot reload, so the pool is
 * cached on globalThis to avoid leaking a new pool per reload.
 */ const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;
function createPool() {
    return new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["Pool"](connectionString ? {
        connectionString,
        ssl: {
            rejectUnauthorized: false
        },
        max: 10,
        idleTimeoutMillis: 30000
    } : {
        host: process.env.PGHOST,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        port: parseInt(process.env.PGPORT ?? '5432', 10),
        ssl: {
            rejectUnauthorized: false
        },
        max: 10,
        idleTimeoutMillis: 30000
    });
}
const globalForPool = globalThis;
const pool = globalForPool.__bytechPool ?? createPool();
if ("TURBOPACK compile-time truthy", 1) globalForPool.__bytechPool = pool;
// A pool-level error must never crash the process (Neon closes idle
// connections when the compute suspends).
pool.on('error', (err)=>{
    console.error('[v0] Postgres pool error:', err.message);
});
async function sql(strings, ...values) {
    // Build a parameterised query from the template literal
    let text = '';
    const params = [];
    strings.forEach((str, i)=>{
        text += str;
        if (i < values.length) {
            params.push(values[i]);
            text += `$${params.length}`;
        }
    });
    const client = await pool.connect();
    try {
        return await client.query(text, params);
    } finally{
        client.release();
    }
}
/**
 * Ensure the tickets table exists. Call this at the top of any route
 * handler that touches the tickets table.
 *
 * The CREATE runs at most once per process — the resulting promise is
 * memoised so concurrent requests share one round trip instead of
 * issuing a redundant DDL statement on every single request. If it
 * fails, the cache is cleared so the next request can retry.
 */ let schemaPromise = null;
function ensureSchema() {
    if (!schemaPromise) {
        schemaPromise = sql`
      CREATE TABLE IF NOT EXISTS tickets (
        id              SERIAL PRIMARY KEY,
        ticket_number   TEXT NOT NULL UNIQUE,
        full_name       TEXT NOT NULL,
        email           TEXT NOT NULL,
        phone           TEXT NOT NULL,
        device_type     TEXT NOT NULL,
        issue_description TEXT NOT NULL,
        delivery_type   TEXT NOT NULL DEFAULT 'drop-off',
        delivery_address TEXT,
        status          TEXT NOT NULL DEFAULT 'Received',
        created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `.catch((err)=>{
            schemaPromise = null;
            throw err;
        });
    }
    return schemaPromise;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/lib/tickets.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELIVERY_METHODS",
    ()=>DELIVERY_METHODS,
    "DEVICE_TYPES",
    ()=>DEVICE_TYPES,
    "TICKET_STATUSES",
    ()=>TICKET_STATUSES,
    "generateTicketNumber",
    ()=>generateTicketNumber,
    "validateTicketInput",
    ()=>validateTicketInput
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const TICKET_STATUSES = [
    'Received',
    'In Progress',
    'Awaiting Parts',
    'Ready for Collection',
    'Delivered'
];
const DEVICE_TYPES = [
    'Mobile Phone',
    'Laptop',
    'Console',
    'Tablet',
    'Controller',
    'Other'
];
const DELIVERY_METHODS = [
    'drop-off',
    'delivery'
];
function generateTicketNumber() {
    const alphabet = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    const bytes = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomBytes"])(8);
    let out = '';
    for(let i = 0; i < 8; i++)out += alphabet[bytes[i] % alphabet.length];
    return `BT-${out}`;
}
const LIMITS = {
    fullName: 120,
    email: 180,
    phone: 40,
    issueDescription: 2000,
    address: 300
};
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validateTicketInput(body) {
    if (!body || typeof body !== 'object') return {
        error: 'Invalid request body'
    };
    const str = (v)=>typeof v === 'string' ? v.trim() : '';
    const fullName = str(body.fullName);
    const email = str(body.email);
    const phone = str(body.phone);
    const deviceType = str(body.deviceType);
    const issueDescription = str(body.issueDescription);
    const deliveryMethod = str(body.deliveryMethod) || 'drop-off';
    const address = str(body.address);
    if (!fullName || fullName.length > LIMITS.fullName) return {
        error: 'Please enter your name'
    };
    if (!email || email.length > LIMITS.email || !EMAIL.test(email)) {
        return {
            error: 'Please enter a valid email address'
        };
    }
    if (!phone || phone.length > LIMITS.phone) return {
        error: 'Please enter a phone number'
    };
    if (!DEVICE_TYPES.includes(deviceType)) return {
        error: 'Please choose a device type'
    };
    if (!issueDescription || issueDescription.length > LIMITS.issueDescription) {
        return {
            error: 'Please describe the fault'
        };
    }
    if (!DELIVERY_METHODS.includes(deliveryMethod)) return {
        error: 'Please choose a delivery option'
    };
    if (deliveryMethod === 'delivery' && (!address || address.length > LIMITS.address)) {
        return {
            error: 'Please enter a collection address'
        };
    }
    return {
        data: {
            fullName,
            email,
            phone,
            deviceType,
            issueDescription,
            deliveryMethod,
            address: deliveryMethod === 'delivery' ? address : null
        }
    };
}
}),
"[project]/app/api/tickets/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tickets$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tickets.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Invalid request body'
        }, {
            status: 400
        });
    }
    const { data, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tickets$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateTicketInput"])(body);
    if (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error
        }, {
            status: 400
        });
    }
    const ticketNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tickets$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateTicketNumber"])();
    // Test mode: return success without database
    if (process.env.TEST_MODE) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            ticketNumber
        }, {
            status: 201
        });
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureSchema"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`
      INSERT INTO tickets (
        ticket_number, full_name, email, phone, device_type,
        issue_description, delivery_type, delivery_address, status
      ) VALUES (
        ${ticketNumber}, ${data.fullName}, ${data.email}, ${data.phone}, ${data.deviceType},
        ${data.issueDescription}, ${data.deliveryMethod}, ${data.address}, 'Received'
      )
    `;
    } catch (err) {
        console.error('[v0] Error creating ticket:', err.message, 'code:', err.code);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Could not submit your request. Please try again.'
        }, {
            status: 500
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        ticketNumber
    }, {
        status: 201
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1peskej._.js.map