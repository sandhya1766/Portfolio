import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { GitCommit } from 'lucide-react';

export default function GithubGrid() {
  // Generate mock contribution grid data (53 weeks * 7 days)
  const gridData = useMemo(() => {
    const data = [];
    // Intensity mapping: 0 = none, 1 = low, 2 = mid-low, 3 = mid-high, 4 = high
    for (let w = 0; w < 48; w++) {
      const week = [];
      for (let d = 0; d < 7; d++) {
        // Random distribution skewed towards 0 (none) and 1/2 (light green), with occasional 3/4 (dark green)
        const rand = Math.random();
        let intensity = 0;
        if (rand > 0.85) intensity = 4;
        else if (rand > 0.7) intensity = 3;
        else if (rand > 0.5) intensity = 2;
        else if (rand > 0.25) intensity = 1;
        
        week.push(intensity);
      }
      data.push(week);
    }
    return data;
  }, []);

  const colorClasses = {
    0: 'bg-slate-100 dark:bg-slate-800/40',
    1: 'bg-emerald-100 dark:bg-emerald-950/20 text-emerald-300',
    2: 'bg-emerald-300 dark:bg-emerald-800/40 text-emerald-400',
    3: 'bg-emerald-500 dark:bg-emerald-600/70 text-emerald-500',
    4: 'bg-emerald-700 dark:bg-emerald-500 text-emerald-600'
  };

  return (
    <div className="bg-white dark:bg-card-dark p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 max-w-4xl mx-auto mt-16 shadow-xs relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-radial from-emerald-500/5 to-transparent blur-xl" />
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 relative z-10">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-emerald-50 dark:bg-emerald-950/15 text-emerald-500 rounded-xl">
            <GitCommit size={18} />
          </div>
          <div>
            <h4 className="font-space-grotesk text-base font-bold text-slate-800 dark:text-white">
              GitHub Contribution Activity
            </h4>
            <a 
              href="https://github.com/sandhya1766" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-poppins text-slate-400 hover:text-primary dark:hover:text-accent font-semibold transition-colors duration-200"
            >
              github.com/sandhya1766
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-xs text-slate-400 font-poppins">
          <span>Less</span>
          <div className="w-3 h-3 rounded bg-slate-100 dark:bg-slate-800/40" />
          <div className="w-3 h-3 rounded bg-emerald-100 dark:bg-emerald-950/20" />
          <div className="w-3 h-3 rounded bg-emerald-300 dark:bg-emerald-800/40" />
          <div className="w-3 h-3 rounded bg-emerald-500 dark:bg-emerald-600/70" />
          <div className="w-3 h-3 rounded bg-emerald-700 dark:bg-emerald-500" />
          <span>More</span>
        </div>
      </div>

      {/* Grid Container */}
      <div className="overflow-x-auto w-full no-scrollbar pb-2">
        <div className="flex space-x-1 w-max mx-auto">
          {gridData.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col space-y-1">
              {week.map((intensity, dIdx) => (
                <motion.div
                  key={dIdx}
                  className={`w-3.5 h-3.5 rounded-[2px] ${colorClasses[intensity]} transition-all duration-200`}
                  whileHover={{ scale: 1.25, zIndex: 10 }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <p className="text-[10px] text-center text-slate-400 mt-4 font-poppins">
        Grid shows activity logs synced with GitHub workflows & projects.
      </p>
    </div>
  );
}
