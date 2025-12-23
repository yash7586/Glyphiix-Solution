import { motion } from 'motion/react';
import {
  Code,
  TrendingUp,
  Share2,
  Palette,
  Image,
  Scale,
  ArrowRight,
  Check,
} from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: 'Website Design & Development',
      subtitle: 'Custom Digital Experiences That Convert',
      description:
        "We craft premium, high-performance websites that don't just look beautiful—they drive results. Every pixel, every interaction is designed with your business goals in mind.",
      benefits: [
        'Custom, responsive design for all devices',
        'Lightning-fast load times',
        'SEO-ready architecture',
        'Scalable infrastructure',
        'Ongoing support & maintenance',
        'Analytics integration',
      ],
      outcomes: [
        '200–400% conversion growth',
        'Lower bounce rates',
        'Higher trust & credibility',
        'Future-proof tech stack',
      ],
    },
    {
      icon: TrendingUp,
      title: 'SEO & Digital Marketing',
      subtitle: 'Dominate Search. Drive Growth.',
      description:
        'Data-driven SEO and performance marketing strategies designed to generate measurable ROI.',
      benefits: [
        'Keyword research & strategy',
        'Technical SEO optimization',
        'Content marketing',
        'Google Ads (3–5x ROAS)',
        'Meta Ads management',
        'Performance tracking',
      ],
      outcomes: [
        'Rank #1 for key terms',
        'Automated lead generation',
        'Predictable ROI',
        'Long-term organic traffic',
      ],
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      subtitle: 'Build Community. Drive Engagement.',
      description:
        'We turn social media into a growth channel by building trust, engagement, and conversions.',
      benefits: [
        'Content planning & creation',
        'Daily engagement',
        'Paid social campaigns',
        'Influencer collaborations',
        'Analytics & reports',
        'Brand voice strategy',
      ],
      outcomes: [
        'Engaged followers',
        'Higher brand recall',
        'Traffic from social',
        'Loyal community',
      ],
    },
    {
      icon: Palette,
      title: 'Logo & Brand Identity',
      subtitle: 'Brands That Demand Attention',
      description:
        'Complete brand identities that create recognition, trust, and long-term value.',
      benefits: [
        'Custom logo concepts',
        'Brand identity system',
        'Color & typography',
        'Brand messaging',
        'Stationery design',
        'Brand guidelines',
      ],
      outcomes: [
        'Strong brand recall',
        'Premium perception',
        'Audience trust',
        'Market differentiation',
      ],
    },
    {
      icon: Image,
      title: 'Graphic Design',
      subtitle: 'Visuals That Convert',
      description:
        'High-impact designs crafted to capture attention and drive action.',
      benefits: [
        'Marketing creatives',
        'Social media graphics',
        'Pitch decks',
        'Email templates',
        'Ad creatives',
        'Packaging design',
      ],
      outcomes: [
        'Higher engagement',
        'Brand consistency',
        'Professional look',
        'Improved conversions',
      ],
    },
    {
      icon: Scale,
      title: 'Legal & Business Consulting',
      subtitle: 'Protect & Scale Smart',
      description:
        'Strategic legal and business guidance to help you grow safely and confidently.',
      benefits: [
        'Business formation',
        'Contract drafting',
        'Compliance guidance',
        'IP protection',
        'Investor agreements',
        'Growth planning',
      ],
      outcomes: [
        'Reduced legal risk',
        'Protected assets',
        'Confident decisions',
        'Scalable foundation',
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl mb-6">
              Services Built for Growth
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              End-to-end digital solutions designed to scale, convert, and win.
            </p>
            <a
              href="https://calendly.com/abhishekrajput807668/client-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white hover:bg-gray-800 transition"
            >
              Let’s Discuss Your Project
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      {services.map((service, index) => (
        <motion.section
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className={`py-14 md:py-20 ${
            index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* TEXT */}
              <div className={index % 2 ? 'lg:order-2' : ''}>
                <div className="inline-flex p-4 bg-black text-white mb-6">
                  <service.icon size={32} />
                </div>
                <h2 className="text-3xl sm:text-4xl mb-3">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {service.subtitle}
                </p>
                <p className="text-gray-700 mb-8">
                  {service.description}
                </p>
                <a
                  href="https://calendly.com/abhishekrajput807668/client-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-gray-800 transition"
                >
                  Get Started
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* DETAILS */}
              <div className={index % 2 ? 'lg:order-1' : ''}>
                <div className="bg-white border p-8 mb-6">
                  <h3 className="text-xl mb-4">What We Do</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <Check size={20} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-black text-white p-8">
                  <h3 className="text-xl mb-4">Expected Outcomes</h3>
                  <ul className="space-y-3">
                    {service.outcomes.map((o, i) => (
                      <li key={i} className="flex gap-3">
                        <ArrowRight size={18} />
                        <span className="text-gray-300">{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* CTA */}
      <section className="py-16 md:py-24 bg-black text-white text-center">
        <h2 className="text-3xl sm:text-5xl mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Book a free consultation and get a clear growth roadmap.
        </p>
        <a
          href="https://calendly.com/abhishekrajput807668/client-consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-200 transition"
        >
          Book Free Consultation
          <ArrowRight size={20} />
        </a>
      </section>
    </div>
  );
}