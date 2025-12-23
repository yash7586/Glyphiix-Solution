import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-transparent"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl mb-6 font-bold text-white">
            Let's Build Something Extraordinary Together
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Whether you're launching a startup or scaling an enterprise, we have the expertise and drive to make it happen. Your success story starts with a conversation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://forms.google.com/your-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-100 transition-all"
            >
              Get Free Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white bg-transparent hover:bg-white hover:text-black transition-all">
              View Case Studies
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-8">
            No commitments. No sales pressure. Just honest conversation about your goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}