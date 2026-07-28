/**
 * Placeholder artwork for gallery tiles until real repair photos are
 * dropped in. `seed` varies the trace layout so no two tiles repeat.
 * Pass `src` on a category image to render a real photo instead.
 */
export default function CategoryVisual({ accent = '#E8402C', seed = 0, className = '' }) {
  const id = `cv-${seed}`;
  const rows = 5 + (seed % 3);

  return (
    <svg
      className={`h-full w-full ${className}`}
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0C1730" />
          <stop offset="55%" stopColor="#060E22" />
          <stop offset="100%" stopColor="#0A1428" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="72%" cy="76%" r="62%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.42" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="500" fill="#070F22" />
      <rect width="400" height="500" fill={`url(#${id}-bg)`} opacity="0.9" />
      <rect width="400" height="500" fill={`url(#${id}-glow)`} />

      <g stroke="#2E5FA4" strokeWidth="1.1" fill="none" opacity="0.5">
        {Array.from({ length: rows }).map((_, i) => {
          const y = 60 + i * (380 / rows) + ((seed * 13) % 20);
          const mid = 90 + ((i * 47 + seed * 29) % 200);
          return (
            <path
              key={i}
              d={`M-10 ${y}h${mid}l26 26h${260 - mid}`}
              opacity={0.4 + (i % 3) * 0.2}
            />
          );
        })}
      </g>

      <g stroke={accent} strokeWidth="1.3" fill="none" opacity="0.75">
        <path d={`M-10 ${140 + (seed % 4) * 40}h120l30-30h180`} />
        <path d={`M410 ${300 + (seed % 3) * 34}h-140l-28 28H-10`} />
      </g>

      <g fill={accent} opacity="0.9">
        <circle cx={78 + ((seed * 31) % 180)} cy={132 + ((seed * 17) % 220)} r="3.2" />
        <circle cx={250 - ((seed * 23) % 140)} cy={368 - ((seed * 19) % 180)} r="3.2" />
      </g>
      <g fill="#5E93E0" opacity="0.75">
        <circle cx={140 + ((seed * 41) % 160)} cy={220 + ((seed * 11) % 160)} r="2.6" />
        <circle cx={300 - ((seed * 37) % 150)} cy={110 + ((seed * 43) % 200)} r="2.6" />
      </g>

      <rect
        x={128 + ((seed * 7) % 40)}
        y={196 + ((seed * 11) % 60)}
        width="112"
        height="112"
        rx="14"
        fill="#0A1428"
        stroke="rgba(255,255,255,0.14)"
        strokeWidth="1.2"
      />
    </svg>
  );
}
