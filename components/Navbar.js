'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { EASE_BRAND } from '@/lib/motion';
import Logo from '@/components/Logo';
import { CalendarIcon, CloseIcon } from '@/components/Icons';

export default function Navbar({ links = [], cta, heroAligned = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-[14px]">
      <div
        className={`transition-[max-width,padding] duration-hover ease-brand ${
          heroAligned && !scrolled ? 'container-nav-hero' : 'container-wide'
        }`}
      >
        <motion.nav
          className={`flex h-[56px] items-center justify-between rounded-[19px] pl-[27px] pr-[19px] transition-[background-color,border-color,box-shadow,backdrop-filter] duration-hover ease-brand ${
            scrolled ? 'glass-panel-light' : 'border border-white/[0.07] bg-white/[0.02]'
          }`}
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_BRAND }}
        >
          <Logo size={26} />

          <div className="flex items-center gap-[45px]">
            <div className="hidden items-center gap-[52px] lg:flex">
              {links.map((link) => {
                  const resolvedHref = link.href && link.href.startsWith('#') ? `/${link.href}` : link.href;
                  return (
                    <Link
                      key={link.label}
                      href={resolvedHref}
                      className="text-[15px] font-normal text-text-primary/85 transition-colors duration-hover ease-brand hover:text-text-primary"
                    >
                      {link.label}
                    </Link>
                  );
                })}
            </div>
            <div className="flex items-center gap-2">
              {cta && (
                <>
                  <Link
                    href={cta.href}
                    className="btn-base button-outline-red hidden h-[41px] gap-[13px] px-[26px] text-[15px] font-normal sm:inline-flex"
                  >
                    <CalendarIcon width={21} height={21} />
                    {cta.label}
                  </Link>

                  <Link
                    href="/track-repair"
                    className="btn-base button-outline-blue hidden h-[41px] gap-[13px] px-[26px] text-[15px] font-normal sm:inline-flex"
                  >
                    <CalendarIcon width={21} height={21} />
                    Track a Repair
                  </Link>
                </>
              )}

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="flex h-11 w-11 items-center justify-center rounded-xl text-text-primary lg:hidden"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background-primary/95 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE_BRAND }}
          >
            <div className="container-wide flex h-[70px] items-center justify-between">
              <Logo size={26} />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-xl text-text-primary"
              >
                <CloseIcon width={22} height={22} />
              </button>
            </div>
            <nav className="container-wide mt-8 flex flex-col gap-2">
              {links.map((link) => {
                  const resolvedHref = link.href && link.href.startsWith('#') ? `/${link.href}` : link.href;
                  return (
                    <Link
                      key={link.label}
                      href={resolvedHref}
                      onClick={() => setMenuOpen(false)}
                      className="border-b border-white/[0.07] py-4 text-heading-sm text-text-primary"
                    >
                      {link.label}
                    </Link>
                  );
                })}
              {cta && (
                <Link
                  href={cta.href}
                  onClick={() => setMenuOpen(false)}
                  className="btn-base button-primary mt-6 w-full"
                >
                  <CalendarIcon width={20} height={20} />
                  {cta.label}
                </Link>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
