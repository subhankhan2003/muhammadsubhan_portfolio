import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const skillCategories = [
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Vite'],
    color: '#FF2E2E',
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST API', 'GraphQL'],
    color: '#00C2FF',
  },
  {
    name: 'AI',
    skills: ['OpenAI', 'LangChain', 'ML Models', 'NLP', 'Vector DB', 'RAG'],
    color: '#FF2E2E',
  },
  {
    name: 'Automation',
    skills: ['n8n', 'Zapier', 'Webhooks', 'CRON', 'Task Queues', 'Scripts'],
    color: '#00C2FF',
  },
  {
    name: 'Cloud',
    skills: ['AWS', 'Firebase', 'Vercel', 'Docker', 'CI/CD', 'Serverless'],
    color: '#FF2E2E',
  },
  {
    name: 'Mobile',
    skills: ['Flutter', 'React Native', 'Dart', 'Mobile UI', 'App Store', 'Play Store'],
    color: '#00C2FF',
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-[#0A0A0A] to-black overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-[#00C2FF] to-transparent"
            style={{ left: `${i * 5}%` }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
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
            MY EXPERTISE
          </motion.p>
          <motion.h2
            className="text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="relative"
            >
              <motion.div
                className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 cursor-pointer overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  borderColor: category.color,
                  boxShadow: `0 0 30px ${category.color}40`,
                }}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 hover:opacity-10 transition-opacity"
                  style={{ background: `linear-gradient(135deg, ${category.color}, transparent)` }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center font-bold text-xl"
                    style={{
                      background: `linear-gradient(135deg, ${category.color}40, ${category.color}10)`,
                      color: category.color,
                    }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.name.charAt(0)}
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>

                  <motion.div
                    initial={false}
                    animate={{ height: expandedCard === index ? 'auto' : '120px' }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-3 py-1 text-sm rounded-full border text-gray-300"
                          style={{ borderColor: `${category.color}60` }}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: `${category.color}20`,
                            color: category.color,
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.6 + index * 0.1 + skillIndex * 0.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {category.skills.length > 4 && (
                    <motion.button
                      className="mt-4 text-sm"
                      style={{ color: category.color }}
                      whileHover={{ x: 5 }}
                    >
                      {expandedCard === index ? 'Show less' : 'Show more →'}
                    </motion.button>
                  )}
                </div>

                <motion.div
                  className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20"
                  style={{ backgroundColor: category.color }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
