import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle, Linkedin } from 'lucide-react';

const LinkedinIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const socialLinks = [
    {
      Icon: MessageSquare,
      name: 'WhatsApp',
      value: '+92 332 7577792',
      color: '#00C2FF',
      link: 'https://wa.me/923327577792',
    },
    {
      Icon: Mail,
      name: 'Email',
      value: 'subhankhanmsk1@gmail.com',
      color: '#FF2E2E',
      link: 'mailto:subhankhanmsk1@gmail.com',
    },
    {
      Icon: Linkedin,
      name: 'LinkedIn',
      value: 'Muhammad Subhan',
      color: '#00C2FF',
      link: 'https://www.linkedin.com/in/muhammad-subhan-a04771398',
    },
  ];

  return (
    <section ref={ref} className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,46,46,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,194,255,0.15),transparent_50%)]" />
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
            GET IN TOUCH
          </motion.p>
          <motion.h2
            className="text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Let's Talk
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Have a project in mind?
            </h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's create something amazing together.
            </p>

            <div className="space-y-6">
              {socialLinks.map((link, index) => {
                const Icon = link.name === 'LinkedIn' ? LinkedinIcon : link.Icon;
                return (
                  <motion.a
                    key={index}
                    href={link.link}
                    target={link.link.startsWith('http') ? '_blank' : undefined}
                    rel={link.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-[#00C2FF] transition-all"
                    whileHover={{ x: 10, boxShadow: `0 0 20px ${link.color}40` }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${link.color}20` }}
                    >
                      <div style={{ color: link.color }}>
                        <Icon />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{link.name}</p>
                      <p className="text-white font-semibold">{link.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <motion.label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'name' || formData.name
                      ? 'top-2 text-xs text-[#00C2FF]'
                      : 'top-5 text-base text-gray-500'
                  }`}
                >
                  Your Name
                </motion.label>
                <motion.input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 pt-7 pb-3 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl text-white focus:border-[#00C2FF] focus:outline-none transition-all"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>

              <div className="relative">
                <motion.label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'email' || formData.email
                      ? 'top-2 text-xs text-[#00C2FF]'
                      : 'top-5 text-base text-gray-500'
                  }`}
                >
                  Your Email
                </motion.label>
                <motion.input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 pt-7 pb-3 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl text-white focus:border-[#00C2FF] focus:outline-none transition-all"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>

              <div className="relative">
                <motion.label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'message' || formData.message
                      ? 'top-2 text-xs text-[#00C2FF]'
                      : 'top-5 text-base text-gray-500'
                  }`}
                >
                  Your Message
                </motion.label>
                <motion.textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  className="w-full px-4 pt-7 pb-3 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl text-white focus:border-[#00C2FF] focus:outline-none transition-all resize-none"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="group relative w-full px-8 py-5 bg-gradient-to-r from-[#FF2E2E] to-[#00C2FF] text-white font-bold text-lg rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted}
              >
                {submitted ? (
                  <motion.span
                    className="flex items-center justify-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle className="w-6 h-6" />
                    Message Sent!
                  </motion.span>
                ) : (
                  <span className="flex items-center justify-center gap-3">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                )}

                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-full">
            <p className="text-gray-400">
              Built with <span className="text-[#FF2E2E]">♥</span> by{' '}
              <span className="bg-gradient-to-r from-[#FF2E2E] to-[#00C2FF] bg-clip-text text-transparent font-bold">
                Muhammad Subhan
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
