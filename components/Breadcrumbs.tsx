import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.label,
      "item": `https://lawn2care.ca${item.href}`
    }))
  };

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-2 hidden md:block">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex items-center gap-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i < items.length - 1 ? (
              <>
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
                <span>&gt;</span>
              </>
            ) : (
              <span className="text-primary font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
