'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronRight, ChevronLeft, Star, Users, Clock, ShieldCheck, 
  PenTool, Leaf, Lightbulb, Droplets, Trees, Flower2, Fence, 
  Wind, CheckCircle2, ArrowRight, Phone, MapPin, Mail, UploadCloud
} from 'lucide-react';

import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function LandscapingClient() {
  const [activeTab, setActiveTab] = useState('spring');
  const [sliderPos, setSliderPos] = useState(50);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    { title: "Landscape Design & Installation", desc: "Custom designs tailored to your preferences and property layout. From concept to completion.", icon: PenTool },
    { title: "Professional Sod Installation", desc: "Fresh, high-quality turf for a lush, vibrant lawn. Proper soil preparation guaranteed.", icon: Leaf },
    { title: "Landscape Lighting", desc: "We create art with light. Premium LED fixtures for ambiance, security, and beauty.", icon: Lightbulb },
    { title: "Irrigation & Sprinkler Systems", desc: "Efficient watering systems with spring start-up, winterization, and maintenance.", icon: Droplets },
    { title: "Artificial Lawns", desc: "Always-clean, low-maintenance synthetic grass. Perfect for busy homeowners.", icon: Trees },
    { title: "Planting & Garden Beds", desc: "Carefully selected trees, shrubs, and flowers that thrive in Ontario's climate.", icon: Flower2 },
    { title: "Fencing & Boundaries", desc: "Durable, beautifully designed close board fencing that matches your style.", icon: Fence },
    { title: "Seasonal Cleanups", desc: "Spring/fall cleanup, leaf removal, pruning. Keep your yard pristine year-round.", icon: Wind },
  ];

  const irrigationTabs = [
    {
      id: 'spring',
      title: 'Spring Start-Up',
      desc: 'Start your season stress-free. We inspect and activate your system to ensure everything runs smoothly.',
      checks: ['Complete system inspection', 'Zone testing & adjustment', 'Controller programming', 'Leak detection']
    },
    {
      id: 'summer',
      title: 'Mid-Summer Check-Up',
      desc: 'Two months after start-up, we ensure peak performance with thorough inspection and early issue detection.',
      checks: ['Component inspection', 'Pressure testing', 'Coverage optimization', 'Preventative maintenance']
    },
    {
      id: 'winter',
      title: 'Winterization',
      desc: 'Protect your system from freezing damage. Complete blow-out and safe shutdown before winter hits.',
      checks: ['Complete system blow-out', 'Valve drainage', 'Controller winterization', 'Detailed inspection report']
    },
    {
      id: 'repair',
      title: 'Service Calls',
      desc: 'Fast, reliable repairs whenever you need us. Up to 1 hour labor included.',
      checks: ['Emergency response', 'Parts & repair', 'Diagnostic expertise', 'Transparent pricing']
    }
  ];

  const faqs = [
    { q: "How long does sod take to establish?", a: "Typically, sod takes about 2 to 3 weeks to establish a shallow root system. During this time, it's crucial to follow our detailed watering schedule. Full establishment can take up to 6 weeks." },
    { q: "What's included in a landscape design consultation?", a: "Our consultation includes a site visit, discussion of your vision and budget, soil and sunlight assessment, and a preliminary conceptual discussion. We then provide a detailed proposal and 3D rendering options." },
    { q: "How often should I schedule sprinkler maintenance?", a: "We recommend at least twice a year: a Spring Start-Up to check for winter damage and optimize settings, and a Fall Winterization to blow out the lines and prevent freezing." },
    { q: "Is artificial turf safe for pets and children?", a: "Yes! Our premium artificial turf is non-toxic, lead-free, and features excellent drainage. It's highly durable for pets and provides a soft, safe surface for children to play on." },
    { q: "How much does landscape lighting cost?", a: "Costs vary based on property size and fixture count. Our starter packages begin around $1,500, which includes 5 premium LED fixtures, a professional transformer, wiring, and installation." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="bg-light min-h-screen">
      {/* Sticky Sub-Nav */}
      <div className="sticky top-[64px] md:top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/#services' },
            { label: 'Landscaping Services', href: '/services/landscaping' }
          ]} />
          <div className="flex overflow-x-auto hide-scrollbar gap-6 text-sm font-semibold text-primary/80">
            <a href="#design" className="whitespace-nowrap hover:text-secondary transition-colors">Design</a>
            <a href="#lighting" className="whitespace-nowrap hover:text-secondary transition-colors">Lighting</a>
            <a href="#irrigation" className="whitespace-nowrap hover:text-secondary transition-colors">Irrigation</a>
            <a href="#sod" className="whitespace-nowrap hover:text-secondary transition-colors">Sod & Turf</a>
            <a href="#faq" className="whitespace-nowrap hover:text-secondary transition-colors">FAQ</a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="z-10"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-primary leading-tight mb-6">
                Bespoke Landscaping Services in Mississauga
              </h1>
              <p className="text-lg text-dark/80 mb-8 max-w-xl">
                We don&apos;t just maintain gardens—we create living art. From custom landscape design to premium sod, irrigation, and lighting, our 50+ professional team transforms ordinary spaces into extraordinary outdoor sanctuaries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#quote" className="px-8 py-4 rounded-full font-semibold bg-primary text-white hover:bg-primary/90 transition-colors text-center">
                  Get Custom Design Quote &rarr;
                </a>
                <a href="#portfolio" className="px-8 py-4 rounded-full font-semibold border-2 border-primary/20 text-primary hover:border-primary transition-colors text-center flex items-center justify-center gap-2">
                  View Projects <ArrowRight size={18} />
                </a>
              </div>
              
              {/* Stats Bar */}
              <div className="bg-[#F8F6F2] rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-sm">
                <div>
                  <Star className="text-secondary mb-2" size={24} />
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <Users className="text-secondary mb-2" size={24} />
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-gray-600">Professionals</div>
                </div>
                <div>
                  <ShieldCheck className="text-secondary mb-2" size={24} />
                  <div className="text-2xl font-bold text-primary">350+</div>
                  <div className="text-sm text-gray-600">Repeat Clients</div>
                </div>
                <div>
                  <Clock className="text-secondary mb-2" size={24} />
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Support</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl group"
            >
              <Image 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop" 
                alt="Luxury Landscaping in Mississauga" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Floating Interactive Cards */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-auto md:right-8 flex flex-row md:flex-col gap-3 overflow-x-auto hide-scrollbar snap-x pb-2 md:pb-0">
                <a href="#design" className="snap-center shrink-0 bg-white/95 backdrop-blur-md px-5 md:px-6 py-3 md:py-4 rounded-xl shadow-lg hover:bg-white hover:scale-105 transition-all cursor-pointer flex items-center gap-3">
                  <div className="bg-[#1A3C34]/10 p-2 rounded-lg"><PenTool size={20} className="text-[#1A3C34]" /></div>
                  <span className="font-semibold text-primary whitespace-nowrap">Garden Design</span>
                </a>
                <a href="#lighting" className="snap-center shrink-0 bg-white/95 backdrop-blur-md px-5 md:px-6 py-3 md:py-4 rounded-xl shadow-lg hover:bg-white hover:scale-105 transition-all cursor-pointer flex items-center gap-3">
                  <div className="bg-[#F4C542]/20 p-2 rounded-lg"><Lightbulb size={20} className="text-[#F4C542]" /></div>
                  <span className="font-semibold text-primary whitespace-nowrap">Landscape Lighting</span>
                </a>
                <a href="#irrigation" className="snap-center shrink-0 bg-white/95 backdrop-blur-md px-5 md:px-6 py-3 md:py-4 rounded-xl shadow-lg hover:bg-white hover:scale-105 transition-all cursor-pointer flex items-center gap-3">
                  <div className="bg-[#4A9FD8]/10 p-2 rounded-lg"><Droplets size={20} className="text-[#4A9FD8]" /></div>
                  <span className="font-semibold text-primary whitespace-nowrap">Irrigation Systems</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services Grid */}
      <section id="design" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-primary mb-4">Our Complete Landscaping Solutions</h2>
            <p className="text-lg text-dark/70">Comprehensive services tailored to Mississauga&apos;s climate and your unique vision.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#F8F6F2] rounded-2xl p-8 hover:-translate-y-2 hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col"
              >
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={28} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-[#1A3C34] mb-3">{service.title}</h4>
                <p className="text-[#2C2C2C] mb-6 flex-grow">{service.desc}</p>
                <div className="flex items-center text-secondary font-semibold text-sm mt-auto">
                  Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Landscape Lighting Deep Dive */}
      <section id="lighting" className="py-16 md:py-24 bg-[#1A3C34] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mb-6 leading-tight">
                Landscape Lighting: <br/><span className="text-[#F4C542]">We Create Art With Light</span>
              </h2>
              <p className="text-lg text-white/80 mb-10">
                We don&apos;t just install lights—we transform your property into a nighttime masterpiece using premium low-voltage LED fixtures.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#F4C542]"><CheckCircle2 size={20} /></div>
                  <p className="text-sm font-medium">Maximum efficiency with stunning aesthetics</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#F4C542]"><CheckCircle2 size={20} /></div>
                  <p className="text-sm font-medium">Enhanced security and safety</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#F4C542]"><CheckCircle2 size={20} /></div>
                  <p className="text-sm font-medium">Extended outdoor living hours</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#F4C542]"><CheckCircle2 size={20} /></div>
                  <p className="text-sm font-medium">Increased property value</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4C542]/10 rounded-full blur-3xl group-hover:bg-[#F4C542]/20 transition-colors"></div>
                <h4 className="text-xl font-bold mb-4">Starter Package Includes:</h4>
                <ul className="space-y-3 mb-8">
                  {['5 Premium LED Fixtures', 'Professional Transformer', 'Weather-Resistant Wiring', 'Complete Installation & Positioning', 'Custom Design Consultation'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 size={16} className="text-[#F4C542]" /> {item}
                    </li>
                  ))}
                </ul>
                <a href="#quote" className="inline-block px-8 py-4 rounded-full font-semibold bg-[#F4C542] text-[#1A3C34] hover:bg-white transition-colors shadow-[0_0_20px_rgba(244,197,66,0.3)] hover:shadow-[0_0_30px_rgba(244,197,66,0.5)]">
                  Get Lighting Design Quote &rarr;
                </a>
              </div>
            </div>

            {/* Before/After Slider */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden select-none group shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop" fill className="object-cover" alt="After Landscape Lighting" referrerPolicy="no-referrer" />
              <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
                 <Image src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop" fill className="object-cover" alt="Before Landscape Lighting" referrerPolicy="no-referrer" />
              </div>
              <input 
                type="range" min="0" max="100" value={sliderPos} 
                onChange={(e) => setSliderPos(Number(e.target.value))} 
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20" 
              />
              <div className="absolute top-0 bottom-0 w-1 bg-[#F4C542] z-10 pointer-events-none shadow-[0_0_10px_rgba(244,197,66,0.8)]" style={{ left: `${sliderPos}%` }}>
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                   <div className="flex gap-0.5">
                     <ChevronLeft size={20} className="text-[#1A3C34]" />
                     <ChevronRight size={20} className="text-[#1A3C34]" />
                   </div>
                </div>
              </div>
              <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-medium z-10 pointer-events-none">Before</div>
              <div className="absolute top-6 right-6 bg-[#F4C542]/90 backdrop-blur-md text-[#1A3C34] px-4 py-1.5 rounded-full text-sm font-bold z-10 pointer-events-none shadow-[0_0_20px_rgba(244,197,66,0.5)]">After</div>
            </div>
          </div>
        </div>
      </section>

      {/* Irrigation & Sprinkler Services */}
      <section id="irrigation" className="py-16 md:py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-primary mb-4">Smart Irrigation & Sprinkler Solutions</h2>
            <p className="text-lg text-dark/70">Keep your landscape healthy year-round with our professional irrigation services. From spring start-up to winterization, we&apos;ve got you covered.</p>
          </div>

          <div className="bg-white rounded-2xl p-2 mb-8 flex overflow-x-auto hide-scrollbar shadow-sm">
            {irrigationTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[150px] py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id ? 'bg-[#4A9FD8] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm min-h-[300px]">
            <AnimatePresence mode="wait">
              {irrigationTabs.map(tab => activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-primary mb-4">{tab.title}</h3>
                  <p className="text-lg text-gray-600 mb-8">{tab.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {tab.checks.map((check, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-[#4A9FD8]" />
                        <span className="font-medium text-gray-800">{check}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-12 bg-gradient-to-r from-secondary to-[#B8954F] rounded-2xl p-8 text-white text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">🎉 Book Winterization Before July 29, 2026</h3>
              <p className="text-lg mb-6 opacity-90">Get 10% OFF Repairs + Free Detailed Inspection. Limited slots available!</p>
              <a href="#quote" className="inline-block px-8 py-4 rounded-full font-bold bg-white text-secondary hover:scale-105 transition-transform shadow-md">
                Schedule Sprinkler Service &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sod & Turf Installation */}
      <section id="sod" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-primary mb-4">Professional Sod Installation</h2>
            <p className="text-lg text-dark/70">Transform your outdoor space with expert sod installation in Mississauga. Fresh, high-quality turf with proper soil preparation for a smooth, beautiful finish.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>
            
            {[
              { num: '01', title: 'Site Assessment', desc: 'We evaluate soil conditions, drainage, and sun exposure.' },
              { num: '02', title: 'Soil Preparation', desc: 'Proper grading, tilling, and soil amendment for optimal growth.' },
              { num: '03', title: 'Premium Sod', desc: 'Fresh-cut Kentucky Bluegrass or premium blends suited for Ontario.' },
              { num: '04', title: 'Precision Install', desc: 'Expert laying technique for seamless, healthy establishment.' }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#F8F6F2] rounded-2xl p-8 text-center relative shadow-sm hover:-translate-y-2 transition-transform"
              >
                <div className="text-5xl font-serif font-bold text-secondary/30 mb-4">{step.num}</div>
                <h4 className="text-xl font-bold text-primary mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-[#1A3C34] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div>
              <h3 className="text-2xl font-bold mb-3">Prefer zero maintenance?</h3>
              <p className="text-white/80 mb-4">Ask about our premium artificial lawn solutions.</p>
              <div className="flex flex-wrap gap-4 text-sm font-medium text-[#2D6A4F] bg-white/10 p-4 rounded-xl">
                <span className="flex items-center gap-1"><CheckCircle2 size={16}/> Always clean</span>
                <span className="flex items-center gap-1"><CheckCircle2 size={16}/> No watering</span>
                <span className="flex items-center gap-1"><CheckCircle2 size={16}/> Pet-friendly</span>
                <span className="flex items-center gap-1"><CheckCircle2 size={16}/> 15-year lifespan</span>
              </div>
            </div>
            <a href="#quote" className="shrink-0 px-8 py-4 rounded-full font-semibold bg-[#2D6A4F] text-white hover:bg-white hover:text-[#2D6A4F] transition-colors shadow-lg">
              Learn About Artificial Turf &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Service Inquiry Form */}
      <section id="quote" className="py-16 md:py-24 bg-[#1A3C34] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-6">Get Your Custom Landscaping Quote</h2>
              <p className="text-lg text-white/80 mb-10">Tell us about your project. Our experts will respond within 2 hours.</p>
              
              <div className="bg-secondary text-white p-6 rounded-2xl mb-8 shadow-lg">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">Need emergency service?</h4>
                <p className="mb-4 opacity-90">Call us now – we&apos;re available 24/7 for snow removal and urgent issues!</p>
                <a href="tel:+19053200475" className="inline-flex items-center gap-2 font-bold text-xl hover:text-white/80 transition-colors">
                  <Phone size={24} /> +1(905)-320-0475
                </a>
              </div>

              <ul className="space-y-4 text-white/80">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-secondary" size={20} /> No obligation</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-secondary" size={20} /> Free on-site consultation</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-secondary" size={20} /> Your info is 100% secure</li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <form className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-primary" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="(905) 000-0000" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2">Email Address *</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2">Property Address</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="123 Main St, Mississauga" />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold mb-4">Services Interested In</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Landscape Design', 'Sod Installation', 'Artificial Turf', 'Landscape Lighting', 'Irrigation/Sprinkler', 'Planting Services', 'Seasonal Maintenance', 'Other'].map(service => (
                      <div 
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`px-4 py-3 rounded-xl border text-sm font-medium cursor-pointer transition-all flex items-center gap-2 ${
                          selectedServices.includes(service) 
                            ? 'bg-secondary/10 border-secondary text-primary' 
                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${selectedServices.includes(service) ? 'bg-secondary border-secondary' : 'border-gray-300'}`}>
                          {selectedServices.includes(service) && <CheckCircle2 size={12} className="text-white" />}
                        </div>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold mb-2">Project Details</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us about your vision, timeline, and any specific requirements..."></textarea>
                </div>

                <button type="submit" className="w-full py-4 rounded-xl font-bold text-lg bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg flex items-center justify-center gap-2">
                  Get My Quote <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-[#F8F6F2]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-primary mb-4">Landscaping Services FAQ</h2>
            <p className="text-lg text-dark/70">Common questions about our landscaping processes and services.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                <button 
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-bold text-primary pr-8">{faq.q}</span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === index ? 'bg-secondary text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {openFaq === index ? <span className="text-xl leading-none mb-1">-</span> : <span className="text-xl leading-none mb-1">+</span>}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
