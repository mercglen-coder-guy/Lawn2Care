import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Port Credit Lawn Care & Landscaping | Lawn2Care',
  description: 'Premium lawn care and landscaping services in Port Credit, Mississauga. We specialize in lakeside property maintenance and salt-spray recovery.',
  alternates: {
    canonical: 'https://lawn2care.com/mississauga/port-credit',
  },
};

export default function PortCreditLawnCare() {
  return (
    <main className="bg-white min-h-screen pt-24 pb-16">
      <section className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6 text-slate-900">
          Port Credit <span className="text-emerald-600">Lawn Care</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          Serving lakeside homes and businesses in <strong>Port Credit</strong>. We understand the unique challenges of properties near Lake Ontario, from sandy soil profiles to winter salt-spray recovery.
        </p>
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Lakeside Expertise</h2>
          <p className="text-slate-600 mb-6">
            Properties south of Lakeshore Road require specialized care. Our crews are stationed locally, allowing for rapid 24-hour dispatch to Port Credit and surrounding areas. We ensure your lawn is lush, green, and fully compliant with Mississauga&apos;s new 20cm by-law.
          </p>
          <Link href="/#contact" className="inline-block px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors">
            Get a Port Credit Estimate
          </Link>
        </div>
      </section>
    </main>
  );
}
