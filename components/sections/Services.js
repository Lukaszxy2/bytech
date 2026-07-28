'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeUp, staggerContainer, revealOnceTall, revealOnce } from '@/lib/motion';
import {
  SolderIcon,
  MicrosolderIcon,
  HdmiIcon,
  ChargePortIcon,
  ScreenIcon,
  BatterySwapIcon,
  ArrowRightIcon,
} from '@/components/Icons';

const ICONS = {
  solder: SolderIcon,
  microsolder: MicrosolderIcon,
  hdmi: HdmiIcon,
  charge: ChargePortIcon,
  screen: ScreenIcon,
  battery: BatterySwapIcon,
};

/* Uneven bento: one tall featured panel plus five tiles of differing
   span, so no two cells share a footprint. */
const SPANS = [
  'lg:col-span-4',
  'lg:col-span-3',
  'lg:col-span-4',
  'lg:col-span-3',
  'lg:col-span-12',
];

/* Each tile crops a different part of the device plate, so the texture
   never repeats identically across the bento. */
const PLATE_POSITIONS = ['14% 28%', '80% 30%', '34% 74%', '88% 66%', '50% 22%'];

/* Device artwork washed into a tile, sitting under its content and
   lifting slightly on hover along with the rest of the glass. */
function ServicePlate({ position, opacity = '0.1', hoverOpacity = '0.17' }) {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
      style={{ '--plate-o': opacity, '--plate-h': hoverOpacity }}
    >
      <img
        src="/brand/devices-overlay.png"
        alt=""
        style={{ objectPosition: position }}
        className="h-full w-full object-cover opacity-[var(--plate-o)] transition-opacity duration-hover ease-brand group-hover:opacity-[var(--plate-h)]"
      />
    </div>
  );
}

export default function Services({ eyebrow, heading, intro, featured, items = [] }) {
  const FeaturedIcon = ICONS[featured.icon] ?? SolderIcon;

  return (
    <section id="services" className="relative overflow-hidden py-20 md:py-[120px]">
      {/* Section glow — accent thread carried from the hero */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(46% 40% at 84% 8%, rgba(232,64,44,0.14) 0%, rgba(3,11,30,0) 68%)',
        }}
      />

      <div className="container-site relative">
        {/* Asymmetric header: title left, intro offset right and lower */}
        <motion.div
          className="mb-8 grid grid-cols-1 gap-6 md:mb-[56px] md:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-end"
          variants={staggerContainer(0.1)}
          {...revealOnce}
        >
          <div>
            <motion.p variants={fadeUp} className="text-label-sm uppercase text-brand-red-bright">
              {eyebrow}
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-5 max-w-[620px] text-heading-lg text-text-primary">
              {heading}
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-body-md text-text-muted lg:pb-2">
            {intro}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12"
          variants={staggerContainer(0.07)}
          {...revealOnceTall}
        >
          {/* Featured — tall, heavy glass, oversized icon */}
          <motion.article
            variants={fadeUp}
            className="group glass-panel-heavy hover-lift hover-glow-red relative overflow-hidden rounded-panel-lg p-6 sm:col-span-2 sm:p-9 lg:col-span-5 lg:row-span-2"
          >
            <ServicePlate position="22% 34%" opacity="0.13" hoverOpacity="0.2" />
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-70 transition-opacity duration-hover ease-brand group-hover:opacity-100"
              aria-hidden="true"
              style={{
                background: 'radial-gradient(circle, rgba(232,64,44,0.3) 0%, rgba(232,64,44,0) 70%)',
              }}
            />
            <div className="relative flex h-full flex-col">
              <span
                className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-[16px] border border-white/10 bg-white/[0.06] text-brand-red-bright transition-transform duration-hover ease-brand group-hover:-rotate-6 group-hover:scale-110 sm:h-[74px] sm:w-[74px] sm:rounded-[22px]"
                style={{ filter: 'drop-shadow(0 0 14px rgba(255,106,56,0.4))' }}
              >
                <FeaturedIcon width={26} height={26} className="sm:hidden" />
                <FeaturedIcon width={38} height={38} className="hidden sm:block" />
              </span>
              <h3 className="mt-5 text-heading-md text-text-primary sm:mt-8">{featured.title}</h3>
              <p className="mt-3 max-w-[420px] text-body-sm text-text-muted sm:mt-4 sm:text-body-md">{featured.blurb}</p>
              <p className="mt-auto pt-6 text-[13px] font-medium uppercase tracking-[0.14em] text-brand-red-bright/80 sm:pt-9">
                {featured.meta}
              </p>
            </div>
          </motion.article>

          {items.map((item, index) => {
            const Icon = ICONS[item.icon] ?? SolderIcon;
            const isBanner = SPANS[index] === 'lg:col-span-12';
            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className={`group glass-panel-light hover-lift relative overflow-hidden rounded-panel p-5 transition-colors hover:border-brand-red/50 sm:p-7 ${SPANS[index]} ${
                  isBanner ? 'sm:col-span-2 lg:flex lg:items-center lg:justify-between lg:gap-8' : ''
                }`}
              >
                <ServicePlate position={PLATE_POSITIONS[index % PLATE_POSITIONS.length]} />
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-hover ease-brand group-hover:opacity-100"
                  aria-hidden="true"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(232,64,44,0.08) 100%)',
                  }}
                />
                <div className={`relative ${isBanner ? 'lg:flex lg:items-center lg:gap-6' : ''}`}>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-[11px] border border-white/[0.08] bg-white/[0.05] text-brand-red-bright transition-transform duration-hover ease-brand group-hover:-translate-y-1 group-hover:scale-110 sm:h-[46px] sm:w-[46px] sm:rounded-[14px]">
                    <Icon width={18} height={18} className="sm:hidden" />
                    <Icon width={24} height={24} className="hidden sm:block" />
                  </span>
                  <div className={isBanner ? 'mt-3 lg:mt-0 sm:mt-5' : 'mt-3 sm:mt-5'}>
                    <h3 className="text-[15px] font-semibold leading-snug text-text-primary sm:text-heading-sm">{item.title}</h3>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-text-muted sm:mt-2 sm:text-body-sm">{item.blurb}</p>
                  </div>
                </div>
                {isBanner && (
                  <Link href="/book-repair" className="button-ghost relative mt-6 lg:mt-0">
                    Book this repair
                    <ArrowRightIcon className="button-ghost-arrow" width={18} height={18} />
                  </Link>
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
