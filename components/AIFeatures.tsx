'use client';

import { useState } from 'react';
import { QuoteEstimator } from '@/components/ai/QuoteEstimator';
import { Visualizer } from '@/components/ai/Visualizer';
import { Sparkles, Calculator, ImageIcon } from 'lucide-react';

export function AIFeatures() {
  const [activeTab, setActiveTab] = useState<'estimator' | 'visualizer'>('estimator');

  return (
    <section className="py-24 bg-light relative overflow-hidden" id="ai-planning">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-6 border border-secondary/20">
            <Sparkles size={16} /> Powered by Google Gemini AI
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary mb-6">
            Plan Your Project with <span className="text-secondary">Precision</span>
          </h2>
          <p className="text-lg text-dark/70">
            Eliminate the guesswork. Use our advanced AI tools to instantly estimate your costs or visualize your dream yard before we even break ground.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-2xl shadow-sm border border-primary/10 inline-flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setActiveTab('estimator')}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all ${
                activeTab === 'estimator' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-dark/60 hover:text-primary hover:bg-light'
              }`}
            >
              <Calculator size={20} />
              Smart Quote Estimator
            </button>
            <button
              onClick={() => setActiveTab('visualizer')}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all ${
                activeTab === 'visualizer' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-dark/60 hover:text-primary hover:bg-light'
              }`}
            >
              <ImageIcon size={20} />
              AI Landscape Visualizer
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[600px]">
          {activeTab === 'estimator' ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <QuoteEstimator />
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Visualizer />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
