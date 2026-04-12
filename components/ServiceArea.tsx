'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Search, ChevronDown } from 'lucide-react';

export function ServiceArea() {
  const [postalCode, setPostalCode] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const regions = [
    { name: 'Toronto', fsas: ['M5A', 'M5B', 'M5C', 'M5E', 'M5G', 'M5H', 'M5J', 'M5K', 'M5L', 'M5S', 'M5T', 'M5V', 'M5W', 'M5X', 'M2H', 'M2J', 'M2K', 'M2L', 'M2M', 'M2N', 'M2P', 'M2R', 'M3A', 'M3B', 'M3C', 'M3H', 'M3J', 'M3K', 'M3L', 'M3M', 'M3N', 'M6A', 'M6B', 'M6L', 'M9L', 'M9M', 'M1B', 'M1C', 'M1E', 'M1G', 'M1H', 'M1J', 'M1K', 'M1L', 'M1M', 'M1N', 'M1P', 'M1R', 'M1S', 'M1T', 'M1V', 'M1W', 'M1X', 'M8V', 'M8W', 'M8X', 'M8Y', 'M8Z', 'M9A', 'M9B', 'M9C', 'M9P', 'M9R', 'M9V', 'M9W', 'M4B', 'M4C', 'M4G', 'M4H', 'M4E', 'M4J', 'M4K', 'M4L', 'M4M', 'M4N', 'M4P', 'M4R', 'M4S', 'M4T', 'M4V', 'M4W', 'M4X', 'M4Y', 'M5M', 'M5N', 'M5P', 'M5R', 'M6C', 'M6E', 'M6G', 'M6H', 'M6J', 'M6K', 'M6M', 'M6N', 'M6P', 'M6R', 'M6S'] },
    { name: 'Mississauga', fsas: ['L4T', 'L4V', 'L4W', 'L4X', 'L4Y', 'L4Z', 'L5A', 'L5B', 'L5C', 'L5E', 'L5G', 'L5H', 'L5J', 'L5K', 'L5L', 'L5M', 'L5N', 'L5P', 'L5R', 'L5S', 'L5T', 'L5V', 'L5W'] },
    { name: 'Brampton', fsas: ['L6P', 'L6R', 'L6S', 'L6T', 'L6V', 'L6W', 'L6X', 'L6Y', 'L6Z', 'L7A'] },
    { name: 'York Region', fsas: ['L3P', 'L3R', 'L3S', 'L3T', 'L4B', 'L4C', 'L4E', 'L4G', 'L4H', 'L4J', 'L4K', 'L4L', 'L4S', 'L6A', 'L6B', 'L6C', 'L6E'] },
    { name: 'Durham Region', fsas: ['L1B', 'L1C', 'L1E', 'L1G', 'L1H', 'L1J', 'L1K', 'L1L', 'L1M', 'L1N', 'L1P', 'L1R', 'L1S', 'L1T', 'L1V', 'L1W', 'L1X', 'L1Y'] },
    { name: 'Halton Region', fsas: ['L6H', 'L6J', 'L6K', 'L6L', 'L6M', 'L7B', 'L7C', 'L7E', 'L7G', 'L7J', 'L7K', 'L7L', 'L7M', 'L7N', 'L7P', 'L7R', 'L7S', 'L7T'] }
  ];

  const allFSAs = new Set(regions.flatMap(r => r.fsas));

  const checkServiceArea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postalCode) return;
    
    const normalized = postalCode.toUpperCase().replace(/\s/g, '');
    const fsa = normalized.substring(0, 3);
    
    if (fsa.startsWith('M') || allFSAs.has(fsa)) {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  return (
    <section id="service-area" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-primary mb-4">
              Proudly Serving the Greater Toronto Area
            </h2>
            <p className="text-lg text-dark/70 mb-8">
              We&apos;re your local landscaping experts, familiar with the GTA&apos;s unique climate, soil conditions, and municipal bylaws.
            </p>

            <div className="mb-10">
              <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-secondary" />
                Covered Regions
              </h4>
              <div className="flex flex-wrap gap-3 mb-6">
                {regions.map((region) => (
                  <span key={region.name} className="px-4 py-2 rounded-full border border-primary/20 text-sm font-medium text-primary hover:bg-secondary hover:text-white hover:border-secondary transition-colors cursor-default">
                    {region.name}
                  </span>
                ))}
              </div>

              <details className="group bg-white p-4 rounded-xl border border-primary/10 shadow-sm">
                <summary className="text-sm font-semibold text-primary cursor-pointer list-none flex items-center justify-between">
                  <span>View All Serviced Postal Codes (FSAs)</span>
                  <ChevronDown size={18} className="text-secondary group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <div className="mt-4 text-xs text-dark/70 space-y-3 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                  {regions.map(region => (
                    <div key={region.name}>
                      <strong className="text-primary block mb-1">{region.name}:</strong> 
                      <span className="leading-relaxed">{region.fsas.join(', ')}</span>
                    </div>
                  ))}
                </div>
              </details>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/5">
              <h4 className="font-bold text-primary mb-2">Not sure if we serve your area?</h4>
              <p className="text-sm text-dark/60 mb-4">Enter your postal code to check our coverage.</p>
              
              <form onSubmit={checkServiceArea} className="flex gap-2">
                <div className="relative flex-grow">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark/40" />
                  <input 
                    type="text" 
                    placeholder="e.g. M5V 2H1" 
                    value={postalCode}
                    onChange={(e) => {
                      setPostalCode(e.target.value);
                      setStatus('idle');
                    }}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-primary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all uppercase"
                    maxLength={7}
                  />
                </div>
                <button type="submit" className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap">
                  Check
                </button>
              </form>
              
              {status === 'success' && (
                <p className="mt-3 text-sm font-medium text-green-600 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-600"></span>
                  Yes, we serve your area! Contact us for a quote.
                </p>
              )}
              {status === 'error' && (
               <p className="mt-3 text-sm font-medium text-amber-600 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  We might serve your area. Please contact us to confirm.
                </p>
              )}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 h-[400px] lg:h-[600px] bg-white rounded-3xl overflow-hidden shadow-xl relative border-4 border-white"
          >
            {/* Mock Map centered on GTA */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.434447117381!2d-79.38318428450205!3d43.65322597912136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb34d98af7b5%3A0x14f5660d05e58ce2!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-80"
            ></iframe>
            <div className="absolute inset-0 bg-primary/10 pointer-events-none mix-blend-multiply"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
