import { Leaf, Instagram, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#112822] text-white/80 pt-20 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-white/10">
                <Leaf className="text-secondary" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none text-white">Lawn2Care</span>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-secondary">Services LTD</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Transforming outdoor spaces with quality craftsmanship since 2018. We are Mississauga&apos;s trusted choice for premium landscaping and hardscaping.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/blog/interlocking-driveways-mississauga" className="hover:text-secondary transition-colors">Interlocking & Driveways</Link></li>
              <li><Link href="/services/custom-stone-patios" className="hover:text-secondary transition-colors">Patios & Walkways</Link></li>
              <li><Link href="/blog/custom-garden-design" className="hover:text-secondary transition-colors">Garden Design & Planting</Link></li>
              <li><Link href="/#contact" className="hover:text-secondary transition-colors">Lawn Care & Sod</Link></li>
              <li><Link href="/services/retaining-walls" className="hover:text-secondary transition-colors">Retaining Walls</Link></li>
              <li><Link href="/#contact" className="hover:text-secondary transition-colors">Seasonal Maintenance</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/#about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/#portfolio" className="hover:text-secondary transition-colors">Portfolio</Link></li>
              <li><Link href="/#reviews" className="hover:text-secondary transition-colors">Customer Reviews</Link></li>
              <li><Link href="/#service-area" className="hover:text-secondary transition-colors">Service Area</Link></li>
              <li><Link href="/#faq" className="hover:text-secondary transition-colors">FAQ</Link></li>
              <li><Link href="/#contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-0.5">📍</span>
                <span>6844 Darcel Avenue, L4T2W5<br/>Mississauga, Ontario, Canada</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary">📞</span>
                <a href="tel:+19053200475" className="hover:text-secondary transition-colors">+1(905)-320-0475</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary">✉️</span>
                <a href="mailto:info@lawn2care.com" className="hover:text-secondary transition-colors">info@lawn2care.com</a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">Emergency Service</p>
              <p className="text-sm">24/7 Snow Removal Available</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Lawn2Care Services LTD. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hidden md:inline">WSIB Certified • Liability Insured • Best of Houzz</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
