import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Churchill Meadows Lawn Care | Lawn2Care',
  description: 'Specialized lawn care for Churchill Meadows, Mississauga. We understand the local clay-heavy soil and provide expert aeration and turf management.',
  alternates: {
    canonical: 'https://lawn2care.com/mississauga/churchill-meadows',
  },
};

export default function ChurchillMeadowsLawnCare() {
  return (
    <main className="bg-white min-h-screen pt-24 pb-16">
      <section className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6 text-slate-900">
          Churchill Meadows <span className="text-emerald-600">Lawn Care</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          Expert turf management tailored for homes in <strong>Churchill Meadows</strong>. We know the local environment and how to make your lawn thrive.
        </p>
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Clay Soil Specialists</h2>
          <p className="text-slate-600 mb-6">
            We understand the clay-heavy soil in Churchill Meadows and use specialized core aeration tools to ensure proper drainage and root growth. Whether you need weekly mowing to comply with the new 20cm by-law or full sod replacement, our local crews are ready.
          </p>
          <Link href="/#contact" className="inline-block px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors">
            Get a Churchill Meadows Estimate
          </Link>
        </div>
      </section>
    </main>
  );
}
