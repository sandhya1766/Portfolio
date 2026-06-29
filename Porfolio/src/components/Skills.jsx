import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Wrench, Languages, MessageSquareCode, GraduationCap } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming",
      icon: <MessageSquareCode className="text-primary" size={20} />,
      skills: ["Python", "Java", "JavaScript", "C / C++", "HTML5", "CSS3"]
    },
    {
      category: "AI & Machine Learning",
      icon: <BrainCircuit className="text-secondary" size={20} />,
      skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "YOLOv8", "Generative AI"]
    },
    {
      category: "Data & ML Libraries",
      icon: <GraduationCap className="text-accent" size={20} />,
      skills: ["Pandas", "NumPy", "Scikit-Learn", "OpenCV", "TensorFlow", "Matplotlib", "Seaborn"]
    },
    {
      category: "Tools & Databases",
      icon: <Wrench className="text-emerald-500" size={20} />,
      skills: ["Git", "GitHub", "VS Code", "MySQL", "MongoDB", "Postman", "Power BI", "Advanced Excel"]
    },
    {
      category: "Professional Strengths",
      icon: <Languages className="text-amber-500" size={20} />,
      skills: ["Leadership", "Developer Advocacy", "Public Speaking", "Problem Solving", "Mentorship", "Collaboration"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-bg-dark/10 border-y border-slate-200/50 dark:border-slate-800/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs md:text-sm font-space-grotesk text-primary dark:text-accent font-bold tracking-widest uppercase mb-3">Skills</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-space-grotesk tracking-tight text-slate-900 dark:text-white">
            My Technical Arsenal
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-400 font-inter leading-relaxed">
            A comprehensive list of core libraries, databases, frameworks, and developer toolsets I work with daily.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`bg-white dark:bg-card-dark p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 hover:shadow-xl transition-all duration-300 flex flex-col space-y-6 ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-100 dark:border-slate-800/60">
                <div className="p-2.5 bg-slate-50 dark:bg-bg-dark rounded-xl">
                  {cat.icon}
                </div>
                <h4 className="font-space-grotesk text-lg font-bold text-slate-900 dark:text-white">
                  {cat.category}
                </h4>
              </div>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="font-poppins text-xs font-semibold px-4 py-2 bg-slate-100/60 hover:bg-primary/5 text-slate-700 hover:text-primary dark:bg-slate-800/50 dark:hover:bg-accent/10 dark:text-slate-300 dark:hover:text-accent rounded-full border border-slate-200/20 dark:border-slate-850/10 cursor-default transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
