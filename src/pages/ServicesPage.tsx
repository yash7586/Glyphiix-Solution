import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, TrendingUp, Share2, Palette, Image, Scale, ArrowRight, Check } from 'lucide-react';

export function ServicesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const services = [
    {
      icon: Code,
      title: 'Website Design & Development',
      subtitle: 'Custom Digital Experiences That Convert',
      description: 'We craft premium, high-performance websites that don\'t just look beautiful—they drive results. Every pixel, every interaction is designed with your business goals in mind.',
      benefits: [
        'Custom, responsive design that works flawlessly on all devices',
        'Lightning-fast load times optimized for conversion',
        'SEO-ready architecture built for organic growth',
        'Scalable infrastructure that grows with your business',
        'Ongoing support and maintenance included',
        'Analytics integration for data-driven decisions',
      ],
      outcomes: [
        'Increase conversion rates by 200-400%',
        'Reduce bounce rates and improve engagement',
        'Build trust and credibility with premium design',
        'Future-proof technology stack',
      ],
    },
    {
      icon: TrendingUp,
      title: 'SEO & Digital Marketing',
      subtitle: 'Dominate Search. Drive Growth.',
      description: 'Stop hoping for traffic—start commanding it. Our SEO and performance marketing strategies are built on data, refined by experience, and proven to deliver ROI.',
      benefits: [
        'Comprehensive keyword research and strategy',
        'Technical SEO audits and optimization',
        'Content marketing that ranks and converts',
        'Google Ads campaigns with 3-5x ROAS',
        'Meta Ads (Facebook/Instagram) management',
        'Performance marketing across all major platforms',
      ],
      outcomes: [
        'Rank #1 for your most valuable keywords',
        'Generate qualified leads on autopilot',
        'Achieve measurable ROI from every dollar spent',
        'Build sustainable, long-term organic traffic',
      ],
    },
    {
      icon: Share2,
      title: 'Social Media Management & Growth',
      subtitle: 'Build Community. Drive Engagement.',
      description: 'Social media isn\'t just about posting—it\'s about building a brand that people love, trust, and buy from. We create strategies that turn followers into customers.',
      benefits: [
        'Strategic content planning and creation',
        'Daily community management and engagement',
        'Paid social advertising campaigns',
        'Influencer partnerships and collaborations',
        'Analytics and performance reporting',
        'Brand voice development and guidelines',
      ],
      outcomes: [
        'Grow engaged followers who actually care',
        'Increase brand awareness and recall',
        'Drive traffic and conversions from social',
        'Build authentic community around your brand',
      ],
    },
    {
      icon: Palette,
      title: 'Logo Design & Brand Identity',
      subtitle: 'Brands That Demand Attention',
      description: 'Your brand is more than a logo—it\'s a promise, a feeling, an experience. We create complete brand identities that resonate with your audience and stand the test of time.',
      benefits: [
        'Custom logo design with multiple concepts',
        'Complete brand identity system',
        'Color palette and typography guidelines',
        'Brand voice and messaging framework',
        'Business card and stationery design',
        'Brand guidelines documentation',
      ],
      outcomes: [
        'Stand out in a crowded marketplace',
        'Create instant recognition and recall',
        'Build trust and perceived value',
        'Attract your ideal customers',
      ],
    },
    {
      icon: Image,
      title: 'Graphic Design',
      subtitle: 'Visual Storytelling That Converts',
      description: 'Great design doesn\'t just look good—it performs. From marketing materials to campaign assets, we create visuals that capture attention and drive action.',
      benefits: [
        'Marketing collateral (brochures, flyers, posters)',
        'Social media graphics and templates',
        'Presentation design and pitch decks',
        'Email marketing templates',
        'Advertising creatives for all platforms',
        'Packaging and product design',
      ],
      outcomes: [
        'Increase engagement with scroll-stopping visuals',
        'Maintain brand consistency across all channels',
        'Elevate perceived quality and professionalism',
        'Drive higher conversion rates',
      ],
    },
    {
      icon: Scale,
      title: 'Legal & Business Consulting',
      subtitle: 'Protect Your Business. Scale Smart.',
      description: 'Growth without protection is risky. Our legal and business consulting ensures you\'re building on solid ground—compliant, strategic, and ready for scale.',
      benefits: [
        'Business entity formation and structure',
        'Contract drafting and review',
        'Compliance and regulatory guidance',
        'Intellectual property protection',
        'Partnership and investment agreements',
        'Strategic business planning',
      ],
      outcomes: [
        'Avoid costly legal mistakes',
        'Protect your assets and intellectual property',
        'Make confident, informed business decisions',
        'Scale your business the right way',
      ],
    },
  ];

  return (
    <div ref={ref} className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl mb-6">
              Services Built for Growth
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From strategy to execution, we provide end-to-end digital solutions that drive real business results. Every service is designed to scale, optimized to convert, and built to last.
            </p>
            <a
              href="https://forms.google.com/your-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-all"
            >
              Let's Discuss Your Project
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Sections */}
      <section className="py-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                  <div className="inline-flex items-center justify-center p-4 bg-black text-white mb-6">
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-4xl mb-3">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-6">{service.subtitle}</p>
                  <p className="text-gray-700 mb-8">{service.description}</p>

                  <a
                    href="https://forms.google.com/your-form-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-gray-800 transition-all"
                  >
                    Get Started
                    <ArrowRight size={18} />
                  </a>
                </div>

                {/* Benefits & Outcomes */}
                <div className={index % 2 === 0 ? '' : 'lg:order-1'}>
                  <div className="bg-white border border-gray-200 p-8 mb-6">
                    <h3 className="text-xl mb-4">What We Do</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check size={20} className="flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-black text-white p-8">
                    <h3 className="text-xl mb-4">Expected Outcomes</h3>
                    <ul className="space-y-3">
                      {service.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <ArrowRight size={20} className="flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl mb-6 font-bold text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Let's discuss which services will drive the most impact for your specific goals. Book a free consultation—no obligations, just strategy.
          </p>
          <a
            href="https://forms.google.com/your-form-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-100 transition-all"
          >
            Book Free Consultation
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}