'use client';

import { motion } from 'framer-motion';
import { EASE_BRAND, fadeUp, staggerContainer, revealOnce } from '@/lib/motion';

/* Node badge that sits on the rule: an opaque core so the trace
   terminates into it, a hairline rim, a slowly rotating tick ring, a
   red arc that swings round on hover, and cardinal nodes that light up
   like solder points. */
function StepBadge({ number, size = 76 }) {
  const mid = size / 2;
  const r = mid - 4;
  const circumference = 2 * Math.PI * r;
  const spin = { transformBox: 'fill-box', transformOrigin: 'center' };

  return (
    <div className="group/badge relative" style={{ width: size, height: size }}>
      {/* bloom that blows out behind the node on hover */}
      <span
        className="pointer-events-none absolute -inset-4 rounded-full opacity-0 transition-opacity duration-hover ease-brand group-hover/badge:opacity-100"
        style={{ background: 'radial-gradient(circle, rgba(232,64,44,0.34) 0%, rgba(232,64,44,0) 68%)' }}
        aria-hidden="true"
      />

      <div
        className="relative h-full w-full rounded-full bg-background-primary transition-transform duration-hover ease-brand group-hover/badge:scale-[1.06]"
        style={{ boxShadow: '0 0 26px -8px rgba(232,64,44,0.6)' }}
      >
        <svg viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
          <circle cx={mid} cy={mid} r={r} stroke="rgba(255,255,255,0.14)" strokeWidth="1" />

          {/* tick ring, always turning slowly */}
          <circle
            cx={mid}
            cy={mid}
            r={r - 6}
            stroke="rgba(255,255,255,0.17)"
            strokeWidth="1.4"
            strokeDasharray="1.5 5.5"
            strokeLinecap="round"
            style={spin}
            className="opacity-70 transition-opacity duration-hover ease-brand motion-safe:animate-[spin_26s_linear_infinite] group-hover/badge:opacity-100"
          />

          {/* accent arc, swings a half turn on hover */}
          <circle
            cx={mid}
            cy={mid}
            r={r}
            stroke="#E8402C"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeDasharray={`${circumference * 0.26} ${circumference}`}
            style={spin}
            className="-rotate-90 transition-transform duration-[750ms] ease-brand group-hover/badge:rotate-[200deg]"
          />

          {/* solder points at the compass positions */}
          {[
            [0, -1],
            [1, 0],
            [0, 1],
            [-1, 0],
          ].map(([dx, dy]) => (
            <circle
              key={`${dx}${dy}`}
              cx={mid + dx * r}
              cy={mid + dy * r}
              r="1.9"
              fill="#FF6A38"
              className="opacity-45 transition-opacity duration-hover ease-brand group-hover/badge:opacity-100"
            />
          ))}
        </svg>

        <span className="absolute inset-[9px] flex items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] text-[17px] font-bold tabular-nums tracking-[-0.01em] text-text-primary transition-colors duration-hover ease-brand group-hover/badge:border-brand-red/60 group-hover/badge:text-brand-red-bright">
          {number}
        </span>
      </div>
    </div>
  );
}

/* No cards at all: one glowing rule with badges pinned to it and
   text blocks alternating above and below. */
export default function HowItWorks({ eyebrow, heading, steps = [] }) {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-20 md:py-[130px]">
      {/* Circuit plate behind the timeline. Painted before the content
          and left at auto z-index, so DOM order alone keeps it under.
          Masked top and bottom so it reads as texture bleeding into the
          neighbouring sections rather than a panel with hard edges. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src="/brand/circuit-overlay.png"
          alt=""
          className="h-full w-full object-cover opacity-[0.18]"
          style={{
            maskImage:
              'linear-gradient(to bottom, transparent 0%, #000 20%, #000 80%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, #000 20%, #000 80%, transparent 100%)',
          }}
        />
      </div>

      <div className="container-site relative">
        <motion.div className="max-w-[620px]" variants={staggerContainer(0.1)} {...revealOnce}>
          <motion.p variants={fadeUp} className="text-label-sm uppercase text-brand-red-bright">
            {eyebrow}
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-5 text-heading-lg text-text-primary">
            {heading}
          </motion.h2>
        </motion.div>

        {/* ---- Desktop: horizontal zigzag ---- */}
        <div className="relative mt-[92px] hidden lg:block">
          <div className="relative h-[420px]">
            {/* The line */}
            <motion.div
              className="absolute left-0 right-0 top-1/2 h-px origin-left -translate-y-1/2"
              style={{
                background:
                  'linear-gradient(90deg, rgba(232,64,44,0) 0%, #E8402C 12%, #FF6A38 50%, #E8402C 88%, rgba(232,64,44,0) 100%)',
                boxShadow: '0 0 18px rgba(232,64,44,0.75), 0 0 42px rgba(232,64,44,0.4)',
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, ease: EASE_BRAND }}
            />

            <div className="relative grid h-full grid-cols-4">
              {steps.map((step, index) => {
                const above = index % 2 === 0;
                return (
                  <motion.div
                    key={step.number}
                    className="relative flex h-full flex-col items-center"
                    initial={{ opacity: 0, y: above ? -18 : 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.65, ease: EASE_BRAND, delay: 0.25 + index * 0.13 }}
                  >
                    {/* Text block above or below the rule */}
                    <div
                      className={`absolute w-[248px] text-center ${
                        above ? 'bottom-1/2 mb-[74px]' : 'top-1/2 mt-[74px]'
                      }`}
                    >
                      <h3 className="text-heading-sm text-text-primary">{step.title}</h3>
                      <p className="mt-2.5 text-body-sm text-text-muted">{step.body}</p>
                    </div>

                    {/* Connector stub from badge to text */}
                    <span
                      className={`absolute left-1/2 w-px -translate-x-1/2 ${
                        above ? 'bottom-1/2 mb-[41px] h-[30px]' : 'top-1/2 mt-[41px] h-[30px]'
                      }`}
                      style={{
                        background: above
                          ? 'linear-gradient(to top, rgba(232,64,44,0.85), rgba(232,64,44,0))'
                          : 'linear-gradient(to bottom, rgba(232,64,44,0.85), rgba(232,64,44,0))',
                      }}
                      aria-hidden="true"
                    />

                    {/* Badge floating on the line */}
                    <div className="absolute top-1/2 -translate-y-1/2">
                      <StepBadge number={step.number} size={76} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ---- Mobile: vertical rail ---- */}
        <div className="relative mt-14 lg:hidden">
          <span
            className="absolute bottom-4 left-[32px] top-4 w-px"
            style={{
              background: 'linear-gradient(to bottom, rgba(232,64,44,0), #E8402C 10%, #FF6A38 55%, rgba(232,64,44,0))',
              boxShadow: '0 0 16px rgba(232,64,44,0.6)',
            }}
            aria-hidden="true"
          />
          <motion.ol className="space-y-9" variants={staggerContainer(0.1)} {...revealOnce}>
            {steps.map((step) => (
              <motion.li key={step.number} variants={fadeUp} className="relative flex gap-6">
                <span className="relative z-10 shrink-0">
                  <StepBadge number={step.number} size={64} />
                </span>
                <div className="pt-2">
                  <h3 className="text-heading-sm text-text-primary">{step.title}</h3>
                  <p className="mt-2 text-body-sm text-text-muted">{step.body}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
