import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';

export function CaseStudies() {
  const caseStudies = [
    {
      title: 'TechStart Inc.',
      industry: 'SaaS',
      challenge: 'Low website conversion rate and poor search visibility',
      solution: 'Complete website redesign, SEO optimization, and conversion rate optimization strategy',
      results: [
        '340% increase in qualified leads',
        '2.5x improvement in conversion rate',
        'Ranked #1 for 12 primary keywords',
        '$850K ARR growth in 6 months',
      ],
      image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwbGFwdG9wfGVufDF8fHx8MTc2NjM0NDIwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: { roi: '420%', duration: '6 months', revenue: '$850K' },
    },
    {
      title: 'Luxe Brands',
      industry: 'E-commerce',
      challenge: 'Limited brand recognition and stagnant online sales',
      solution: 'Complete rebrand, social media strategy, and multi-channel marketing campaign',
      results: [
        '$2M revenue in first quarter post-launch',
        '450% growth in social media following',
        '180% increase in average order value',
        '95% customer satisfaction rate',
      ],
      image: 'https://images.unsplash.com/photo-1657757996603-acec063f1d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2NjMzNDQwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: { roi: '550%', duration: '4 months', revenue: '$2M' },
    },
    {
      title: 'GrowthLab',
      industry: 'Professional Services',
      challenge: 'Zero organic traffic and heavy reliance on referrals',
      solution: 'Comprehensive SEO strategy, content marketing, and lead generation funnel',
      results: [
        'Top 3 rankings for 25+ high-value keywords',
        '12,000+ monthly organic visitors',
        '280% increase in inbound leads',
        'Reduced cost per lead by 65%',
      ],
      image: 'https://images.unsplash.com/photo-1730382624761-af8112d26209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGdyYXBofGVufDF8fHx8MTc2NjQzMTE1NXww&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: { roi: '380%', duration: '8 months', revenue: '$1.2M' },
    },
    {
      title: 'FitFlow',
      industry: 'Health & Wellness',
      challenge: 'High ad costs and low conversion rate on paid campaigns',
      solution: 'Google Ads & Meta Ads optimization, landing page redesign, and retention strategy',
      results: [
        '68% reduction in cost per acquisition',
        '5.2x ROAS on paid campaigns',
        '40,000+ app downloads in 3 months',
        '85% month-over-month growth',
      ],
      image: 'https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzY2MzMxMjczfDA&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: { roi: '520%', duration: '3 months', revenue: '$640K' },
    },
    {
      title: 'BuildRight Construction',
      industry: 'Construction',
      challenge: 'Outdated digital presence and limited lead generation',
      solution: 'Modern website, local SEO, and Google Ads campaigns targeting high-value projects',
      results: [
        '$3.5M in new project contracts',
        '92% increase in qualified leads',
        'Dominating local search results',
        'Positioned as industry leader',
      ],
      image: 'https://images.unsplash.com/photo-1738676524296-364cf18900a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpb3xlbnwxfHx8fDE3NjYzMjE3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: { roi: '650%', duration: '5 months', revenue: '$3.5M' },
    },
    {
      title: 'EduPro Learning',
      industry: 'Education',
      challenge: 'Low enrollment rates and poor brand differentiation',
      solution: 'Brand identity redesign, content strategy, and social media community building',
      results: [
        '320% increase in course enrollments',
        '50,000+ engaged community members',
        '4.9/5 average rating',
        'Expanded to 3 new markets',
      ],
      image: 'https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjY0MDEzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: { roi: '440%', duration: '7 months', revenue: '$980K' },
    },
  ];

  const industries = [
    'SaaS & Technology',
    'E-commerce & Retail',
    'Professional Services',
    'Healthcare & Wellness',
    'Construction & Real Estate',
    'Education & E-learning',
    'Finance & Insurance',
    'Hospitality & Travel',
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
            Real Results.
            <span className="block text-indigo-600">Real Impact.</span>
          </h1>
          <p className="text-xl mb-10">
            Explore how we've helped businesses across industries achieve transformative growth through strategic digital solutions.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: '15+', label: 'Projects Completed' },
            { number: '₹2.5lakh+', label: 'Revenue Generated' },
            { number: '15+', label: 'Happy Clients' },
            { number: '99.9%', label: 'Client Retention' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl text-indigo-600 mb-2">{stat.number}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Case Studies */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-32">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Image */}
              <div className="relative h-96 rounded-3xl overflow-hidden mb-12">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <div className="text-sm text-white/80 mb-2">{study.industry}</div>
                  <h2 className="text-white">{study.title}</h2>
                </div>
              </div>

              {/* Content */}
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Problem & Solution */}
                <div className="lg:col-span-2">
                  <div className="mb-8">
                    <h3 className="mb-3">The Challenge</h3>
                    <p className="text-slate-700">{study.challenge}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="mb-3">Our Solution</h3>
                    <p className="text-slate-700">{study.solution}</p>
                  </div>

                  <div>
                    <h3 className="mb-4">Key Results</h3>
                    <ul className="space-y-3">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">
                            ✓
                          </div>
                          <span className="text-slate-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Metrics Card */}
                <div>
                  <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 sticky top-32">
                    <h4 className="mb-6">Project Highlights</h4>
                    <div className="space-y-6">
                      <div>
                        <div className="text-sm text-slate-600 mb-1">ROI</div>
                        <div className="text-3xl text-indigo-600">{study.metrics.roi}</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-600 mb-1">Timeline</div>
                        <div className="text-2xl">{study.metrics.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-600 mb-1">Revenue Impact</div>
                        <div className="text-2xl">{study.metrics.revenue}</div>
                      </div>
                    </div>
                    <motion.a
                      href="https://forms.google.com/your-form-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mt-8 px-6 py-3 bg-slate-900 text-white rounded-full hover:bg-indigo-600 transition-colors inline-flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Similar Results
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries Served */}
      <section className="mt-32 bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              Industries We Serve
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl max-w-2xl mx-auto"
            >
              Cross-industry expertise that delivers results across diverse markets.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <p className="text-slate-800">{industry}</p>
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
            Want Results Like These?
          </h2>
          <p className="text-xl mb-10 text-slate-300 max-w-2xl mx-auto">
            Let's create a custom strategy for your business. Book a free consultation and let's discuss your goals.
          </p>
          <motion.a
            href="https://forms.google.com/your-form-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full hover:bg-indigo-600 hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Success Story
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
