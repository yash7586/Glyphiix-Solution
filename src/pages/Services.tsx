import { motion } from 'motion/react';
import {
  ArrowRight,
  Globe,
  TrendingUp,
  Users,
  Palette,
  Megaphone,
  FileText,
  Briefcase,
  CheckCircle,
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Website Design & Development',
      description:
        'Custom websites that look stunning, load fast, and convert visitors into customers.',
      features: [
        'Responsive, mobile-first design',
        'SEO-optimized architecture',
        'Lightning-fast performance',
        'E-commerce integration',
        'CMS and admin panels',
      ],
      benefits:
        'Increase conversions by up to 250% with a website that works as hard as you do.',
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'SEO & Optimization',
      description:
        'Dominate search rankings and drive qualified organic traffic that converts.',
      features: [
        'Comprehensive SEO audits',
        'Keyword research & strategy',
        'On-page and technical SEO',
        'Link building campaigns',
        'Monthly performance reports',
      ],
      benefits:
        'Rank #1 on Google for your most valuable keywords and watch leads multiply.',
    },
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: 'Digital Marketing',
      description:
        'High-performing Google Ads and Meta Ads campaigns that maximize ROI.',
      features: [
        'Strategic campaign planning',
        'Google Ads & PPC',
        'Meta Ads',
        'Performance tracking',
        'A/B testing',
      ],
      benefits:
        'Generate qualified leads at lower cost with data-driven ads.',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Social Media Management',
      description:
        'Build engaged communities and amplify your brand.',
      features: [
        'Content strategy',
        'Daily posting',
        'Community management',
        'Influencer partnerships',
        'Analytics tracking',
      ],
      benefits:
        'Grow your following by 300%+ and turn engagement into revenue.',
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: 'Logo Design & Brand Identity',
      description:
        'Memorable brands that stand out and resonate.',
      features: [
        'Custom logo design',
        'Brand style guides',
        'Typography & colors',
        'Stationery',
        'Brand messaging',
      ],
      benefits:
        'Instant credibility and strong brand recall.',
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Graphic Design',
      description:
        'Eye-catching visuals for every touchpoint.',
      features: [
        'Marketing creatives',
        'Social graphics',
        'Presentations',
        'Email templates',
        'Print assets',
      ],
      benefits:
        'Visuals that boost engagement and conversions.',
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: 'Legal & Business Consulting',
      description:
        'Build a solid, compliant foundation for growth.',
      features: [
        'Business registration',
        'Contracts',
        'Compliance',
        'Startup strategy',
        'Risk management',
      ],
      benefits:
        'Scale confidently with legal clarity.',
    },
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-20">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise-Level Services
            <span className="block text-indigo-600">
              For Ambitious Brands
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mb-10">
            End-to-end digital solutions that drive measurable growth.
          </p>

          <motion.a
            href="https://forms.google.com/your-form-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-indigo-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-10"
            >
              <div className={index % 2 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>

                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  {service.title}
                </h2>

                <p className="text-slate-600 mb-6">
                  {service.description}
                </p>

                <div className="bg-indigo-50 border-l-4 border-indigo-600 p-5 rounded-lg mb-6">
                  <p className="text-slate-800 text-sm sm:text-base">
                    <strong>Result:</strong> {service.benefits}
                  </p>
                </div>

                <a
                  href="https://forms.google.com/your-form-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full hover:bg-indigo-600 transition"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className={index % 2 ? 'lg:order-1' : ''}>
                <div className="bg-slate-50 rounded-2xl p-6 border">
                  <h3 className="text-lg font-semibold mb-4">
                    What We Deliver
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-indigo-600 mt-1" />
                        <span className="text-slate-700 text-sm sm:text-base">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}