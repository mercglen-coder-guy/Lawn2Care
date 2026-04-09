import { Metadata } from 'next';
import LandscapingClient from './LandscapingClient';

export const metadata: Metadata = {
  title: 'Bespoke Landscaping Services in Mississauga',
  description: 'We don\'t just maintain gardens—we create living art. From custom landscape design to premium sod, irrigation, and lighting in Mississauga.',
  alternates: {
    canonical: 'https://lawn2care.ca/services/landscaping',
  }
};

export default function LandscapingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Landscaping",
    "provider": {
      "@type": "LandscapingService",
      "name": "Lawn2Care Services LTD",
      "url": "https://lawn2care.ca"
    },
    "areaServed": {
      "@type": "City",
      "name": "Mississauga"
    },
    "description": "Professional landscaping services in Mississauga. Custom garden design, sod installation, lighting & irrigation."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <LandscapingClient />
    </>
  );
}
