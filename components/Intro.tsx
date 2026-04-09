'use client';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import Image from 'next/image';

export function Intro() {
  const points = [
    "Durable materials & modern techniques for long-lasting results",
    "Residential & commercial projects of all sizes",
    "Customized solutions for Mississauga's unique climate & soil",
    "From design to installation – we handle every step"
  ];

  return (
    <section id="about" className="py-20 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-primary mb-6 leading-tight">
              Expert Landscaping & Hardscaping Services in Mississauga
            </h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-8">
              We provide professional landscaping and hardscaping services designed to enhance the beauty and functionality of your outdoor space. From custom garden designs and lawn care to patios, walkways, and driveways, our team delivers high-quality craftsmanship tailored to your vision and budget.
            </p>
            
            <ul className="space-y-4 mb-10">
              {points.map((point, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 bg-secondary/20 p-1 rounded-full shrink-0">
                    <Check size={16} className="text-secondary" />
                  </div>
                  <span className="text-dark/90 font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>
            
            <a href="#contact" className="inline-block px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-lg">
              Discuss Your Project
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="https://picsum.photos/seed/intro/800/600" 
              alt="Our team working on a hardscaping project in Mississauga" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-4 border-white/20 rounded-2xl pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
