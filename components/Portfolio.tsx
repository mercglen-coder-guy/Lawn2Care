'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Interlock', 'Patios', 'Gardens', 'Driveways', 'Commercial'];

  const projects = [
    {
      title: "Lorne Park Estate Driveway",
      category: "Interlock",
      tag: "Lorne Park • Interlock • $45K",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
      size: "large"
    },
    {
      title: "Credit Valley Backyard Oasis",
      category: "Patios",
      tag: "Credit Valley • Patio • $28K",
      image: "https://images.unsplash.com/photo-1574360773981-84e861d8717d?q=80&w=800&auto=format&fit=crop",
      size: "tall"
    },
    {
      title: "Port Credit Garden Renovation",
      category: "Gardens",
      tag: "Port Credit • Garden • $18K",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      size: "wide"
    },
    {
      title: "Erin Mills Commercial Property",
      category: "Commercial",
      tag: "Erin Mills • Commercial • $62K",
      image: "https://images.unsplash.com/photo-1592424005688-57380dc5f8e7?q=80&w=800&auto=format&fit=crop",
      size: "large"
    },
    {
      title: "Meadowvale Walkway & Steps",
      category: "Interlock",
      tag: "Meadowvale • Walkway • $12K",
      image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb65?q=80&w=800&auto=format&fit=crop",
      size: "tall"
    },
    {
      title: "Clarkson Outdoor Kitchen",
      category: "Patios",
      tag: "Clarkson • Hardscape • $38K",
      image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=800&auto=format&fit=crop",
      size: "wide"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter || (activeFilter === 'Driveways' && p.category === 'Interlock'));

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-primary mb-4"
            >
              Our Recent Projects in Mississauga
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-dark/70"
            >
              Real transformations for real homeowners across Mississauga neighborhoods
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 hide-scrollbar gap-2 w-full md:w-auto"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  activeFilter === filter 
                    ? 'bg-secondary text-white border-secondary' 
                    : 'bg-transparent text-primary border border-primary/20 hover:border-secondary hover:text-secondary'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                  project.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                  project.size === 'tall' ? 'md:row-span-2' :
                  project.size === 'wide' ? 'md:col-span-2' : ''
                }`}
              >
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                    {project.tag}
                  </span>
                  <h4 className="text-white text-xl md:text-2xl font-bold mb-2">{project.title}</h4>
                  
                  <div className="flex items-center text-white/90 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    View Project <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
