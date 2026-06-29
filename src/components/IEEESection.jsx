import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, GitBranch, Shield, Users, Radio, Cpu, Heart } from 'lucide-react';

export default function IEEESection() {
  const ieeeEvents = [
    {
      month: "January",
      role: "Volunteer",
      event: "Humanitarian NGO Outreach Visit",
      desc: "Supported humanitarian outreach, helping deliver resources and basic digital literacy basics to underprivileged kids.",
      icon: <Heart className="text-rose-500" size={18} />
    },
    {
      month: "March",
      role: "Student Event Coordinator",
      event: "Version Control: Git & GitHub Workshop",
      desc: "Served as lead organizer, coordinating hands-on training for 60+ student volunteers to teach repository management, branches, and PR workflows.",
      icon: <GitBranch className="text-violet-500" size={18} />
    },
    {
      month: "April",
      role: "Volunteer Organizer",
      event: "IEEE SIGHT Day Celebrations",
      desc: "Managed student check-ins and assisted project coordinators in organizing humanitarian project showcases.",
      icon: <Zap className="text-amber-500" size={18} />
    },
    {
      month: "May",
      role: "Panel Volunteer",
      event: "TechBrief — AI Panel Discussion",
      desc: "Supported coordination for the industry speaker panel, registering guests and managing live Q&A databases.",
      icon: <Radio className="text-blue-500" size={18} />
    },
    {
      month: "June",
      role: "Co-organizer",
      event: "InnovateX — IEEE Global Speaker Forum",
      desc: "Assisted branch leaders in welcoming global speakers and tracking schedules during the online forum.",
      icon: <Users className="text-emerald-500" size={18} />
    },
    {
      month: "September",
      role: "STEM Volunteer",
      event: "Tech Explorers Challenge: AR/VR Workshop",
      desc: "Contributed to the STEM proposal planning to design and coordinate a 3-day drag-and-drop AR workshop for school students.",
      icon: <Cpu className="text-pink-500" size={18} />
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs md:text-sm font-space-grotesk text-primary dark:text-accent font-bold tracking-widest uppercase mb-3">IEEE Student Branch</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-space-grotesk tracking-tight text-slate-900 dark:text-white">
            Leadership & Volunteerism
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-400 font-inter leading-relaxed">
            Active Student Coordinator and Volunteer at IEEE SIGHT AITR Student Branch Group, Indore.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          
          {/* IEEE Info Card Left */}
          <motion.div 
            className="lg:col-span-4 bg-white dark:bg-card-dark p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 relative overflow-hidden shadow-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-radial from-primary/5 to-transparent blur-xl" />
            
            <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-accent/10 px-4 py-1.5 rounded-full text-primary dark:text-accent font-space-grotesk text-xs font-semibold mb-6">
              <Shield size={14} />
              <span>IEEE SIGHT Member</span>
            </div>

            <h4 className="font-space-grotesk text-2xl font-extrabold text-slate-800 dark:text-white mb-4">
              AITR Chapter Indore
            </h4>

            <p className="font-inter text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
              Being an active student volunteer in the **IEEE Special Interest Group on Humanitarian Technology (SIGHT)** at Acropolis has enabled me to apply tech workflows directly to humanitarian challenges.
              <br /><br />
              Through program coordination, coding sprints, and STEM campaigns, I have developed collaboration skills while mentoring younger peers.
            </p>
            
            {/* Membership ID Badge */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs font-poppins">
              <span className="text-slate-400">Membership ID:</span>
              <span className="font-semibold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md">
                101975262
              </span>
            </div>
          </motion.div>

          {/* Timeline Scroll Right */}
          <div className="lg:col-span-8 space-y-8 relative pl-6 border-l border-slate-200 dark:border-slate-800/60">
            {ieeeEvents.map((item, idx) => (
              <motion.div
                key={idx}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Timeline node */}
                <div className="absolute -left-[35px] top-1.5 w-4.5 h-4.5 rounded-full bg-white dark:bg-card-dark border-[3px] border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-primary dark:group-hover:border-accent transition-colors duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-primary dark:group-hover:bg-accent transition-colors duration-300" />
                </div>

                <div className="bg-white dark:bg-card-dark p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1.5 bg-slate-50 dark:bg-bg-dark rounded-lg">
                        {item.icon}
                      </div>
                      <span className="font-space-grotesk text-sm font-semibold text-primary dark:text-accent">
                        {item.month}
                      </span>
                    </div>
                    <span className="font-poppins text-[10px] sm:text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                      {item.role}
                    </span>
                  </div>
                  
                  <h5 className="font-space-grotesk text-lg font-bold text-slate-800 dark:text-white mb-2">
                    {item.event}
                  </h5>
                  
                  <p className="font-inter text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
