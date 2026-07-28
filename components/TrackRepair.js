'use client';

import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { EASE_BRAND } from '@/lib/motion';
import { TICKET_STATUSES } from '@/lib/tickets';

function stepIndex(status) {
  const i = TICKET_STATUSES.indexOf(status);
  return i === -1 ? 0 : i;
}

export default function TrackRepair() {
  const params = useSearchParams();
  const [query, setQuery] = useState('');
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const lookup = useCallback(async (value) => {
    const trimmed = value.trim();
    if (!trimmed) return;

    setLoading(true);
    setError('');
    setTicket(null);

    try {
      const res = await fetch(`/api/track?ticketNumber=${encodeURIComponent(trimmed)}`);
      const json = await res.json();
      if (!res.ok || !json.success) {
        setError(json.error || 'We could not find that repair.');
        return;
      }
      setTicket(json.ticket);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Deep link straight from the booking confirmation.
  useEffect(() => {
    const fromUrl = params.get('ticketNumber');
    if (fromUrl) {
      setQuery(fromUrl);
      lookup(fromUrl);
    }
  }, [params, lookup]);

  const current = ticket ? stepIndex(ticket.status) : -1;
  const progress = current >= 0 ? (current / (TICKET_STATUSES.length - 1)) * 100 : 0;

  return (
    <div className="max-w-[900px]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          lookup(query);
        }}
        className="glass-panel-heavy flex flex-col gap-4 rounded-panel-lg p-6 sm:flex-row sm:items-center sm:p-7"
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ticket number (e.g. BT-4K7PQ2XM)"
          aria-label="Ticket number"
          className="w-full rounded-[12px] border border-white/[0.1] bg-white/[0.04] px-4 py-3.5 text-body-md text-text-primary outline-none transition-colors duration-hover ease-brand placeholder:text-text-muted/60 focus:border-brand-red/70"
        />
        <button type="submit" disabled={loading} className="btn-base button-primary shrink-0 disabled:opacity-70">
          {loading ? 'Searching…' : 'Track'}
        </button>
      </form>

      {error && <p className="mt-5 text-body-md text-brand-red-bright">{error}</p>}

      {ticket && (
        <motion.div
          className="glass-panel-light mt-7 rounded-panel-lg p-7 sm:p-9"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE_BRAND }}
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-label-sm uppercase text-brand-red-bright">Current status</p>
              <p className="mt-3 text-heading-md text-text-primary">{ticket.ticket_number}</p>
            </div>
            <span className="glass-panel-outline rounded-full px-4 py-2 text-body-sm text-text-primary">
              {ticket.status}
            </span>
          </div>

          <dl className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <Detail label="Device" value={ticket.device_type} />
            <Detail label="Method" value={ticket.delivery_type === 'delivery' ? 'Collection' : 'Drop-off'} />
            <Detail
              label="Submitted"
              value={new Date(ticket.created_at).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            />
          </dl>

          {/* Progress rail reusing the timeline's glowing line */}
          <div className="relative mt-11">
            <div className="absolute left-0 right-0 top-[13px] h-px bg-white/[0.12]" aria-hidden="true" />
            <motion.div
              className="absolute left-0 top-[13px] h-px origin-left"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg,#E8402C,#FF6A38)',
                boxShadow: '0 0 14px rgba(232,64,44,0.8)',
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: EASE_BRAND, delay: 0.15 }}
              aria-hidden="true"
            />
            <ol className="relative grid grid-cols-5 gap-2">
              {TICKET_STATUSES.map((step, i) => {
                const done = i <= current;
                return (
                  <li key={step} className="flex flex-col items-center text-center">
                    <span
                      className={`flex h-[26px] w-[26px] items-center justify-center rounded-full border text-[11px] font-bold transition-colors ${
                        done
                          ? 'border-brand-red bg-brand-red text-white'
                          : 'border-white/20 bg-background-primary text-text-muted'
                      }`}
                      style={done ? { boxShadow: '0 0 16px rgba(232,64,44,0.65)' } : undefined}
                    >
                      {i + 1}
                    </span>
                    <span className={`mt-3 text-[12px] leading-tight ${done ? 'text-text-primary' : 'text-text-muted'}`}>
                      {step}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <dt className="text-[12px] uppercase tracking-[0.14em] text-text-muted">{label}</dt>
      <dd className="mt-1.5 text-body-md text-text-primary">{value}</dd>
    </div>
  );
}
