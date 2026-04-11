import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mississauga’s New 20cm Grass Law: How to Avoid the $305 Fine',
  description: 'The City of Mississauga enacted a new Turfgrass and Prohibited Plant Species By-law on April 8, 2026. Learn the rules for the 20cm height limit and naturalized gardens.',
  alternates: {
    canonical: 'https://lawn2care.com/blog/mississauga-20cm-grass-bylaw-2026',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://lawn2care.com/blog/mississauga-20cm-grass-bylaw-2026"
  },
  "headline": "Mississauga’s New 20cm Grass Law: How to Avoid the $305 Fine",
  "description": "Everything you need to know about Mississauga's April 2026 Turfgrass By-law, the 20cm height limit, and how to stay compliant.",
  "image": "https://images.unsplash.com/photo-1592424005688-57380dc5f8e7?q=80&w=1200&auto=format&fit=crop",  
  "author": {
    "@type": "Organization",
    "name": "Lawn2Care Services LTD"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "Lawn2Care Services LTD",
    "logo": {
      "@type": "ImageObject",
      "url": "https://lawn2care.com/logo.png"
    }
  },
  "datePublished": "2026-04-09",
  "dateModified": "2026-04-11"
};

export default function BylawBlog() {
  return (
    <main className="bg-white min-h-screen pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-red-100 text-red-700 font-semibold text-sm tracking-wide uppercase">
            Regulatory Update - April 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Mississauga&apos;s New 20cm Grass Law: How to Avoid the $305 Fine
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            By Lawn2Care Regulatory Team | Published April 9, 2026
          </p>
        </div>

        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12 shadow-lg">
          <Image 
            src="https://images.unsplash.com/photo-1592424005688-57380dc5f8e7?q=80&w=1200&auto=format&fit=crop" 
            alt="Perfectly manicured lawn in Mississauga compliant with the new by-law"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg prose-emerald max-w-none text-slate-700">
          <p className="lead text-xl font-medium text-slate-800">
            On April 8, 2026, the City of Mississauga officially enacted the new <strong>Turfgrass and Prohibited Plant Species By-law</strong>. Replacing the older, court-struck regulations, this new framework brings strict enforcement to residential lawn maintenance.
          </p>

          <h2>The 20cm Rule: What You Need to Know</h2>
          <p>
            The core of the new by-law is the absolute height limit. <strong>Turfgrass on any private property must not exceed 20 centimeters (approx. 8 inches) in height.</strong> 
          </p>
          <p>
            Failure to comply can result in a quick visit from By-law Enforcement. If a warning is ignored, the city will dispatch contractors to cut the grass at the homeowner&apos;s expense, plus a hefty administrative penalty (often totaling upwards of $305).
          </p>

          <h2>What About &quot;Naturalized Gardens&quot;?</h2>
          <p>
            The city has clarified the rules for eco-friendly yards. &quot;Naturalized areas&quot; are permitted, but they are no longer a loophole for a neglected lawn. A naturalized garden must be deliberately planted and maintained, and it <strong>cannot</strong> contain prohibited invasive species. Furthermore, buffer zones must be maintained near sidewalks and property lines.
          </p>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
            <h3 className="text-xl font-bold text-slate-900 mt-0">Don&apos;t Risk a Fine. Get Automated Compliance.</h3>
            <p className="mb-4">
              Lawn2Care offers weekly and bi-weekly mowing schedules that guarantee your property stays well below the 20cm threshold. We also identify and remove prohibited plant species.
            </p>
            <Link href="/#contact" className="inline-block px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors">
              Book Weekly Lawn Maintenance
            </Link>
          </div>

          <h2>The 311 Backlog: Fix Plow Damage Now</h2>
          <p>
            If your lawn was damaged by city snowplows over the winter, you are still responsible for the overall state of your yard. While the City of Mississauga&apos;s official spring maintenance started in March, they have publicly stated that <strong>sod repairs for plow damage won&apos;t happen until May or June</strong>.
          </p>
          <p>
            Don&apos;t wait for June and risk a messy, non-compliant yard. Lawn2Care fixes 311-reported plow damage and sod tearing <em>this week</em>.
          </p>
        </div>
      </article>
    </main>
  );
}
