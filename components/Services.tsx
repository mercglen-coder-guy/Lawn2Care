'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Services() {
  const services = [
    {
      title: "Interlocking & Driveways",
      description: "Custom interlock designs, driveway installation & repair",
      image: "https://picsum.photos/seed/driveway/600/400",
      link: "/blog/interlocking-driveways-mississauga"
    },
    {
      title: "Patios & Walkways",
      description: "Beautiful stone patios, garden paths & entranceways",
      image: "https://picsum.photos/seed/patio/600/400",
      link: "/services/custom-stone-patios"
    },
    {
      title: "Garden Design & Planting",
      description: "Custom landscape design, flower beds & shrub installation",
      image: "https://picsum.photos/seed/garden/600/400",
      link: "/blog/custom-garden-design"
    },
    {
      title: "Lawn Care & Sod",
      description: "Professional lawn maintenance, sod installation & renewal",
      image: "https://picsum.photos/seed/lawn/600/400",
      link: "/#contact"
    },
    {
      title: "Retaining Walls",
      description: "Structural & decorative walls for elevation & drainage",
      image: "https://picsum.photos/seed/retainingwall/600/400",
      link: "/services/retaining-walls"
    },
    {
      title: "Seasonal Maintenance",
      description: "Spring cleanup, fall preparation & snow removal",
      image: "https://picsum.photos/seed/maintenance/600/400",
      link: "/#contact"
    }
  ];

  return (
    <section id="services" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-primary mb-4"
          >
            Our Complete Range of Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-dark/70"
          >
            Comprehensive landscaping and hardscaping solutions for Mississauga properties
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col h-full"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={`Example of ${service.title.toLowerCase()} service in a residential Mississauga home`} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-primary mb-3">{service.title}</h4>
                  <p className="text-dark/70 mb-6 flex-grow">{service.description}</p>
                  <div className="flex items-center text-secondary font-semibold text-sm group-hover:text-[#B8954F] transition-colors mt-auto">
                    <span className="sr-only">Learn more about our </span>{service.title} services 
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
