import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Expertise' },
  { id: 'projects', label: 'My Work' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2 text-2xl font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => handleNavigate('home')}
        >
          <div className="w-8 h-8 bg-gradient-to-r from-[#FF2E2E] to-[#00C2FF] rounded-lg flex items-center justify-center">
            <span className="text-white font-black">MS</span>
          </div>
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Subhan
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`relative text-sm font-semibold transition-colors ${
                activeSection === item.id ? 'text-[#FF2E2E]' : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF2E2E] to-[#00C2FF]"
                  layoutId="activeIndicator"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <motion.button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      <motion.div
        className="md:hidden overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-4 space-y-4 bg-gray-900">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`block w-full text-left text-sm font-semibold ${
                activeSection === item.id ? 'text-[#FF2E2E]' : 'text-gray-400'
              }`}
              whileHover={{ x: 10 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
