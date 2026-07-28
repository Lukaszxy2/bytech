'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { EASE_BRAND } from '@/lib/motion';
import Logo from '@/components/Logo';
import { TICKET_STATUSES } from '@/lib/tickets';

const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'drop-off', label: 'Drop-off' },
  { value: 'delivery', label: 'Collection' },
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const [tickets, setTickets] = useState([]);
  const [filter, setFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortKey, setSortKey] = useState('created_at');
  const [sortDir, setSortDir] = useState('desc');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/admin/tickets');
        if (res.status === 401) {
          router.replace('/admin/login');
          return;
        }
        const json = await res.json();
        if (json.success) setTickets(json.tickets || []);
        else setError(json.error || 'Could not load tickets.');
      } catch {
        setError('Could not load tickets.');
      } finally {
        setLoading(false);
      }
    })();
  }, [router]);

  const visible = useMemo(() => {
    const filtered = tickets.filter((t) => {
      const methodOk =
        filter === 'all' ||
        (filter === 'delivery' ? t.delivery_type === 'delivery' : t.delivery_type !== 'delivery');
      const statusOk = statusFilter === 'all' || t.status === statusFilter;
      return methodOk && statusOk;
    });

    return [...filtered].sort((a, b) => {
      const dir = sortDir === 'asc' ? 1 : -1;
      const av = a[sortKey] ?? '';
      const bv = b[sortKey] ?? '';
      return av > bv ? dir : av < bv ? -dir : 0;
    });
  }, [tickets, filter, statusFilter, sortKey, sortDir]);

  const toggleSort = (key) => {
    if (sortKey === key) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  const logout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' });
    router.replace('/admin/login');
    router.refresh();
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-12">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(50% 34% at 84% 0%, rgba(232,64,44,0.14) 0%, rgba(3,11,30,0) 68%)',
        }}
      />

      <div className="relative mx-auto max-w-[1240px]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <Logo size={24} />
            <span className="glass-panel-outline rounded-full px-3.5 py-1.5 text-[12px] uppercase tracking-[0.14em] text-text-muted">
              Admin
            </span>
          </div>
          <button type="button" onClick={logout} className="button-ghost text-text-muted hover:text-text-primary">
            Log out
          </button>
        </div>

        <h1 className="mt-10 text-heading-lg text-text-primary">Repair tickets</h1>
        <p className="mt-3 text-body-md text-text-muted">
          {loading ? 'Loading…' : `${visible.length} of ${tickets.length} tickets`}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {FILTERS.map((f) => (
            <FilterChip key={f.value} active={filter === f.value} onClick={() => setFilter(f.value)}>
              {f.label}
            </FilterChip>
          ))}
          <span className="mx-2 h-6 w-px bg-white/10" aria-hidden="true" />
          <FilterChip active={statusFilter === 'all'} onClick={() => setStatusFilter('all')}>
            Any status
          </FilterChip>
          {TICKET_STATUSES.map((s) => (
            <FilterChip key={s} active={statusFilter === s} onClick={() => setStatusFilter(s)}>
              {s}
            </FilterChip>
          ))}
        </div>

        {error && <p className="mt-6 text-body-md text-brand-red-bright">{error}</p>}

        <motion.div
          className="glass-panel-light mt-8 overflow-hidden rounded-panel-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_BRAND }}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <Th onClick={() => toggleSort('ticket_number')}>Ticket</Th>
                  <Th onClick={() => toggleSort('full_name')}>Customer</Th>
                  <Th onClick={() => toggleSort('device_type')}>Device</Th>
                  <Th onClick={() => toggleSort('delivery_type')}>Method</Th>
                  <Th onClick={() => toggleSort('created_at')}>Date</Th>
                  <Th onClick={() => toggleSort('status')}>Status</Th>
                  <th className="px-5 py-4" />
                </tr>
              </thead>
              <tbody>
                {visible.map((t) => (
                  <tr key={t.ticket_number} className="border-b border-white/[0.05] transition-colors hover:bg-white/[0.03]">
                    <td className="px-5 py-4 text-body-sm font-medium text-text-primary">{t.ticket_number}</td>
                    <td className="px-5 py-4 text-body-sm text-text-muted">{t.full_name}</td>
                    <td className="px-5 py-4 text-body-sm text-text-muted">{t.device_type}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-[12px] ${
                          t.delivery_type === 'delivery'
                            ? 'bg-brand-red/15 text-brand-red-bright'
                            : 'bg-white/[0.07] text-text-muted'
                        }`}
                      >
                        {t.delivery_type === 'delivery' ? 'Collection' : 'Drop-off'}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-body-sm text-text-muted">
                      {new Date(t.created_at).toLocaleDateString('en-GB')}
                    </td>
                    <td className="px-5 py-4 text-body-sm text-text-primary">{t.status}</td>
                    <td className="px-5 py-4 text-right">
                      <Link
                        href={`/admin/tickets/${encodeURIComponent(t.ticket_number)}`}
                        className="button-ghost text-[14px]"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
                {!loading && visible.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-5 py-14 text-center text-body-md text-text-muted">
                      No tickets match these filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

function Th({ children, onClick }) {
  return (
    <th className="px-5 py-4">
      <button
        type="button"
        onClick={onClick}
        className="text-[12px] uppercase tracking-[0.14em] text-text-muted transition-colors duration-hover ease-brand hover:text-text-primary"
      >
        {children}
      </button>
    </th>
  );
}

function FilterChip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 text-[13px] transition-all duration-hover ease-brand hover:scale-[1.03] ${
        active
          ? 'border-brand-red/60 bg-brand-red/12 text-text-primary'
          : 'border-white/[0.1] text-text-muted hover:border-white/25'
      }`}
    >
      {children}
    </button>
  );
}
