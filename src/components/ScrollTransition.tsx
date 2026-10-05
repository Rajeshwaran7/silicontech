"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollTransition() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth scroll progression values
  const opacityIdea = useTransform(scrollYProgress, [0.15, 0.3], [0.2, 1]);
  const opacityInfra = useTransform(scrollYProgress, [0.3, 0.45], [0.2, 1]);
  const opacityProduct = useTransform(scrollYProgress, [0.45, 0.6], [0.2, 1]);

  const xIdea = useTransform(scrollYProgress, [0.15, 0.3], [-10, 0]);
  const xInfra = useTransform(scrollYProgress, [0.3, 0.45], [-10, 0]);
  const xProduct = useTransform(scrollYProgress, [0.45, 0.6], [-10, 0]);

  return (
    <section
      id="transition"
      ref={containerRef}
      className="relative py-28 sm:py-36 px-6 sm:px-8 border-y border-white/[0.05] bg-[#060709] overflow-hidden"
    >
      {/* Subtle background ambient line */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Editorial Subtitle */}
        <div className="font-mono text-xs uppercase tracking-widest text-[#00ea90] mb-8 flex items-center gap-2">
          <span>{"// 02 CONTINUUM"}</span>
          <span className="w-8 h-[1px] bg-[#00ea90]/40" />
        </div>

        {/* Cinematic Scroll Statement */}
        <div className="flex flex-col gap-2 sm:gap-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#f4f4f6]">
          <motion.div
            style={{ opacity: opacityIdea, x: xIdea }}
            className="flex items-center gap-4 sm:gap-6"
          >
            <span className="font-mono text-xs sm:text-sm text-[#52525b] uppercase tracking-widest">
              Phase 01
            </span>
            <span>From idea</span>
            <span className="text-[#00ea90] font-light">→</span>
          </motion.div>

          <motion.div
            style={{ opacity: opacityInfra, x: xInfra }}
            className="flex items-center gap-4 sm:gap-6 pl-6 sm:pl-12"
          >
            <span className="font-mono text-xs sm:text-sm text-[#52525b] uppercase tracking-widest">
              Phase 02
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4f4f6] to-[#9ca3af]">
              to infrastructure
            </span>
            <span className="text-[#00ea90] font-light">→</span>
          </motion.div>

          <motion.div
            style={{ opacity: opacityProduct, x: xProduct }}
            className="flex items-center gap-4 sm:gap-6 pl-12 sm:pl-24"
          >
            <span className="font-mono text-xs sm:text-sm text-[#00ea90] uppercase tracking-widest">
              Phase 03
            </span>
            <span className="text-[#00ea90] font-semibold">to product.</span>
          </motion.div>
        </div>

        {/* Supporting statement */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-white/[0.06] grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <p className="text-xl sm:text-2xl font-normal text-[#f4f4f6] leading-snug tracking-[-0.01em]">
              Software, systems and AI for the next generation of businesses.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-[#9ca3af]">
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#00ea90] uppercase block">
                01 / Precision
              </span>
              <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                Zero arbitrary abstractions. Every layer serves a direct architectural imperative.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs text-[#00ea90] uppercase block">
                02 / Resilience
              </span>
              <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                Fault-tolerant pipelines engineered to survive chaotic network conditions and scale surges.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs text-[#00ea90] uppercase block">
                03 / Intelligence
              </span>
              <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                AI integrated into real workflows, not grafted on as a superficial marketing layer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
