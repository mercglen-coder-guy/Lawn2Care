import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Retaining Walls',
  description: 'Structural and decorative retaining walls designed to prevent erosion and maximize your usable outdoor space.',
};

export default function RetainingWalls() {
  const benefits = [
    "Prevents soil erosion and manages water runoff",
    "Transforms sloped yards into flat, usable space",
    "Adds structural integrity to your landscape",
    "Creates beautiful tiered gardens and seating areas",
    "Built to last with premium interlocking stones or natural rock"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb65?q=80&w=1920&auto=format&fit=crop" 
          alt="Stunning retaining wall" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Structural Hardscaping</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6">
            Retaining Walls
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Combine structural necessity with architectural beauty.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1 relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop" alt="Retaining wall detail" fill className="object-cover" />
              <div className="absolute inset-0 border-4 border-white/20 rounded-3xl pointer-events-none"></div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-6">
                Form Meets Function
              </h2>
              <p className="text-lg text-dark/80 leading-relaxed mb-8">
                In Mississauga, uneven terrain and sloped properties are common. A professionally engineered retaining wall not only prevents soil erosion and manages drainage but also unlocks the hidden potential of your yard. We design walls that seamlessly integrate with your existing landscape, turning steep slopes into beautiful, terraced gardens or expanded patio areas.
              </p>
              
              <h3 className="text-xl font-bold text-primary mb-4">The Benefits of Professional Installation</h3>
              <ul className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                    <span className="text-dark/80">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
                Request a Consultation <ArrowRight size={20} />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
