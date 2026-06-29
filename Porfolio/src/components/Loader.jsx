import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onFinished }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Step 0: Morph "SANDHYA" letters (0s to 1.8s)
    // Step 1: Show subtitle "Building Intelligent Solutions" (1.8s to 3.2s)
    // Step 2: Exit loader (3.2s)
    const t1 = setTimeout(() => setStep(1), 1800);
    const t2 = setTimeout(() => setStep(2), 3200);
    const t3 = setTimeout(() => onFinished(), 3800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onFinished]);

  const nameLetters = "SANDHYA".split("");

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const letterVariants = {
    initial: { y: 40, opacity: 0, filter: "blur(10px)" },
    animate: { 
      y: 0, 
      opacity: 1, 
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10 
      } 
    },
    exit: { 
      y: -40, 
      opacity: 0, 
      filter: "blur(10px)",
      transition: { ease: "easeInOut", duration: 0.4 } 
    }
  };

  return (
    <AnimatePresence>
      {step < 2 && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-dark font-space-grotesk text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          {/* Subtle glowing radial background gradient */}
          <div className="absolute inset-0 bg-radial from-secondary/10 via-transparent to-transparent opacity-50 animate-pulse-glow" />

          <div className="relative flex flex-col items-center">
            {/* Step 0: Name Morphing */}
            {step === 0 && (
              <motion.div
                className="flex space-x-2 text-5xl md:text-7xl font-bold tracking-wider"
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                key="name-container"
              >
                {nameLetters.map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            )}

            {/* Step 1: Subtitle typing / reveal */}
            {step === 1 && (
              <motion.div
                className="flex flex-col items-center px-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                key="subtitle-container"
              >
                <h2 className="text-xl md:text-3xl font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary font-poppins">
                  Building Intelligent Solutions
                </h2>
                
                {/* Minimal animated glowing status line */}
                <motion.div 
                  className="mt-4 h-[2px] bg-gradient-to-r from-accent via-primary to-secondary"
                  initial={{ width: 0 }}
                  animate={{ width: 240 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
