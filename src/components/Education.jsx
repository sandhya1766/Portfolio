import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Landmark } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      institution: "Acropolis Institute of Technology and Research",
      location: "Indore, India",
      degree: "Bachelor of Technology (B.Tech) — AI & ML",
      duration: "2024 — 2028",
      details: "Pursuing specialization in artificial intelligence, neural networks, databases, and algorithm logic. Active coordinator in the IEEE SIGHT student chapter and Google Gemini ambassador.",
      grade: "Active Student",
      icon: <GraduationCap className="text-primary" size={20} />
    },
    {
      institution: "Career Academy Higher Secondary School",
      location: "Indore, India",
      degree: "Class 12th (Senior Secondary)",
      duration: "Graduated 2024",
      details: "Focused on Science, Mathematics, and Computer Science fundamentals.",
      grade: "85%",
      icon: <Landmark className="text-secondary" size={20} />
    },
    {
      institution: "Police Public School",
      location: "Indore, India",
      degree: "Class 10th (Secondary School)",
      duration: "Graduated 2022",
      details: "Completed core secondary curriculum with focused interests in science and computer coding logic.",
      grade: "88%",
      icon: <Landmark className="text-accent" size={20} />
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-bg-dark/15 border-y border-slate-200/50 dark:border-slate-800/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs md:text-sm font-space-grotesk text-primary dark:text-accent font-bold tracking-widest uppercase mb-3">Education</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-space-grotesk tracking-tight text-slate-900 dark:text-white">
            Academic Background
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-400 font-inter leading-relaxed">
            My formal engineering training, high school specialization, and scores.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto pl-6 border-l border-slate-200 dark:border-slate-800/60 space-y-12">
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Timeline Node */}
              <div className="absolute -left-[35px] top-1.5 w-4.5 h-4.5 rounded-full bg-white dark:bg-card-dark border-[3px] border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-primary dark:group-hover:border-accent transition-colors duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-primary dark:group-hover:bg-accent transition-colors duration-300" />
              </div>

              <div className="bg-white dark:bg-card-dark p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 hover:shadow-md transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Institution Details */}
                <div className="md:col-span-8 space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-slate-50 dark:bg-bg-dark rounded-xl">
                      {item.icon}
                    </div>
                    <span className="font-poppins text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                      {item.institution}
                    </span>
                  </div>
                  
                  <h4 className="font-space-grotesk text-xl font-extrabold text-slate-800 dark:text-white">
                    {item.degree}
                  </h4>
                  
                  <p className="font-inter text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {item.details}
                  </p>

                  <div className="font-poppins text-xs text-slate-400">
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Score & Duration Right Column */}
                <div className="md:col-span-4 flex flex-col md:items-end justify-center space-y-3 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-800/60 pt-4 md:pt-0 md:pl-6">
                  <div className="flex items-center space-x-1.5 font-space-grotesk text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 px-3.5 py-1.5 rounded-lg w-fit">
                    <Calendar size={12} />
                    <span>{item.duration}</span>
                  </div>
                  
                  <div className="flex flex-col md:items-end">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Score / Status</span>
                    <span className="font-space-grotesk text-2xl font-extrabold text-primary dark:text-accent">
                      {item.grade}
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
