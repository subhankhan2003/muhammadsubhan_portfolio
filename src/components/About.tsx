import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Rocket, Zap, Brain } from 'lucide-react';

const timeline = [
  {
    year: '2024',
    title: 'AI & Automation Focus',
    description: 'Building intelligent automation systems with n8n and AI integrations',
  },
  {
    year: '2023',
    title: 'Full Stack Mastery',
    description: 'Mastered MERN stack and cloud deployment architectures',
  },
  {
    year: '2022',
    title: 'Mobile Development',
    description: 'Started building cross-platform apps with Flutter',
  },
  {
    year: '2021',
    title: 'Web Development Journey',
    description: 'Began professional development career',
  },
];

const floatingIcons = [
  { Icon: Code2, delay: 0, color: '#FF2E2E' },
  { Icon: Rocket, delay: 0.2, color: '#00C2FF' },
  { Icon: Zap, delay: 0.4, color: '#FF2E2E' },
  { Icon: Brain, delay: 0.6, color: '#00C2FF' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF2E2E]/10 via-transparent to-[#00C2FF]/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p
            className="text-[#00C2FF] text-sm tracking-widest mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            WHO AM I
          </motion.p>
          <motion.h2
            className="text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Building intelligent digital systems that{' '}
              <span className="bg-gradient-to-r from-[#FF2E2E] to-[#00C2FF] bg-clip-text text-transparent">
                solve real world problems
              </span>
            </h3>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              I'm a Full Stack Developer specializing in the MERN stack, AI integrations, and automation systems. With expertise in building scalable SaaS applications, I transform complex business challenges into elegant technical solutions.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              From crafting seamless user experiences to architecting robust backend systems, I leverage cutting-edge technologies to create products that make a real impact.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="text-center">
                <h4 className="text-4xl font-bold text-[#FF2E2E] mb-2">50+</h4>
                <p className="text-gray-500">Projects Completed</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold text-[#00C2FF] mb-2">3+</h4>
                <p className="text-gray-500">Years Experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="relative w-full h-96 rounded-2xl bg-gradient-to-br from-[#FF2E2E]/20 to-[#00C2FF]/20 backdrop-blur-sm border border-gray-800 overflow-hidden">
              {floatingIcons.map(({ Icon, delay, color }, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    left: `${20 + index * 20}%`,
                    top: `${20 + (index % 2) * 30}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    delay: delay,
                  }}
                >
                  <Icon className="w-12 h-12" style={{ color }} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">My Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#FF2E2E] via-[#00C2FF] to-[#FF2E2E]" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative mb-16 ${index % 2 === 0 ? 'md:text-right md:pr-1/2' : 'md:pl-1/2 md:text-left'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1 + index * 0.2 }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-[#00C2FF] transition-colors">
                    <span className="text-[#FF2E2E] font-bold text-xl">{item.year}</span>
                    <h4 className="text-white text-2xl font-bold mt-2 mb-3">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>

                <motion.div
                  className="absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 bg-[#00C2FF] rounded-full"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.2, duration: 0.3 }}
                  whileHover={{ scale: 1.5, boxShadow: '0 0 20px rgba(0, 194, 255, 0.8)' }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
