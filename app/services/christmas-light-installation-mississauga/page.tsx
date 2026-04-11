import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Professional Christmas & Holiday Light Installation Mississauga',
  description: 'Premium holiday light installation in Mississauga. Custom-cut LED designs, professional hanging, and in-January takedown service. Book your design today.',
  keywords: [
    'holiday light installation',
    'outdoor christmas lights mississauga',
    'professional light hangers',
    'custom holiday lighting GTA'
  ],
  alternates: {
    canonical: 'https://lawn2care.com/services/christmas-light-installation-mississauga',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional Christmas & Holiday Light Installation Mississauga",
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
  "description": "High-end custom holiday and Christmas light installation for residential and commercial properties in Mississauga.",
};

export default function ChristmasLightInstallation() {
  return (
    <main className="bg-slate-950 text-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/70 z-10" />
        <Image 
          src="https://images.unsplash.com/photo-1576614436585-714081033100?q=80&w=1920&auto=format&fit=crop" 
          alt="Beautifully lit home with custom Christmas lights"
          fill
          className="object-cover z-0"
          priority
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-amber-900/50 border border-amber-500/30 backdrop-blur-md text-amber-300 font-semibold text-sm tracking-wide uppercase">
            Booking Now for the Holiday Season
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
            Professional Christmas & <br />
            <span className="text-amber-400">Holiday Light Installation</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Skip the ladders and the tangled wires. We provide high-end, custom-cut LED lighting designs for homes in Port Credit, Lorne Park, and across Mississauga.
          </p>
          <Link href="#quote" className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg transition-colors text-lg inline-block shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            Get a Custom Lighting Quote
          </Link>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-amber-400 text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Custom Design</h3>
            <p className="text-slate-400">We measure your roofline and landscape to custom-cut commercial-grade LED lights that perfectly fit your home&apos;s architecture.</p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-amber-400 text-2xl">🛠️</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Safe Installation</h3>
            <p className="text-slate-400">Our fully insured, WSIB-compliant crews handle the dangerous ladder work so you can stay warm inside.</p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-amber-400 text-2xl">📦</span>
            </div>
            <h3 className="text-xl font-bold mb-3">In-January Takedown</h3>
            <p className="text-slate-400">When the season is over, we return to carefully remove, label, and store your lights for next year.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
