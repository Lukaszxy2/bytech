'use client';

/* ============================================================
   MOTION PRESETS
   One timing language for the whole site. These are variants and
   transition objects, not components — they attach to any shape.
   ============================================================ */

export const EASE_BRAND = [0.22, 1, 0.36, 1];

export const DURATION = {
  hover: 0.28,
  entrance: 0.7,
  slow: 1.1,
};

export const transitionBrand = { duration: DURATION.entrance, ease: EASE_BRAND };
export const transitionHover = { duration: DURATION.hover, ease: EASE_BRAND };

/* ---------- Entrance: fade up ---------- */
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: transitionBrand },
};

export const fadeUpSmall = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_BRAND } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitionBrand },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: transitionBrand },
};

/* Directional variants for asymmetric sections. */
export const fadeSide = (from = 'left', distance = 32) => ({
  hidden: { opacity: 0, x: from === 'left' ? -distance : distance },
  visible: { opacity: 1, x: 0, transition: transitionBrand },
});

/* ---------- Stagger containers ---------- */
export const staggerContainer = (stagger = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/* ---------- Scroll reveal defaults ----------
   Spread onto any motion element to reveal it once on scroll. */
export const revealOnce = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.25 },
};

/* Looser threshold for tall sections that never hit 25% at once. */
export const revealOnceTall = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.1 },
};

/* ---------- Hover: scale + glow ---------- */
export const hoverScale = {
  whileHover: { scale: 1.03, transition: transitionHover },
  whileTap: { scale: 0.99, transition: transitionHover },
};

export const hoverLift = {
  whileHover: { y: -6, transition: transitionHover },
};

/* ---------- Floating / parallax ---------- */
export const floatTransition = (duration = 6, delay = 0) => ({
  duration,
  delay,
  repeat: Infinity,
  ease: 'easeInOut',
});

export const floatY = (distance = 14, duration = 6, delay = 0) => ({
  animate: { y: [0, -distance, 0] },
  transition: floatTransition(duration, delay),
});
