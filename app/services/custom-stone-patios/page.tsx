import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Stone Patios',
  description: 'Elevate your outdoor living space with our custom stone patios. Perfect for entertaining and relaxing in Mississauga.',
};

export default function CustomStonePatios() {
  const benefits = [
    "Durable materials that withstand Canadian winters",
    "Increased property value and curb appeal",
    "Low maintenance and easy to clean",
    "Customizable designs to match your home's aesthetic",
    "Perfect for outdoor dining, fire pits, and entertaining"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Beautiful custom stone patio" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Premium Hardscaping</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6">
            Custom Stone Patios
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Create the perfect outdoor gathering space with our expertly crafted stone patios.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-6">
                Your Backyard Oasis Awaits
              </h2>
              <p className="text-lg text-dark/80 leading-relaxed mb-8">
                A custom stone patio is more than just an addition to your backyard; it&apos;s an extension of your living space. Whether you envision a cozy fire pit area for cool autumn evenings or a sprawling outdoor kitchen for summer barbecues, our team at Expert Landscaping & Hardscaping brings your vision to life with precision and care.
              </p>
              
              <h3 className="text-xl font-bold text-primary mb-4">Why Choose Our Stone Patios?</h3>
              <ul className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                    <span className="text-dark/80">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
                Get a Free Estimate <ArrowRight size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image src="https://picsum.photos/seed/patiodetail/600/400" alt="Patio detail" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image src="https://picsum.photos/seed/patioseating/600/400" alt="Patio seating" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image src="https://picsum.photos/seed/patiofirepit/600/400" alt="Patio fire pit" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image src="https://picsum.photos/seed/patiodining/600/400" alt="Patio dining" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
