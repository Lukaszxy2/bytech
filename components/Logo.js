import Link from 'next/link';

/** Chevron mark + BY/TECH wordmark, matching the reference navbar. */
export default function Logo({ className = '', href = '/', size = 26 }) {
  const content = (
    <span className={`inline-flex items-center gap-[11px] ${className}`}>
      <svg
        width={size * 1.28}
        height={size}
        viewBox="0 0 40 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="bt-chev-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF7A3C" />
            <stop offset="100%" stopColor="#F2551F" />
          </linearGradient>
          <linearGradient id="bt-chev-b" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FA5A24" />
            <stop offset="100%" stopColor="#E8402C" />
          </linearGradient>
          <linearGradient id="bt-chev-c" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F04A1E" />
            <stop offset="100%" stopColor="#D82D18" />
          </linearGradient>
        </defs>
        <g transform="skewX(-9)">
          <path d="M4 4 16 16 4 28" stroke="url(#bt-chev-a)" strokeWidth="5.4" strokeLinecap="square" strokeLinejoin="miter" />
          <path d="M14 4 26 16 14 28" stroke="url(#bt-chev-b)" strokeWidth="5.4" strokeLinecap="square" strokeLinejoin="miter" />
          <path d="M24 4 36 16 24 28" stroke="url(#bt-chev-c)" strokeWidth="5.4" strokeLinecap="square" strokeLinejoin="miter" />
        </g>
      </svg>
      <span
        className="font-black tracking-[-0.01em] leading-none"
        style={{ fontSize: size * 0.88 }}
      >
        <span className="text-text-primary">BY</span>
        <span className="text-brand-red">TECH</span>
      </span>
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} aria-label="ByTech home" className="inline-flex items-center">
      {content}
    </Link>
  );
}
