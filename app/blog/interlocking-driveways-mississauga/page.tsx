import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Benefits of Interlocking Driveways in Mississauga',
  description: 'Discover why interlocking driveways are the top choice for Mississauga homeowners looking to boost curb appeal and durability.',
};

export default function BlogPost1() {
  return (
    <article className="bg-white pb-24">
      {/* Blog Header */}
      <header className="bg-light py-20 border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} className="mr-2" /> Back to Home
          </Link>
          <div className="flex items-center justify-center gap-4 text-sm text-dark/60 mb-6 font-medium">
            <span className="flex items-center gap-1.5"><Calendar size={16} /> April 15, 2024</span>
            <span className="flex items-center gap-1.5"><User size={16} /> Expert Landscaping Team</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-primary mb-6 leading-tight">
            Why Interlocking Driveways Are the Best Investment for Mississauga Homes
          </h1>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-white border border-primary/10 rounded-full text-xs font-bold uppercase tracking-wider text-primary">Hardscaping</span>
            <span className="px-3 py-1 bg-white border border-primary/10 rounded-full text-xs font-bold uppercase tracking-wider text-primary">Driveways</span>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12 shadow-lg">
          <Image src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop" alt="Interlocking driveway in Mississauga" fill className="object-cover" />
        </div>

        <div className="prose prose-lg prose-primary max-w-none text-dark/80">
          <p className="lead text-xl text-primary font-medium mb-8">
            When it comes to upgrading your home&apos;s exterior, few projects offer the immediate visual impact and long-term ROI of an interlocking stone driveway. For homeowners in Mississauga, Oakville, and the surrounding GTA, it&apos;s not just about looks—it&apos;s about surviving the Canadian climate.
          </p>

          <h2 className="text-2xl font-serif font-bold text-primary mt-12 mb-4">1. Unmatched Durability for Canadian Winters</h2>
          <p>
            Unlike poured concrete or asphalt, which are prone to cracking under the extreme freeze-thaw cycles of Ontario winters, interlocking pavers are designed to be flexible. The joints between the stones allow for slight movement as the ground expands and contracts, preventing unsightly surface cracks.
          </p>

          <h2 className="text-2xl font-serif font-bold text-primary mt-12 mb-4">2. Instant Curb Appeal</h2>
          <p>
            First impressions matter. A custom interlock driveway immediately elevates the aesthetic of your property. With a vast array of colors, textures, and laying patterns available from top suppliers like Permacon and Techo-Bloc, we can design a driveway that perfectly complements your home&apos;s architecture—whether it&apos;s a modern build in Port Credit or a classic estate in Lorne Park.
          </p>

          <div className="bg-light p-8 rounded-2xl my-10 border-l-4 border-secondary">
            <h3 className="text-xl font-bold text-primary mb-2">Real-World Example: The Lorne Park Transformation</h3>
            <p className="mb-0">
              Last summer, we replaced a deteriorating asphalt driveway in Lorne Park with a stunning multi-toned interlock design. Not only did it solve their drainage issues, but the homeowners reported that their property valuation increased by more than double the cost of the installation.
            </p>
          </div>

          <h2 className="text-2xl font-serif font-bold text-primary mt-12 mb-4">3. Easy Maintenance and Repairs</h2>
          <p>
            If an oil spill stains your driveway or a tree root causes a bump, asphalt requires a messy patch job that never quite matches. With interlocking stones, we can simply remove the affected pavers, fix the base, and replace the stones. It&apos;s a seamless repair that keeps your driveway looking brand new for decades.
          </p>

          <hr className="my-12 border-primary/10" />

          <div className="bg-primary text-white p-10 rounded-3xl text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">Ready to Upgrade Your Driveway?</h3>
            <p className="text-white/80 mb-8">Contact us today for a free on-site consultation and discover the perfect interlock design for your home.</p>
            <Link href="/#contact" className="inline-block px-8 py-4 rounded-full bg-secondary text-white font-bold hover:bg-secondary/90 transition-colors">
              Get Your Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
