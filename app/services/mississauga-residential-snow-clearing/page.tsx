import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Residential Snow Removal & Windrow Clearing Mississauga',
  description: 'Tired of the city plow blocking your driveway? We offer premium residential snow removal and windrow clearing in Mississauga. 5cm trigger dispatch.',
  keywords: [
    'driveway snow removal mississauga',
    'windrow clearing service',
    'best residential snow removal'
  ],
  alternates: {
    canonical: 'https://lawn2care.com/services/mississauga-residential-snow-clearing',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Residential Snow Removal & Windrow Clearing Mississauga",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Lawn2Care Services LTD",
    "image": "https://lawn2care.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mississauga",
      "addressRegion": "ON",
      "addressCountry": "CA"
    }
  },
  "description": "Specialized residential driveway clearing and city windrow removal for Mississauga homeowners.",
};

export default function ResidentialSnowClearing() {
  return (
    <main className="bg-slate-900 text-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/80 z-10" />
        <Image 
          src="https://images.unsplash.com/photo-1542360663-8b401365e0d9?q=80&w=1920&auto=format&fit=crop" 
          alt="Clearing a residential driveway windrow"
          fill
          className="object-cover z-0 grayscale-[30%]"
          priority
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
            Residential Snow Removal & <br />
            <span className="text-emerald-400">Windrow Clearing Mississauga</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            We don&apos;t just clear your driveway. We return after the city plows to eliminate the massive wall of snow (the windrow) blocking your exit.
          </p>
          <Link href="#quote" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-lg transition-colors text-lg inline-block">
            Secure Your Spot for Winter
          </Link>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">The 5cm Trigger Guarantee</h2>
        <p className="text-lg text-slate-400 leading-relaxed mb-8">
          Our operations are automatically triggered the moment snowfall reaches 5cm. You never have to call us. We monitor the weather, dispatch our crews, and ensure your driveway is clear before you need to leave for work.
        </p>
        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 text-left">
          <h3 className="text-2xl font-bold mb-4 text-emerald-400">The Windrow Problem, Solved.</h3>
          <p className="text-slate-300">
            Every Mississauga homeowner knows the pain: You shovel your driveway perfectly, only for the city plow to drive by and dump a 3-foot wall of heavy, icy snow right at the bottom. Our &quot;Windrow Return&quot; service means our crews come back specifically to clear that blockage, so you are never trapped.
          </p>
        </div>
      </section>
    </main>
  );
}
