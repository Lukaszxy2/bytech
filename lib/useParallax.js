'use client';

import { useEffect } from 'react';
import { useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

/**
 * Tracks the cursor across `ref`'s element and returns two spring-smoothed
 * motion values in the range [-1, 1]. Multiply by a per-layer depth to get
 * the parallax offset. Returns static zeros when reduced motion is requested.
 */
export function useCursorParallax(ref, { stiffness = 90, damping = 20 } = {}) {
  const reduceMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness, damping, mass: 0.6 });
  const y = useSpring(rawY, { stiffness, damping, mass: 0.6 });

  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion) return;

    const handleMove = (event) => {
      const rect = el.getBoundingClientRect();
      rawX.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
      rawY.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
    };

    const handleLeave = () => {
      rawX.set(0);
      rawY.set(0);
    };

    el.addEventListener('pointermove', handleMove);
    el.addEventListener('pointerleave', handleLeave);
    return () => {
      el.removeEventListener('pointermove', handleMove);
      el.removeEventListener('pointerleave', handleLeave);
    };
  }, [ref, rawX, rawY, reduceMotion]);

  return { x, y, reduceMotion };
}
