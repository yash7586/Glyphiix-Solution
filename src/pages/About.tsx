import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Eye, Award, Users, TrendingUp, Globe, ArrowRight } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const values = [
    {
      icon: Target,
      title: 'Results First',
      description: 'Every decision we make is measured against one metric: does it drive results for our clients?',
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We don\'t work for you—we work with you. Your success is our success, and we\'re invested in the outcome.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'Digital never stands still, and neither do we. We stay ahead of trends to keep you ahead of competition.',
    },
    {
      icon: Award,
      title: 'Excellence Standard',
      description: 'Good isn\'t good enough. We deliver premium quality in everything we do, from strategy to execution.',
    },
  ];

  const whyTrust = [
    {
      stat: '2.5+',
      label: 'Years Experience',
      description: 'Industry veterans with deep expertise across all digital disciplines.',
    },
    {
      stat: '15+',
      label: 'Projects Delivered',
      description: 'From startups to Fortune 500 companies across 30+ industries.',
    },
    {
      stat: '₹2.5lakh+',
      label: 'Revenue Generated',
      description: 'Measurable ROI and business impact for our clients.',
    },
    {
      stat: '99.9%',
      label: 'Client Retention',
      description: 'Long-term partnerships built on trust and proven results.',
    },
  ];

  return (
    <div ref={ref} className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl lg:text-6xl mb-6">
              We're Glyphiix We Build Digital Empires.
            </h1>
            <p className="text-xl text-gray-600">
              A global digital agency obsessed with one thing: turning ambitious visions into market-dominating realities. We don't just build websites or run ads—we architect complete digital ecosystems that scale businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 p-4 bg-black text-white h-fit">
                <Target size={32} />
              </div>
              <div>
                <h2 className="text-3xl mb-4">Our Mission</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To empower businesses with digital solutions that don't just compete—but dominate. We exist to bridge the gap between where you are and where you deserve to be, using strategy, creativity, and technology as our tools.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 p-4 bg-black text-white h-fit">
                <Eye size={32} />
              </div>
              <div>
                <h2 className="text-3xl mb-4">Our Vision</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To be the most trusted digital partner for businesses that refuse to settle for average. We envision a world where every company, regardless of size, has access to world-class digital strategies that drive real growth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl mb-8 font-bold text-white">
              Our Story: Built on Results, Not Hype
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Glyphiix was born from a simple observation: most digital agencies talk about creativity and innovation, but few deliver measurable business results. We saw companies spending thousands on beautiful websites that didn't convert, marketing campaigns that didn't scale, and strategies that looked good on paper but failed in practice.
              </p>
              <p>
                So we built something different—an agency where every decision is data-driven, every strategy is results-focused, and every client relationship is a true partnership. We combine the creative excellence of top design studios with the analytical rigor of management consultancies.
              </p>
              <p>
                Over 2.5 years and 15+ projects later, we've helped startups become industry leaders, SMBs scale to 8 figures, and enterprises dominate their markets. Our secret? We don't chase trends—we focus relentlessly on what actually moves the needle for your business.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-4">
              The Principles That Guide Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our values aren't just words on a wall—they're the foundation of every project, every strategy, every client relationship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-white border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="p-3 bg-black text-white inline-block mb-4">
                  <value.icon size={28} />
                </div>
                <h3 className="text-2xl mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-4">
              Why Clients Trust Glyphiix
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trust isn't given—it's earned through consistent delivery, transparent communication, and proven results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {whyTrust.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl lg:text-6xl mb-3">{item.stat}</div>
                <div className="text-xl mb-2">{item.label}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-black text-white p-12 text-center"
          >
            <Globe className="mx-auto mb-6" size={48} />
            <h3 className="text-3xl mb-4">Global Reach, Local Expertise</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              We work with clients across 6 continents, bringing world-class digital solutions to businesses of all sizes. Whether you're in New York, London, Singapore, or anywhere in between—we deliver the same premium quality and personalized service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl mb-6">
              Let's Write Your Success Story
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join 15+ businesses that have transformed their digital presence and scaled to new heights with APEX. Your journey to market dominance starts with a conversation.
            </p>
            <a
              href="https://forms.google.com/your-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-all"
            >
              Start Your Transformation
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}