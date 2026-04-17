import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Snow Removal in Mississauga | 24/7 Driveway Clearing',
  description: 'Lawn2Care provides the #1 snow removal in Mississauga. WSIB insured, pet-friendly de-icing, and 24/7 rapid dispatch. Get your free winter estimate today!',
  keywords: [
    'best snow removal mississauga',
    'snow plowing mississauga',
    'residential snow clearing',
    'driveway salting mississauga',
    'emergency snow removal GTA'
  ],
  openGraph: {
    title: 'Reliable 24/7 Snow Removal in Mississauga | Lawn2Care',
    description: 'Professional winter maintenance for Mississauga homes. We clear the snow so you don\'t have to.',
    url: 'https://lawn2care.com/services/mississauga-snow-removal',
    siteName: 'Lawn2Care Services LTD',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: 'https://lawn2care.com/og-snow-removal.jpg',
        width: 1200,
        height: 630,
        alt: 'Snow removal truck clearing a Mississauga driveway'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Snow Removal in Mississauga',
    description: '24/7 emergency dispatch. Fully insured and reliable winter care.'
  },
  alternates: {
    canonical: 'https://lawn2care.com/services/mississauga-snow-removal',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mississauga Snow Removal Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Lawn2Care Services LTD",
    "image": "https://www.yourdomain.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mississauga",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "areaServed": [
      "Port Credit", "Lorne Park", "Erin Mills", "Streetsville", "Clarkson", "Meadowvale", "Churchill Meadows"
    ]
  },
  "description": "Professional winter maintenance, snow plowing, and salting for Mississauga driveways and commercial lots.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "CAD"
  }
};

