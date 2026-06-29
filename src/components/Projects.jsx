import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Cpu, Layout, Eye, Search } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projectsData = [
    {
      title: "Vision For All — AI Braille Recognition",
      category: "Computer Vision & AI",
      icon: <Eye className="text-blue-600" size={20} />,
      tech: ["Python", "YOLOv8", "OpenCV", "Gemini API", "Streamlit", "gTTS"],
      problem: "Traditional Braille texts can only be read by trained individuals, creating a communication barrier for visually impaired people with non-readers.",
      features: [
        "Real-Time YOLOv8 cell coordinates detection",
        "6-bit binary pattern dot-to-letter translation",
        "Gemini AI LLM-powered context spelling error correction",
        "Multi-language text translation & voice synthesis"
      ],
      github: "https://github.com/sandhya1766/Vision_For_All",
      demo: null
    },
    {
      title: "AI Mock Interview Proctoring App",
      category: "Full Stack & AI Integrations",
      icon: <Cpu className="text-violet-600" size={20} />,
      tech: ["JavaScript", "HTML5/CSS3", "face-api.js", "Webcam API"],
      problem: "Conducting remote tests requires expensive manual proctoring to prevent cheating and track user emotions.",
      features: [
        "Real-time facial expression tracking (neutral, happy, alert)",
        "Instant multi-face detection cheating warning triggers",
        "Custom proctoring debug analytics HUD panel",
        "Zero backend required, fully clientside execution"
      ],
      github: "https://github.com/sandhya1766/Simple-Website/tree/main/ai-web-app",
      demo: null
    },
    {
      title: "Pollution Control Dashboard",
      category: "Frontend Development",
      icon: <Layout className="text-sky-600" size={20} />,
      tech: ["HTML5", "Vanilla CSS3", "JavaScript", "Express.js", "Node.js"],
      problem: "Lack of centralized, easy-to-read local air pollution dashboards for general public analysis.",
      features: [
        "Interactive real-time AQI tracking indices",
        "Dynamic visual warnings based on air quality thresholds",
        "Environmental reporting charts and graphs",
        "Clean, responsive CSS layout"
      ],
      github: "https://github.com/sandhya1766/Pollution-Website",
      demo: null
    },
    {
      title: "Web Scraper & Word Analytics Tool",
      category: "Data Engineering",
      icon: <Search className="text-emerald-600" size={20} />,
      tech: ["Python", "Jupyter Notebook", "BeautifulSoup", "Requests", "Pandas"],
      problem: "Manually collecting data from text-heavy web sources is inefficient for keyword analytics.",
      features: [
        "Automated BeautifulSoup text scraping pipelines",
        "Keyword distribution counts and analytics metrics",
        "Data wrangling and null filter cleaning workflows",
        "Jupyter notebook integrations for report sharing"
      ],
      github: "https://github.com/sandhya1766/Word_Frequency",
      demo: null
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-bg-dark/10 border-b border-slate-200/50 dark:border-slate-800/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs md:text-sm font-space-grotesk text-primary dark:text-accent font-bold tracking-widest uppercase mb-3">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-space-grotesk tracking-tight text-slate-900 dark:text-white">
            Projects of Impact
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-400 font-inter leading-relaxed">
            A showcase of AI, data engineering, and frontend projects solving concrete challenges.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-card-dark rounded-3xl border border-slate-200/50 dark:border-slate-800/40 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* Subtle accent glow */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-space-grotesk text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {project.category}
                  </span>
                  <div className="p-2 bg-slate-50 dark:bg-bg-dark rounded-xl">
                    {project.icon}
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-space-grotesk text-xl md:text-2xl font-extrabold text-slate-800 dark:text-white mb-4 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h4>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="font-poppins text-[10px] font-bold px-3 py-1 bg-slate-50 hover:bg-slate-100 text-slate-600 dark:bg-slate-800/40 dark:hover:bg-slate-800/80 dark:text-slate-400 rounded-md border border-slate-200/10 dark:border-slate-800/10 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Problem Statement */}
                <div className="mb-6 bg-slate-50/50 dark:bg-bg-dark/40 p-4.5 rounded-2xl border border-slate-100 dark:border-slate-850/10">
                  <h5 className="font-space-grotesk text-xs font-bold text-slate-800 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Problem Solved
                  </h5>
                  <p className="font-inter text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h5 className="font-space-grotesk text-xs font-bold text-slate-800 dark:text-slate-300 uppercase tracking-wider mb-3">
                    Key Features
                  </h5>
                  <ul className="space-y-2 font-inter text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start">
                        <span className="text-primary dark:text-accent mr-2 font-bold">•</span>
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="flex items-center space-x-4 border-t border-slate-100 dark:border-slate-800/60 pt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 text-xs font-bold font-poppins px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-primary dark:bg-slate-850 dark:hover:bg-accent border border-transparent dark:border-slate-800/50 transition-all duration-300"
                >
                  <FaGithub size={14} />
                  <span>GitHub Repository</span>
                </a>
                
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-1 text-xs font-bold font-poppins text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-accent transition-colors duration-300"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
