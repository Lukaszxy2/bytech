import { sql, ensureSchema } from '@/lib/db';
import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth-server';
import { TICKET_STATUSES } from '@/lib/tickets';

const unauthorized = () =>
  NextResponse.json({ success: false, error: 'Not authorised' }, { status: 401 });

/** Admin-only: full ticket records, including customer contact details. */
export async function GET(request) {
  if (!(await isAuthenticated())) return unauthorized();

  const ticketNumber = new URL(request.url).searchParams.get('ticketNumber')?.trim();

  try {
    await ensureSchema();
    if (ticketNumber) {
      const result = await sql`
        SELECT ticket_number, full_name, email, phone, device_type, issue_description,
               delivery_type, delivery_address, status, created_at
        FROM tickets
        WHERE ticket_number = ${ticketNumber}
        LIMIT 1
      `;
      const ticket = result.rows[0];
      if (!ticket) {
        return NextResponse.json({ success: false, error: 'Ticket not found' }, { status: 404 });
      }
      return NextResponse.json({ success: true, ticket });
    }

    const result = await sql`
      SELECT ticket_number, full_name, email, phone, device_type, issue_description,
             delivery_type, delivery_address, status, created_at
      FROM tickets
      ORDER BY created_at DESC
      LIMIT 500
    `;
    return NextResponse.json({ success: true, tickets: result.rows });
  } catch (err) {
    console.error('Error fetching tickets:', err.message);
    return NextResponse.json({ success: false, error: 'Failed to fetch tickets' }, { status: 500 });
  }
}

/** Admin-only: update a ticket's status. */
export async function PATCH(request) {
  if (!(await isAuthenticated())) return unauthorized();

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }

  const ticketNumber = typeof body?.ticketNumber === 'string' ? body.ticketNumber.trim() : '';
  const status = typeof body?.status === 'string' ? body.status : '';

  if (!ticketNumber || !TICKET_STATUSES.includes(status)) {
    return NextResponse.json({ success: false, error: 'Invalid ticket or status' }, { status: 400 });
  }

  try {
    const result = await sql`
      UPDATE tickets SET status = ${status} WHERE ticket_number = ${ticketNumber}
    `;
    if (result.rowCount === 0) {
      return NextResponse.json({ success: false, error: 'Ticket not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error updating ticket:', err);
    return NextResponse.json({ success: false, error: 'Failed to update status' }, { status: 500 });
  }
}
