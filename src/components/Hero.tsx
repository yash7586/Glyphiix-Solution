import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-gray-100/40 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-gray-100/40 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white border border-black mb-8"
        >
          <Sparkles size={16} />
          <span className="text-sm font-medium">Trusted by 15+ Indian Brands</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl max-w-4xl mx-auto mb-6 tracking-tight text-black"
        >
          Transform Your Business Into a
          <span className="block mt-2 bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-clip-text text-transparent">
            Digital Powerhouse
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
        >
          We build premium websites, scale brands, and drive measurable growth through cutting-edge digital strategies. Your success is our blueprint.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://forms.google.com/your-form-link"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-all"
          >
            Get Free Consultation
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-black bg-transparent hover:bg-black hover:text-white transition-all">
            View Our Work
          </button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-12 text-sm text-gray-600"
        >
          <div className="text-center">
            <div className="text-3xl mb-1 font-bold text-black">15+</div>
            <div>Projects Delivered</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-300" />
          <div className="text-center">
            <div className="text-3xl mb-1 font-bold text-black">99.9%</div>
            <div>Client Satisfaction</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-300" />
          <div className="text-center">
            <div className="text-3xl mb-1 font-bold text-black">₹5Lac.+</div>
            <div>Revenue Generated</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-black/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-black/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}