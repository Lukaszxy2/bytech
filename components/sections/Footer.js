import Link from 'next/link';
import Logo from '@/components/Logo';
import { FacebookIcon, PinIcon, MailIcon } from '@/components/Icons';

/* No glass anywhere. Plain navy, plain columns, one accent line. */
export default function Footer({ columns = [], business }) {
  return (
    <footer className="relative overflow-hidden bg-brand-navy">
      {/* The only accent: a hairline gradient on the top edge */}
      <div
        className="relative z-10 h-px w-full"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(90deg, rgba(232,64,44,0) 0%, #E8402C 26%, #FF6A38 50%, #E8402C 74%, rgba(232,64,44,0) 100%)',
        }}
      />

      {/* Device plate washed back behind the columns. The art keeps its
          subjects at the outer edges and its middle clear, which is
          where the link columns land. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src="/brand/devices-overlay.png"
          alt=""
          className="h-full w-full object-cover opacity-[0.14]"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, #000 30%, #000 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 30%, #000 100%)',
          }}
        />
      </div>

      <div className="container-site relative py-[72px]">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,1fr))]">
          <div className="col-span-2 lg:col-span-1">
            <Logo size={26} />
            <p className="mt-5 max-w-[280px] text-body-sm text-text-muted">
              {business.tagline} Board-level device repair in Renfrew, UK.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-body-sm text-text-muted">
              <span className="flex items-start gap-2.5">
                <PinIcon width={17} height={17} className="mt-0.5 shrink-0 text-brand-red" />
                {business.address}
              </span>
              <a href={`mailto:${business.email}`} className="flex items-center gap-2.5 transition-colors duration-hover ease-brand hover:text-text-primary">
                <MailIcon width={17} height={17} className="shrink-0 text-brand-red" />
                {business.email}
              </a>
              <a
                href={business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 transition-colors duration-hover ease-brand hover:text-text-primary"
              >
                <FacebookIcon width={17} height={17} className="shrink-0 text-brand-red" />
                Facebook
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-text-primary">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-text-muted transition-colors duration-hover ease-brand hover:text-text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.07] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-body-sm text-text-muted">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p className="text-body-sm text-text-muted">Registered in Scotland · Renfrew, UK</p>
        </div>
      </div>
    </footer>
  );
}
