import { sql, ensureSchema } from '@/lib/db';
import { NextResponse } from 'next/server';
import { generateTicketNumber, validateTicketInput } from '@/lib/tickets';

/**
 * Public endpoint: create a repair ticket. Deliberately write-only —
 * there is no public read here. Listing lives behind /api/admin/tickets
 * and single-ticket status lives behind /api/track.
 */
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request body' }, { status: 400 });
  }

  const { data, error } = validateTicketInput(body);
  if (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }

  const ticketNumber = generateTicketNumber();

  // Test mode: return success without database
  if (process.env.TEST_MODE) {
    return NextResponse.json({ success: true, ticketNumber }, { status: 201 });
  }

  try {
    await ensureSchema();
    await sql`
      INSERT INTO tickets (
        ticket_number, full_name, email, phone, device_type,
        issue_description, delivery_type, delivery_address, status
      ) VALUES (
        ${ticketNumber}, ${data.fullName}, ${data.email}, ${data.phone}, ${data.deviceType},
        ${data.issueDescription}, ${data.deliveryMethod}, ${data.address}, 'Received'
      )
    `;
  } catch (err) {
    console.error('[v0] Error creating ticket:', err.message, 'code:', err.code, 'host:', process.env.PGHOST, 'user:', process.env.PGUSER, 'db:', process.env.PGDATABASE);
    return NextResponse.json(
      { success: false, error: 'Could not submit your request. Please try again.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, ticketNumber }, { status: 201 });
}
