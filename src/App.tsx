import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import SocialButtons from './components/SocialButtons';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Process from './components/Process';
import CTA from './components/CTA';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', element: document.getElementById('home') },
        { id: 'about', element: document.getElementById('about') },
        { id: 'skills', element: document.getElementById('skills') },
        { id: 'projects', element: document.getElementById('projects') },
        { id: 'services', element: document.getElementById('services') },
        { id: 'process', element: document.getElementById('process') },
        { id: 'contact', element: document.getElementById('contact') },
      ];

      let current = 'home';
      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />
          <ScrollProgress />
          <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
          <SocialButtons />
          <div className="min-h-screen bg-[#0A0A0A] text-white">
            <section id="home">
              <Hero />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="services">
              <Services />
            </section>
            <section id="process">
              <Process />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default App;
