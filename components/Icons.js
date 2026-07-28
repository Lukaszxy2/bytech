/* Line icons drawn to the reference's stroke language:
   1.7 stroke, round caps/joins, currentColor. */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function CalendarIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <circle cx="12" cy="15.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowRightIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="2.5" width="12" height="19" rx="2.6" />
      <path d="M10.5 18.4h3" />
    </svg>
  );
}

export function BoltIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M13.6 2.5 5.8 13.2h5.1l-.9 8.3 8.2-11h-5.4z" />
    </svg>
  );
}

export function ShieldCheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.6 4.8 5.7v5.8c0 4.4 3 8.2 7.2 9.9 4.2-1.7 7.2-5.5 7.2-9.9V5.7z" />
      <path d="M9 12.1l2.2 2.2 4-4.3" />
    </svg>
  );
}

export function ChipIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="7.2" y="7.2" width="9.6" height="9.6" rx="1.8" />
      <rect x="10.3" y="10.3" width="3.4" height="3.4" rx="0.7" />
      <path d="M10 4v3.2M14 4v3.2M10 16.8V20M14 16.8V20M4 10h3.2M4 14h3.2M16.8 10H20M16.8 14H20" />
    </svg>
  );
}

export function BatteryIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2.6" y="7.4" width="16.2" height="9.2" rx="2.2" />
      <path d="M21.4 10.6v2.8" />
      <path d="M5.8 10.4v3.2M9 10.4v3.2M12.2 10.4v3.2" />
    </svg>
  );
}

/* --- Service icons ---
   Drawn from the actual bench work rather than generic symbols: an iron
   laying a joint, a loupe over an IC, the real connector silhouettes. */

export function SolderIcon(props) {
  return (
    <svg {...base} {...props}>
      {/* iron shaft and grip */}
      <path d="M21 3 12.8 11.2" />
      <path d="M18.4 1.6 22.4 5.6" />
      {/* chisel tip */}
      <path d="M12.8 11.2 9.6 14.4l2 2 3.2-3.2z" />
      {/* board with a solder fillet under the tip */}
      <path d="M3.4 20.4h17.2" />
      <path d="M8.4 20.4a2.1 2.1 0 0 1 4.2 0" />
    </svg>
  );
}

export function MicrosolderIcon(props) {
  return (
    <svg {...base} {...props}>
      {/* loupe over a fine-pitch IC */}
      <circle cx="10.4" cy="10.4" r="6.6" />
      <path d="m15.4 15.4 5.2 5.2" />
      <rect x="7.7" y="7.7" width="5.4" height="5.4" rx="1.1" />
      <path d="M9.3 6.1v1.6M11.5 6.1v1.6M9.3 13.1v1.6M11.5 13.1v1.6" />
      <path d="M6.1 9.3h1.6M6.1 11.5h1.6M13.1 9.3h1.6M13.1 11.5h1.6" />
    </svg>
  );
}

export function HdmiIcon(props) {
  return (
    <svg {...base} {...props}>
      {/* connector shroud and the tapered body below it */}
      <path d="M6.4 8.6V6.8a1.2 1.2 0 0 1 1.2-1.2h8.8a1.2 1.2 0 0 1 1.2 1.2v1.8" />
      <path d="M3.2 8.6h17.6v3.3l-2.5 3.5H5.7l-2.5-3.5z" />
      <path d="M6.7 10.7h10.6" />
      <path d="M8.4 12.7h7.2" />
    </svg>
  );
}

export function ChargePortIcon(props) {
  return (
    <svg {...base} {...props}>
      {/* USB-C receptacle with its inner tongue, charge bolt above */}
      <rect x="3" y="12.6" width="18" height="6" rx="3" />
      <rect x="6.2" y="14.7" width="11.6" height="1.8" rx="0.9" />
      <path d="M13.8 2.6 10.2 7.6h3l-1.4 3.2" />
    </svg>
  );
}

export function ScreenIcon(props) {
  return (
    <svg {...base} {...props}>
      {/* handset with a spidered panel */}
      <rect x="4.6" y="2.2" width="14.8" height="19.6" rx="2.8" />
      <path d="M9.8 2.2h4.4" />
      <path d="m7.6 8.2 3.1 2.7-1.9 2.7 3.5 2.4-1.1 2.4" />
      <path d="m13.4 9.6 3.2-1.6" />
    </svg>
  );
}

