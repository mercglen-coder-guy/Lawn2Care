'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C9A961 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-dark"
          >
            {!isSuccess ? (
              <>
                <h3 className="text-3xl font-serif font-bold text-primary mb-2">Get Your Free Estimate</h3>
                <p className="text-dark/60 mb-8">Tell us about your project. We&apos;ll respond within 2 hours.</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-1.5">Full Name *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-light/50" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-1.5">Phone Number *</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-light/50" placeholder="(905) 555-0123" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-1.5">Email Address *</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-light/50" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-1.5">Postal Code *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-light/50 uppercase" placeholder="L5H 1X1" maxLength={7} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-1.5">Service Type</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-light/50 appearance-none">
                        <option>Interlock & Driveways</option>
                        <option>Patios & Walkways</option>
                        <option>Garden Design</option>
                        <option>Lawn Care & Sod</option>
                        <option>Retaining Walls</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-1.5">Budget Range</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-light/50 appearance-none">
                        <option>Under $10K</option>
                        <option>$10K - $25K</option>
                        <option>$25K - $50K</option>
                        <option>$50K+</option>
                        <option>Not Sure</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-1.5">Project Details</label>
                    <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-light/50 resize-none" placeholder="Tell us a bit about what you&apos;re looking for..."></textarea>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center w-5 h-5 mt-0.5 border-2 border-gray-300 rounded group-hover:border-secondary transition-colors">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="absolute inset-0 bg-secondary scale-0 peer-checked:scale-100 transition-transform rounded-sm flex items-center justify-center">
                        <CheckCircle2 size={14} className="text-white" />
                      </div>
                    </div>
                    <span className="text-sm text-dark/70">I&apos;d like to schedule a free on-site consultation</span>
                  </label>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-br from-secondary to-[#B8954F] text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <><Loader2 size={20} className="animate-spin" /> Processing...</>
                    ) : (
                      <>Get My Free Estimate <ArrowRight size={20} /></>
                    )}
                  </button>
                  
                  <p className="text-center text-xs text-dark/40 flex items-center justify-center gap-1 mt-4">
                    <ShieldCheck size={14} /> No spam • No obligation • Your info is secure
                  </p>
                </form>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-primary mb-4">Request Received!</h3>
                <p className="text-dark/70 mb-8 max-w-sm">
                  Thank you for reaching out. One of our landscaping experts will contact you within 2 hours to discuss your project.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-secondary font-semibold hover:underline"
                >
                  Submit another request
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6">
              Let&apos;s Build Something Beautiful Together
            </h2>
            <p className="text-white/80 text-lg mb-12 max-w-lg">
              Whether you&apos;re looking for a complete backyard makeover or a simple walkway repair, our team is ready to bring your vision to life.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-1">Call Us Directly</h4>
                  <a href="tel:+19053200475" className="text-2xl font-bold hover:text-secondary transition-colors">+1(905)-320-0475</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-1">Email Us</h4>
                  <a href="mailto:info@lawn2care.com" className="text-xl font-medium hover:text-secondary transition-colors">info@lawn2care.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-1">Service Area</h4>
                  <p className="text-lg font-medium">6844 Darcel Avenue, L4T2W5<br/>Mississauga, Ontario, Canada</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Clock size={20} className="text-secondary" />
                Business Hours
              </h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex justify-between"><span>Monday - Saturday</span> <span>09:00 AM - 05:00 PM</span></li>
                <li className="flex justify-between text-white/50"><span>Sunday</span> <span>Closed</span></li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
