'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, revealOnce, fadeSide } from '@/lib/motion';
import { ClockIcon, PinIcon, FacebookIcon, MailIcon } from '@/components/Icons';
import RepairRequestForm from '@/components/RepairRequestForm';

/* Asymmetric split: the form is the wider column and sits slightly
   low; the info chips stagger down the narrow column at three
   different heights so nothing lines up on a shared baseline. */
export default function Contact({ eyebrow, heading, intro, deviceTypes = [], business }) {
  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-[120px]">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(44% 46% at 12% 88%, rgba(232,64,44,0.14) 0%, rgba(3,11,30,0) 68%)',
        }}
      />

      <div className="container-site relative">
        <motion.div variants={staggerContainer(0.1)} {...revealOnce} className="max-w-[620px]">
          <motion.p variants={fadeUp} className="text-label-sm uppercase text-brand-red-bright">
            {eyebrow}
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-5 text-heading-lg text-text-primary">
            {heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-body-md text-text-muted">
            {intro}
          </motion.p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-12">
          {/* Form — offset down and rotated a hair off-axis */}
          <motion.div
            variants={fadeSide('left', 30)}
            {...revealOnce}
            className="glass-panel-heavy rounded-panel-lg p-8 sm:p-10 lg:-rotate-[0.6deg] lg:translate-y-6"
          >
            <div className="lg:rotate-[0.6deg]">
              <RepairRequestForm deviceTypes={deviceTypes} />
            </div>
          </motion.div>

          {/* Staggered info column */}
          <div className="flex flex-col gap-6">
            <motion.div
              variants={fadeSide('right', 30)}
              {...revealOnce}
              className="relative h-[220px] overflow-hidden rounded-panel-lg border border-white/[0.08] lg:-translate-y-4"
            >
              <MapPlaceholder />
              <div className="glass-panel-light absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-panel px-4 py-3">
                <PinIcon width={20} height={20} className="shrink-0 text-brand-red-bright" />
                <span className="text-body-sm text-text-primary">{business.address}</span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeSide('right', 30)}
              {...revealOnce}
              className="glass-panel-light rounded-panel p-6 lg:translate-x-6"
            >
              <div className="flex items-center gap-3">
                <ClockIcon width={20} height={20} className="text-brand-red-bright" />
                <p className="text-heading-sm text-text-primary">Opening hours</p>
              </div>
              <dl className="mt-4 space-y-2.5">
                {business.hours.map((row) => (
                  <div key={row.days} className="flex justify-between gap-4 text-body-sm">
                    <dt className="text-text-muted">{row.days}</dt>
                    <dd className="text-text-primary">{row.time}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            <motion.div
              variants={fadeSide('right', 30)}
              {...revealOnce}
              className="glass-panel-outline rounded-panel p-6 lg:translate-x-[-14px]"
            >
              <p className="text-heading-sm text-text-primary">Rather just message us?</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel-light flex items-center gap-2.5 rounded-full px-4 py-2.5 text-body-sm text-text-primary transition-all duration-hover ease-brand hover:scale-[1.03] hover:border-brand-red/50"
                >
                  <FacebookIcon width={17} height={17} className="text-brand-red-bright" />
                  Facebook
                </a>
                <a
                  href={`mailto:${business.email}`}
                  className="glass-panel-light flex items-center gap-2.5 rounded-full px-4 py-2.5 text-body-sm text-text-primary transition-all duration-hover ease-brand hover:scale-[1.03] hover:border-brand-red/50"
                >
                  <MailIcon width={17} height={17} className="text-brand-red-bright" />
                  {business.email}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Stylised map block — swap for an embed once a provider is chosen. */
function MapPlaceholder() {
  return (
    <svg className="h-full w-full" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="400" height="220" fill="#081124" />
      <g stroke="#1B2C4E" strokeWidth="8" fill="none">
        <path d="M-10 70h180l40 40h200M-10 160h120l50-50" />
        <path d="M120 -10v90l40 40v100M300 -10v60l-40 40v130" />
      </g>
      <g stroke="#0F1F3C" strokeWidth="3" fill="none">
        <path d="M-10 30h150M40 -10v240M240 -10v240M-10 200h420" />
      </g>
      <circle cx="205" cy="112" r="26" fill="rgba(232,64,44,0.18)" />
      <circle cx="205" cy="112" r="8" fill="#E8402C" />
      <circle cx="205" cy="112" r="13" fill="none" stroke="#FF6A38" strokeWidth="1.6" opacity="0.7" />
    </svg>
  );
}
