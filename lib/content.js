/* Single source of copy for the marketing site. Every section takes
   its text as props; this file is just the default wiring. */

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Devices', href: '#devices' },
  { label: 'About Us', href: '#how-it-works' },
  { label: 'Our Work', href: '#devices' },
  { label: 'Reviews', href: '#reviews' },
];

export const BUSINESS = {
  name: 'ByTech',
  tagline: 'You Break It, We Fix It!',
  address: '12 High Street, Renfrew, PA4 8QP, UK',
  hours: [
    { days: 'Mon to Fri', time: '9:00 to 18:00' },
    { days: 'Saturday', time: '10:00 to 16:00' },
    { days: 'Sunday', time: 'Closed' },
  ],
  facebook: 'https://www.facebook.com/',
  email: 'hello@bytech.co.uk',
  phone: '0141 000 0000',
};

export const HERO = {
  eyebrow: null,
  // `scale` multiplies the base headline size and `tracking` sets that
  // line's optical letter-spacing — the reference sets line two at 110px
  // against line one's 95px, tracked tighter to hold the same measure.
  headlineLines: [
    { scale: 1, tracking: '-0.037em', runs: [{ text: 'You Break It.' }] },
    {
      scale: 1.158,
      tracking: '-0.059em',
      runs: [{ text: 'We ' }, { text: 'Fix', accent: true }, { text: ' It.' }],
    },
  ],
  subheadline:
    'Precision repairs. Expert soldering. Real results.\nFrom smartphones to consoles and laptops, we bring\nyour devices back to life.',
  primaryCta: { label: 'Book a Repair', href: '/book-repair' },
  secondaryCta: { label: 'See Our Work', href: '#devices' },
  stats: [
    { icon: 'phone', value: '500+', label: 'Devices Fixed' },
    { icon: 'bolt', value: 'Same-Day', label: 'Service' },
    { icon: 'shield', value: 'Warranty', label: 'Included' },
  ],
  /* Floating badges around the device. `position` is the Tailwind
     placement against the device box, so these can be re-ordered or
     re-sited from here without touching the component. */
  chips: [
    {
      icon: 'chip',
      label: 'Microsoldering',
      position: '-left-[16%] top-[10%]',
      depth: 26,
      floatDuration: 6,
      delay: 0.55,
    },
    {
      icon: 'hdmi',
      label: 'HDMI Port\nRepair',
      position: '-right-[17%] top-[5%]',
      showFrom: 'xl',
      depth: 30,
      floatDuration: 7,
      floatDelay: 0.5,
      delay: 0.63,
    },
    {
      icon: 'charge',
      label: 'Charging Port\nReplacement',
      position: '-left-[21%] top-[62%]',
      showFrom: 'xl',
      depth: 22,
      floatDuration: 8,
      floatDelay: 1.3,
      delay: 0.78,
    },
    {
      icon: 'battery',
      label: 'Battery\nReplacement',
      position: '-right-[22%] top-[54%]',
      depth: 34,
      floatDuration: 7.5,
      floatDelay: 0.9,
      delay: 0.7,
    },
  ],
};

export const SERVICES = {
  eyebrow: 'What We Do',
  heading: 'Board-level repair, done properly.',
  intro:
    'No parts-swapping guesswork. We diagnose at component level and fix the actual fault.',
  featured: {
    icon: 'microsolder',
    title: 'Microsoldering',
    blurb:
      'Component-level board repair under a stereo microscope. Reballing, trace repair, and IC replacement that most shops send away. This is the work everything else is built on.',
    meta: '0.1mm precision · Hot-air & IR rework',
  },
  items: [
    { icon: 'solder', title: 'Soldering', blurb: 'Clean joints, no cold solder, no lifted pads.' },
    { icon: 'hdmi', title: 'HDMI Port Replacement', blurb: 'Console output ports rebuilt and reinforced.' },
    { icon: 'charge', title: 'Charging Port Replacement', blurb: 'Full port swap with connector alignment.' },
    { icon: 'screen', title: 'Screen Replacement', blurb: 'OEM-grade panels, sealed and calibrated.' },
    { icon: 'battery', title: 'Battery Replacement', blurb: 'Health-tested cells with safe disposal.' },
  ],
};

/* Real bench photos live in /public/gallery/<id>/. `tall` marks
   portrait shots so the masonry gets genuine height variation, and
   `label` becomes the caption strip under each one. */
function shots(id, label, entries) {
  return entries.map(([n, tall], i) => ({
    src: `/gallery/${id}/${id}-${n}.jpg`,
    tall,
    caption: `${label} · Bench ${String(i + 1).padStart(2, '0')}`,
  }));
}

