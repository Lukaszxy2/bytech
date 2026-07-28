'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { EASE_BRAND, fadeUp, staggerContainer, revealOnce } from '@/lib/motion';
import { QuoteIcon, StarIcon } from '@/components/Icons';
import useDragScroll from '@/lib/useDragScroll';

/* Off-white break in the dark run. Magazine pull-quote on the left,
   attribution offset right, thumbnails scrolling underneath. */
export default function Testimonials({ eyebrow, heading, featured, others = [] }) {
  const all = [featured, ...others];
  const [activeIndex, setActiveIndex] = useState(0);
  const active = all[activeIndex];
  const { ref: thumbRef, dragging, handlers: thumbHandlers } = useDragScroll();

  return (
    <section id="reviews" className="glass-on-light relative overflow-hidden bg-background-offwhite py-20 md:py-[120px]">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(48% 44% at 88% 6%, rgba(232,64,44,0.1) 0%, rgba(244,242,239,0) 70%)',
        }}
      />

      <div className="container-site relative">
        <motion.div variants={staggerContainer(0.1)} {...revealOnce} className="max-w-[640px]">
          <motion.p variants={fadeUp} className="text-label-sm uppercase text-brand-red">
            {eyebrow}
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-5 text-heading-lg text-text-inverse">
            {heading}
          </motion.h2>
        </motion.div>

        {/* Pull-quote: oversized quote mark bleeding left of the text */}
        <motion.figure
          key={activeIndex}
          className="glass-on-light glass-panel-heavy relative mt-14 rounded-panel-lg px-8 py-12 sm:px-14 lg:px-20 lg:py-16"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_BRAND }}
        >
          <QuoteIcon
            width={92}
            height={92}
            className="absolute -top-4 left-6 text-brand-red/12 lg:left-10"
            aria-hidden="true"
          />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,250px)] lg:gap-16">
            <blockquote className="text-[18px] font-medium leading-[1.42] tracking-[-0.015em] text-text-inverse sm:text-[26px] md:text-[32px]">
              “{active.quote}”
            </blockquote>
            <figcaption className="lg:pt-3">
              <div className="mb-4 flex gap-1 text-brand-red">
                {Array.from({ length: active.rating ?? 5 }).map((_, i) => (
                  <StarIcon key={i} width={17} height={17} />
                ))}
              </div>
              <p className="text-heading-sm text-text-inverse">{active.name}</p>
              <p className="mt-1.5 text-body-sm text-text-inverse-muted">{active.role}</p>
              <span className="mt-6 block h-px w-16 bg-brand-red/50" aria-hidden="true" />
            </figcaption>
          </div>
        </motion.figure>

        {/* Horizontal thumbnail row, not a card grid */}
        <div
          ref={thumbRef}
          {...thumbHandlers}
          className={`no-scrollbar mt-9 flex gap-3 overflow-x-auto pb-2 ${
            dragging ? 'cursor-grabbing select-none' : 'cursor-grab'
          }`}
        >
          {all.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={index === activeIndex}
              className={`flex shrink-0 items-center gap-3 rounded-full border px-4 py-2.5 transition-all duration-hover ease-brand hover:scale-[1.03] ${
                index === activeIndex
                  ? 'border-brand-red/60 bg-brand-red/10'
                  : 'border-brand-navy/12 bg-transparent hover:border-brand-navy/25'
              }`}
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white"
                style={{
                  background:
                    index === activeIndex
                      ? 'linear-gradient(140deg,#FF7A45,#E8402C)'
                      : 'linear-gradient(140deg,#26324B,#101A31)',
                }}
              >
                {initials(item.name)}
              </span>
              <span className="whitespace-nowrap text-left">
                <span className="block text-[14px] font-semibold text-text-inverse">{item.name}</span>
                <span className="block text-[12px] text-text-inverse-muted">{item.role}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function initials(name) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}
