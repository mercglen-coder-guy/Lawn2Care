'use client';

import { motion } from 'motion/react';
import { Users, Star, Shield, Clock, CheckCircle } from 'lucide-react';

export function TrustBar() {
  const trustItems = [
    { icon: Users, text: 'Trusted by 200+ Homeowners' },
    { icon: Star, text: '5.0★ Average Rating' },
    { icon: Shield, text: '100% Satisfaction Guarantee' },
    { icon: Clock, text: '5+ Years Experience' },
    { icon: CheckCircle, text: 'Fully Insured & WSIB' },
  ];

  return (
    <section className="bg-light py-8 border-b border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-6 md:gap-4">
          {trustItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center gap-3 group cursor-default"
            >
              <div className="p-2 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                <item.icon size={20} className="text-secondary" />
              </div>
              <span className="text-sm font-semibold text-dark/80 whitespace-nowrap">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
