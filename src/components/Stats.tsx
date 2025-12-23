import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      number: '15+',
      label: 'Clients in India',
      description: 'From startups to Fortune companies',
    },
    {
      number: '2.5+',
      label: 'Years Experience',
      description: 'Industry veterans driving innovation',
    },
    {
      number: '99.9%',
      label: 'Client Retention',
      description: 'Long-term partnerships built on results',
    },
    {
      number: '₹5Lac.+',
      label: 'Revenue Generated',
      description: 'Measurable ROI for our clients',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 font-bold text-white">
            The Numbers Don't Lie
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We don't just make promises—we deliver measurable results that transform businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all group"
            >
              <div className="text-5xl lg:text-6xl mb-3 group-hover:scale-110 transition-transform font-bold">
                {stat.number}
              </div>
              <div className="text-xl mb-2 font-semibold">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}