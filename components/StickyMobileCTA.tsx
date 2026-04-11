'use client';

import { Phone } from 'lucide-react';

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-emerald-600 border-t border-emerald-500 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
      <a 
        href="tel:+19053200475" 
        className="flex items-center justify-center gap-3 w-full py-4 px-6 text-white font-bold text-lg"
      >
        <Phone size={24} className="animate-pulse" />
        Call Now: (905) 320-0475
      </a>
    </div>
  );
}
