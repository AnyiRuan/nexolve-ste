import Hero from '@/components/Hero';
import ValueGrid from '@/components/ValueGrid';
import ServiceCards from '@/components/ServiceCards';
import CTASection from '@/components/CTASection';

export default function Page(){
  return (<>
    <Hero/>
    <ValueGrid/>
    <ServiceCards/>
    <section className="container py-8">
      <blockquote className="card italic text-gray-700">
        “Our automation replaced 80% of repetitive work, cut errors by 90%, and paid for itself in under three months.”
        <span className="block not-italic mt-2 text-sm text-gray-500">— Anonymous Client, Logistics Sector</span>
      </blockquote>
    </section>
    <CTASection/>
  </>);
}