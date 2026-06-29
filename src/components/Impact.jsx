import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export default function Impact() {
  const stats = [
    {
      value: 1000,
      suffix: '+',
      title: 'Students Educated',
      description: 'Introduced to Generative AI & Google Gemini trials on campus.'
    },
    {
      value: 7,
      suffix: '',
      title: 'GitHub Repositories',
      description: 'Active public code repositories and open-source contributions.'
    },
    {
      value: 8,
      suffix: '',
      title: 'IT Certifications',
      description: 'From Microsoft Azure, Oracle Cloud AI, Infosys, and NPTEL.'
    },
    {
      value: 12,
      suffix: '+',
      title: 'IEEE Activities Coordinated',
      description: 'Outreach workshops, coding challenges, hackathons, and guest series.'
    }
  ];

  return (
    <section id="impact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs md:text-sm font-space-grotesk text-primary dark:text-accent font-bold tracking-widest uppercase mb-3">My Impact</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-space-grotesk tracking-tight text-slate-900 dark:text-white">
            Transforming Ideas into Numbers
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-400 font-inter leading-relaxed">
            A quantifiable look at my contributions as an ambassador, data practitioner, and IEEE volunteer.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-card-dark p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 relative overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Circular top glowing ring */}
              <div className="absolute top-0 w-24 h-24 rounded-full bg-radial from-primary/5 dark:from-accent/10 to-transparent blur-xl group-hover:scale-150 transition-transform duration-500" />
              
              <div className="text-4xl md:text-5xl font-bold">
  {stat.value}
  <span>{stat.suffix}</span>
</div>
              
              <h4 className="font-space-grotesk text-base font-bold text-slate-800 dark:text-white mb-2">
                {stat.title}
              </h4>
              
              <p className="font-inter text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
