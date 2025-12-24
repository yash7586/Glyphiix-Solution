import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Services } from '../components/Services';
import { USP } from '../components/USP';
import { Testimonials } from '../components/Testimonials';
import { CTABanner } from '../components/CTABanner';

type Page = "home" | "services" | "about" | "work" | "contact";

interface HomeProps {
  setCurrentPage: (page: Page) => void;
}

export function Home({ setCurrentPage }: HomeProps) {
  return (
    <div>
      <Hero setCurrentPage={setCurrentPage} />
      <Stats />
      <Services />
      <USP />
      <Testimonials />
      <CTABanner setCurrentPage={setCurrentPage} />
    </div>
  );
}
