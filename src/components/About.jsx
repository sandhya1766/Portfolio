import React from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, Users, Cpu } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <Cpu className="text-primary" size={24} />,
      title: "AI & Machine Learning",
      description: "Building neural networks, computer vision tools, and text processing models to translate data into actionable intelligent solutions."
    },
    {
      icon: <Code className="text-secondary" size={24} />,
      title: "Software Engineering",
      description: "Writing clean, modern, and efficient scripts in Python, C/C++, SQL, and full-stack environments like React and Streamlit."
    },
    {
      icon: <Users className="text-accent" size={24} />,
      title: "Community Leadership",
      description: "Mentoring peers, conducting technical workshops on generative AI, and leading volunteer teams as an IEEE branch coordinator."
    },
    {
      icon: <BookOpen className="text-emerald-500" size={24} />,
      title: "Continuous Learning",
      description: "Actively researching emerging technologies, earning industry certifications, and participating in hackathons to build logic."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 12 } 
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-bg-dark/20 border-y border-slate-200/50 dark:border-slate-800/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs md:text-sm font-space-grotesk text-primary dark:text-accent font-bold tracking-widest uppercase mb-3">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-space-grotesk tracking-tight text-slate-900 dark:text-white">
            Engineering a Smarter Tomorrow
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-400 font-inter leading-relaxed">
            A look into my background, passions, and core focus areas as an AI engineering student and community leader.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            className="lg:col-span-6 space-y-6 text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-2xl font-bold font-space-grotesk text-slate-800 dark:text-white">
              My Journey & Passions
            </h4>
            <p className="text-slate-600 dark:text-slate-400 font-inter leading-relaxed">
              I am currently pursuing my **Bachelor of Technology (B.Tech) in Artificial Intelligence and Machine Learning** at **Acropolis Institute of Technology and Research** in Indore. My academic journey is driven by a deep fascination with how computer vision and machine learning can solve real-world accessibility issues.
            </p>
            <p className="text-slate-600 dark:text-slate-400 font-inter leading-relaxed">
              As a **Google Gemini Campus Ambassador** (interning under Ping Digital Broadcast), I act as a developer advocate, bringing Google's latest generative AI advances directly to campuses. I love educating students, organizing workshops, and managing AI trial events that bridge theory with dynamic practice.
            </p>
            <p className="text-slate-600 dark:text-slate-400 font-inter leading-relaxed">
              Furthermore, my active role as a student branch coordinator for **IEEE SIGHT** (Special Interest Group on Humanitarian Technology) allows me to volunteer on projects that apply AI to social causes. Through developer advocacy, technical community engagement, and mentoring, I enjoy sharing knowledge and growing together.
            </p>
          </motion.div>

          {/* Right Cards Column */}
          <motion.div 
            className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-white dark:bg-card-dark p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 hover:shadow-lg dark:hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 flex flex-col space-y-4"
              >
                <div className="p-3 bg-slate-50 dark:bg-bg-dark w-fit rounded-xl">
                  {card.icon}
                </div>
                <h5 className="font-space-grotesk text-lg font-bold text-slate-900 dark:text-white">
                  {card.title}
                </h5>
                <p className="font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
