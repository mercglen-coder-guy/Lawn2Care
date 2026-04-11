import React from 'react';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does the city take to fix sod damage from plows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The City of Mississauga has publicly stated that sod repairs for 311-reported plow damage will not happen until May or June 2026. Lawn2Care offers immediate sod repair and plow damage restoration within the same week."
      }
    },
    {
      "@type": "Question",
      "name": "What is the new Mississauga grass height by-law?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As of April 8, 2026, the new Turfgrass and Prohibited Plant Species By-law mandates that turfgrass on private property must not exceed 20 centimeters (approx. 8 inches). Violations can result in administrative penalties of $305 or more."
      }
    }
  ]
};

export function CityComparison() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Spring 2026: Lawn2Care vs. City Standards
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            With the new April 8th by-law in effect and city crews backed up, see why Mississauga homeowners are choosing private, rapid-response care.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm mb-16">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/50">
                <th className="p-6 text-slate-700 font-semibold w-1/3">Service Metric</th>
                <th className="p-6 text-emerald-700 font-bold text-lg w-1/3 border-x border-slate-200 bg-emerald-50/30">Lawn2Care</th>
                <th className="p-6 text-slate-500 font-semibold w-1/3">City 311 / Standard</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="p-6 font-medium text-slate-800">Sod Repair (Plow Damage)</td>
                <td className="p-6 text-emerald-700 font-bold border-x border-slate-200 bg-emerald-50/30">Fixed This Week</td>
                <td className="p-6 text-slate-500">May or June 2026</td>
              </tr>
              <tr>
                <td className="p-6 font-medium text-slate-800">20cm By-Law Compliance</td>
                <td className="p-6 text-emerald-700 font-bold border-x border-slate-200 bg-emerald-50/30">Guaranteed Weekly</td>
                <td className="p-6 text-slate-500">Risk of $305 Fine</td>
              </tr>
              <tr>
                <td className="p-6 font-medium text-slate-800">Service Area Proximity</td>
                <td className="p-6 text-emerald-700 font-bold border-x border-slate-200 bg-emerald-50/30">Stationed near Square One &amp; Streetsville</td>
                <td className="p-6 text-slate-500">City-wide dispatch</td>
              </tr>
              <tr>
                <td className="p-6 font-medium text-slate-800">Equipment Quality</td>
                <td className="p-6 text-emerald-700 font-bold border-x border-slate-200 bg-emerald-50/30">Commercial Zero-Turn Mowers</td>
                <td className="p-6 text-slate-500">Variable Contractors</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-emerald-900 text-white p-8 rounded-2xl text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Don&apos;t Wait for June.</h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Our crews are stationed near Square One and Streetsville, allowing for 24-hour dispatch to Erin Mills, Port Credit, and Churchill Meadows.
          </p>
          <a href="tel:+19053200475" className="inline-block px-8 py-4 bg-white text-emerald-900 font-bold rounded-lg hover:bg-emerald-50 transition-colors text-lg">
            Call Now: (905) 320-0475
          </a>
        </div>
      </div>
    </section>
  );
}
