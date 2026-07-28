-- ByTech repair tickets.
-- Run this once against your Postgres database before the booking,
-- tracking or admin features will work. Safe to re-run.

CREATE TABLE IF NOT EXISTS tickets (
  id                SERIAL PRIMARY KEY,
  ticket_number     TEXT        NOT NULL UNIQUE,
  full_name         TEXT        NOT NULL,
  email             TEXT        NOT NULL,
  phone             TEXT        NOT NULL,
  device_type       TEXT        NOT NULL,
  issue_description TEXT        NOT NULL,
  delivery_type     TEXT        NOT NULL DEFAULT 'drop-off',
  delivery_address  TEXT,
  status            TEXT        NOT NULL DEFAULT 'Received',
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- The admin dashboard lists newest first.
CREATE INDEX IF NOT EXISTS tickets_created_at_idx ON tickets (created_at DESC);

-- Customers look a ticket up by its number.
CREATE INDEX IF NOT EXISTS tickets_number_idx ON tickets (ticket_number);
