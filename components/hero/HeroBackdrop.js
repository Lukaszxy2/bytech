/* Hero background stack, bottom to top:
   base navy → navy bloom → circuit grid → red-orange glow →
   sphere arc → vignette. Sampled from the reference at 1344x752. */
export default function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Base */}
      <div className="absolute inset-0 bg-[#01060F]" />

      {/* Navy bloom behind the device — #0E1630 measured at (660,90) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(78% 62% at 54% 6%, rgba(18,30,66,0.95) 0%, rgba(10,20,48,0.55) 38%, rgba(1,6,15,0) 72%)',
        }}
      />

      {/* Secondary lift along the left text column */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(52% 48% at 14% 46%, rgba(12,26,58,0.7) 0%, rgba(1,6,15,0) 70%)',
        }}
      />

      {/* Circuit trace texture */}
      <div className="absolute inset-0 opacity-[0.55]">
        <CircuitTexture />
      </div>

      {/* Red-orange glow, bottom right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(46% 58% at 97% 94%, rgba(255,92,40,0.95) 0%, rgba(232,64,44,0.62) 26%, rgba(150,32,18,0.28) 50%, rgba(1,6,15,0) 74%)',
        }}
      />

      {/* Sphere arc — the lit planet edge in the corner. On mobile it is
          pinned to a fixed square so the narrow viewport can't stretch it
          into a tall oval; from sm+ it tracks the reference proportions. */}
      <div
        className="absolute -bottom-[7%] -right-[22%] aspect-square h-auto w-[74%] rounded-full blur-[2px] sm:-bottom-[26%] sm:-right-[6%] sm:aspect-auto sm:h-[62%] sm:w-[34%]"
        style={{
          background:
            'radial-gradient(circle at 34% 24%, #FF7A45 0%, #F5451C 34%, #C22712 62%, rgba(120,24,14,0.35) 82%, rgba(120,24,14,0) 100%)',
        }}
      />

      {/* Warm haze spilling left off the sphere */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(38% 30% at 78% 78%, rgba(255,88,38,0.2) 0%, rgba(1,6,15,0) 70%)',
        }}
      />

      {/* Edge vignette — corners measured at #00040F */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 96% at 50% 42%, rgba(0,0,0,0) 42%, rgba(0,3,10,0.55) 78%, rgba(0,2,8,0.9) 100%)',
        }}
      />
    </div>
  );
}

/* Fine PCB-style trace field. Two scales so it reads as circuitry
   rather than a plain grid, kept under 6% opacity like the reference. */
function CircuitTexture() {
  return (
    <svg className="h-full w-full" aria-hidden="true">
      <defs>
        <pattern id="bt-trace-fine" width="44" height="44" patternUnits="userSpaceOnUse">
          <path
            d="M0 22h12l6-6h14M22 44V32l6-6V12M44 22H32l-6 6H12"
            fill="none"
            stroke="rgba(150,190,255,0.5)"
            strokeWidth="0.7"
          />
          <circle cx="18" cy="16" r="1.5" fill="rgba(150,190,255,0.55)" />
          <circle cx="28" cy="26" r="1.5" fill="rgba(150,190,255,0.4)" />
        </pattern>
        <pattern id="bt-trace-coarse" width="180" height="180" patternUnits="userSpaceOnUse">
          <path
            d="M0 90h44l22-22h56l22 22h36M90 0v40l-22 22v56l22 22v40"
            fill="none"
            stroke="rgba(120,170,255,0.35)"
            strokeWidth="1"
          />
          <rect x="80" y="80" width="20" height="20" rx="3" fill="none" stroke="rgba(120,170,255,0.4)" strokeWidth="1" />
        </pattern>
        <radialGradient id="bt-trace-fade" cx="62%" cy="34%" r="72%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.14" />
          <stop offset="55%" stopColor="#fff" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="bt-trace-mask">
          <rect width="100%" height="100%" fill="url(#bt-trace-fade)" />
        </mask>
      </defs>
      <g mask="url(#bt-trace-mask)">
        <rect width="100%" height="100%" fill="url(#bt-trace-fine)" />
        <rect width="100%" height="100%" fill="url(#bt-trace-coarse)" />
      </g>
    </svg>
  );
}
