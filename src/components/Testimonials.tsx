import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechStart Inc.',
      company: 'SaaS Platform',
      content: 'APEX transformed our online presence completely. Within 3 months, we saw a 340% increase in qualified leads and our conversion rate doubled. Their strategic approach to SEO and web development is unmatched.',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      role: 'Founder, GrowthLabs',
      company: 'Digital Marketing',
      content: 'Working with APEX was a game-changer. They didn\'t just build us a website—they created a conversion machine. Our revenue increased by $2M in the first year. Absolutely worth every penny.',
      rating: 5,
    },
    {
      name: 'Emma Thompson',
      role: 'Marketing Director',
      company: 'E-commerce Brand',
      content: 'The team at APEX is incredibly professional and results-oriented. They handle everything from our social media to our paid ads campaigns. Our ROAS improved from 2.5x to 7.8x in just 6 months.',
      rating: 5,
    },
    {
      name: 'David Park',
      role: 'Co-Founder, FinanceHub',
      company: 'Financial Services',
      content: 'As a regulated industry, we needed someone who understood compliance AND digital marketing. APEX delivered beyond expectations. Their legal consulting combined with marketing expertise is rare.',
      rating: 5,
    },
    {
      name: 'Lisa Anderson',
      role: 'VP of Marketing',
      company: 'Healthcare Tech',
      content: 'APEX designed our entire brand identity from scratch and built our website. The attention to detail and creative direction they provided has positioned us as a premium player in our market.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'CEO, RetailPro',
      company: 'Retail Solutions',
      content: 'We\'ve worked with multiple agencies before, but APEX is in a different league. They\'re strategic partners who genuinely care about our success. Our organic traffic grew 580% in 8 months.',
      rating: 5,
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
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it—hear from the businesses we've helped scale to new heights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 border border-gray-200 hover:shadow-lg transition-shadow bg-white relative"
            >
              <Quote className="absolute top-6 right-6 text-gray-200" size={40} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" className="text-black" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center text-white font-semibold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-black">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}