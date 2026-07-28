import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

/**
 * Public tracking lookup. Requires the exact ticket number — email
 * lookup was removed because it let anyone pull a customer's phone
 * number and home address by guessing an address. Returns only the
 * fields needed to render a status, never contact details.
 */
export async function GET(request) {
  const ticketNumber = new URL(request.url).searchParams.get('ticketNumber')?.trim();

  if (!ticketNumber || ticketNumber.length > 20) {
    return NextResponse.json({ success: false, error: 'Enter your ticket number' }, { status: 400 });
  }

  // Test mode: return mock ticket data
  if (process.env.TEST_MODE) {
    return NextResponse.json({
      success: true,
      ticket: {
        ticket_number: ticketNumber,
        device_type: 'iPhone',
        delivery_type: 'Pickup',
        status: 'In Progress',
        created_at: new Date().toISOString(),
      },
    });
  }

  try {
    const result = await sql`
      SELECT ticket_number, device_type, delivery_type, status, created_at
      FROM tickets
      WHERE ticket_number = ${ticketNumber}
      LIMIT 1
    `;

    const ticket = result.rows[0];
    if (!ticket) {
      return NextResponse.json(
        { success: false, error: 'No repair found for that ticket number' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, ticket });
  } catch (err) {
    console.error('Error tracking ticket:', err);
    return NextResponse.json({ success: false, error: 'Lookup failed' }, { status: 500 });
  }
}
