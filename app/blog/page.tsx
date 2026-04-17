import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Landscaping & Lawn Care Blog | Lawn2Care',
  description: 'Read the latest tips, news, and guides on landscaping, lawn care, and property maintenance in Mississauga and the GTA.',
};

const blogPosts = [
  {
    title: "Mississauga's New 20cm Grass Law: How to Avoid the $305 Fine",
    slug: "mississauga-20cm-grass-bylaw-2026",
    excerpt: "The City of Mississauga has enacted a new Turfgrass and Prohibited Plant Species By-law. Learn how to keep your lawn compliant and avoid hefty fines.",
    date: "April 8, 2026",
    category: "Local News",
    image: "https://picsum.photos/seed/grasslaw/800/500",
    alt: "Overgrown grass that violates the Mississauga 20cm bylaw"
  },
  {
    title: "Interlocking Driveways in Mississauga: A Complete Guide",
    slug: "interlocking-driveways-mississauga",
    excerpt: "Discover the benefits, costs, and design options for interlocking driveways. Boost your home's curb appeal with a durable and stylish driveway.",
    date: "March 15, 2026",
    category: "Hardscaping",
    image: "https://picsum.photos/seed/interlock/800/500",
    alt: "Beautiful interlocking driveway example in the snow"
  },
  {
    title: "Custom Garden Design: Transforming Your Outdoor Space",
    slug: "custom-garden-design",
    excerpt: "From native plant selection to layout planning, learn how a custom garden design can turn your backyard into a personal oasis.",
    date: "February 28, 2026",
    category: "Landscaping",
    image: "https://picsum.photos/seed/garden/800/500",
    alt: "Custom garden design in Mississauga backyard"
  }
];

export default function BlogIndex() {
  return (
    <div className="bg-light min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-primary mb-6">
            Lawn2Care Blog
          </h1>
          <p className="text-lg text-dark/70">
            Expert advice, local news, and inspiration for your outdoor spaces in Mississauga and the Greater Toronto Area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/5 hover:shadow-md transition-shadow flex flex-col">
              <Link href={`/blog/${post.slug}`} className="block relative h-56 overflow-hidden group">
                <Image 
                  src={post.image} 
                  alt={post.alt} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-dark/50 mb-3">{post.date}</div>
                <h2 className="text-xl font-bold text-primary mb-3 line-clamp-2 hover:text-secondary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-dark/70 mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors mt-auto"
                >
                  Read Article <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
