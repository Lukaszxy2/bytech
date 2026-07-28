'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { EASE_BRAND, staggerContainer, fadeUp } from '@/lib/motion';
import { useCursorParallax } from '@/lib/useParallax';
import {
  CalendarIcon,
  ArrowRightIcon,
  PhoneIcon,
  BoltIcon,
  ShieldCheckIcon,
  ClockIcon,
  ChipIcon,
  BatteryIcon,
  HdmiIcon,
  ChargePortIcon,
  ScreenIcon,
  SolderIcon,
} from '@/components/Icons';
import HeroBackdrop from './HeroBackdrop';
import HeroDevice from './HeroDevice';
import HeroChip from './HeroChip';
import LensFlare from './LensFlare';

const STAT_ICONS = {
  phone: PhoneIcon,
  bolt: ClockIcon,
  shield: ShieldCheckIcon,
};

const CHIP_ICONS = {
  chip: ChipIcon,
  battery: BatteryIcon,
  hdmi: HdmiIcon,
  charge: ChargePortIcon,
  screen: ScreenIcon,
  solder: SolderIcon,
};

/**
 * Hero section.
 *
 * @param eyebrow        Small uppercase label above the headline.
 * @param headlineLines  Array of lines; each line is an array of
 *                       { text, accent } runs. `accent` applies the
 *                       red gradient treatment.
 * @param subheadline    Paragraph copy. "\n" starts a new line.
 * @param primaryCta     { label, href } for the filled red button.
 * @param secondaryCta   { label, href } for the glass button.
 * @param stats          [{ icon: 'phone'|'bolt'|'shield', value, label }]
 * @param chips          [{ icon: 'chip'|'battery', label }] floating badges.
 * @param showScrollCue  Toggles the bottom scroll arrow.
 */
