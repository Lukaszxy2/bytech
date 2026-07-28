import Navbar from '@/components/Navbar';
import Hero from '@/components/hero/Hero';
import Services from '@/components/sections/Services';
import Devices from '@/components/sections/Devices';
import HowItWorks from '@/components/sections/HowItWorks';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import {
  NAV_LINKS,
  HERO,
  SERVICES,
  CATEGORIES,
  HOW_IT_WORKS,
  STATS,
  TESTIMONIALS,
  CONTACT,
  FOOTER_COLUMNS,
  BUSINESS,
} from '@/lib/content';

export default function HomePage() {
  return (
    <>
      <Navbar links={NAV_LINKS} cta={{ label: 'Book a Repair', href: '/book-repair' }} heroAligned />
      <main>
        <Hero
          eyebrow={HERO.eyebrow}
          headlineLines={HERO.headlineLines}
          subheadline={HERO.subheadline}
          primaryCta={HERO.primaryCta}
          secondaryCta={HERO.secondaryCta}
          stats={HERO.stats}
          chips={HERO.chips}
        />
        <Services
          eyebrow={SERVICES.eyebrow}
          heading={SERVICES.heading}
          intro={SERVICES.intro}
          featured={SERVICES.featured}
          items={SERVICES.items}
        />
        <Devices eyebrow="Our Work" heading="Every device we bring back." categories={CATEGORIES} />
        <HowItWorks
          eyebrow={HOW_IT_WORKS.eyebrow}
          heading={HOW_IT_WORKS.heading}
          steps={HOW_IT_WORKS.steps}
        />
        <Stats stats={STATS} />
        <Testimonials
          eyebrow={TESTIMONIALS.eyebrow}
          heading={TESTIMONIALS.heading}
          featured={TESTIMONIALS.featured}
          others={TESTIMONIALS.others}
        />
        <Contact
          eyebrow={CONTACT.eyebrow}
          heading={CONTACT.heading}
          intro={CONTACT.intro}
          deviceTypes={CONTACT.deviceTypes}
          business={BUSINESS}
        />
      </main>
      <Footer columns={FOOTER_COLUMNS} business={BUSINESS} />
    </>
  );
}
