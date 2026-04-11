import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Meadowvale Lawn Care & Landscaping | Lawn2Care',
  description: 'Expert lawn care and landscaping services in Meadowvale, Mississauga. Professional maintenance for residential and commercial properties.',
  alternates: {
    canonical: 'https://lawn2care.com/mississauga/meadowvale',
  },
};

export default function MeadowvaleLawnCare() {
  return (
    <main className="bg-white min-h-screen pt-24 pb-16">
      <section className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6 text-slate-900">
          Meadowvale <span className="text-emerald-600">Lawn Care</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          Providing top-tier lawn maintenance for homes and corporate parks in <strong>Meadowvale</strong>. Our crews are stationed near Winston Churchill Blvd for rapid response.
        </p>
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Commercial & Residential Excellence</h2>
          <p className="text-slate-600 mb-6">
            From large corporate campuses near the Meadowvale GO station to family homes, we offer comprehensive turf management. Don&apos;t risk a $305 fine under the new 20cm by-law—let our professionals handle your weekly mowing and weed control.
          </p>
          <Link href="/#contact" className="inline-block px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors">
            Get a Meadowvale Estimate
          </Link>
        </div>
      </section>
    </main>
  );
}
