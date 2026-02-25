import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Palette, Code2, Zap, Rocket } from 'lucide-react';

const processSteps = [
  {
    Icon: Search,
    title: 'Discovery',
    description: 'Understanding your vision, requirements, and business goals through detailed consultation.',
    color: '#FF2E2E',
  },
  {
    Icon: Palette,
    title: 'Design',
    description: 'Creating wireframes and prototypes with focus on UX/UI excellence and brand identity.',
    color: '#00C2FF',
  },
  {
    Icon: Code2,
    title: 'Build',
    description: 'Development with clean code, best practices, and regular progress updates.',
    color: '#FF2E2E',
  },
  {
    Icon: Zap,
    title: 'Automate',
    description: 'Implementing automation workflows and AI integrations for maximum efficiency.',
    color: '#00C2FF',
  },
  {
    Icon: Rocket,
    title: 'Deploy',
    description: 'Launch with proper testing, monitoring, and continuous support for success.',
    color: '#FF2E2E',
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#00C2FF] to-transparent"
            style={{ top: `${i * 10}%` }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.p
            className="text-[#00C2FF] text-sm tracking-widest mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            HOW I WORK
          </motion.p>
          <motion.h2
            className="text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              My Process
            </span>
          </motion.h2>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF2E2E] via-[#00C2FF] to-[#FF2E2E] transform -translate-y-1/2 hidden lg:block" />

          <motion.div
            className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-[#FF2E2E] to-[#00C2FF] transform -translate-y-1/2 hidden lg:block"
            initial={{ width: 0 }}
            animate={isInView ? { width: '100%' } : {}}
            transition={{ duration: 2, delay: 0.5 }}
          />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                className="relative"
              >
                <motion.div
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-[#00C2FF] transition-all group cursor-pointer h-full"
                  whileHover={{
                    y: -10,
                    boxShadow: `0 20px 40px ${step.color}40`,
                  }}
                >
                  <motion.div
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.4 }}
                  >
                    <div
                      className="w-12 h-12 rounded-full border-4 border-[#0A0A0A] flex items-center justify-center"
                      style={{ backgroundColor: step.color }}
                    >
                      <step.Icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="mt-8 text-center"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.2 }}
                  >
                    <div
                      className="text-6xl font-bold mb-4 opacity-20"
                      style={{ color: step.color }}
                    >
                      0{index + 1}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#FF2E2E] group-hover:to-[#00C2FF] group-hover:bg-clip-text transition-all">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `radial-gradient(circle at center, ${step.color}10, transparent)`,
                    }}
                  />
                </motion.div>

                {index < processSteps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1 + index * 0.2 }}
                  >
                    <motion.div
                      className="w-4 h-4 rotate-45"
                      style={{ backgroundColor: step.color }}
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
