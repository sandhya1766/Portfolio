import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldAlert, Sparkles, Database, Cloud, FileText } from 'lucide-react';

export default function Certifications() {
  const certificationsData = [
    {
      title: "Microsoft Certified: Azure Data Scientist Associate",
      issuer: "Microsoft",
      date: "2025",
      type: "Data Science & Cloud",
      icon: <Cloud className="text-blue-500" size={20} />,
      gradient: "from-blue-500/10 to-indigo-500/10 dark:from-blue-500/5 dark:to-indigo-500/5"
    },
    {
      title: "Oracle Certified: OCI 2025 Data Science Professional",
      issuer: "Oracle",
      date: "2025",
      type: "Machine Learning & OCI",
      icon: <Database className="text-red-500" size={20} />,
      gradient: "from-red-500/10 to-orange-500/10 dark:from-red-500/5 dark:to-orange-500/5"
    },
    {
      title: "Oracle Certified: OCI 2025 AI Foundations Associate",
      issuer: "Oracle",
      date: "2025",
      type: "Artificial Intelligence",
      icon: <Sparkles className="text-amber-500" size={20} />,
      gradient: "from-amber-500/10 to-yellow-500/10 dark:from-amber-500/5 dark:to-yellow-500/5"
    },
    {
      title: "Infosys Certification: Artificial Intelligence Foundation",
      issuer: "Infosys Springboard",
      date: "2025",
      type: "AI Fundamentals",
      icon: <Award className="text-emerald-500" size={20} />,
      gradient: "from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/5"
    },
    {
      title: "Infosys Certification: Python Foundation",
      issuer: "Infosys Springboard",
      date: "2025",
      type: "Programming",
      icon: <FileText className="text-purple-500" size={20} />,
      gradient: "from-purple-500/10 to-pink-500/10 dark:from-purple-500/5 dark:to-pink-500/5"
    },
    {
      title: "NPTEL: Data Analytics with Python",
      issuer: "NPTEL (IIT)",
      date: "2025",
      type: "Data Science",
      icon: <Award className="text-cyan-500" size={20} />,
      gradient: "from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/5 dark:to-blue-500/5"
    },
    {
      title: "NPTEL: Database Management System",
      issuer: "NPTEL (IIT)",
      date: "2024",
      type: "Data Management",
      icon: <Database className="text-sky-500" size={20} />,
      gradient: "from-sky-500/10 to-indigo-500/10 dark:from-sky-500/5 dark:to-indigo-500/5"
    },
    {
      title: "NPTEL: Cloud Computing",
      issuer: "NPTEL (IIT)",
      date: "2024",
      type: "Cloud Architecture",
      icon: <Cloud className="text-indigo-500" size={20} />,
      gradient: "from-indigo-500/10 to-violet-500/10 dark:from-indigo-500/5 dark:to-violet-500/5"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-bg-dark/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs md:text-sm font-space-grotesk text-primary dark:text-accent font-bold tracking-widest uppercase mb-3">Certifications</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-space-grotesk tracking-tight text-slate-900 dark:text-white">
            Verified Credentials
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-400 font-inter leading-relaxed">
            Industry standard cloud and AI certifications validating my technical knowledge.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              className={`bg-white dark:bg-card-dark p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 relative overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-default`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              {/* Subtle background gradient based on cert type */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-50 group-hover:scale-105 transition-transform duration-500`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-poppins text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                    {cert.issuer}
                  </span>
                  <div className="p-2 bg-white dark:bg-bg-dark rounded-xl shadow-xs">
                    {cert.icon}
                  </div>
                </div>

                <h4 className="font-space-grotesk text-base font-bold text-slate-800 dark:text-white leading-snug mb-2">
                  {cert.title}
                </h4>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/50 flex items-center justify-between text-xs font-poppins">
                <span className="text-slate-400 dark:text-slate-500">{cert.type}</span>
                <span className="font-semibold text-slate-600 dark:text-slate-400">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
