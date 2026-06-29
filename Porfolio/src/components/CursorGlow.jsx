import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Offset by half of glow width (150px) to center it under the cursor
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-30 h-[300px] w-[300px] rounded-full bg-radial from-primary/10 via-secondary/5 to-transparent opacity-0 mix-blend-screen transition-opacity duration-300 dark:from-accent/15 dark:via-primary/5 dark:to-transparent lg:opacity-100"
      style={{
        x: glowX,
        y: glowY,
      }}
    />
  );
}
