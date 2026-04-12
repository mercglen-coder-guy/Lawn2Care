"use client";

import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "/services/landscaping" },
    { name: "AI Planning", href: "/ai-planning" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "About", href: "/#about" },
    { name: "Reviews", href: "/#reviews" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary text-white shadow-lg py-3 md:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="p-2 rounded-lg bg-white/10">
            <Leaf className="text-secondary" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg md:text-xl leading-none text-white">
              Lawn2Care
            </span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-semibold text-secondary">
              Services LTD
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-white/90 hover:text-secondary transition-colors relative group whitespace-nowrap"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4 shrink-0">
          <Link
            href="/#contact"
            className="px-5 lg:px-6 py-2 lg:py-2.5 rounded-full text-sm font-semibold bg-gradient-to-br from-secondary to-[#B8954F] text-white shadow-md hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap"
          >
            Get Free Estimate
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-white hover:text-secondary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-white/10 absolute top-full left-0 w-full shadow-xl overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4 px-4">
                <Link
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center px-6 py-3.5 rounded-xl font-semibold bg-secondary text-white shadow-md"
                >
                  Get Free Estimate
                </Link>
                <a
                  href="tel:+19053200475"
                  className="w-full text-center px-6 py-3.5 rounded-xl font-semibold border border-white/20 hover:bg-white/5 transition-colors"
                >
                  Call +1(905)-320-0475
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