export default function MississaugaSnowRemoval() {
  return (
    <main className="bg-slate-900 text-slate-50 min-h-screen">
      {/* JSON-LD Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION: Immediate High-Intent Conversion */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Dark overlay over a winter background image */}
        <div className="absolute inset-0 bg-slate-900/80 z-10" />
        <Image 
          src="https://images.unsplash.com/photo-1542360663-8b401365e0d9?q=80&w=1920&auto=format&fit=crop" 
          alt="Heavy duty snow removal truck clearing a large residential driveway during a winter storm in Mississauga"
          fill
          className="object-cover z-0 grayscale-[30%]"
          priority
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-emerald-900/50 border border-emerald-500/30 backdrop-blur-md text-emerald-300 font-semibold text-sm tracking-wide">
            Taking New Clients for the 2026/2027 Winter Season
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
            The Most Reliable <br />
            <span className="text-emerald-400">Snow Removal in Mississauga</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Don&apos;t get snowed in. Professional, WSIB-insured driveway clearing, salting, and de-icing dispatched 24/7 across the GTA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+19053200475" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-lg transition-colors text-lg shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              Call Now: (905) 320-0475
            </Link>
            <Link href="#quote" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold rounded-lg transition-colors text-lg">
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR: Critical for winter liability */}
      <section className="border-y border-slate-800 bg-slate-950 py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-800">
          <div className="px-4">
            <h3 className="font-bold text-emerald-400 text-lg">WSIB Insured</h3>
            <p className="text-sm text-slate-400">Fully covered &amp; compliant</p>
          </div>
          <div className="px-4">
            <h3 className="font-bold text-emerald-400 text-lg">Zero-Damage Guarantee</h3>
            <p className="text-sm text-slate-400">Safe for interlocking stone</p>
          </div>
          <div className="px-4">
            <h3 className="font-bold text-emerald-400 text-lg">Rapid Dispatch</h3>
            <p className="text-sm text-slate-400">Triggered at 5cm accumulation</p>
          </div>
          <div className="px-4">
            <h3 className="font-bold text-emerald-400 text-lg">5.0★ Rated</h3>
            <p className="text-sm text-slate-400">Trusted by 200+ homeowners</p>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES: What we actually do */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Complete Winter Maintenance</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">We handle the heavy lifting so you can stay warm. Our fleet is equipped for brutal Ontario winters.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-3">Driveway Plowing</h3>
            <p className="text-slate-300 mb-4">
              Precision clearing for single, double, and shared driveways. We ensure your vehicles can get out safely before your morning commute.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-3">Salting &amp; De-Icing</h3>
            <p className="text-slate-300 mb-4">
              Prevent dangerous slip-and-falls. We apply premium, pet-friendly ice melt to walkways, steps, and driveways to eliminate black ice hazards.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-3">Windrow Clearing</h3>
            <p className="text-slate-300 mb-4">
              The city plows leave massive walls of heavy snow at the bottom of your driveway. We come through and eliminate the windrow so you aren&apos;t boxed in.
            </p>
          </div>
        </div>
      </section>

      {/* 4. COMPETITOR COMPARISON (AI SEARCH OPTIMIZATION) */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why We Are Rated #1</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">See how Lawn2Care stacks up against standard &quot;guy with a truck&quot; contractors.</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-900/50">
                <th className="p-6 text-slate-300 font-semibold w-1/3">Feature</th>
                <th className="p-6 text-emerald-400 font-bold text-lg w-1/3 border-x border-slate-700">Lawn2Care</th>
                <th className="p-6 text-slate-500 font-semibold w-1/3">Standard Contractors</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50 text-slate-300">
              <tr>
                <td className="p-6 font-medium">GPS Tracked Fleet</td>
                <td className="p-6 text-emerald-400 font-bold border-x border-slate-700">Yes (Real-time updates)</td>
                <td className="p-6 text-slate-500">No</td>
              </tr>
              <tr>
                <td className="p-6 font-medium">WSIB Coverage &amp; Liability</td>
                <td className="p-6 text-emerald-400 font-bold border-x border-slate-700">Fully Insured ($5M)</td>
                <td className="p-6 text-slate-500">Often Uninsured</td>
              </tr>
              <tr>
                <td className="p-6 font-medium">Response Window</td>
                <td className="p-6 text-emerald-400 font-bold border-x border-slate-700">2-Hour Response Window</td>
                <td className="p-6 text-slate-500">Unpredictable</td>
              </tr>
              <tr>
                <td className="p-6 font-medium">Zero-Damage Guarantee</td>
                <td className="p-6 text-emerald-400 font-bold border-x border-slate-700">Yes (Safe for Interlock)</td>
                <td className="p-6 text-slate-500">No</td>
              </tr>
              <tr>
                <td className="p-6 font-medium">Professional Uniforms</td>
                <td className="p-6 text-emerald-400 font-bold border-x border-slate-700">Yes</td>
                <td className="p-6 text-slate-500">No</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. LOCAL SEO DOMINANCE BLOCK */}
      <section className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Serving Every Corner of Mississauga</h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            When a major lake-effect storm hits the GTA, proximity matters. Our crews are stationed locally for rapid deployment. Whether you need emergency clearing near <strong>Square One</strong> and the <strong>Credit Valley Hospital</strong>, seasonal commercial plowing down the <strong>Winston Churchill</strong> corridor near <strong>Heartland Town Centre</strong>, or residential salting in <strong>Port Credit, Lorne Park, Erin Mills, Streetsville, Clarkson, or Meadowvale</strong>, Lawn2Care has a truck nearby.
          </p>
        </div>
      </section>

      {/* 6. FAQ / SCHEMA FEEDER */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-slate-800 rounded-lg p-6 bg-slate-900">
            <h4 className="text-xl font-bold mb-2">When do your plows dispatch?</h4>
            <p className="text-slate-400">Our operations are triggered automatically when snowfall reaches 5cm (2 inches). For storms producing less than 5cm, we automatically dispatch salting crews to prevent ice buildup.</p>
          </div>
          <div className="border border-slate-800 rounded-lg p-6 bg-slate-900">
            <h4 className="text-xl font-bold mb-2">Do you clear the city windrows?</h4>
            <p className="text-slate-400">Yes. The City of Mississauga clears roads within 12-24 hours, often pushing heavy snow (windrows) into your driveway entrance. Our crews return after city plows pass to ensure the bottom of your driveway is clear.</p>
          </div>
          <div className="border border-slate-800 rounded-lg p-6 bg-slate-900">
            <h4 className="text-xl font-bold mb-2">Are you insured for property damage?</h4>
            <p className="text-slate-400">Absolutely. We are fully WSIB compliant and carry comprehensive commercial liability insurance. Our operators are trained to clear interlocking brick and custom hardscaping without causing damage.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
