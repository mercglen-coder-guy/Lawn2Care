'use client';

import { useState } from 'react';
import { Calculator, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { generateSmartEstimate } from '@/lib/actions/quote';

export function QuoteEstimator() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [estimate, setEstimate] = useState<any>(null);
  
  const [formData, setFormData] = useState({
    projectType: 'interlock',
    sqft: 500,
    material: 'Standard Pavers',
    timeline: 'Flexible',
    budgetRange: 'Standard',
  });

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await generateSmartEstimate(formData);
      if (res.success) {
        setEstimate(res.estimate);
        setStep(3);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 border border-primary/10 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary/10 text-secondary mb-4">
          <Calculator size={32} />
        </div>
        <h3 className="text-2xl font-serif font-bold text-primary mb-2">Smart Quote Estimator</h3>
        <p className="text-dark/70">Get a preliminary estimate in 90 seconds. AI analyzes, we verify.</p>
      </div>

      {/* Progress Bar */}
      <div className="flex gap-2 mb-8">
        {[1, 2, 3].map(i => (
          <div key={i} className={`h-2 flex-1 rounded-full ${step >= i ? 'bg-secondary' : 'bg-light'}`} />
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
          <div>
            <label className="block text-sm font-medium text-dark/80 mb-3">Project Type</label>
            <div className="grid grid-cols-2 gap-3">
              {['interlock', 'patio', 'sod', 'lighting'].map(type => (
                <button
                  key={type}
                  onClick={() => setFormData({...formData, projectType: type})}
                  className={`p-4 rounded-xl border text-sm font-medium capitalize transition-colors ${formData.projectType === type ? 'border-secondary bg-secondary/5 text-secondary' : 'border-primary/20 text-dark/70 hover:border-primary/40'}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-dark/80 mb-3">Estimated Size (Sq Ft): <span className="text-secondary font-bold text-lg">{formData.sqft}</span></label>
            <input 
              type="range" 
              min="50" max="5000" step="50"
              value={formData.sqft}
              onChange={(e) => setFormData({...formData, sqft: parseInt(e.target.value)})}
              className="w-full accent-secondary h-2 bg-light rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-dark/50 mt-2">
              <span>50 sqft</span>
              <span>5000+ sqft</span>
            </div>
          </div>

          <button 
            onClick={() => setStep(2)}
            className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-lg mt-4"
          >
            Next Step <ArrowRight size={20} />
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
          <div>
            <label className="block text-sm font-medium text-dark/80 mb-2">Material Preference</label>
            <select 
              value={formData.material}
              onChange={(e) => setFormData({...formData, material: e.target.value})}
              className="w-full p-4 rounded-xl border border-primary/20 focus:ring-2 focus:ring-secondary outline-none text-lg"
            >
              <option>Standard Pavers</option>
              <option>Premium Natural Stone</option>
              <option>Permeable Interlock</option>
              <option>Not Sure Yet</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-dark/80 mb-2">Timeline</label>
            <select 
              value={formData.timeline}
              onChange={(e) => setFormData({...formData, timeline: e.target.value})}
              className="w-full p-4 rounded-xl border border-primary/20 focus:ring-2 focus:ring-secondary outline-none text-lg"
            >
              <option>ASAP</option>
              <option>Within 1-3 Months</option>
              <option>Planning for Next Season</option>
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <button 
              onClick={() => setStep(1)}
              className="px-6 py-4 rounded-xl border border-primary/20 text-primary font-bold hover:bg-light transition-colors"
            >
              Back
            </button>
            <button 
              onClick={handleSubmit}
              disabled={loading}
              className="flex-1 py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 text-lg"
            >
              {loading ? <><Loader2 className="animate-spin" /> Calculating...</> : 'Generate Estimate'}
            </button>
          </div>
        </div>
      )}

      {step === 3 && estimate && (
        <div className="space-y-6 animate-in fade-in zoom-in-95">
          <div className="bg-light p-8 rounded-2xl border border-secondary/20 text-center">
            <p className="text-sm text-dark/60 font-bold uppercase tracking-wider mb-3">Estimated Range</p>
            <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-3">
              ${estimate.lowEstimate?.toLocaleString()} - ${estimate.highEstimate?.toLocaleString()}
            </div>
            <p className="text-sm text-dark/60">Complexity: <span className="font-bold capitalize text-primary">{estimate.complexity}</span></p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-primary text-lg">AI Analysis Notes:</h4>
            <p className="text-dark/80 text-sm leading-relaxed">{estimate.notes}</p>
          </div>

          <div className="bg-primary/5 p-5 rounded-xl flex items-start gap-3">
            <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-dark/80">
              <strong>Disclaimer:</strong> This is an AI-generated preliminary estimate based on standard pricing. Final pricing requires an on-site assessment of soil conditions, access, and precise measurements.
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <button 
              onClick={() => { setStep(1); setEstimate(null); }}
              className="px-6 py-4 rounded-xl border border-primary/20 text-primary font-bold hover:bg-light transition-colors"
            >
              Recalculate
            </button>
            <a 
              href="#contact"
              className="flex-1 py-4 rounded-xl bg-secondary text-white font-bold hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2 text-lg"
            >
              Book Verification <ArrowRight size={20} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
