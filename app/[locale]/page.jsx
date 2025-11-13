import Hero from '@/components/Hero';
import ValueGrid from '@/components/ValueGrid';
import ServiceCards from '@/components/ServiceCards';
import CTASection from '@/components/CTASection';
import Testimonial from '@/components/Testimonial';

export default function Page() {
  return (
    <>
      <Hero/>
      <ValueGrid/>
      <ServiceCards/>
      <Testimonial/>
      <CTASection/>
    </>
  );
}
