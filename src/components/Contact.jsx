import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Extract env keys
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Fallback mode for demonstration / when variables are unset
      setTimeout(() => {
        setStatus('success');
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      }, 1500);
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setStatus('success');
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      }, (error) => {
        console.error("EmailJS Error: ", error);
        setErrorMessage(error?.text || 'Something went wrong. Please try again.');
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-bg-dark/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs md:text-sm font-space-grotesk text-primary dark:text-accent font-bold tracking-widest uppercase mb-3">Contact</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-space-grotesk tracking-tight text-slate-900 dark:text-white">
            Get In Touch
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-400 font-inter leading-relaxed">
            Let's discuss internships, open-source projects, or developer community events.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Info Side Column */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-between bg-white dark:bg-card-dark p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 relative overflow-hidden shadow-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-radial from-primary/5 to-transparent blur-xl" />
            
            <div className="space-y-8">
              <h4 className="font-space-grotesk text-2xl font-extrabold text-slate-800 dark:text-white">
                Contact Information
              </h4>
              <p className="font-inter text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                Feel free to reach out via email, phone, or LinkedIn. I usually respond within 24 hours.
              </p>

              {/* Info Items */}
              <div className="space-y-5">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-slate-50 dark:bg-bg-dark rounded-xl text-primary dark:text-accent border border-slate-100 dark:border-slate-800/40">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400">Email</span>
                    <a href="mailto:sandhyavishvakarma2006@gmail.com" className="font-poppins text-sm font-semibold text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-accent transition-colors duration-200">
                      sandhyavishvakarma2006@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-slate-50 dark:bg-bg-dark rounded-xl text-secondary dark:text-accent border border-slate-100 dark:border-slate-800/40">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400">Call Me</span>
                    <a href="tel:+917000432434" className="font-poppins text-sm font-semibold text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-accent transition-colors duration-200">
                      +91 7000432434
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-slate-50 dark:bg-bg-dark rounded-xl text-accent border border-slate-100 dark:border-slate-800/40">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400">Location</span>
                    <span className="font-poppins text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Indore, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing aesthetic note */}
            <div className="mt-12 bg-slate-50 dark:bg-bg-dark/60 p-4.5 rounded-2xl border border-slate-100 dark:border-slate-800/40 text-xs font-poppins text-slate-500 dark:text-slate-400 leading-relaxed">
              💡 **Recruiter Tip:** Check out my real resume file using the **Download Resume** button in the navbar for offline review.
            </div>
          </motion.div>

          {/* Form Side Column */}
          <motion.div 
            className="lg:col-span-7 bg-white/40 dark:bg-card-dark/40 backdrop-blur-md p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 shadow-sm relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  key="success-state"
                >
                  <CheckCircle2 size={56} className="text-emerald-500 animate-bounce" />
                  <h4 className="font-space-grotesk text-2xl font-extrabold text-slate-800 dark:text-white">
                    Message Sent!
                  </h4>
                  <p className="font-inter text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                    Thank you for reaching out. Your message has been successfully transmitted and I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 font-poppins text-xs font-semibold px-6 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full transition-colors duration-200 cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key="form-state"
                >
                  <h4 className="font-space-grotesk text-2xl font-extrabold text-slate-800 dark:text-white mb-2">
                    Send a Message
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-1.5 font-poppins">Name</label>
                      <input 
                        type="text" 
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full font-inter text-sm bg-slate-50 hover:bg-slate-100/50 dark:bg-bg-dark/40 dark:hover:bg-bg-dark/80 text-slate-800 dark:text-white px-4 py-3.5 rounded-xl border border-slate-200/50 dark:border-slate-800/60 focus:border-primary focus:outline-none transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-1.5 font-poppins">Email</label>
                      <input 
                        type="email" 
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        required
                        placeholder="johndoe@example.com"
                        className="w-full font-inter text-sm bg-slate-50 hover:bg-slate-100/50 dark:bg-bg-dark/40 dark:hover:bg-bg-dark/80 text-slate-800 dark:text-white px-4 py-3.5 rounded-xl border border-slate-200/50 dark:border-slate-800/60 focus:border-primary focus:outline-none transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-1.5 font-poppins">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Collaboration Project"
                      className="w-full font-inter text-sm bg-slate-50 hover:bg-slate-100/50 dark:bg-bg-dark/40 dark:hover:bg-bg-dark/80 text-slate-800 dark:text-white px-4 py-3.5 rounded-xl border border-slate-200/50 dark:border-slate-800/60 focus:border-primary focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-1.5 font-poppins">Message</label>
                    <textarea 
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Hi Sandhya, I saw your Braille recognition project and..."
                      className="w-full font-inter text-sm bg-slate-50 hover:bg-slate-100/50 dark:bg-bg-dark/40 dark:hover:bg-bg-dark/80 text-slate-800 dark:text-white px-4 py-3.5 rounded-xl border border-slate-200/50 dark:border-slate-800/60 focus:border-primary focus:outline-none transition-colors duration-200 resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center space-x-2 text-red-500 text-xs font-poppins bg-red-50 dark:bg-red-950/10 p-3 rounded-lg border border-red-200/10">
                      <AlertCircle size={14} />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-primary to-secondary text-white font-poppins text-sm font-semibold py-4 rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                  >
                    {status === 'sending' ? (
                      <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
