import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Streetsville Snow Removal & Plowing | Lawn2Care',
  description: 'Local snow removal services in Streetsville, Mississauga. Fast dispatch, windrow clearing, and salting near Streetsville Memorial Park.',
  alternates: {
    canonical: 'https://lawn2care.com/areas/streetsville-snow-removal',
  },
};

export default function StreetsvilleSnowRemoval() {
  return (
    <main className="bg-slate-900 text-slate-50 min-h-screen">
      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
          Streetsville <span className="text-emerald-400">Snow Removal</span>
        </h1>
        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
          Serving homes and businesses near <strong>Streetsville Memorial Park</strong> and the historic downtown village. Because we have crews stationed locally in the Streetsville area, we guarantee rapid dispatch when the lake-effect snow hits.
        </p>
        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
          <h2 className="text-2xl font-bold mb-4">Why Choose Local?</h2>
          <p className="text-slate-400 mb-6">
            When a major storm closes Mississauga Road or Queen Street South, out-of-town contractors get stuck in traffic. Our local Streetsville plows are already in your neighborhood, ready to clear your driveway and the city windrow.
          </p>
          <Link href="/services/mississauga-snow-removal" className="text-emerald-400 font-bold hover:text-emerald-300 underline">
            View Our Full Snow Removal Services &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
