import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bot, Code, Smartphone, Cloud, Boxes, Workflow } from 'lucide-react';

const services = [
  {
    Icon: Bot,
    title: 'AI Automation',
    description: 'Intelligent automation systems that leverage AI to streamline workflows and boost productivity.',
    features: ['AI Integration', 'Workflow Automation', 'Smart Bots', 'ML Models'],
  },
  {
    Icon: Boxes,
    title: 'SaaS Development',
    description: 'Scalable software-as-a-service solutions built with modern architecture and best practices.',
    features: ['Multi-tenancy', 'Subscription System', 'Analytics', 'API Integration'],
  },
  {
    Icon: Code,
    title: 'Web Applications',
    description: 'High-performance web apps with stunning UI/UX and robust backend architecture.',
    features: ['Responsive Design', 'Real-time Features', 'SEO Optimized', 'Progressive Web Apps'],
  },
  {
    Icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications with native performance and beautiful design.',
    features: ['iOS & Android', 'Offline Support', 'Push Notifications', 'App Store Publishing'],
  },
  {
    Icon: Workflow,
    title: 'API Systems',
    description: 'RESTful and GraphQL APIs designed for scalability, security, and performance.',
    features: ['REST API', 'GraphQL', 'Webhooks', 'API Documentation'],
  },
  {
    Icon: Cloud,
    title: 'Cloud Deployment',
    description: 'Complete cloud infrastructure setup with CI/CD pipelines and monitoring.',
    features: ['AWS/GCP/Azure', 'Docker/K8s', 'CI/CD Pipeline', 'Monitoring'],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-black to-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255, 46, 46, 0.1) 0%, transparent 50%)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
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
            WHAT I OFFER
          </motion.p>
          <motion.h2
            className="text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <motion.div
                className="relative h-full bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700 overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  borderColor: '#00C2FF',
                  boxShadow: '0 0 40px rgba(0, 194, 255, 0.3)',
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#FF2E2E]/10 to-[#00C2FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF2E2E] to-[#00C2FF] p-0.5 mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                      <service.Icon className="w-8 h-8 text-[#00C2FF]" />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#FF2E2E] group-hover:to-[#00C2FF] group-hover:bg-clip-text transition-all">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center gap-3 text-gray-500 group-hover:text-gray-300 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 + featureIndex * 0.05 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00C2FF]" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(135deg, #FF2E2E, #00C2FF)' }}
                />

                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF2E2E] via-[#00C2FF] to-[#FF2E2E]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  style={{ transformOrigin: 'left' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
