'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { EASE_BRAND } from '@/lib/motion';

/* Full-bleed strip. No containers around the numbers — they sit
   directly on the background with hairline dividers between. */
export default function Stats({ stats = [] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-white/[0.06] py-16 md:py-[92px]">
      <div className="absolute inset-0 bg-brand-navy/35" aria-hidden="true" />
      <div className="texture-circuit absolute inset-0 opacity-[0.35]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(60% 120% at 50% 120%, rgba(232,64,44,0.2) 0%, rgba(3,11,30,0) 70%)',
        }}
      />

      <div className="container-site relative">
        <dl className="grid grid-cols-2 gap-y-12 lg:grid-cols-4 lg:gap-y-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`relative px-2 text-center lg:px-8 ${
                index > 0 ? 'lg:before:absolute lg:before:inset-y-1 lg:before:left-0 lg:before:w-px lg:before:bg-white/[0.14] lg:before:content-[""]' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.7, ease: EASE_BRAND, delay: index * 0.1 }}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span
                  className="block text-counter-xl text-brand-red-bright"
                  style={{ filter: 'drop-shadow(0 0 34px rgba(232,64,44,0.45))' }}
                >
                  <Counter to={stat.value} start={inView} />
                  {stat.suffix}
                </span>
                <span className="mt-3 block text-[14px] uppercase tracking-[0.16em] text-text-muted">
                  {stat.label}
                </span>
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Counter({ to, start, duration = 1600 }) {
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(reduceMotion ? to : 0);

  useEffect(() => {
    if (!start || reduceMotion) return;
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      // ease-out so the count decelerates into its final value
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to, duration, reduceMotion]);

  return <>{value}</>;
}
