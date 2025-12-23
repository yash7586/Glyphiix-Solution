import { motion } from 'motion/react';
import { ArrowRight, Globe, TrendingUp, Users, Palette, Megaphone, FileText, Briefcase, CheckCircle } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Website Design & Development',
      description: 'Custom websites that look stunning, load fast, and convert visitors into customers.',
      features: [
        'Responsive, mobile-first design',
        'SEO-optimized architecture',
        'Lightning-fast performance',
        'E-commerce integration',
        'CMS and admin panels',
      ],
      benefits: 'Increase conversions by up to 250% with a website that works as hard as you do.',
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'SEO & Optimization',
      description: 'Dominate search rankings and drive qualified organic traffic that converts.',
      features: [
        'Comprehensive SEO audits',
        'Keyword research & strategy',
        'On-page and technical SEO',
        'Link building campaigns',
        'Monthly performance reports',
      ],
      benefits: 'Rank #1 on Google for your most valuable keywords and watch your organic leads multiply.',
    },
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: 'Digital Marketing',
      description: 'High-performing Google Ads and Meta Ads campaigns that maximize your ROI.',
      features: [
        'Strategic campaign planning',
        'Google Ads & PPC management',
        'Meta (Facebook & Instagram) Ads',
        'Performance tracking & optimization',
        'A/B testing for maximum results',
      ],
      benefits: 'Generate qualified leads at a fraction of the cost with data-driven ad strategies.',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Social Media Management',
      description: 'Build engaged communities and amplify your brand across all social platforms.',
      features: [
        'Content strategy & calendar',
        'Daily posting & engagement',
        'Community management',
        'Influencer partnerships',
        'Analytics & growth tracking',
      ],
      benefits: 'Grow your following by 300%+ and turn social engagement into revenue.',
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Logo Design & Brand Identity',
      description: 'Memorable brands that stand out in the market and resonate with your audience.',
      features: [
        'Custom logo design',
        'Brand style guides',
        'Color palette & typography',
        'Business card & stationery',
        'Brand messaging & tone',
      ],
      benefits: 'Establish instant credibility and become unforgettable in your industry.',
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Graphic Design',
      description: 'Eye-catching designs for every touchpoint in your customer journey.',
      features: [
        'Marketing collateral',
        'Social media graphics',
        'Infographics & presentations',
        'Email templates',
        'Print & digital assets',
      ],
      benefits: 'Captivate your audience with visuals that drive engagement and conversions.',
    },
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: 'Campaign Planning & Execution',
      description: 'Comprehensive marketing campaigns that deliver measurable business results.',
      features: [
        'Multi-channel campaign strategy',
        'Launch planning & coordination',
        'Content creation & distribution',
        'Performance monitoring',
        'Post-campaign analysis',
      ],
      benefits: 'Launch campaigns that create buzz, drive sales, and grow your market share.',
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: 'Legal & Business Consulting',
      description: 'Navigate legal complexities and build a solid foundation for sustainable growth.',
      features: [
        'Business structure & registration',
        'Contract drafting & review',
        'Compliance & regulations',
        'Startup guidance & strategy',
        'Risk management consulting',
      ],
      benefits: 'Protect your business and scale with confidence knowing you're fully compliant.',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="mb-6">
            Enterprise-Level Services
            <span className="block text-indigo-600">For Ambitious Brands</span>
          </h1>
          <p className="text-xl mb-10">
            We provide comprehensive digital solutions that drive measurable growth. From strategy to execution, we're your end-to-end partner for success.
          </p>
          <motion.a
            href="https://forms.google.com/your-form-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-indigo-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </section>

      {/* Services Detail */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h2 className="mb-4">{service.title}</h2>
                <p className="text-xl mb-8">{service.description}</p>
                <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-lg mb-8">
                  <p className="text-slate-800">
                    <strong>Result:</strong> {service.benefits}
                  </p>
                </div>
                <motion.a
                  href="https://forms.google.com/your-form-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full hover:bg-indigo-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                  <h3 className="mb-6">What We Deliver</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mt-32 bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              Our Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl max-w-2xl mx-auto"
            >
              A proven framework that consistently delivers exceptional results.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Deep dive into your business, goals, and target audience.' },
              { step: '02', title: 'Strategy', desc: 'Develop a data-driven roadmap tailored to your objectives.' },
              { step: '03', title: 'Execution', desc: 'Flawless implementation with regular updates and checkpoints.' },
              { step: '04', title: 'Optimization', desc: 'Continuous improvement based on performance data.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl text-indigo-600 mb-4">{item.step}</div>
                <h3 className="mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-24 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 text-white rounded-3xl p-12 md:p-16 text-center"
        >
          <h2 className="mb-6 text-white">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl mb-10 text-slate-300 max-w-2xl mx-auto">
            Book a free consultation and discover how our services can transform your business.
          </p>
          <motion.a
            href="https://forms.google.com/your-form-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full hover:bg-indigo-600 hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Your Consultation
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
