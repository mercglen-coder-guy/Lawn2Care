'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Search } from 'lucide-react';

export function ServiceArea() {
  const [postalCode, setPostalCode] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const neighborhoods = [
    'Lorne Park', 'Credit Valley', 'Port Credit', 'Erin Mills', 
    'Meadowvale', 'Clarkson', 'Hurontario', 'Applewood', 
    'Lakeview', 'Mineola'
  ];

  const checkServiceArea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postalCode) return;
    
    // Simple mock validation for Mississauga postal codes (L4, L5)
    const normalized = postalCode.toUpperCase().replace(/\s/g, '');
    if (normalized.startsWith('L4') || normalized.startsWith('L5')) {
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
              Proudly Serving Mississauga & Surrounding Areas
            </h2>
            <p className="text-lg text-dark/70 mb-8">
              We&apos;re your local landscaping experts, familiar with Mississauga&apos;s unique climate, soil conditions, and municipal bylaws.
            </p>

            <div className="mb-10">
              <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-secondary" />
                Key Neighborhoods
              </h4>
              <div className="flex flex-wrap gap-3">
                {neighborhoods.map((area) => (
                  <span key={area} className="px-4 py-2 rounded-full border border-primary/20 text-sm font-medium text-primary hover:bg-secondary hover:text-white hover:border-secondary transition-colors cursor-default">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/5">
              <h4 className="font-bold text-primary mb-2">Not sure if we serve your area?</h4>
              <p className="text-sm text-dark/60 mb-4">Enter your postal code to check our coverage.</p>
              
              <form onSubmit={checkServiceArea} className="flex gap-2">
                <div className="relative flex-grow">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark/40" />
                  <input 
                    type="text" 
                    placeholder="e.g. L5H 1X1" 
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
            {/* Mock Map using an image for simplicity, ideally an interactive Google Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.58022716103!2d-79.80053641217642!3d43.58904520000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b469fe76b05b7%3A0x3146cbed75966db!2sMississauga%2C%20ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca" 
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
