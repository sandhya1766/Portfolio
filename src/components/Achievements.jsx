import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Compass, Terminal, Shield } from 'lucide-react';

export default function Achievements() {
  const achievementsData = [
    {
      title: "Google Gemini Ambassador Selection",
      desc: "Selected to drive Google Generative AI campus trials in India, educating 1000+ students on modern large language models.",
      year: "2026",
      icon: <Star className="text-amber-500" size={20} />
    },
    {
      title: "IEEE SIGHT Student Coordinator",
      desc: "Appointed as the official student event coordinator for AITR branch, directing Git/GitHub code workshops and outreach projects.",
      year: "2026",
      icon: <Shield className="text-primary" size={20} />
    },
    {
      title: "Dual Oracle Cloud Certifications",
      desc: "Earned OCI Data Science Professional and AI Foundations Associate certifications validating advanced machine learning execution.",
      year: "2025",
      icon: <Award className="text-rose-500" size={20} />
    },
    {
      title: "Open Source Code Contribution",
      desc: "Released 'Vision For All' AI Braille recognition under public license, supporting open source accessibility research.",
      year: "Ongoing",
      icon: <Terminal className="text-emerald-500" size={20} />
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-bg-dark/10 border-t border-slate-200/50 dark:border-slate-800/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs md:text-sm font-space-grotesk text-primary dark:text-accent font-bold tracking-widest uppercase mb-3">Honors & Milestones</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-space-grotesk tracking-tight text-slate-900 dark:text-white">
            Notable Achievements
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-400 font-inter leading-relaxed">
            Key milestones highlighting community advocacy, cloud engineering, and technology leadership.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-card-dark p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 relative overflow-hidden hover:shadow-md transition-all duration-300 flex items-start space-x-5"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -25 : 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Left Icon Panel */}
              <div className="p-3 bg-slate-50 dark:bg-bg-dark rounded-2xl shadow-inner flex-shrink-0">
                {item.icon}
              </div>

              {/* Right Details Panel */}
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-space-grotesk text-lg font-bold text-slate-800 dark:text-white">
                    {item.title}
                  </h4>
                  <span className="font-poppins text-xs font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                    {item.year}
                  </span>
                </div>
                
                <p className="font-inter text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
