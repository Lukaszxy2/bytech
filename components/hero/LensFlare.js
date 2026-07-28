'use client';

import { motion } from 'framer-motion';

/**
 * Anamorphic flare that sits over the accent word — a bright core,
 * a long horizontal streak, a diagonal spike, and a secondary glint,
 * matching the burst above the "i" in the reference.
 */
export default function LensFlare({ className = '', delay = 0.9 }) {
  return (
    <motion.span
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <span className="relative block h-0 w-0">
        {/* Diagonal spike, down-left */}
        <span
          className="absolute left-1/2 top-0 h-[1.5px] w-[86px] origin-center -translate-x-1/2 -translate-y-1/2 rotate-[38deg]"
          style={{
            background:
              'linear-gradient(90deg, rgba(255,190,150,0) 0%, rgba(255,225,200,0.7) 50%, rgba(255,190,150,0) 100%)',
            filter: 'blur(0.8px)',
          }}
        />
        {/* Core */}
        <span
          className="absolute left-1/2 top-0 h-[13px] w-[13px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'radial-gradient(circle, #FFF6EE 0%, #FFC79B 42%, rgba(255,140,80,0) 78%)',
            filter: 'blur(0.6px)',
          }}
        />
        {/* Halo */}
        <span
          className="absolute left-1/2 top-0 h-[54px] w-[54px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,150,95,0.42) 0%, rgba(255,120,60,0) 70%)',
            filter: 'blur(5px)',
          }}
        />
      </span>
    </motion.span>
  );
}
