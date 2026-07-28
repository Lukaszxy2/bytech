'use client';

import { use, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { EASE_BRAND } from '@/lib/motion';
import Logo from '@/components/Logo';
import { TICKET_STATUSES } from '@/lib/tickets';
import { ChevronLeftIcon } from '@/components/Icons';

export default function AdminTicketPage({ params }) {
  const { ticketNumber } = use(params);
  const router = useRouter();
  const [ticket, setTicket] = useState(null);
  const [status, setStatus] = useState('Received');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/api/admin/tickets?ticketNumber=${encodeURIComponent(ticketNumber)}`);
        if (res.status === 401) {
          router.replace('/admin/login');
          return;
        }
        const json = await res.json();
        if (json.success) {
          setTicket(json.ticket);
          setStatus(json.ticket.status);
        } else {
          setMessage(json.error || 'Ticket not found.');
        }
      } catch {
        setMessage('Could not load this ticket.');
      } finally {
        setLoading(false);
      }
    })();
  }, [ticketNumber, router]);

  const save = async () => {
    setSaving(true);
    setMessage('');
    try {
      const res = await fetch('/api/admin/tickets', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ticketNumber: ticket.ticket_number, status }),
      });
      const json = await res.json();
      if (json.success) {
        setTicket((t) => ({ ...t, status }));
        setMessage('Status updated.');
      } else {
        setMessage(json.error || 'Could not update status.');
      }
    } catch {
      setMessage('Could not update status.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-12">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(46% 34% at 84% 0%, rgba(232,64,44,0.13) 0%, rgba(3,11,30,0) 68%)',
        }}
      />

      <div className="relative mx-auto max-w-[900px]">
        <div className="flex items-center justify-between gap-4">
          <Logo size={24} />
          <Link href="/admin/dashboard" className="button-ghost text-text-muted hover:text-text-primary">
            <ChevronLeftIcon width={17} height={17} />
            All tickets
          </Link>
        </div>

        {loading ? (
          <p className="mt-16 text-body-md text-text-muted">Loading ticket…</p>
        ) : !ticket ? (
          <div className="mt-16">
            <h1 className="text-heading-md text-text-primary">Ticket not found</h1>
            <p className="mt-3 text-body-md text-text-muted">{message}</p>
          </div>
        ) : (
          <motion.div
            className="glass-panel-heavy mt-10 rounded-panel-lg p-8 sm:p-10"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_BRAND }}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-label-sm uppercase text-brand-red-bright">Repair ticket</p>
                <h1 className="mt-3 text-heading-md text-text-primary">{ticket.ticket_number}</h1>
              </div>
              <span className="glass-panel-outline rounded-full px-4 py-2 text-body-sm text-text-primary">
                {ticket.status}
              </span>
            </div>

            <dl className="mt-9 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
              <Row label="Customer" value={ticket.full_name} />
              <Row label="Email" value={<a className="hover:text-brand-red-bright" href={`mailto:${ticket.email}`}>{ticket.email}</a>} />
              <Row label="Phone" value={<a className="hover:text-brand-red-bright" href={`tel:${ticket.phone}`}>{ticket.phone}</a>} />
              <Row label="Device" value={ticket.device_type} />
              <Row label="Method" value={ticket.delivery_type === 'delivery' ? 'Collection' : 'Drop-off'} />
              <Row
                label="Submitted"
                value={new Date(ticket.created_at).toLocaleString('en-GB', {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                })}
              />
              {ticket.delivery_type === 'delivery' && (
                <Row label="Collection address" value={ticket.delivery_address} span />
              )}
              <Row label="Issue" value={ticket.issue_description} span />
            </dl>

            <div className="mt-10 border-t border-white/[0.08] pt-8">
              <label className="block max-w-[340px]">
                <span className="mb-2 block text-[13px] font-medium uppercase tracking-[0.1em] text-text-muted">
                  Update status
                </span>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full appearance-none rounded-[12px] border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-body-md text-text-primary outline-none transition-colors duration-hover ease-brand focus:border-brand-red/70"
                >
                  {TICKET_STATUSES.map((s) => (
                    <option key={s} value={s} className="bg-background-primary">
                      {s}
                    </option>
                  ))}
                </select>
              </label>

              <div className="mt-6 flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={save}
                  disabled={saving || status === ticket.status}
                  className="btn-base button-primary disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving ? 'Saving…' : 'Save status'}
                </button>
                {message && <p className="text-body-sm text-text-muted">{message}</p>}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}

function Row({ label, value, span }) {
  return (
    <div className={span ? 'sm:col-span-2' : undefined}>
      <dt className="text-[12px] uppercase tracking-[0.14em] text-text-muted">{label}</dt>
      <dd className="mt-2 whitespace-pre-line text-body-md text-text-primary">{value}</dd>
    </div>
  );
}
