import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-gray-100/30 to-transparent rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white border border-black mb-8"
            >
              <MessageCircle size={16} />
              <span className="text-sm font-medium">Let's Start a Conversation</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-6xl mb-6 tracking-tight text-black"
            >
              Ready to Transform
              <span className="block mt-2 bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-clip-text text-transparent">
                Your Digital Presence?
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            >
              Every great partnership starts with a simple conversation. Tell us about your goals, and let's explore how we can help you achieve them.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-16"
            >
              <a
                href="https://calendly.com/abhishekrajput807668/client-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-black text-white hover:bg-gray-800 transition-all text-lg"
              >
                <MessageCircle size={24} />
                Get Free Consultation
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-gray-500 mt-4">
                No commitments. No sales pressure. Just honest strategy discussion.
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
            >
              <div className="p-6 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <Mail className="mx-auto mb-4" size={32} />
                <h3 className="mb-2">Email Us</h3>
                <a
                  href="mailto:hello@apex.agency"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  hello@apex.agency
                </a>
              </div>

              <div className="p-6 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <Phone className="mx-auto mb-4" size={32} />
                <h3 className="mb-2">Call Us</h3>
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>

              <div className="p-6 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <MapPin className="mx-auto mb-4" size={32} />
                <h3 className="mb-2">Location</h3>
                <p className="text-gray-600">
                  Global Operations
                </p>
              </div>

              <div className="p-6 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <Clock className="mx-auto mb-4" size={32} />
                <h3 className="mb-2">Response Time</h3>
                <p className="text-gray-600">
                  Within 24 hours
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl mb-4">
                What Happens After You Reach Out?
              </h2>
              <p className="text-xl text-gray-600">
                Our consultation process is designed to understand your unique needs and deliver actionable insights.
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Initial Consultation',
                  description: 'We start with a friendly conversation to understand your business, goals, challenges, and vision. No sales pitch—just listening.',
                },
                {
                  step: '02',
                  title: 'Strategic Analysis',
                  description: 'Our team conducts a preliminary analysis of your current digital presence and identifies key opportunities for growth.',
                },
                {
                  step: '03',
                  title: 'Custom Proposal',
                  description: 'We create a tailored strategy and proposal designed specifically for your business objectives, complete with timeline and investment breakdown.',
                },
                {
                  step: '04',
                  title: 'Partnership Kickoff',
                  description: 'Once you\'re ready, we hit the ground running with a clear roadmap, dedicated team, and commitment to delivering exceptional results.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6 p-8 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-black text-white flex items-center justify-center text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to help you get started faster
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'What\'s the investment range for your services?',
                answer: 'Every project is unique, but most engagements range from $5K-$50K depending on scope and complexity. We work with businesses of all sizes and can customize packages to fit your budget and goals.',
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Website projects typically take 4-8 weeks. Marketing campaigns can launch within 1-2 weeks. Complex projects involving multiple services may take 2-3 months. We always provide clear timelines upfront.',
              },
              {
                question: 'Do you work with startups or just established businesses?',
                answer: 'We work with both! We\'ve helped pre-launch startups build their entire digital presence and Fortune 500 companies optimize their existing strategies. If you\'re serious about growth, we\'re interested.',
              },
              {
                question: 'What makes APEX different from other agencies?',
                answer: 'Three things: (1) Results-first approach with clear KPIs, (2) Full-service capabilities—no need to juggle multiple vendors, (3) 15+ years of proven expertise with 98% client retention rate.',
              },
              {
                question: 'Do you offer ongoing support and maintenance?',
                answer: 'Absolutely. Most clients stay with us long-term because digital success isn\'t a one-time project—it\'s an ongoing partnership. We offer flexible retainers and support packages.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-white border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl mb-6">
              Don't Wait for the Perfect Moment
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              The best time to invest in your digital presence was yesterday. The second best time is right now. Let's make it happen.
            </p>
            <a
              href="https://calendly.com/abhishekrajput807668/client-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black hover:bg-gray-100 transition-all text-lg"
            >
              Book Your Free Consultation
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm text-gray-400 mt-6">
              Trusted by 500+ businesses worldwide • 98% client satisfaction • Response within 24 hours
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}