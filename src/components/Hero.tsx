import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';

const roles = [
  'MERN Stack Developer',
  'AI Builder',
  'Automation Engineer',
  'SaaS Creator',
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 46, 46, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />

        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00C2FF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-[#00C2FF] text-lg mb-4 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            FULL STACK DEVELOPER
          </motion.p>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Muhammad
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#FF2E2E] to-[#00C2FF] bg-clip-text text-transparent">
              Subhan
            </span>
          </motion.h1>

          <div className="h-16 mb-8">
            <motion.p
              className="text-2xl md:text-3xl text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="text-[#FF2E2E]"
              >
                |
              </motion.span>
            </motion.p>
          </div>

          <motion.p
            className="text-gray-500 text-lg max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Building intelligent digital systems that solve real world problems through cutting-edge technology and automation.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.button
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                projectsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative px-8 py-4 bg-[#FF2E2E] text-white font-semibold rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#FF2E2E] to-[#00C2FF]"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative px-8 py-4 border-2 border-[#00C2FF] text-[#00C2FF] font-semibold rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 194, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Hire Me
                <Mail className="w-5 h-5" />
              </span>
            </motion.button>

            <motion.a
              href="/Subhan_resume.pdf"
              download="Muhammad_Subhan_Resume.pdf"
              className="group relative px-8 py-4 border-2 border-gray-700 text-white font-semibold rounded-lg overflow-hidden hover:border-[#FF2E2E] transition-colors inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Download CV
                <Download className="w-5 h-5" />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#00C2FF] rounded-full flex justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-[#00C2FF] rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
