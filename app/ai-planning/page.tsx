import { Metadata } from 'next';
import { Visualizer } from '@/components/ai/Visualizer';
import { QuoteEstimator } from '@/components/ai/QuoteEstimator';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Landscape Planning Tools',
  description: 'See your transformation before we break ground. Use our AI tools to visualize your yard and get instant, transparent estimates.',
};

export default function AIPlanningPage() {
  return (
    <div className="bg-light min-h-screen pb-24">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary font-bold text-sm mb-6 border border-secondary/30">
            <Sparkles size={16} /> Powered by Google Gemini
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 leading-tight">
            See Your Transformation <br className="hidden md:block" />
            <span className="text-secondary">Before We Break Ground</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10">
            Our AI planning tools analyze your space, recommend materials, and provide instant guidance. Final designs and pricing are verified by our certified Mississauga landscape team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#visualizer" className="px-8 py-4 rounded-full bg-secondary text-white font-bold hover:bg-secondary/90 transition-colors">
              Visualize Your Yard
            </a>
            <a href="#estimator" className="px-8 py-4 rounded-full bg-white text-primary font-bold hover:bg-white/90 transition-colors">
              Get Smart Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Visualizer Section */}
      <section id="visualizer" className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-4">
              AI Landscape Visualizer
            </h2>
            <p className="text-lg text-dark/70">
              Upload a photo of your current yard or driveway. Our AI will analyze the space—identifying slope, sun exposure, and existing hardscape—and generate custom design concepts tailored to your preferred style.
            </p>
          </div>
          <Visualizer />
        </div>
      </section>

      {/* Estimator Section */}
      <section id="estimator" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-4">
              Smart Quote Pre-Qualifier
            </h2>
            <p className="text-lg text-dark/70">
              Answer a few quick questions about your project. Our AI will calculate a rough estimate range based on our current pricing matrix for Mississauga and surrounding areas.
            </p>
          </div>
          <QuoteEstimator />
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-medium mb-6">AI-Assisted Planning. Human-Engineered Execution.</h2>
          <p className="text-lg text-white/80 mb-10">
            These tools are designed to help you explore possibilities and understand costs without any pressure. When you're ready, our expert team will visit your property to verify measurements, assess soil conditions, and provide a binding quote.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-secondary text-white font-bold hover:bg-secondary/90 transition-colors">
            Book Your Free On-Site Assessment <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
