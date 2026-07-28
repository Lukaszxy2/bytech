'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { EASE_BRAND } from '@/lib/motion';
import { ArrowRightIcon } from '@/components/Icons';

const DELIVERY_OPTIONS = [
  { value: 'drop-off', title: 'Drop It Off', helper: 'Bring your device to our workshop' },
  { value: 'delivery', title: 'Deliver It For Me', helper: 'We arrange collection and return' },
];

export default function RepairRequestForm({ deviceTypes = [] }) {
  const [delivery, setDelivery] = useState('drop-off');
  const [status, setStatus] = useState('idle');
  const [ticket, setTicket] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setError('');

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, deliveryMethod: delivery }),
      });
      const json = await res.json();

      if (!res.ok || !json.success) {
        setError(json.error || 'Something went wrong. Please try again.');
        setStatus('idle');
        return;
      }

      setTicket(json.ticketNumber);
      setStatus('done');
      form.reset();
      setDelivery('drop-off');
    } catch {
      setError('Could not reach the server. Please try again.');
      setStatus('idle');
    }
  };

  if (status === 'done') {
    return (
      <motion.div
        className="py-10 text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE_BRAND }}
      >
        <p className="text-label-sm uppercase text-brand-red-bright">Request received</p>
        <p className="mt-4 text-heading-md text-text-primary">Ticket {ticket}</p>
        <p className="mx-auto mt-4 max-w-[440px] text-body-md text-text-muted">
          Save this number. It&rsquo;s how you track the repair, and we&rsquo;ll be in touch shortly.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
          <Link href={`/track-repair?ticketNumber=${ticket}`} className="btn-base button-primary">
            Track this repair
          </Link>
          <button type="button" onClick={() => setStatus('idle')} className="button-ghost">
            Book another
            <ArrowRightIcon className="button-ghost-arrow" width={18} height={18} />
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="fullName" placeholder="Your name" required />
        <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
        <Field label="Phone" name="phone" placeholder="Phone number" required />
        <Field label="Device" name="deviceType" as="select" options={deviceTypes} required />
      </div>

      <div className="mt-5">
        <Field
          label="Issue description"
          name="issueDescription"
          as="textarea"
          placeholder="Tell us what happened and what the device is doing now"
          required
        />
      </div>

      <fieldset className="mt-8">
        <legend className="text-heading-sm text-text-primary">
          How would you like to get it to us?
        </legend>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {DELIVERY_OPTIONS.map((option) => {
            const active = delivery === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setDelivery(option.value)}
                aria-pressed={active}
                className={`rounded-panel border p-5 text-left transition-all duration-hover ease-brand hover:scale-[1.02] ${
                  active
                    ? 'border-brand-red/70 bg-brand-red/10 shadow-glow-red'
                    : 'border-white/[0.1] bg-white/[0.03] hover:border-white/25'
                }`}
              >
                <span className="block text-body-md font-semibold text-text-primary">
                  {option.title}
                </span>
                <span className="mt-1 block text-body-sm text-text-muted">{option.helper}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <AnimatePresence initial={false}>
        {delivery === 'delivery' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: EASE_BRAND }}
            className="overflow-hidden"
          >
            <div className="pt-5">
              <Field label="Collection address" name="address" placeholder="Enter your address" required />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {error && <p className="mt-5 text-body-sm text-brand-red-bright">{error}</p>}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-base button-primary mt-8 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'submitting' ? 'Submitting…' : 'Submit Request'}
      </button>
    </form>
  );
}

function Field({ label, name, as = 'input', type = 'text', placeholder, options = [], required }) {
  const base =
    'w-full rounded-[12px] border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-body-md text-text-primary placeholder:text-text-muted/60 outline-none transition-colors duration-hover ease-brand focus:border-brand-red/70 focus:bg-white/[0.06]';

  return (
    <label className="block">
      <span className="mb-2 block text-[13px] font-medium uppercase tracking-[0.1em] text-text-muted">
        {label}
      </span>
      {as === 'textarea' ? (
        <textarea name={name} rows={5} placeholder={placeholder} required={required} className={`${base} resize-y`} />
      ) : as === 'select' ? (
        <select name={name} required={required} defaultValue={options[0]} className={`${base} appearance-none`}>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-background-primary">
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input name={name} type={type} placeholder={placeholder} required={required} className={base} />
      )}
    </label>
  );
}
