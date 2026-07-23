"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ProjectGallery = ({ screenshots, title }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const galleryImages = screenshots && screenshots.length > 0 ? screenshots : [];

  const handleKeyDown = (e) => {
    if (activeImageIndex === null) return;
    if (e.key === "Escape") setActiveImageIndex(null);
    if (e.key === "ArrowRight")
      setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
    if (e.key === "ArrowLeft")
      setActiveImageIndex(
        (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
      );
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex]);

  if (galleryImages.length === 0) return null;

  return (
    <section className="py-12 sm:py-20 bg-background/50 border-t border-border/40">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-10 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] mb-2 block"
          >
            VISUAL WORKSPACE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-foreground font-syne uppercase tracking-tight"
          >
            Screenshots <span className="text-primary italic">Gallery</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setActiveImageIndex(idx)}
              className="relative aspect-[16/10] rounded-3xl overflow-hidden glass-card border border-white/5 shadow-xl cursor-pointer group"
            >
              <Image
                src={src}
                alt={`${title} screenshot ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-background/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="p-4 rounded-full bg-background/80 backdrop-blur-md border border-primary/40 text-primary">
                  <span className="material-symbols-outlined text-2xl">zoom_in</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all z-50"
              aria-label="Close Lightbox"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            {/* Previous Button */}
            {galleryImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex(
                    (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
                  );
                }}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all z-50"
                aria-label="Previous Image"
              >
                <span className="material-symbols-outlined text-2xl">
                  arrow_back
                </span>
              </button>
            )}

            {/* Image Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <Image
                src={galleryImages[activeImageIndex]}
                alt={`${title} full screenshot`}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Next Button */}
            {galleryImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex(
                    (prev) => (prev + 1) % galleryImages.length
                  );
                }}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all z-50"
                aria-label="Next Image"
              >
                <span className="material-symbols-outlined text-2xl">
                  arrow_forward
                </span>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectGallery;
