import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, TrendingUp, Share2, Palette, Image, Scale, ArrowRight } from 'lucide-react';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Code,
      title: 'Website Design & Development',
      description: 'Custom, high-performance websites that convert visitors into customers. Built for scale, speed, and success.',
    },
    {
      icon: TrendingUp,
      title: 'SEO & Digital Marketing',
      description: 'Dominate search rankings and drive qualified traffic. Google Ads, Meta Ads, and performance marketing that delivers ROI.',
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Build, engage, and grow your audience. Strategic content and community management that amplifies your brand.',
    },
    {
      icon: Palette,
      title: 'Logo & Brand Identity',
      description: 'Memorable brands that stand out. From concept to complete identity systems that resonate with your audience.',
    },
    {
      icon: Image,
      title: 'Graphic Design',
      description: 'Visual storytelling that captivates. Marketing materials, campaigns, and assets that drive engagement and conversions.',
    },
    {
      icon: Scale,
      title: 'Legal & Business Consulting',
      description: 'Protect and grow your business. Contracts, compliance, startup guidance, and strategic business consulting.',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">
            End-to-End Digital Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to launch, scale, and dominate your market—all under one roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 border border-gray-200 hover:border-black hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="mb-6 p-3 bg-black text-white inline-block">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl mb-3 font-semibold">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <button className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://calendly.com/abhishekrajput807668/client-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-all"
          >
            Discuss Your Project
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}