export default function Hero({
  eyebrow,
  headlineLines,
  subheadline,
  primaryCta,
  secondaryCta,
  stats = [],
  chips = [],
  showScrollCue = true,
}) {
  const sectionRef = useRef(null);
  const { x: px, y: py, reduceMotion } = useCursorParallax(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-screen w-full overflow-hidden"
      aria-label="ByTech device repair"
    >
      <HeroBackdrop />

      <div className="container-hero relative z-10">
        <div className="grid min-h-screen grid-cols-1 items-stretch gap-10 pb-14 pt-[148px] sm:gap-12 sm:pb-24 sm:pt-[140px] lg:min-h-screen lg:grid-cols-[minmax(0,calc(620*var(--hero-u)))_minmax(0,1fr)] lg:items-start lg:gap-[calc(32*var(--hero-u))] lg:pb-0 lg:pt-0">
          {/* ---------------- Text column ----------------
              On mobile this is a full-height flex column whose three
              zones (text / device / stats) are distributed with
              justify-between so the content fills the viewport with no
              dead space at the bottom. At lg it reverts to the reference
              block flow (lg:block + lg:contents dissolves the wrappers). */}
          <motion.div
            className={`relative flex h-full flex-col justify-between max-w-[calc(620*var(--hero-u))] lg:block lg:h-auto ${
              eyebrow ? 'lg:pt-[calc(137*var(--hero-u))]' : 'lg:pt-[calc(174*var(--hero-u))]'
            }`}
            variants={staggerContainer(0.09)}
            initial="hidden"
            animate="visible"
          >
            {/* ZONE 1 — text group (headline + sub + CTAs). lg:contents
                dissolves this wrapper so the desktop layout and stagger
                are identical to the reference. */}
            <motion.div variants={{ hidden: {}, visible: {} }} className="lg:contents">
              {eyebrow && (
                <motion.p
                  variants={fadeUp}
                  className="text-[calc(13*var(--hero-u))] font-bold uppercase leading-none tracking-[0.18em] text-brand-red-bright"
                >
                  {eyebrow}
                </motion.p>
              )}

              {/* Headline — line-height is set in em so both lines share a
                  fixed 96.5px line box despite their different sizes. */}
              <motion.h1
                variants={fadeUp}
                className={`text-[clamp(2.5rem,7.068vw,calc(95*var(--hero-u)))] font-extrabold leading-[1.016em] text-text-primary ${
                  eyebrow ? 'mt-[calc(24*var(--hero-u))]' : ''
                }`}
              >
                {headlineLines.map((line, lineIndex) => (
                  <span
                    key={lineIndex}
                    className="block"
                    style={{
                      fontSize: line.scale && line.scale !== 1 ? `${line.scale}em` : undefined,
                      letterSpacing: line.tracking,
                    }}
                  >
                    {line.runs.map((run, runIndex) =>
                      run.accent ? (
                        <span key={runIndex} className="relative inline-block ml-[0.05em]">
                          <span className="text-gradient-red text-accent-forged">{run.text}</span>
                          <LensFlare className="left-[58%] top-[7%]" />
                        </span>
                      ) : (
                        <span key={runIndex} className="text-metallic">
                          {run.text}
                        </span>
                      )
                    )}
                  </span>
                ))}
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={fadeUp}
                className="mt-[calc(17*var(--hero-u))] max-w-[calc(520*var(--hero-u))] whitespace-pre-line text-[14px] leading-[1.55] text-text-muted sm:text-[calc(16.5*var(--hero-u))] sm:leading-[calc(27*var(--hero-u))]"
              >
                {/* On mobile show only the first sentence; full copy from sm+ */}
                <span className="sm:hidden">Precision repairs. Expert soldering. Real results.</span>
                <span className="hidden text-[17px] sm:inline">{subheadline}</span>
              </motion.p>

              {/* CTAs — fixed narrow width on mobile, inline from sm. */}
              <motion.div
                variants={fadeUp}
                className="relative z-10 mt-9 flex flex-col items-center gap-2.5 sm:mt-[calc(22*var(--hero-u))] sm:flex-row sm:flex-wrap sm:items-center sm:gap-[calc(32*var(--hero-u))] [&_.btn-base]:h-10 [&_.btn-base]:rounded-lg [&_.btn-base]:text-[13px] sm:[&_.btn-base]:h-[calc(64*var(--hero-u))] sm:[&_.btn-base]:rounded-[calc(14*var(--hero-u))] sm:[&_.btn-base]:text-[calc(18*var(--hero-u))]"
              >
                <Link href={primaryCta.href} className="btn-base button-primary mt-[69px] w-[160px] justify-center gap-[calc(20*var(--hero-u))] px-[calc(37*var(--hero-u))] sm:mt-0 sm:w-auto sm:justify-start">
                  <CalendarIcon className="h-[calc(24*var(--hero-u))] w-[calc(24*var(--hero-u))]" />
                  {primaryCta.label}
                </Link>
                <Link
                  href={secondaryCta.href}
                  className="btn-base button-secondary w-[160px] justify-center gap-2 px-4 sm:w-auto sm:justify-start sm:gap-[calc(40*var(--hero-u))] sm:pl-[calc(26*var(--hero-u))] sm:pr-[calc(34*var(--hero-u))]"
                >
                  <span>{secondaryCta.label}</span>
                  <ArrowRightIcon className="h-4 w-4 sm:h-[calc(24*var(--hero-u))] sm:w-[calc(24*var(--hero-u))]" />
                </Link>
              </motion.div>
            </motion.div>

            {/* ZONE 2 — device visual. On mobile it floats as a decorative
                element pinned to the lower-right, sitting BEHIND the CTA
                buttons (z-0 vs buttons' z-10). Hidden at lg where the
                reference device column takes over. */}
            <motion.div
              variants={fadeUp}
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-[170px] z-0 flex justify-center opacity-50 lg:hidden"
            >
              <div className="relative w-[210px]">
                <HeroDevice px={px} py={py} />
              </div>
            </motion.div>

            {/* ZONE 3 — stats as a horizontal 3-up row on mobile, reverting
                to the reference divider row from sm+. */}
            {stats.length > 0 && (
              <motion.dl
                variants={fadeUp}
                className="grid grid-cols-3 gap-2 sm:mt-[calc(36*var(--hero-u))] sm:flex sm:items-stretch"
              >
                {stats.map((stat, index) => {
                  const Icon = STAT_ICONS[stat.icon] ?? PhoneIcon;
                  return (
                    <div key={stat.label} className="flex items-stretch">
                      {index > 0 && (
                        <span
                          className="rule-glass hidden w-px self-stretch sm:mx-[calc(30*var(--hero-u))] sm:block"
                          aria-hidden="true"
                        />
                      )}
                      <div className="flex items-center gap-2 sm:gap-[calc(15*var(--hero-u))]">
                        <Icon
                          className="h-5 w-5 shrink-0 text-brand-red sm:h-[calc(30*var(--hero-u))] sm:w-[calc(30*var(--hero-u))]"
                          style={{ filter: 'drop-shadow(0 0 10px rgba(232,64,44,0.45))' }}
                        />
                        <div>
                          <dt className="text-[13px] font-bold leading-[1.12] tracking-[-0.02em] text-text-primary sm:text-[calc(23*var(--hero-u))]">
                            {stat.value}
                          </dt>
                          <dd className="mt-0.5 text-[10px] leading-[1.2] text-white sm:mt-[calc(3*var(--hero-u))] sm:text-[calc(15*var(--hero-u))] sm:text-text-muted">
                            {stat.label}
                          </dd>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.dl>
            )}
          </motion.div>

          {/* ---------------- Visual column ----------------
              Hidden on mobile (device is rendered inline next to stats
              above). From lg it sits in its own grid column with the
              original offset and floating badges. */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto w-[74%] lg:max-w-[calc(430*var(--hero-u))] lg:translate-x-[6%] lg:translate-y-[calc(140*var(--hero-u))]">
              <HeroDevice px={px} py={py} />

              {chips.map((chip, index) => (
                <HeroChip
                  key={chip.label}
                  icon={renderChipIcon(chip.icon)}
                  label={chip.label}
                  /* Chips hang off the edges of the device box, so they
                     only appear once the visual sits in its own column at
                     lg. Below xl the box is still too narrow to seat all
                     four, so the secondary pair waits for xl. */
                  className={`${chip.position} ${chip.showFrom === 'xl' ? 'hidden xl:block' : 'hidden lg:block'}`}
                  px={px}
                  py={py}
                  depth={chip.depth ?? 26}
                  floatDuration={chip.floatDuration ?? 6.5}
                  floatDelay={chip.floatDelay ?? 0}
                  delay={chip.delay ?? 0.55 + index * 0.08}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      {showScrollCue && (
        <motion.a
          href="#services"
          aria-label="Scroll to services"
          className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE_BRAND, delay: 1.1 }}
        >
          <span className="animate-scroll-cue text-text-muted">
            <svg width="18" height="46" viewBox="0 0 18 46" fill="none" aria-hidden="true">
              <path d="M9 0v38M2 31l7 7 7-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="h-[5px] w-[5px] rounded-full bg-brand-red" />
        </motion.a>
      )}
    </section>
  );
}

function renderChipIcon(name) {
  const Icon = CHIP_ICONS[name] ?? ChipIcon;
  return <Icon className="h-[calc(30*var(--hero-u))] w-[calc(30*var(--hero-u))]" />;
}
