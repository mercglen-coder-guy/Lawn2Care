'use client';

import { motion } from 'motion/react';
import { ArrowRight, Play, Star, ShieldCheck, Award } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Image/Video Fallback */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1920&auto=format&fit=crop" 
          alt="Beautiful landscaping project in Mississauga" 
          fill 
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/60 mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] tracking-tight mb-6"
          >
            Transforming Mississauga Homes into Stunning Outdoor Sanctuaries
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
          >
            Award-winning landscaping & hardscaping since 2018. 200+ projects completed across Mississauga. 5.0★ rated. Fully insured & WSIB compliant.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a href="#contact" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-br from-secondary to-[#B8954F] text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
              Get Your Free Estimate
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#portfolio" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-lg hover:bg-white/20 transition-all">
              <Play size={20} className="fill-white/80 group-hover:scale-110 transition-transform" />
              Explore Our Projects
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap items-center gap-6 text-white/80 text-sm font-medium"
          >
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <div className="flex text-secondary">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-secondary" />)}
              </div>
              <span>4.9 (127 Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={18} className="text-secondary" />
              <span>Best of Houzz 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-secondary" />
              <span>WSIB Certified</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
