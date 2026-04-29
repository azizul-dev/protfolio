'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Magnetic from './animation/Magnetic';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const mailtoLink = `mailto:abdulazizabdul8822@gmail.com?subject=Contact from ${name}&body=From: ${name} (${email})%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="py-24 max-w-[1200px] mx-auto px-6" id="contact">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="glass-card rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl"
      >
        <div className="lg:w-1/3 bg-gradient-to-br from-[#4ade80] to-[#15803d] p-8 md:p-12 text-on-primary flex flex-col justify-between relative overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          <div className="relative z-10">
            <h2 className="text-[40px] leading-[1.1] font-extrabold text-on-primary mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-[16px] leading-[24px] mb-12 opacity-90">
              Have a project in mind? Reach out and let&apos;s build something exceptional.
            </p>
            
            <div className="space-y-8">
            <div className="flex items-center gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] flex-shrink-0">
                  <span className="material-symbols-outlined text-white text-xl md:text-2xl">location_on</span>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-70">Location</div>
                  <div className="text-lg font-bold text-white">Bogra, Rajshahi, Bangladesh</div>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] flex-shrink-0">
                  <span className="material-symbols-outlined text-white text-xl md:text-2xl">mail</span>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-70">Email</div>
                  <div className="text-sm md:text-lg font-bold text-white underline underline-offset-4 decoration-white/20 break-all">abdulazizabdul8822@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-12">
            <Magnetic>
              <a href="https://www.linkedin.com/in/azizul-islam-dev" target="_blank" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors group">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" width={20} height={20} alt="LinkedIn" className="invert opacity-70 group-hover:opacity-100" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://github.com/azizul-dev" target="_blank" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors group">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" width={20} height={20} alt="GitHub" className="invert opacity-70 group-hover:opacity-100" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://x.com/md_azizul63253" target="_blank" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors group">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/x.svg" width={20} height={20} alt="X" className="invert opacity-70 group-hover:opacity-100" />
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="flex-1 p-8 md:p-12 bg-surface-container">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-neutral-500">Name</label>
                <input
                  name="name"
                  required
                  className="w-full bg-surface-dim border border-outline-variant rounded-xl p-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="Azizul Islam"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-neutral-500">Email</label>
                <input
                  name="email"
                  required
                  className="w-full bg-surface-dim border border-outline-variant rounded-xl p-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="abdulazizabdul8822@gmail.com"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-xs uppercase tracking-widest text-neutral-500">Message</label>
              <textarea
                name="message"
                required
                className="w-full bg-surface-dim border border-outline-variant rounded-xl p-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Tell me about your project..."
                rows={4}
              ></textarea>
            </div>
            <Magnetic>
              <button
                className="w-full bg-gradient-to-r from-[#4ade80] to-[#15803d] text-on-primary font-bold py-4 rounded-xl hover:scale-[1.01] transition-all active:scale-95 shadow-xl shadow-primary/20"
                type="submit"
              >
                Send Message
              </button>
            </Magnetic>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
