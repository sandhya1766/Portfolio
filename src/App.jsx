import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Impact from './components/Impact';
import GeminiAmbassador from './components/GeminiAmbassador';
import IEEESection from './components/IEEESection';
import Projects from './components/Projects';
import GithubGrid from './components/GithubGrid';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    if (loading) return;

    // IntersectionObserver to watch visible sections and update navbar highlights
    const sections = ['home', 'about', 'skills', 'impact', 'experience', 'projects', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Trigger when section occupies the screen center
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [loading]);

  if (loading) {
    return <Loader onFinished={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark font-inter selection:bg-primary/20 transition-colors duration-300">
      {/* Background aesthetic grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none z-0" />

      {/* Floating glowing cursor halo */}
      <CursorGlow />

      {/* Primary Navigation */}
      <Navbar currentSection={currentSection} />

      {/* Main Contents */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Impact />
        
        {/* Experience sections (Gemini Ambassador & IEEE Timeline combined under 'experience' observer anchor) */}
        <div id="experience" className="scroll-mt-20">
          <GeminiAmbassador />
          <IEEESection />
        </div>

        <Projects />
        <div className="bg-slate-50/50 dark:bg-bg-dark/10 pb-20">
          <GithubGrid />
        </div>
        
        <Certifications />
        <Achievements />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
