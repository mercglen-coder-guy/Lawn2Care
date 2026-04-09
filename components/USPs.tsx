'use client';

import { motion } from 'motion/react';
import { Award, ShieldCheck, Heart, Clock, Home, Trophy } from 'lucide-react';

export function USPs() {
  const usps = [
    {
      icon: Award,
      title: "Exceptional Quality Service",
      description: "We deliver premium services with attention to every detail. You'll see and feel the difference in our craftsmanship."
    },
    {
      icon: ShieldCheck,
      title: "100% Satisfaction Guarantee",
      description: "We assure complete satisfaction at highly competitive prices. If you're not happy, we make it right."
    },
    {
      icon: Heart,
      title: "Happy & Loyal Customers",
      description: "We have one of the best reputations in Mississauga's landscaping business, with countless repeat clients."
    },
    {
      icon: Clock,
      title: "Fast & Reliable Response",
      description: "Quick support and timely follow-ups. We respond within 2 hours and show up when we say we will."
    },
    {
      icon: Home,
      title: "Trusted by the Community",
      description: "We've earned trust through consistent, clean property maintenance and honest communication."
    },
    {
      icon: Trophy,
      title: "5+ Years of Experience",
      description: "Our expertise ensures top-quality service every time. We know Mississauga's climate, soil, and bylaws."
    }
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4"
          >
            What Sets Us Apart From the Rest
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80"
          >
            Why Mississauga homeowners trust us for their outdoor transformations
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((usp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-secondary transition-all duration-300 group"
            >
              <usp.icon size={48} className="text-secondary mb-6 group-hover:-translate-y-1 transition-transform" strokeWidth={1.5} />
              <h4 className="text-xl font-bold text-secondary mb-3">{usp.title}</h4>
              <p className="text-white/80 leading-relaxed text-sm md:text-base">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
