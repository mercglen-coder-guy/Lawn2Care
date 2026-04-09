import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { Intro } from '@/components/Intro';
import { Services } from '@/components/Services';
import { AIFeatures } from '@/components/AIFeatures';
import { USPs } from '@/components/USPs';
import { Portfolio } from '@/components/Portfolio';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';
import { ServiceArea } from '@/components/ServiceArea';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Intro />
      <Services />
      <AIFeatures />
      <USPs />
      <Portfolio />
      <Process />
      <Testimonials />
      <ServiceArea />
      <FAQ />
      <Contact />
    </>
  );
}
