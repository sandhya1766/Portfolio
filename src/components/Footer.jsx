import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white dark:bg-bg-dark border-t border-slate-200/50 dark:border-slate-800/60 py-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left copyright info */}
        <div className="font-poppins text-xs sm:text-sm text-slate-500 dark:text-slate-400 text-center md:text-left cursor-default">
          <span className="font-semibold text-slate-700 dark:text-slate-300">© 2026 Sandhya Vishwakarma</span>. All rights reserved.
          <p className="mt-1 text-[10px] text-slate-400">Designed & Developed by Sandhya Vishwakarma</p>
        </div>

        {/* Center Social icons */}
        <div className="flex items-center space-x-5">
          <a 
            href="https://github.com/sandhya1766" 
            target="_blank" 
            rel="noreferrer" 
            className="text-slate-400 hover:text-primary dark:hover:text-accent transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/sandhya-vishwakarma-4084b4360/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-slate-400 hover:text-primary dark:hover:text-accent transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a 
            href="mailto:sandhyavishvakarma2006@gmail.com" 
            className="text-slate-400 hover:text-primary dark:hover:text-accent transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Right back to top button */}
        <button
          onClick={scrollToTop}
          className="p-3 bg-slate-50 dark:bg-card-dark text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-accent border border-slate-200/50 dark:border-slate-800/40 hover:border-slate-350 rounded-full hover:shadow-sm cursor-pointer transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>

      </div>
    </footer>
  );
}
