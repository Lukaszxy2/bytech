import { Inter } from 'next/font/google';
import './globals.css';
import BackToTop from '@/components/BackToTop';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  metadataBase: new URL('https://bytech.co.uk'),
  title: 'ByTech | You Break It. We Fix It.',
  description:
    'Precision device repair in Renfrew, UK. Microsoldering, screen and battery replacement, HDMI and charging port repair for phones, consoles, laptops and tablets.',
  openGraph: {
    title: 'ByTech | You Break It. We Fix It.',
    description: 'Precision repairs. Expert soldering. Real results.',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#030B1E',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
