'use client';

import { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, Loader2, CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function Visualizer() {
  const [image, setImage] = useState<string | null>(null);
  const [style, setStyle] = useState('Modern');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    if (!image) return;
    setLoading(true);
    try {
      const res = await fetch('/api/ai/visualize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: image, style }),
      });
      const data = await res.json();
      setResults(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 border border-primary/10 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
          <ImageIcon size={32} />
        </div>
        <h3 className="text-2xl font-serif font-bold text-primary mb-2">AI Landscape Visualizer</h3>
        <p className="text-dark/70">Upload your yard. See 3 custom concepts in seconds.</p>
      </div>

      {!results ? (
        <div className="space-y-6">
          <div 
            className="border-2 border-dashed border-primary/20 rounded-2xl p-8 text-center hover:bg-light transition-colors cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            {image ? (
              <div className="relative h-64 w-full rounded-xl overflow-hidden">
                <Image src={image} alt="Uploaded yard" fill className="object-cover" />
              </div>
            ) : (
              <div className="py-12">
                <Upload className="mx-auto h-12 w-12 text-primary/40 mb-4" />
                <p className="text-primary font-medium text-lg">Click to upload a photo of your yard</p>
                <p className="text-sm text-dark/50 mt-2">JPG, PNG up to 5MB</p>
              </div>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageUpload} 
              accept="image/*" 
              className="hidden" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-dark/80 mb-2">Preferred Style</label>
            <select 
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full p-4 rounded-xl border border-primary/20 focus:ring-2 focus:ring-secondary outline-none text-lg"
            >
              <option value="Modern">Modern & Minimalist</option>
              <option value="Natural">Natural & Organic</option>
              <option value="Entertainment">Entertainment-Focused</option>
              <option value="Classic">Classic Elegance</option>
            </select>
          </div>

          <button 
            onClick={analyzeImage}
            disabled={!image || loading}
            className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <><Loader2 className="animate-spin" /> Analyzing Space...</>
            ) : (
              <><ImageIcon /> Generate Concepts</>
            )}
          </button>
        </div>
      ) : (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
          <div className="grid gap-6">
            {results.concepts?.map((concept: any, idx: number) => (
              <div key={idx} className="bg-light p-6 rounded-2xl border border-primary/10">
                <h4 className="text-xl font-bold text-primary mb-2">{concept.name}</h4>
                <p className="text-dark/80 mb-4">{concept.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase text-dark/50 block mb-2">Materials</span>
                    <ul className="text-sm space-y-2">
                      {concept.materials?.map((m: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" /> 
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-dark/50 block mb-2">Key Features</span>
                    <ul className="text-sm space-y-2">
                      {concept.keyFeatures?.map((f: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" /> 
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex gap-4 pt-4">
            <button 
              onClick={() => setResults(null)}
              className="flex-1 py-4 rounded-xl border border-primary/20 text-primary font-bold hover:bg-light transition-colors"
            >
              Try Another
            </button>
            <a 
              href="#contact"
              className="flex-1 py-4 rounded-xl bg-secondary text-white font-bold hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2"
            >
              Book Consultation <ArrowRight size={20} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
