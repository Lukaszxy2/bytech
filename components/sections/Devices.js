'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EASE_BRAND, fadeUp, staggerContainer, revealOnce } from '@/lib/motion';
import {
  ConsoleIcon,
  PhoneIcon,
  LaptopIcon,
  ControllerIcon,
  TabletIcon,
  ArrowRightIcon,
  CloseIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from '@/components/Icons';
import CategoryVisual from './CategoryVisual';
import useDragScroll from '@/lib/useDragScroll';

const ICONS = {
  console: ConsoleIcon,
  phone: PhoneIcon,
  laptop: LaptopIcon,
  controller: ControllerIcon,
  tablet: TabletIcon,
};

export default function Devices({ eyebrow, heading, categories = [] }) {
  const [openId, setOpenId] = useState(null);
  const [lightbox, setLightbox] = useState(null);
  const [zoomed, setZoomed] = useState(false);
  const galleryRef = useRef(null);
  // The rail locks while a gallery is open, so the category you picked
  // stays put underneath it instead of sliding away.
  const {
    ref: scrollerRef,
    dragging,
    handlers: railHandlers,
  } = useDragScroll({ enabled: openId === null });

  const active = categories.find((c) => c.id === openId) ?? null;

  // Bring the opened gallery up into view, clear of the fixed navbar.
  useEffect(() => {
    if (!openId) return undefined;
    const id = setTimeout(() => {
      const el = galleryRef.current;
      if (!el) return;
      // The wrapper's top stays put while it expands downward, so this
      // target is stable even mid-animation.
      const top = el.getBoundingClientRect().top + window.scrollY - 96;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' });
    }, 260);
    return () => clearTimeout(id);
  }, [openId]);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (el) el.scrollBy({ left: dir * 440, behavior: 'smooth' });
  };

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    setZoomed(false);
  }, []);

  const step = useCallback(
    (delta) => {
      if (!active || lightbox === null) return;
      // Stepping to a new photo always starts fit-to-frame again.
      setZoomed(false);
      setLightbox((i) => (i + delta + active.images.length) % active.images.length);
    },
    [active, lightbox]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      // Escape backs out of zoom first, then out of the lightbox.
      if (e.key === 'Escape') {
        if (zoomed) setZoomed(false);
        else closeLightbox();
      }
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, closeLightbox, step, zoomed]);

  return (
    <section id="devices" className="relative overflow-hidden py-20 md:py-[120px]">
      {/* Header sits far left with the controls pinned right — a
          different rhythm from the services header above it. */}
      <motion.div
        className="container-site mb-12 flex flex-wrap items-end justify-between gap-6"
        variants={staggerContainer(0.1)}
        {...revealOnce}
      >
        <div>
          <motion.p variants={fadeUp} className="text-label-sm uppercase text-brand-red-bright">
            {eyebrow}
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-5 max-w-[560px] text-heading-lg text-text-primary">
            {heading}
          </motion.h2>
        </div>
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <CarouselButton label="Previous" onClick={() => scrollBy(-1)} disabled={openId !== null}>
            <ChevronLeftIcon width={20} height={20} />
          </CarouselButton>
          <CarouselButton label="Next" onClick={() => scrollBy(1)} disabled={openId !== null}>
            <ChevronRightIcon width={20} height={20} />
          </CarouselButton>
        </motion.div>
      </motion.div>

      {/* Full-bleed scroll-snap rail — deliberately breaks the container */}
      <div
        ref={scrollerRef}
        {...railHandlers}
        className={`no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:gap-6 md:px-[60px] ${
          openId !== null ? 'cursor-default' : dragging ? 'cursor-grabbing select-none' : 'cursor-grab'
        }`}
      >
        {categories.map((cat, index) => {
          const Icon = ICONS[cat.icon] ?? PhoneIcon;
          const isOpen = openId === cat.id;
          return (
            <motion.button
              key={cat.id}
              type="button"
              onClick={() => setOpenId(isOpen ? null : cat.id)}
              aria-expanded={isOpen}
              className="group relative aspect-[4/5] w-[300px] shrink-0 cursor-[inherit] snap-start overflow-hidden rounded-panel-lg border border-white/[0.08] text-left sm:w-[360px] lg:w-[400px]"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: EASE_BRAND, delay: index * 0.06 }}
            >
              <div className="absolute inset-0 transition-transform duration-[600ms] ease-brand group-hover:scale-[1.06]">
                {cat.images?.[0]?.src ? (
                  <img src={cat.images[0].src} alt="" draggable={false} className="h-full w-full object-cover" />
                ) : (
                  <CategoryVisual accent={cat.accent} seed={index + 1} />
                )}
              </div>
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(3,11,30,0) 32%, rgba(3,11,30,0.72) 74%, rgba(3,11,30,0.94) 100%)',
                }}
              />

              {/* Outline label that grows on hover to reveal the CTA */}
              <div className="absolute inset-x-5 bottom-5">
                <div className="glass-panel-outline overflow-hidden rounded-panel px-5 py-4 transition-colors duration-hover ease-brand group-hover:border-brand-red/55">
                  <div className="flex items-center gap-3">
                    <Icon width={22} height={22} className="text-brand-red-bright" />
                    <span className="text-heading-sm text-text-primary">{cat.title}</span>
                    <span className="ml-auto text-body-sm text-text-muted">{cat.count}</span>
                  </div>
                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[380ms] ease-brand group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="pt-3 text-body-sm text-text-muted">{cat.blurb}</p>
                      <span className="button-ghost mt-3">
                        {isOpen ? 'Hide Gallery' : 'View Gallery'}
                        <ArrowRightIcon className="button-ghost-arrow" width={17} height={17} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Masonry gallery — varied heights via CSS columns */}
      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            key={active.id}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.55, ease: EASE_BRAND }}
            className="overflow-hidden"
          >
            <div ref={galleryRef} className="container-site pt-14">
              <div className="mb-7 flex items-center justify-between">
                <h3 className="text-heading-md text-text-primary">{active.title} recent work</h3>
                <button
                  type="button"
                  onClick={() => setOpenId(null)}
                  className="button-ghost text-text-muted hover:text-text-primary"
                >
                  Close
                  <CloseIcon width={17} height={17} />
                </button>
              </div>
              <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 xl:columns-5 [&>*]:mb-4">
                {active.images.map((img, i) => (
                  <motion.button
                    key={img.src ?? img.caption}
                    type="button"
                    onClick={() => setLightbox(i)}
                    className="group block w-full break-inside-avoid overflow-hidden rounded-panel border border-white/[0.08] text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE_BRAND, delay: i * 0.05 }}
                  >
                    <div className={`relative overflow-hidden ${img.tall ? 'h-[260px]' : 'h-[180px]'}`}>
                      {img.src ? (
                        <img src={img.src} alt={img.caption} className="h-full w-full object-cover transition-transform duration-[600ms] ease-brand group-hover:scale-105" />
                      ) : (
                        <div className="h-full w-full transition-transform duration-[600ms] ease-brand group-hover:scale-105">
                          <CategoryVisual accent={active.accent} seed={i + 3} />
                        </div>
                      )}
                    </div>
                    <div className="glass-panel-light flex items-center justify-between gap-2 border-0 border-t px-3.5 py-2.5">
                      <span className="truncate text-body-sm text-text-primary">{img.caption}</span>
                      <ArrowRightIcon width={14} height={14} className="shrink-0 text-brand-red-bright opacity-0 transition-opacity duration-hover ease-brand group-hover:opacity-100" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {active && lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-background-primary/88 p-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE_BRAND }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} gallery`}
          >
            <motion.div
              className="glass-panel-heavy relative w-full max-w-[min(1240px,94vw)] overflow-hidden rounded-panel-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.34, ease: EASE_BRAND }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Fit-to-frame by default so nothing is cropped; zooming
                  swaps to natural size and lets the frame scroll. */}
              <div
                className={`relative flex h-[68vh] min-h-[320px] w-full items-center justify-center bg-black/25 ${
                  zoomed ? 'overflow-auto' : 'overflow-hidden'
                }`}
              >
                {active.images[lightbox].src ? (
                  <img
                    src={active.images[lightbox].src}
                    alt={active.images[lightbox].caption}
                    onClick={() => setZoomed((z) => !z)}
                    className={
                      zoomed
                        ? 'max-w-none shrink-0 cursor-zoom-out'
                        : 'h-full w-full cursor-zoom-in object-contain'
                    }
                  />
                ) : (
                  <CategoryVisual accent={active.accent} seed={lightbox + 5} />
                )}
              </div>
              <div className="flex items-center justify-between gap-4 px-7 py-5">
                <div>
                  <p className="text-heading-sm text-text-primary">{active.images[lightbox].caption}</p>
                  <p className="mt-1 text-body-sm text-text-muted">
                    {active.title} · {lightbox + 1} of {active.images.length}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <CarouselButton
                    label={zoomed ? 'Fit to frame' : 'Zoom to full size'}
                    onClick={() => setZoomed((z) => !z)}
                  >
                    {zoomed ? <ZoomOutIcon width={20} height={20} /> : <ZoomInIcon width={20} height={20} />}
                  </CarouselButton>
                  <CarouselButton label="Previous image" onClick={() => step(-1)}>
                    <ChevronLeftIcon width={20} height={20} />
                  </CarouselButton>
                  <CarouselButton label="Next image" onClick={() => step(1)}>
                    <ChevronRightIcon width={20} height={20} />
                  </CarouselButton>
                </div>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close"
                className="glass-panel-outline absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-text-primary transition-colors duration-hover ease-brand hover:border-brand-red/60"
              >
                <CloseIcon width={20} height={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function CarouselButton({ children, label, onClick, disabled = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="glass-panel-outline flex h-11 w-11 items-center justify-center rounded-full text-text-primary transition-all duration-hover ease-brand hover:scale-[1.03] hover:border-brand-red/60 hover:text-brand-red-bright disabled:pointer-events-none disabled:opacity-35"
    >
      {children}
    </button>
  );
}
