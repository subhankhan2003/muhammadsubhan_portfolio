import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-black to-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#FF2E2E]/20 via-transparent to-[#00C2FF]/20"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ backgroundSize: '200% 200%' }}
        />

        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-[#FF2E2E] to-[#00C2FF] rounded-3xl opacity-20 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-12 md:p-16 rounded-3xl border border-gray-700">
            <motion.p
              className="text-[#00C2FF] text-sm tracking-widest mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              READY TO START?
            </motion.p>

            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Let's Build Something
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#FF2E2E] to-[#00C2FF] bg-clip-text text-transparent">
                Powerful Together
              </span>
            </motion.h2>

            <motion.p
              className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Transform your ideas into reality with cutting-edge technology and intelligent automation.
              Let's create something extraordinary.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-10 py-5 bg-gradient-to-r from-[#FF2E2E] to-[#FF6B6B] text-white font-bold text-lg rounded-xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00C2FF] to-[#FF2E2E]"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-3">
                  Start Project
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </span>

                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255,255,255,0.2), transparent)',
                  }}
                  animate={{
                    scale: [0, 2],
                    opacity: [0.5, 0],
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.button>

              <motion.button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-10 py-5 border-2 border-[#00C2FF] text-[#00C2FF] font-bold text-lg rounded-xl overflow-hidden hover:text-white transition-colors"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(0, 194, 255, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-[#00C2FF]"
                  initial={{ y: '100%' }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  Book Call
                </span>
              </motion.button>
            </motion.div>

            <motion.div
              className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00C2FF] rounded-full animate-pulse" />
                <span>Quick Response</span>
              </div>
              <div className="w-px h-4 bg-gray-700" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FF2E2E] rounded-full animate-pulse" />
                <span>Free Consultation</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
