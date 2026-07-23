"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getRelatedProjects } from "@/data/projects";

const RelatedProjects = ({ currentSlug }) => {
  const related = getRelatedProjects(currentSlug, 3);

  if (!related || related.length === 0) return null;

  return (
    <section className="py-12 sm:py-20 bg-background border-t border-border/40">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-10 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] mb-2 block"
          >
            DISCOVER MORE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-foreground font-syne uppercase tracking-tight"
          >
            Related <span className="text-primary italic">Projects</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {related.map((proj, idx) => (
            <motion.div
              key={proj.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                href={`/projects/${proj.slug}`}
                className="group block glass-card p-6 rounded-3xl border border-white/5 shadow-xl hover:border-primary/40 transition-all duration-500"
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors"></div>
                </div>

                <span className="text-primary text-[10px] font-bold uppercase tracking-widest block mb-2">
                  {proj.category}
                </span>

                <h3 className="text-xl font-bold font-syne text-foreground group-hover:text-primary transition-colors uppercase tracking-tight mb-2">
                  {proj.title}
                </h3>

                <p className="text-muted text-xs font-outfit line-clamp-2 leading-relaxed mb-4">
                  {proj.subtitle} — {proj.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                  <span>Explore Case Study</span>
                  <span className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;
