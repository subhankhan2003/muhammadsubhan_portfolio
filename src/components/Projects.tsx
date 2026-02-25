import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI Automation Platform',
    description: 'Intelligent workflow automation system integrating OpenAI with n8n for seamless business process optimization.',
    tags: ['React', 'Node.js', 'OpenAI', 'n8n', 'MongoDB'],
    gradient: 'from-[#FF2E2E] to-[#FF6B6B]',
  },
  {
    title: 'SaaS Analytics Dashboard',
    description: 'Real-time analytics platform with advanced data visualization and predictive insights for businesses.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Charts', 'AWS'],
    gradient: 'from-[#00C2FF] to-[#00E5FF]',
  },
  {
    title: 'E-Commerce Mobile App',
    description: 'Cross-platform mobile application with seamless checkout experience and real-time inventory management.',
    tags: ['Flutter', 'Firebase', 'Stripe', 'REST API'],
    gradient: 'from-[#FF2E2E] to-[#00C2FF]',
  },
  {
    title: 'Cloud Infrastructure Manager',
    description: 'DevOps automation tool for managing cloud resources, deployments, and monitoring across multiple providers.',
    tags: ['React', 'AWS', 'Docker', 'Terraform', 'CI/CD'],
    gradient: 'from-[#00C2FF] to-[#FF2E2E]',
  },
  {
    title: 'AI Content Generator',
    description: 'Advanced content creation platform leveraging GPT models for automated blog posts, social media, and marketing copy.',
    tags: ['Next.js', 'OpenAI', 'LangChain', 'Redis', 'Stripe'],
    gradient: 'from-[#FF6B6B] to-[#FF2E2E]',
  },
  {
    title: 'Real-Time Chat Application',
    description: 'Scalable messaging platform with end-to-end encryption, file sharing, and video calling capabilities.',
    tags: ['React', 'Socket.io', 'WebRTC', 'MongoDB', 'Redis'],
    gradient: 'from-[#00E5FF] to-[#00C2FF]',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,46,46,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,194,255,0.1),transparent_50%)]" />
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
            MY WORK
          </motion.p>
          <motion.h2
            className="text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className="relative group h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 overflow-hidden cursor-pointer"
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: '0 20px 60px rgba(0, 194, 255, 0.3)',
                }}
                transition={{ duration: 0.3 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

                <div className="relative p-8 h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} mb-6 flex items-center justify-center`}>
                    <motion.div
                      className="w-8 h-8 bg-white rounded"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#FF2E2E] group-hover:to-[#00C2FF] group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                        whileHover={{
                          scale: 1.1,
                          borderColor: '#00C2FF',
                          color: '#00C2FF',
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.button
                      className="flex items-center gap-2 px-4 py-2 bg-[#FF2E2E] text-white rounded-lg text-sm font-semibold"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 46, 46, 0.5)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.button>
                    <motion.button
                      className="flex items-center gap-2 px-4 py-2 border-2 border-gray-700 text-gray-300 rounded-lg text-sm font-semibold hover:border-[#00C2FF] hover:text-[#00C2FF] transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.button>
                  </div>
                </div>

                <motion.div
                  className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity"
                  style={{ background: `linear-gradient(135deg, #FF2E2E, #00C2FF)` }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
