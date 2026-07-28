import Navbar from '@/components/Navbar';
import Footer from '@/components/sections/Footer';
import { NAV_LINKS, FOOTER_COLUMNS, BUSINESS } from '@/lib/content';

/** Chrome for the non-marketing pages: booking, tracking, admin. */
export default function PageShell({ eyebrow, title, intro, children, wide = false }) {
  return (
    <>
      <Navbar links={NAV_LINKS} cta={{ label: 'Book a Repair', href: '/book-repair' }} />
      <main className="relative overflow-hidden pb-[110px] pt-[150px]">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(60% 40% at 78% -6%, rgba(232,64,44,0.16) 0%, rgba(3,11,30,0) 66%), radial-gradient(50% 40% at 8% 0%, rgba(12,26,58,0.8) 0%, rgba(3,11,30,0) 70%)',
          }}
        />
        <div className={`relative ${wide ? 'container-wide' : 'container-site'}`}>
          <header className="max-w-[680px]">
            {eyebrow && (
              <p className="text-label-sm uppercase text-brand-red-bright">{eyebrow}</p>
            )}
            <h1 className="mt-5 text-heading-lg text-text-primary">{title}</h1>
            {intro && <p className="mt-5 text-body-md text-text-muted">{intro}</p>}
          </header>
          <div className="mt-12">{children}</div>
        </div>
      </main>
      <Footer columns={FOOTER_COLUMNS} business={BUSINESS} />
    </>
  );
}
