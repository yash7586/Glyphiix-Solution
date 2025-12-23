import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Services } from '../components/Services';
import { USP } from '../components/USP';
import { Testimonials } from '../components/Testimonials';
import { CTABanner } from '../components/CTABanner';

export function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Services />
      <USP />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
