'use client';

import { motion, useTransform } from 'framer-motion';
import { EASE_BRAND } from '@/lib/motion';

/**
 * The tilted glass slab: a 3D-rotated panel holding a PCB trace field
 * and three glowing chevrons. `px`/`py` are the -1..1 cursor values
 * from useCursorParallax.
 */
export default function HeroDevice({ px, py }) {
  const rotateY = useTransform(px, [-1, 1], [-20, -8]);
  const rotateX = useTransform(py, [-1, 1], [7, -1]);
  const shiftX = useTransform(px, [-1, 1], [-14, 14]);
  const shiftY = useTransform(py, [-1, 1], [-10, 10]);

  return (
    <motion.div
      className="relative"
      style={{ perspective: 1400, x: shiftX, y: shiftY }}
      initial={{ opacity: 0, scale: 0.93, y: 28 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.1, ease: EASE_BRAND, delay: 0.15 }}
    >
      {/* Ambient bloom cast by the panel onto the background */}
      <div
        className="pointer-events-none absolute -inset-16 blur-3xl"
        style={{
          background:
            'radial-gradient(52% 46% at 52% 46%, rgba(255,86,38,0.22) 0%, rgba(255,86,38,0) 70%)',
        }}
        aria-hidden="true"
      />

      <motion.div
        className="relative"
        style={{ rotateY, rotateX, rotateZ: -3.6, transformStyle: 'preserve-3d' }}
      >
        <div
          className="relative aspect-[9/11] w-full overflow-hidden rounded-[30px] border border-white/[0.18]"
          style={{
            boxShadow:
              '0 50px 120px -30px rgba(0,0,0,0.85), 0 0 60px -10px rgba(232,64,44,0.28), inset 0 1px 0 0 rgba(255,255,255,0.28)',
            background: 'linear-gradient(150deg, #0A1428 0%, #050D1E 46%, #0B1628 100%)',
          }}
        >
          <BoardField />

          {/* Glass sheen sweeping the top-left corner */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(146deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 22%, rgba(255,255,255,0) 46%)',
            }}
            aria-hidden="true"
          />
          {/* Warm bleed from the lower-right glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(60% 44% at 92% 96%, rgba(255,92,40,0.3) 0%, rgba(255,92,40,0) 70%)',
            }}
            aria-hidden="true"
          />
          {/* Inner edge light */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[30px]"
            style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.07), inset 0 -1px 0 0 rgba(255,255,255,0.12)' }}
            aria-hidden="true"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* PCB trace field with the three brand chevrons glowing at its centre. */
function BoardField() {
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 460 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="bt-dev-chevron" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF8A4C" />
          <stop offset="55%" stopColor="#FF5A24" />
          <stop offset="100%" stopColor="#E02A0C" />
        </linearGradient>
        <filter id="bt-dev-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="9" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="bt-dev-softglow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Cool background traces */}
      <g stroke="#2C5C9E" strokeWidth="1.4" fill="none" opacity="0.55">
        <path d="M-10 92h74l30-30h96M-10 150h50l34 34h120M-10 236h96l28-28h84" />
        <path d="M-10 330h64l32 32h108M-10 420h120l30-30h70M-10 486h86l26 26h140" />
        <path d="M470 120h-90l-34 34H228M470 210h-70l-30-30H250M470 300h-104l-28 28H236" />
        <path d="M470 396h-80l-32-32H244M470 470h-110l-26 26H240" />
        <path d="M60 -10v70l26 26v96M138 -10v42l30 30v120M330 570v-80l-28-28V330" />
        <path d="M392 570v-60l26-26V320M232 570v-46l-24-24V400" />
      </g>

      {/* Warm accent traces */}
      <g stroke="#E8532A" strokeWidth="1.5" fill="none" opacity="0.85">
        <path d="M-10 190h58l36 36h104l30 30h140" />
        <path d="M470 250h-84l-30 30H214l-28 28H-10" />
        <path d="M-10 360h74l34-34h122l32 32h130" />
        <path d="M100 570v-64l30-30V360" />
        <path d="M356 -10v58l-28 28v86" />
      </g>

      {/* Solder pads */}
      <g fill="#4E86D8" opacity="0.85">
        <circle cx="64" cy="92" r="3" />
        <circle cx="84" cy="184" r="3" />
        <circle cx="96" cy="236" r="3" />
        <circle cx="380" cy="120" r="3" />
        <circle cx="366" cy="300" r="3" />
        <circle cx="360" cy="470" r="3" />
        <circle cx="130" cy="420" r="3" />
      </g>
      <g fill="#FF7A45">
        <circle cx="48" cy="190" r="3.4" />
        <circle cx="386" cy="250" r="3.4" />
        <circle cx="74" cy="360" r="3.4" />
        <circle cx="130" cy="476" r="3.4" />
        <circle cx="328" cy="48" r="3.4" />
      </g>

      {/* Scattered signal points */}
      <g>
        <circle cx="150" cy="60" r="2.2" fill="#7FB4FF" opacity="0.9" />
        <circle cx="290" cy="96" r="1.8" fill="#FF9060" opacity="0.9" />
        <circle cx="404" cy="182" r="2" fill="#7FB4FF" opacity="0.8" />
        <circle cx="196" cy="140" r="1.6" fill="#FF9060" opacity="0.7" />
        <circle cx="76" cy="286" r="2" fill="#7FB4FF" opacity="0.75" />
        <circle cx="336" cy="366" r="1.8" fill="#FF9060" opacity="0.85" />
        <circle cx="180" cy="500" r="2.2" fill="#7FB4FF" opacity="0.7" />
        <circle cx="400" cy="520" r="1.8" fill="#FF9060" opacity="0.8" />
        <circle cx="252" cy="452" r="1.6" fill="#7FB4FF" opacity="0.65" />
      </g>

      {/* Brand chevrons — the focal element */}
      <g filter="url(#bt-dev-glow)" opacity="0.95">
        <g
          fill="none"
          stroke="url(#bt-dev-chevron)"
          strokeWidth="17"
          strokeLinecap="square"
          strokeLinejoin="miter"
          transform="translate(126 200) skewX(-8)"
        >
          <path d="M0 0 66 66 0 132" className="animate-pulse-trace" style={{ animationDelay: '0s' }} />
          <path d="M56 0 122 66 56 132" className="animate-pulse-trace" style={{ animationDelay: '0.35s' }} />
          <path d="M112 0 178 66 112 132" className="animate-pulse-trace" style={{ animationDelay: '0.7s' }} />
        </g>
      </g>

      {/* Traces feeding the chevrons */}
      <g stroke="#FF6A38" strokeWidth="2" fill="none" opacity="0.6" filter="url(#bt-dev-softglow)">
        <path d="M-10 266h80l38-38" />
        <path d="M470 300h-72l-34 34" />
      </g>
    </svg>
  );
}
