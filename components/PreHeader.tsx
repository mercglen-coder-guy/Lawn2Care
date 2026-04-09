'use strict';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export function PreHeader() {
  return (
    <div className="bg-primary/95 backdrop-blur-md text-light text-sm py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center z-50 relative">
      <div className="flex items-center gap-2 mb-2 md:mb-0">
        <MapPin size={16} className="text-secondary" />
        <span>Serving Mississauga, Oakville, Milton & Surrounding GTA</span>
      </div>
      
      <div className="flex items-center gap-4 md:gap-6 divide-x divide-white/10">
        <a href="tel:+19053200475" className="flex items-center gap-2 hover:text-secondary transition-colors">
          <Phone size={16} className="text-secondary" />
          <span className="font-medium">+1(905)-320-0475</span>
        </a>
        
        <div className="flex items-center gap-2 pl-4 md:pl-6 hidden sm:flex">
          <Clock size={16} className="text-secondary" />
          <span>Mon to Sat: 09:00 am to 05:00 pm</span>
          <span className="flex items-center gap-1 ml-2 text-xs font-medium bg-success/20 text-green-400 px-2 py-0.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Open Now
          </span>
        </div>
        
        <div className="flex items-center gap-3 pl-4 md:pl-6">
          <a href="#" className="hover:text-secondary hover:scale-110 transition-all">
            <Instagram size={16} />
          </a>
          <a href="#" className="hover:text-secondary hover:scale-110 transition-all">
            <Facebook size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
