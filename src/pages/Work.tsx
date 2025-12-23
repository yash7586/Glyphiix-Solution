import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  TrendingUp,
  IndianRupee,
  Award,
} from 'lucide-react';

export function Work() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const caseStudies = [
    {
      client: 'TechFlow SaaS',
      industry: 'B2B Enterprise Software',
      services: [
        'Website Development',
        'SEO Strategy',
        'Performance Marketing',
        'Lead Generation',
      ],
      challenge:
        'TechFlow, a Series A SaaS startup, had a powerful project management platform but struggled to attract enterprise clients. Their outdated website caused high bounce rates, organic traffic was minimal, and paid campaigns were generating poor ROI.',
      solution:
        'We led a complete digital transformation—redesigned their website with conversion-focused UX, implemented enterprise-grade SEO targeting high-intent keywords, optimized paid acquisition with account-based marketing, and launched LinkedIn campaigns focused on decision-makers.',
      results: [
        { metric: '412%', label: 'Increase in Qualified Demo Requests' },
        { metric: '3.4x', label: 'Conversion Rate Improvement' },
        { metric: '#1–4', label: 'Google Rankings (Key Keywords)' },
        { metric: '₹1.5lakh', label: 'New Revenue Generated (9 Months)' },
      ],
    },
  ];

  return (
    <div ref={ref} className="pt-20">
      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Results That Speak Louder Than Promises
          </h1>
          <p className="text-xl text-gray-600">
            Real businesses. Real challenges. Measurable growth.
          </p>
        </motion.div>
      </section>

      {/* CASE STUDY */}
      {caseStudies.map((study, index) => (
        <section key={index} className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="mb-16">
              <span className="inline-block mb-4 px-4 py-1.5 bg-black text-white text-sm font-medium">
                {study.industry}
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                {study.client}
              </h2>

              <p className="text-lg text-gray-600 max-w-3xl">
                A high-growth SaaS brand that scaled enterprise acquisition
                through conversion-focused UX and performance marketing.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {study.services.map((service, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm border border-gray-300 bg-white font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              <div className="p-8 border border-gray-200 bg-gray-50">
                <h3 className="flex items-center gap-3 text-2xl font-semibold mb-4">
                  <Award className="text-red-600" />
                  The Challenge
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              <div className="p-8 border border-gray-200 bg-gray-50">
                <h3 className="flex items-center gap-3 text-2xl font-semibold mb-4">
                  <TrendingUp className="text-green-600" />
                  Our Solution
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {study.solution}
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="mb-24">
              <h3 className="text-3xl font-bold mb-8 text-black">
                Impact & Results
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {study.results.map((r, i) => (
                  <div
                    key={i}
                    className="p-8 bg-black text-white text-center"
                  >
                    <div className="text-4xl lg:text-5xl font-bold mb-2">
                      {r.metric}
                    </div>
                    <div className="text-sm text-gray-300 font-medium">
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-6"
        >
          <IndianRupee size={48} className="mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Scale Revenue?
          </h2>
          <p className="text-gray-300 mb-10 text-lg">
            Let’s build a growth system that delivers predictable,
            high-quality business results.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-medium hover:bg-gray-100 transition"
          >
            Start Your Growth Journey
            <ArrowRight />
          </a>
        </motion.div>
      </section>
    </div>
  );
}