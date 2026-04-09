'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      text: "Absolutely transformed our backyard! The interlock patio is stunning and the team was professional from start to finish. Highly recommend!",
      author: "Sarah M.",
      location: "Lorne Park",
      project: "Patio & Garden"
    },
    {
      text: "Best landscaping company in Mississauga. They completed our driveway on time and on budget. The quality is exceptional.",
      author: "James K.",
      location: "Credit Valley",
      project: "Driveway"
    },
    {
      text: "Our garden has never looked better. They listened to our needs and delivered beyond expectations. Will use them again!",
      author: "Maria R.",
      location: "Port Credit",
      project: "Garden Design"
    },
    {
      text: "The retaining wall they built is both functional and beautiful. The crew was respectful of our property and cleaned up perfectly every day.",
      author: "David T.",
      location: "Erin Mills",
      project: "Retaining Wall"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, reviews.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-primary mb-4"
          >
            What Mississauga Homeowners Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-dark/70"
          >
            Real reviews from your neighbors who trusted us with their outdoor spaces
          </motion.p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-light rounded-3xl p-8 md:p-12 shadow-sm border border-primary/5"
              >
                <Quote size={48} className="text-secondary/20 mb-6" />
                <div className="flex text-secondary mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-secondary" />)}
                </div>
                <p className="text-xl md:text-2xl font-serif italic text-dark/90 mb-8 leading-relaxed">
                  &quot;{reviews[currentIndex].text}&quot;
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-primary/10 pt-6">
                  <div>
                    <h4 className="font-bold text-primary text-lg">{reviews[currentIndex].author}</h4>
                    <span className="text-secondary font-medium">{reviews[currentIndex].location}</span>
                  </div>
                  <span className="px-4 py-1.5 bg-secondary text-white text-xs font-bold uppercase tracking-wider rounded-full self-start sm:self-auto">
                    {reviews[currentIndex].project}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button 
              onClick={prev}
              className="p-3 rounded-full border border-primary/20 text-primary hover:bg-secondary hover:border-secondary hover:text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-secondary w-8' : 'bg-primary/20 hover:bg-primary/40'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="p-3 rounded-full border border-primary/20 text-primary hover:bg-secondary hover:border-secondary hover:text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
