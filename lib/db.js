import { Pool } from 'pg';

/**
 * Shared PostgreSQL pool using the Aurora env vars provided by the
 * Amazon Aurora PostgreSQL integration (PGHOST, PGUSER, PGPASSWORD,
 * PGDATABASE, PGPORT). Falls back to POSTGRES_URL if set.
 */
const pool = new Pool(
  process.env.POSTGRES_URL
    ? { connectionString: process.env.POSTGRES_URL, ssl: { rejectUnauthorized: false } }
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
 * Ensure the tickets table exists. Call this once at the top of any
 * route handler that touches the tickets table.
 */
export async function ensureSchema() {
  await sql`
    CREATE TABLE IF NOT EXISTS tickets (
      id              SERIAL PRIMARY KEY,
      ticket_number   TEXT NOT NULL UNIQUE,
      full_name       TEXT NOT NULL,
      email           TEXT NOT NULL,
      phone           TEXT NOT NULL,
      device_type     TEXT NOT NULL,
      issue_description TEXT NOT NULL,
      delivery_type   TEXT NOT NULL,
      delivery_address TEXT,
      status          TEXT NOT NULL DEFAULT 'Received',
      created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
}
