import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Creating a Custom Garden Design for Your Space',
  description: 'Learn how custom garden design can transform your Mississauga backyard into a relaxing, low-maintenance oasis.',
};

export default function BlogPost2() {
  return (
    <article className="bg-white pb-24">
      {/* Blog Header */}
      <header className="bg-light py-20 border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} className="mr-2" /> Back to Home
          </Link>
          <div className="flex items-center justify-center gap-4 text-sm text-dark/60 mb-6 font-medium">
            <span className="flex items-center gap-1.5"><Calendar size={16} /> May 02, 2024</span>
            <span className="flex items-center gap-1.5"><User size={16} /> Expert Landscaping Team</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-primary mb-6 leading-tight">
            Transforming Your Backyard: The Art of Custom Garden Design
          </h1>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-white border border-primary/10 rounded-full text-xs font-bold uppercase tracking-wider text-primary">Landscaping</span>
            <span className="px-3 py-1 bg-white border border-primary/10 rounded-full text-xs font-bold uppercase tracking-wider text-primary">Garden Design</span>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12 shadow-lg">
          <Image src="https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=1200&auto=format&fit=crop" alt="Custom garden design in Mississauga" fill className="object-cover" />
        </div>

        <div className="prose prose-lg prose-primary max-w-none text-dark/80">
          <p className="lead text-xl text-primary font-medium mb-8">
            A beautiful garden is more than just planting a few flowers; it&apos;s about creating a harmonious ecosystem that extends your living space outdoors. In Mississauga, where we experience distinct seasons, a well-planned garden design ensures year-round visual interest and minimal maintenance.
          </p>

          <h2 className="text-2xl font-serif font-bold text-primary mt-12 mb-4">Designing for the Local Climate</h2>
          <p>
            The key to a thriving garden in Southern Ontario is selecting the right plants for the right microclimates in your yard. We prioritize native species and hardy perennials that can withstand cold winters and hot, humid summers. This approach not only guarantees a lush landscape but also significantly reduces the need for constant watering and chemical fertilizers.
          </p>

          <h2 className="text-2xl font-serif font-bold text-primary mt-12 mb-4">Creating Zones of Purpose</h2>
          <p>
            A successful custom garden design divides your outdoor space into functional zones. We might design a vibrant, pollinator-friendly flower bed near your patio for visual enjoyment, while utilizing dense evergreen shrubs along the property line to create natural privacy screens.
          </p>

          <div className="bg-light p-8 rounded-2xl my-10 border-l-4 border-secondary">
            <h3 className="text-xl font-bold text-primary mb-2">Real-World Example: A Port Credit Retreat</h3>
            <p className="mb-0">
              A client in Port Credit wanted a peaceful retreat but lacked a green thumb. We designed a modern, minimalist garden featuring ornamental grasses, river rock beds, and strategic landscape lighting. The result was a stunning, low-maintenance oasis that looks incredible day or night.
            </p>
          </div>

          <h2 className="text-2xl font-serif font-bold text-primary mt-12 mb-4">The Importance of Hardscaping Integration</h2>
          <p>
            Great landscaping doesn&apos;t exist in a vacuum. It must integrate flawlessly with your hardscaping. We design garden beds that soften the hard edges of stone patios and walkways, creating a balanced, organic feel that ties the entire property together.
          </p>

          <hr className="my-12 border-primary/10" />

          <div className="bg-primary text-white p-10 rounded-3xl text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">Ready for a Garden Makeover?</h3>
            <p className="text-white/80 mb-8">Let our experts design a custom landscape tailored to your lifestyle and property.</p>
            <Link href="/#contact" className="inline-block px-8 py-4 rounded-full bg-secondary text-white font-bold hover:bg-secondary/90 transition-colors">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
