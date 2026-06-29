import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '../assets/profile.png';
import resumeFile from '../assets/resume.pdf';

export default function Hero() {
  const roles = [
    'Google Gemini Ambassador',
    'AI & ML Engineer',
    'Software Developer',
    'Python Developer',
    'IEEE Student Member',
    'Tech Community Leader',
    'Open Source Contributor'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const activeRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === activeRole) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? activeRole.substring(0, currentText.length - 1)
            : activeRole.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Floating Animated Mesh Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-radial from-primary/10 to-transparent blur-3xl animate-float" />
        <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-radial from-secondary/10 to-transparent blur-3xl animate-float [animation-delay:2s]" />
        <div className="absolute top-[40%] right-[30%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-radial from-accent/10 to-transparent blur-3xl animate-float [animation-delay:4s]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12">
        
        {/* Hero Left Content */}
        <motion.div 
          className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-accent/10 px-4 py-1.5 rounded-full text-primary dark:text-accent font-space-grotesk text-xs md:text-sm font-medium w-fit"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary dark:bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary dark:bg-accent"></span>
            </span>
            <span>Available for Internships & Projects</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-space-grotesk leading-[1.1] text-slate-900 dark:text-white">
            Hi, I'm <br />
            <span className="text-gradient">Sandhya Vishwakarma</span>
          </h1>

          {/* Typing Roles Container */}
          <div className="h-10 flex items-center text-lg md:text-2xl font-medium font-poppins text-slate-600 dark:text-slate-300">
            <span>I'm a&nbsp;</span>
            <span className="text-secondary dark:text-accent font-semibold relative">
              {currentText}
              <span className="absolute -right-1.5 top-0 bottom-0 w-[2px] bg-secondary dark:bg-accent animate-pulse" />
            </span>
          </div>

          <p className="text-base md:text-lg max-w-xl text-slate-600 dark:text-slate-400 font-inter leading-relaxed">
            I craft data-driven machine learning systems and intelligent software applications. 
            Google Gemini Campus Ambassador and IEEE Student Volunteer leading community initiatives on generative AI and emerging tech.
          </p>

          {/* Social Links Row */}
          <div className="flex items-center space-x-4 pt-2">
            <a 
              href="https://github.com/sandhya1766" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 bg-white dark:bg-card-dark rounded-full border border-slate-200/60 dark:border-slate-800/40 text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-accent hover:shadow-md transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sandhya-vishwakarma-4084b4360/" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 bg-white dark:bg-card-dark rounded-full border border-slate-200/60 dark:border-slate-800/40 text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-accent hover:shadow-md transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="mailto:sandhyavishvakarma2006@gmail.com" 
              className="p-3 bg-white dark:bg-card-dark rounded-full border border-slate-200/60 dark:border-slate-800/40 text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-accent hover:shadow-md transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center justify-center space-x-2 bg-primary text-white font-poppins text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </button>

            <a
              href={resumeFile}
              download="Sandhya_Vishwakarma_Resume.pdf"
              className="flex items-center justify-center space-x-2 bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white font-poppins text-sm font-semibold px-8 py-4 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center justify-center text-primary dark:text-accent font-poppins text-sm font-semibold hover:underline cursor-pointer py-2 sm:py-0 px-2"
            >
              <span>Hire Me</span>
            </button>
          </div>
        </motion.div>

        {/* Hero Right Graphic */}
        <motion.div 
          className="lg:col-span-5 flex items-center justify-center relative mt-8 lg:mt-0"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Circular Glowing Rings Backdrop */}
          <div className="absolute w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full border border-dashed border-primary/20 dark:border-accent/15 animate-spin-slow" />
          <div className="absolute w-[330px] h-[330px] md:w-[450px] md:h-[450px] rounded-full border border-slate-200 dark:border-slate-800/40 opacity-40" />

          {/* Profile Card Container */}
          <div className="relative z-10 w-[260px] h-[260px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden border-[6px] border-white dark:border-card-dark shadow-2xl bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10">
            {/* The transparent profile photo */}
            <img 
              src={profileImg} 
              alt="Sandhya Vishwakarma" 
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Decorative floating badges */}
          <motion.div 
            className="absolute -top-4 -right-2 z-20 bg-white dark:bg-card-dark px-4 py-2 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-800/50 flex items-center space-x-2"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <span className="text-xl">🤖</span>
            <span className="font-space-grotesk text-xs font-semibold text-slate-800 dark:text-white">AI / ML</span>
          </motion.div>

          <motion.div 
            className="absolute bottom-6 -left-6 z-20 bg-white dark:bg-card-dark px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-800/50 flex items-center space-x-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
          >
            <span className="text-lg">✨</span>
            <span className="font-space-grotesk text-xs font-semibold text-slate-800 dark:text-white">Gemini Ambassador</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
