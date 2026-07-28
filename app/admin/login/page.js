'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { EASE_BRAND } from '@/lib/motion';
import Logo from '@/components/Logo';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const json = await res.json();

      if (!res.ok || !json.success) {
        setError(json.error || 'Incorrect password.');
        setPassword('');
        return;
      }

      router.replace('/admin/dashboard');
      router.refresh();
    } catch {
      setError('Could not reach the server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 0%, rgba(12,26,58,0.9) 0%, rgba(3,11,30,0) 70%), radial-gradient(40% 40% at 82% 100%, rgba(232,64,44,0.2) 0%, rgba(3,11,30,0) 70%)',
        }}
      />
      <div className="texture-circuit pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />

      <motion.div
        className="glass-panel-heavy relative w-full max-w-[440px] rounded-panel-lg p-9"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE_BRAND }}
      >
        <Logo size={24} href={null} />
        <p className="mt-8 text-label-sm uppercase text-brand-red-bright">Admin access</p>
        <h1 className="mt-4 text-heading-md text-text-primary">Repair dashboard</h1>
        <p className="mt-3 text-body-sm text-text-muted">
          Enter the admin password to manage repair tickets.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          <label className="block">
            <span className="mb-2 block text-[13px] font-medium uppercase tracking-[0.1em] text-text-muted">
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="w-full rounded-[12px] border border-white/[0.1] bg-white/[0.04] px-4 py-3.5 text-body-md text-text-primary outline-none transition-colors duration-hover ease-brand focus:border-brand-red/70"
            />
          </label>

          {error && <p className="mt-4 text-body-sm text-brand-red-bright">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="btn-base button-primary mt-7 w-full disabled:opacity-70"
          >
            {loading ? 'Checking…' : 'Log In'}
          </button>
        </form>
      </motion.div>
    </main>
  );
}
