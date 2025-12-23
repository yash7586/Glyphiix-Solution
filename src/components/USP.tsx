import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Zap, Users, Award, BarChart, Shield } from 'lucide-react';

export function USP() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const usps = [
    {
      icon: Target,
      title: 'Results-Driven Approach',
      description: 'Every decision, every strategy is focused on one thing: delivering measurable ROI and tangible business growth.',
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Delivery',
      description: 'Speed meets quality. We deliver premium solutions without compromising on excellence or attention to detail.',
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Your success gets a dedicated squad of experts—strategists, designers, developers, and marketers working in sync.',
    },
    {
      icon: Award,
      title: 'Industry Expertise',
      description: '15+ years building digital solutions for  Indian brands. We know what works because we\'ve done it hundreds of times.',
    },
    {
      icon: BarChart,
      title: 'Data-Driven Decisions',
      description: 'No guesswork. We use analytics, A/B testing, and market research to optimize every aspect of your digital presence.',
    },
    {
      icon: Shield,
      title: 'Complete Peace of Mind',
      description: 'From legal compliance to technical support, we handle the complexity so you can focus on running your business.',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">
            Why Global Brands Choose  Glyphix
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're not just another agency—we're your growth partner, combining strategy, creativity, and technology to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-white border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="mb-4 p-3 bg-black text-white inline-block">
                <usp.icon size={28} />
              </div>
              <h3 className="text-xl mb-3 font-semibold">{usp.title}</h3>
              <p className="text-gray-600 leading-relaxed">{usp.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 p-12 bg-gradient-to-r from-gray-900 to-black text-white text-center"
        >
          <h3 className="text-3xl lg:text-4xl mb-4 font-bold text-white">
            Ready to Scale Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 15+ companies that trust Glyphiix to deliver digital excellence. Let's discuss how we can transform your vision into reality.
          </p>
          <a
            href="https://calendly.com/abhishekrajput807668/client-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-100 transition-all"
          >
            Book a Free Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}