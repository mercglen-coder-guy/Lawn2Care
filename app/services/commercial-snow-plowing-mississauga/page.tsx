import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Commercial Snow Plowing & Management in Mississauga',
  description: 'Reliable commercial snow removal and parking lot plowing in Mississauga. GPS-tracked fleets, zero-ice guarantees, and $5M liability coverage for your business.',
  keywords: [
    'commercial snow removal mississauga',
    'parking lot plowing',
    'industrial snow management',
    'corporate snow clearing GTA'
  ],
  alternates: {
    canonical: 'https://lawn2care.com/services/commercial-snow-plowing-mississauga',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BusinessService",
  "name": "Commercial Snow Plowing & Management in Mississauga",
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
  "areaServed": {
    "@type": "City",
    "name": "Mississauga"
  },
  "description": "High-ticket commercial snow management, ensuring business continuity for retail plazas, warehouses, and office parks.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "CAD"
  }
};

export default function CommercialSnowPlowing() {
  return (
    <main className="bg-slate-950 text-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/85 z-10" />
        <Image 
          src="https://images.unsplash.com/photo-1542360663-8b401365e0d9?q=80&w=1920&auto=format&fit=crop" 
          alt="Commercial snow plowing a large parking lot in Mississauga"
          fill
          className="object-cover z-0 grayscale-[50%]"
          priority
        />
        
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-900/50 border border-blue-500/30 backdrop-blur-md text-blue-300 font-semibold text-sm tracking-wide uppercase">
            B2B Winter Management Contracts
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
            Commercial Snow Plowing & <br />
            <span className="text-blue-400">Management in Mississauga</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
            Ensure absolute business continuity. GPS-tracked fleets and &quot;Zero-Ice&quot; guarantees for retail plazas, warehouses near Pearson Airport, and office parks in Meadowvale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+19053200475" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors text-lg shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              Request Commercial Bid
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Liability Mitigation & Business Continuity</h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              For commercial property managers in Mississauga, snow isn&apos;t just an inconvenience—it&apos;s a massive liability risk. A slip-and-fall lawsuit can cost millions.
            </p>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We provide comprehensive, documented snow management. From heavy-duty loaders for massive industrial lots near the airport to precision salting for retail storefronts, our $5M liability coverage and detailed service logs protect your bottom line.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-300">
                <span className="text-blue-400 text-xl">✓</span> Dedicated Account Managers
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <span className="text-blue-400 text-xl">✓</span> GPS-Verified Service Logs
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <span className="text-blue-400 text-xl">✓</span> Pre-Storm Anti-Icing Treatments
              </li>
            </ul>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden border border-slate-800">
            <Image 
              src="https://images.unsplash.com/photo-1542360663-8b401365e0d9?q=80&w=800&auto=format&fit=crop" 
              alt="Heavy machinery clearing snow"
              fill
              className="object-cover grayscale-[20%]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
