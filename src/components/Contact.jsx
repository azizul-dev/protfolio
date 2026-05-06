'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Magnetic from './animation/Magnetic';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      const mailtoLink = `mailto:abdulazizabdul8822@gmail.com?subject=Contact from ${name}&body=From: ${name} (${email})%0D%0A%0D%0AMessage:%0D%0A${message}`;
      window.location.href = mailtoLink;
      
      toast.success('Message sent!', {
        style: {
          borderRadius: '20px',
          background: '#0a0a0a',
          color: '#e5e7eb',
          border: '1px solid rgba(34, 197, 94, 0.2)',
        },
      });
      e.target.reset();
    } catch (error) {
      toast.error('Something went wrong.');
    }
  };

  return (
    <section className="py-20 md:py-32 bg-background relative" id="contact">
      <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-editorial text-[32px] sm:text-[45px] md:text-[65px] text-foreground mb-6">
              Get in <span className="text-primary italic">Touch</span>
            </h2>
            <p className="text-muted text-lg">
              Let&apos;s build something together. I&apos;m always open to new ideas and collaborations.
            </p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[32px] md:rounded-[48px] overflow-hidden flex flex-col lg:flex-row border-none shadow-2xl"
        >
          <div className="lg:w-[40%] bg-surface p-8 md:p-12 flex flex-col justify-between border-r border-border">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground font-syne uppercase tracking-tight mb-8">Contact Info</h3>
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-all">
                      <span className="material-symbols-outlined text-primary">location_on</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted mb-1">Based in</div>
                      <div className="text-sm font-bold text-foreground">Bogra, Bangladesh</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-all">
                      <span className="material-symbols-outlined text-primary">mail</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted mb-1">Email me</div>
                      <div className="text-sm font-bold text-foreground">abdulazizabdul8822@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                {[
                  { name: 'linkedin', url: 'https://www.linkedin.com/in/azizul-islam-dev' },
                  { name: 'github', url: 'https://github.com/azizul-dev' },
                  { name: 'x', url: 'https://x.com/md_azizul63253' }
                ].map((social, i) => (
                  <Magnetic key={i}>
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-12 h-12 rounded-2xl bg-surface-variant/50 flex items-center justify-center hover:bg-primary group transition-all"
                    >
                      <img src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${social.name}.svg`} width={18} height={18} className="opacity-50 group-hover:opacity-100 dark:invert group-hover:invert-0 transition-all" />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 p-8 md:p-12 bg-background/50">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted ml-2">Name</label>
                  <input
                    name="name"
                    required
                    className="w-full bg-surface-variant/20 border border-border rounded-2xl p-4 md:p-5 focus:border-primary/50 outline-none transition-all placeholder:text-muted/50 text-foreground"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted ml-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full bg-surface-variant/20 border border-border rounded-2xl p-4 md:p-5 focus:border-primary/50 outline-none transition-all placeholder:text-muted/50 text-foreground"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted ml-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-surface-variant/20 border border-border rounded-2xl p-4 md:p-5 focus:border-primary/50 outline-none transition-all resize-none placeholder:text-muted/50 text-foreground"
                  placeholder="What's on your mind?"
                />
              </div>
              <Magnetic>
                <button
                  type="submit"
                  className="w-full py-5 rounded-2xl bg-primary text-on-primary font-bold shadow-xl shadow-primary/10 hover:scale-[1.02] transition-all"
                >
                  Send Message
                </button>
              </Magnetic>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