export function BatterySwapIcon(props) {
  return (
    <svg {...base} {...props}>
      {/* cell with a charge bolt and a swap arc over the top */}
      <rect x="3.2" y="9.4" width="14.4" height="9.2" rx="2.2" />
      <path d="M20.2 12.4v3.2" />
      <path d="M11 11.4 8.6 14.6h3l-2.2 2.8" />
      <path d="M6.2 6.6a6.4 6.4 0 0 1 9.6 0" />
      <path d="M15.9 3.6v3.1h-3.1" />
    </svg>
  );
}

export function ConsoleIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7.6 7.4h8.8a5 5 0 0 1 4.9 4l.7 4.3a2.6 2.6 0 0 1-4.8 1.8l-1.3-2.1H8.1l-1.3 2.1A2.6 2.6 0 0 1 2 15.7l.7-4.3a5 5 0 0 1 4.9-4Z" />
      <path d="M6.6 11.6v2.2M5.5 12.7h2.2" />
      <circle cx="16.4" cy="12" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="18.4" cy="13.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LaptopIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4.2" y="5" width="15.6" height="10.4" rx="2" />
      <path d="M2 18.6h20" />
    </svg>
  );
}

export function TabletIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4.6" y="2.6" width="14.8" height="18.8" rx="2.6" />
      <path d="M10.4 18.6h3.2" />
    </svg>
  );
}

export function ControllerIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 8h8a5.4 5.4 0 0 1 5.3 4.4l.5 3a2.7 2.7 0 0 1-5 1.8L15.4 15H8.6l-1.4 2.2a2.7 2.7 0 0 1-5-1.8l.5-3A5.4 5.4 0 0 1 8 8Z" />
      <path d="M7 11.4v2.2M5.9 12.5h2.2M16.6 11.6h.01M18.2 13.2h.01" />
    </svg>
  );
}

export function HeadphonesIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 14.4v-2a8 8 0 0 1 16 0v2" />
      <rect x="2.4" y="13.6" width="4.6" height="7" rx="2.1" />
      <rect x="17" y="13.6" width="4.6" height="7" rx="2.1" />
    </svg>
  );
}

export function KeyFobIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="6.4" y="9" width="11.2" height="12.4" rx="3.4" />
      <path d="M9.6 12.6h4.8M9.6 16.2h4.8" />
      <path d="M12 9V4.2h2.8" />
      <path d="M14.8 2.6v3.2" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.8V12l3.4 2" />
    </svg>
  );
}

export function PinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21.4s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10.2" r="2.6" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21.9v-8.6h2.9l.44-3.36H13.5V7.79c0-.97.27-1.63 1.66-1.63h1.78V3.15A23.9 23.9 0 0 0 14.36 3c-2.57 0-4.33 1.57-4.33 4.45v2.48H7.1v3.36h2.93v8.6h3.47Z" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2.6" y="4.8" width="18.8" height="14.4" rx="2.4" />
      <path d="m3.4 7 8.6 6 8.6-6" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ZoomInIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.6" cy="10.6" r="6.8" />
      <path d="m15.6 15.6 4.8 4.8" />
      <path d="M10.6 7.8v5.6M7.8 10.6h5.6" />
    </svg>
  );
}

export function ZoomOutIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.6" cy="10.6" r="6.8" />
      <path d="m15.6 15.6 4.8 4.8" />
      <path d="M7.8 10.6h5.6" />
    </svg>
  );
}

export function ChevronLeftIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

export function ChevronRightIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export function QuoteIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9.4 5.2C6 6.7 3.9 9.9 3.9 13.6c0 3.2 1.9 5.2 4.4 5.2 2.2 0 3.9-1.6 3.9-3.8 0-2.1-1.5-3.6-3.5-3.6-.4 0-.9.1-1 .1.4-1.7 2-3.5 3.7-4.4l-2-1.9Zm10.3 0c-3.4 1.5-5.5 4.7-5.5 8.4 0 3.2 1.9 5.2 4.4 5.2 2.2 0 3.9-1.6 3.9-3.8 0-2.1-1.5-3.6-3.5-3.6-.4 0-.9.1-1 .1.4-1.7 2-3.5 3.7-4.4l-2-1.9Z" />
    </svg>
  );
}

export function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m12 2.6 2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.44 6.19 20.5 7.3 14.03 2.6 9.45l6.5-.95z" />
    </svg>
  );
}
