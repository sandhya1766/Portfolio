import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import resumeFile from '../assets/resume.pdf';

export default function Navbar({ currentSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Impact', id: 'impact' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Initial theme check
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-bg-dark/80 shadow-sm border-b border-slate-200/50 dark:border-slate-800/30 backdrop-blur-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-secondary to-accent origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('home')}
          className="font-space-grotesk text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white cursor-pointer group"
        >
          SANDHYA<span className="text-primary group-hover:text-secondary transition-colors duration-300">.</span>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-6 font-poppins text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`relative py-1 cursor-pointer transition-colors duration-300 ${
                    currentSection === link.id
                      ? 'text-primary dark:text-accent font-semibold'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                  {currentSection === link.id && (
                    <motion.span
                      layoutId="activeSectionIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary dark:bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4 border-l border-slate-200 dark:border-slate-800 pl-6">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 cursor-pointer transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Resume Button */}
            <a
              href={resumeFile}
              download="Sandhya_Vishwakarma_Resume.pdf"
              className="flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white font-poppins text-xs font-semibold px-4 py-2.5 rounded-full hover:shadow-[0_4px_14px_0_rgba(37,99,235,0.4)] transition-all duration-300 cursor-pointer"
            >
              <Download size={14} />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Mobile Nav Button */}
        <div className="flex lg:hidden items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 cursor-pointer transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 dark:text-white cursor-pointer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-bg-dark border-b border-slate-200/50 dark:border-slate-800/50 px-6 py-6 space-y-4 flex flex-col items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="w-full text-center space-y-4 font-poppins text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.id} className="w-full">
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full py-2 cursor-pointer transition-colors duration-300 ${
                    currentSection === link.id
                      ? 'text-primary dark:text-accent font-semibold'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          
          <a
            href={resumeFile}
            download="Sandhya_Vishwakarma_Resume.pdf"
            className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-primary to-secondary text-white font-poppins text-sm font-semibold py-3 rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <Download size={16} />
            <span>Download Resume</span>
          </a>
        </motion.div>
      )}
    </nav>
  );
}
