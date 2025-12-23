import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

const text = "Transform Your Business Into a Digital Powerhouse";
const TYPING_SPEED = 200; // ms

export function Hero() {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const [count, setCount] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 🔓 Audio unlock (NO audible sound)
  useEffect(() => {
    const audio = new Audio("/typing.mp3");
    audio.volume = 0.4;
    audio.muted = true;

    audio
      .play()
      .then(() => {
        audio.pause();          // stop immediately
        audio.currentTime = 0;
        audio.muted = false;    // just unlock
      })
      .catch(() => {});

    audioRef.current = audio;
  }, []);

  // ⌨️ Typewriter + sound
  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setCount(i);

      // 🔊 play sound ONLY while typing
      if (
        audioRef.current &&
        text[i - 1] !== " " &&
        i <= text.length
      ) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }

      // 🛑 stop sound after typing ends
      if (i >= text.length) {
        audioRef.current?.pause();
        audioRef.current!.currentTime = 0;
        clearInterval(interval);
      }
    }, TYPING_SPEED);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white mb-8"
        >
          <Sparkles size={16} />
          <span className="text-sm font-medium">
            Trusted by 15+ Indian Brands
          </span>
        </motion.div>

        {/* Heading */}
        <h1
          ref={ref}
          className="text-5xl sm:text-6xl lg:text-7xl max-w-4xl mx-auto mb-6 tracking-tight leading-tight"
        >
          {text.slice(0, count).split("").map((char, index) => {
            const isGradient =
              text.slice(index).startsWith("Digital Powerhouse");

            return (
              <span
                key={index}
                className={
                  isGradient
                    ? "bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-clip-text text-transparent"
                    : "text-black"
                }
              >
                {char}
              </span>
            );
          })}
          <span className="inline-block w-[2px] h-[1em] bg-black ml-1 animate-pulse" />
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          We build premium websites, scale brands, and drive measurable growth
          through cutting-edge digital strategies. Your success is our blueprint.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-all"
          >
            Get Free Consultation
            <ArrowRight size={20} />
          </a>
          <button className="px-8 py-4 border-2 border-black hover:bg-black hover:text-white transition-all">
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
}