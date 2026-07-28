import { Pool } from 'pg';

/**
 * Shared PostgreSQL pool. The Neon integration provides DATABASE_URL
 * (and POSTGRES_URL as an alias), so a connection string is preferred.
 * The discrete PG* vars remain as a fallback for other providers.
 *
 * A single module-level pool is reused across requests. In development
 * Next.js clears the module registry on hot reload, so the pool is
 * cached on globalThis to avoid leaking a new pool per reload.
 */
const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

function createPool() {
  return new Pool(
    connectionString
      ? {
          connectionString,
          ssl: { rejectUnauthorized: false },
          max: 10,
          idleTimeoutMillis: 30000,
        }
      : {
          host: process.env.PGHOST,
          user: process.env.PGUSER,
          password: process.env.PGPASSWORD,
          database: process.env.PGDATABASE,
          port: parseInt(process.env.PGPORT ?? '5432', 10),
          ssl: { rejectUnauthorized: false },
          max: 10,
          idleTimeoutMillis: 30000,
        }
  );
}

const globalForPool = globalThis;
const pool = globalForPool.__bytechPool ?? createPool();
if (process.env.NODE_ENV !== 'production') globalForPool.__bytechPool = pool;

// A pool-level error must never crash the process (Neon closes idle
// connections when the compute suspends).
pool.on('error', (err) => {
  console.error('[v0] Postgres pool error:', err.message);
});

/**
 * Tagged-template helper that matches the @vercel/postgres `sql` API so
 * every route can use: await sql`SELECT ...` with zero other changes.
 *
 *   const result = await sql`SELECT * FROM tickets WHERE id = ${id}`;
 *   result.rows  // array of row objects
 */
export async function sql(strings, ...values) {
  // Build a parameterised query from the template literal
  let text = '';
  const params = [];
  strings.forEach((str, i) => {
    text += str;
    if (i < values.length) {
      params.push(values[i]);
      text += `$${params.length}`;
    }
  });

  const client = await pool.connect();
  try {
    return await client.query(text, params);
  } finally {
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
 */
let schemaPromise = null;

export function ensureSchema() {
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
    `.catch((err) => {
      schemaPromise = null;
      throw err;
    });
  }
  return schemaPromise;
}
