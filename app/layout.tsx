import type {Metadata} from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { PreHeader } from '@/components/PreHeader';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Lawn2Care Services LTD | Mississauga, ON',
    template: '%s | Lawn2Care Mississauga'
  },
  description: 'Transforming Mississauga Homes into Stunning Outdoor Sanctuaries. Award-winning landscaping & hardscaping since 2018. Specializing in interlocking, patios, and garden design.',
  keywords: ['Landscaping Mississauga', 'Hardscaping', 'Interlocking Driveways', 'Custom Patios', 'Retaining Walls', 'Garden Design', 'Lawn Care', 'Oakville Landscaping'],
  authors: [{ name: 'Lawn2Care Services LTD' }],
  creator: 'Lawn2Care Services LTD',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://expertlandscaping.ca',
    title: 'Lawn2Care Services LTD | Mississauga, ON',
    description: 'Transforming Mississauga Homes into Stunning Outdoor Sanctuaries.',
    siteName: 'Lawn2Care Services LTD',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LandscapingService",
    "name": "Lawn2Care Services LTD",
    "description": "Professional landscaping and hardscaping services in Mississauga, ON. Custom garden design, sod installation, interlock, patios, lighting, and irrigation.",
    "url": "https://lawn2care.ca",
    "telephone": "+1-905-320-0475",
    "email": "info@lawn2care.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6844 Darcel Avenue",
      "addressLocality": "Mississauga",
      "addressRegion": "ON",
      "postalCode": "L4T 2W5",
      "addressCountry": "CA"
    },
    "areaServed": [
      "Mississauga",
      "Oakville",
      "Milton",
      "Lorne Park",
      "Credit Valley",
      "Port Credit",
      "Erin Mills"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ]
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-secondary selection:text-white flex flex-col min-h-screen" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <PreHeader />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
