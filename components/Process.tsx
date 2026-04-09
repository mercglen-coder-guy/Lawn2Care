'use client';

import { motion } from 'motion/react';
import { MessageSquare, FileText, Hammer, CheckSquare, HeartHandshake } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Free Consultation",
      description: "We visit your property, discuss your vision, and assess the space. No obligation, just honest advice."
    },
    {
      icon: FileText,
      title: "Custom Design & Quote",
      description: "Receive a detailed design plan and transparent quote within 48 hours. We work within your budget."
    },
    {
      icon: Hammer,
      title: "Professional Installation",
      description: "Our skilled team executes the project with precision, using premium materials and proven techniques."
    },
    {
      icon: CheckSquare,
      title: "Final Walkthrough",
      description: "We review every detail with you. Your satisfaction is guaranteed before we consider the job complete."
    },
    {
      icon: HeartHandshake,
      title: "Ongoing Support",
      description: "We're here for maintenance, questions, and future projects. Building lasting relationships matters."
    }
  ];

  return (
    <section className="py-24 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-primary mb-4"
          >
            Our Simple, Stress-Free Process
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-primary/10 -translate-y-1/2 z-0">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-secondary"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative pt-12 lg:pt-16"
              >
                <div className="absolute top-4 left-4 text-5xl font-serif font-bold text-primary/5 select-none">
                  0{index + 1}
                </div>
                
                <div className="w-16 h-16 rounded-full bg-primary text-secondary flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-lg border-4 border-white lg:absolute lg:-top-8 lg:left-1/2 lg:-translate-x-1/2">
                  <step.icon size={24} />
                </div>
                
                <h4 className="text-lg font-bold text-primary mb-3 text-center lg:text-left">{step.title}</h4>
                <p className="text-dark/70 text-sm text-center lg:text-left leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
