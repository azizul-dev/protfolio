'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Magnetic from './animation/Magnetic';

const Contact = () => {
  return (
    <section className="py-24 max-w-[1200px] mx-auto px-6" id="contact">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="glass-card rounded-3xl overflow-hidden flex flex-col lg:flex-row"
      >
        <div className="lg:w-1/3 bg-primary p-12 text-on-primary flex flex-col justify-between">
          <div>
            <h2 className="text-[40px] leading-[1.1] font-extrabold text-on-primary mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-[16px] leading-[24px] mb-12 opacity-90">
              Have a project in mind? Reach out and let&apos;s build something exceptional.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <span className="material-symbols-outlined text-white">location_on</span>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-70">Location</div>
                  <div className="text-lg font-bold text-white">Bogra, Rajshahi, Bangladesh</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <span className="material-symbols-outlined text-white">mail</span>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-70">Email</div>
                  <div className="text-lg font-bold text-white underline underline-offset-4 decoration-white/20">abdulazizabdul8822@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-12">
            <Magnetic>
              <a href="https://www.linkedin.com/in/azizul-islam-dev" target="_blank" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors group">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzkinyOFiw27lN0ievIiZjWdenAVAD1PoBOvDK6POXSp3tH_2BwVvpPfdCzyYi_WOMpdAMIP5yH3q7UcbJdFuZxjp7pqPCz9b-bzyQpAWVAhMSd5_vk8YJ7t586iIMcYbKt1Y1FU_8gV4Q_LsWoTt5SMojNGaxUTG_JDZVqCJJmzscjPjL3iC9odHqymQC69mNwBNiez3rHsAM7Eb_oaEWYv2YgOKYesZB1GMoYxNXi3Adit6bFZgmz21lorRPYoMTHsihJ8o0HTGY" width={20} height={20} alt="LinkedIn" className="invert" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://github.com/azizul-dev" target="_blank" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors group">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN2eV4l-fAQ3RT4rnT_0jXqGki2PHQQW751RxlUUijt9nPmat7cgQsm4ah4AKj0ktFU-ZtRu199D6u_oyHIS22BIKoOwB-cY2nJ_BSl3m3C7isrFB8nYJ3lN0OOo8rtEADlKXZkpHceD3qYu8nos_6GZ4Bxi_RgibVJXtoSvUStzgNDPtgCAltZbpLWT-slQUTiwbAxvvK3MPha-490cF0U-OkUDl2obmaWVU6gi2wjYG_LZc77FeLjZ_LwX6QI2viHKxnaCCs755k" width={20} height={20} alt="GitHub" className="invert" />
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="flex-1 p-12 bg-surface-container">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-neutral-500">Name</label>
                <input
                  className="w-full bg-surface-dim border border-outline-variant rounded-xl p-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="Azizul Islam"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-neutral-500">Email</label>
                <input
                  className="w-full bg-surface-dim border border-outline-variant rounded-xl p-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="abdulazizabdul8822@gmail.com"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-xs uppercase tracking-widest text-neutral-500">Message</label>
              <textarea
                className="w-full bg-surface-dim border border-outline-variant rounded-xl p-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Tell me about your project..."
                rows={4}
              ></textarea>
            </div>
            <Magnetic>
              <button
                className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl hover:scale-[1.01] transition-all active:scale-95 shadow-xl shadow-primary/20"
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
