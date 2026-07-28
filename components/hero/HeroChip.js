'use client';

import { motion, useTransform } from 'framer-motion';
import { EASE_BRAND, floatTransition } from '@/lib/motion';

/**
 * Floating glass chip. Combines three motions: a slow idle float,
 * a cursor parallax offset scaled by `depth`, and an entrance.
 */
export default function HeroChip({
  icon,
  label,
  className = '',
  px,
  py,
  depth = 18,
  floatDuration = 6,
  floatDelay = 0,
  delay = 0,
  reduceMotion = false,
}) {
  const offsetX = useTransform(px, [-1, 1], [-depth, depth]);
  const offsetY = useTransform(py, [-1, 1], [-depth * 0.7, depth * 0.7]);

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ x: offsetX, y: offsetY }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: EASE_BRAND, delay }}
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
        transition={reduceMotion ? undefined : floatTransition(floatDuration, floatDelay)}
      >
        <div
          className="glass-panel-heavy flex w-[calc(140*var(--hero-u))] flex-col items-center justify-center gap-[calc(12*var(--hero-u))] rounded-[calc(24*var(--hero-u))] px-[calc(16*var(--hero-u))] py-[calc(24*var(--hero-u))] text-center"
          style={{ boxShadow: '0 24px 60px -12px rgba(0,0,0,0.7), 0 0 34px -8px rgba(232,64,44,0.3), inset 0 1px 0 0 rgba(255,255,255,0.2)' }}
        >
          <span className="text-brand-red-bright" style={{ filter: 'drop-shadow(0 0 10px rgba(255,106,56,0.55))' }}>
            {icon}
          </span>
          <span className="whitespace-pre-line text-[calc(13*var(--hero-u))] font-medium leading-[1.25] text-text-primary">
            {label}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
