'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How much does a landscaping project cost?",
      answer: "Project costs vary widely based on scope, materials, and property size. A simple walkway might start around $5,000, while a complete backyard oasis with an outdoor kitchen can exceed $50,000. We provide detailed, transparent quotes after our free on-site consultation."
    },
    {
      question: "How long does a typical project take?",
      answer: "Small projects like a front walkway or garden refresh typically take 3-5 days. Larger projects like a full driveway or backyard patio can take 1-3 weeks. We provide a clear timeline before starting and communicate daily on our progress."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes, we offer free, no-obligation on-site consultations. We'll visit your property, discuss your vision, take measurements, and provide a detailed written estimate within 48 hours."
    },
    {
      question: "Are you insured and WSIB compliant?",
      answer: "Absolutely. We carry $5 million in commercial liability insurance and all our workers are fully covered under WSIB. We can provide certificates of insurance upon request before starting any work."
    },
    {
      question: "What materials do you use?",
      answer: "We source premium materials from trusted local suppliers like Permacon, Techo-Bloc, and Unilock. We select materials based on durability, aesthetics, and suitability for the Canadian climate."
    },
    {
      question: "Do you offer warranties?",
      answer: "Yes, we stand behind our work. We offer a 2-year warranty on all hardscaping installations against settling and shifting, and a 1-year warranty on all plant materials (with proper irrigation)."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-primary mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-primary/10 pb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
              >
                <h4 className={`text-lg font-bold pr-8 transition-colors ${openIndex === index ? 'text-secondary' : 'text-primary group-hover:text-secondary'}`}>
                  {faq.question}
                </h4>
                <div className="shrink-0 text-secondary">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-dark/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