export const CATEGORIES = [
  {
    id: 'ps5',
    icon: 'console',
    title: 'PlayStation 5',
    count: '9 photos',
    blurb: 'HDMI ports, no-power faults and liquid damage on PS5 boards.',
    accent: '#E8402C',
    images: shots('ps5', 'PlayStation 5', [[2, true], [1, false], [3, true], [8, false], [4, true], [9, false], [5, true], [6, true], [7, true]]),
  },
  {
    id: 'xbox',
    icon: 'console',
    title: 'Xbox',
    count: '7 photos',
    blurb: 'HDMI retiming chips, thermal service and board-level rework.',
    accent: '#FF6A38',
    images: shots('xbox', 'Xbox', [[2, true], [1, false], [3, true], [4, false], [5, true], [6, true], [7, true]]),
  },
  {
    id: 'tcl',
    icon: 'phone',
    title: 'TCL Phones',
    count: '9 photos',
    blurb: 'Screens, charging ports and board repair on TCL handsets.',
    accent: '#E8402C',
    images: shots('tcl', 'TCL', [[1, true], [5, false], [2, true], [6, false], [3, true], [7, false], [8, true], [4, true], [9, true]]),
  },
  {
    id: 'asus',
    icon: 'laptop',
    title: 'Asus Laptops',
    count: '5 photos',
    blurb: 'DC jacks, hinges and logic board faults on Asus machines.',
    accent: '#FF6A38',
    images: shots('asus', 'Asus', [[1, true], [2, true], [3, true], [4, true], [5, true]]),
  },
  {
    id: 'bose',
    icon: 'headphones',
    title: 'Bose Audio',
    count: '5 photos',
    blurb: 'Headphone and speaker repair: cables, drivers and boards.',
    accent: '#E8402C',
    images: shots('bose', 'Bose', [[1, true], [3, true], [2, true], [4, true], [5, true]]),
  },
  {
    id: 'key',
    icon: 'keyfob',
    title: 'Car Key Fobs',
    count: '5 photos',
    blurb: 'Fob boards, worn buttons and battery terminal repair.',
    accent: '#FF6A38',
    images: shots('key', 'Key Fob', [[1, true], [3, true], [2, true], [4, true], [5, true]]),
  },
];

export const HOW_IT_WORKS = {
  eyebrow: 'How It Works',
  heading: 'Four steps, no mystery.',
  steps: [
    { number: '01', title: 'Book It In', body: 'Tell us the device and the fault. Drop off in Renfrew or we arrange collection.' },
    { number: '02', title: 'Free Diagnosis', body: 'We open it up, find the actual fault, and quote before any work starts.' },
    { number: '03', title: 'The Repair', body: 'Board-level work on the bench. Most repairs finish the same day.' },
    { number: '04', title: 'Tested & Back', body: 'Full function test, warranty logged, and your device back in your hands.' },
  ],
};

export const STATS = [
  { value: 500, suffix: '+', label: 'Devices Fixed' },
  { value: 98, suffix: '%', label: 'Success Rate' },
  { value: 24, suffix: 'hr', label: 'Average Turnaround' },
  { value: 6, suffix: 'mo', label: 'Warranty Included' },
];

export const TESTIMONIALS = {
  eyebrow: 'Reviews',
  heading: 'What people say after we hand it back.',
  featured: {
    quote:
      'Three shops told me the board was dead and to buy a new console. ByTech found a cracked trace under the HDMI port, rebuilt it, and had it back to me in a day. It has run perfectly ever since.',
    name: 'Callum M.',
    role: 'PS5 HDMI repair · Paisley',
    rating: 5,
  },
  others: [
    { quote: 'Same-day screen swap and you genuinely cannot tell it was ever apart.', name: 'Aisha R.', role: 'iPhone 13 screen', rating: 5 },
    { quote: 'Explained exactly what failed and why, without the usual runaround.', name: 'Dan H.', role: 'MacBook DC-in board', rating: 5 },
    { quote: 'Fixed the stick drift properly instead of just swapping the module.', name: 'Erin S.', role: 'DualSense controller', rating: 5 },
    { quote: 'Water-damaged laptop I had written off. Recovered everything on it.', name: 'Marek W.', role: 'Liquid damage recovery', rating: 5 },
    { quote: 'Straight answer, fair price, and it was ready when they said it would be.', name: 'Joanne T.', role: 'Tablet charging port', rating: 5 },
  ],
};

export const CONTACT = {
  eyebrow: 'Get In Touch',
  heading: 'Bring it in, or tell us what broke.',
  intro: 'Send the details and we will come back with a diagnosis and a price before any work starts.',
  deviceTypes: ['Mobile Phone', 'Laptop', 'Console', 'Tablet', 'Controller', 'Other'],
};

export const FOOTER_COLUMNS = [
  {
    title: 'Repairs',
    links: [
      { label: 'Microsoldering', href: '#services' },
      { label: 'Screen Replacement', href: '#services' },
      { label: 'Battery Replacement', href: '#services' },
      { label: 'Charging Ports', href: '#services' },
    ],
  },
  {
    title: 'Devices',
    links: [
      { label: 'Consoles', href: '#devices' },
      { label: 'Phones', href: '#devices' },
      { label: 'Laptops', href: '#devices' },
      { label: 'Controllers', href: '#devices' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'Contact', href: '#contact' },
      { label: 'Track a Repair', href: '/track-repair' },
    ],
  },
];
