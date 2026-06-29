import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Award, BookOpen, Users, Compass } from 'lucide-react';

export default function GeminiAmbassador() {
  const milestones = [
    {
      date: "March 2026",
      title: "Program Selection",
      icon: <Award className="text-blue-500" size={18} />,
      badge: "Selection",
      desc: "Selected as one of the exclusive Campus Ambassadors by Ping Digital Broadcast to represent Google Gemini AI Trials across campuses in India.",
      color: "border-blue-500 bg-blue-50/50 dark:bg-blue-950/10 text-blue-600 dark:text-blue-400"
    },
    {
      date: "Spring 2026",
      title: "Developer Advocacy & AI Literacy",
      icon: <Compass className="text-red-500" size={18} />,
      badge: "Advocacy",
      desc: "Launched peer campaigns educating college students on generative AI prompts, applications, and responsible use of AI tools.",
      color: "border-red-500 bg-red-50/50 dark:bg-red-950/10 text-red-600 dark:text-red-400"
    },
    {
      date: "Ongoing",
      title: "Hosting GenAI Workshops",
      icon: <BookOpen className="text-yellow-500" size={18} />,
      badge: "Workshops",
      desc: "Organized hands-on technical workshops introducing developer APIs, prompt engineering frameworks, and live AI integrations on campus.",
      color: "border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/10 text-yellow-600 dark:text-yellow-400"
    },
    {
      date: "Ongoing",
      title: "Activating Gemini AI Trials",
      icon: <Users className="text-green-500" size={18} />,
      badge: "Trials Active",
      desc: "Facilitated trial activation, helping 1000+ students set up and experiment with advanced multimodal systems to build functional project prototypes.",
      color: "border-green-500 bg-green-50/50 dark:bg-green-950/10 text-green-600 dark:text-green-400"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-bg-dark/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 w-full">
        
        {/* Google Style Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 via-red-500/10 to-green-500/10 px-4 py-2 rounded-full mb-4 border border-slate-200/40 dark:border-slate-800/40">
            <Sparkles size={16} className="text-primary animate-pulse" />
            <span className="font-space-grotesk text-xs md:text-sm font-extrabold tracking-wide text-slate-800 dark:text-white">
              Developer Representative
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold font-space-grotesk tracking-tight text-slate-900 dark:text-white leading-tight">
            Google Gemini <span className="text-gradient-google font-extrabold">Ambassador</span>
          </h2>
          
          <p className="mt-4 text-slate-600 dark:text-slate-400 font-inter leading-relaxed max-w-2xl">
            Selected in the program managed by Ping Digital Broadcast to advocate for Google's Gemini generative models, organizing student workshops, and activating AI development trials.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto mt-12">
          
          {/* Vertical center bar */}
          <div className="absolute left-[31px] md:left-1/2 top-2 bottom-2 w-[2px] bg-slate-200 dark:bg-slate-800/60 -translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div 
                  key={idx}
                  className="flex flex-col md:flex-row relative items-start md:items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  
                  {/* Timeline Dot (left on mobile, centered on desktop) */}
                  <div className="absolute left-[31px] md:left-1/2 top-4 md:top-auto w-8 h-8 rounded-full bg-white dark:bg-card-dark border-[3px] border-slate-200 dark:border-slate-800 flex items-center justify-center -translate-x-1/2 z-20 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-primary to-secondary" />
                  </div>

                  {/* Left / Right Content Box */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2 text-left'}`}>
                    
                    {/* Badge showing Date */}
                    <div className={`inline-flex items-center space-x-1.5 font-space-grotesk text-xs font-bold px-3.5 py-1 rounded-full border mb-3 ${item.color}`}>
                      <Calendar size={12} />
                      <span>{item.date}</span>
                    </div>

                    <h4 className="font-space-grotesk text-xl font-extrabold text-slate-800 dark:text-white mb-2">
                      {item.title}
                    </h4>

                    <p className="font-inter text-sm md:text-base leading-relaxed text-slate-500 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>

                  {/* Empty spacer for the other side on desktop */}
                  <div className="hidden md:block w-1/2" />

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
