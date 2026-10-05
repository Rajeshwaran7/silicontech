"use client";

import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import SystemVisual from "./SystemVisual";

interface HeroProps {
  onOpenEnquiry: () => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-32 pb-12 sm:pb-16 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Interactive Background Visual: Non-distracting, high-polish architectural network */}
      <SystemVisual />

      {/* Top telemetry indicator */}
      <div className="relative z-10 pt-4 sm:pt-8">
        <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6200] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6200]" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#9ca3af]">
            SiliconTechie Studio // Software • Systems • AI
          </span>
        </div>
      </div>

      {/* Hero Headline & Primary Proposition */}
      <div className="relative z-10 my-auto py-12 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-medium tracking-[-0.035em] text-[#f4f4f6] leading-[1.08] mb-6 sm:mb-8">
          We build what <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4f4f6] via-[#f4f4f6] to-[#ff6200]">
            comes next.
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-[#9ca3af] font-normal leading-relaxed max-w-2xl mb-10 tracking-[-0.01em]">
          Digital products, intelligent systems and scalable software for
          ambitious businesses.
        </p>

        {/* Action Group */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
          <button
            onClick={onOpenEnquiry}
            className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#ff6200] text-[#060709] font-mono text-sm font-semibold tracking-wide hover:bg-[#ff771a] hover:shadow-[0_0_24px_rgba(255,98,0,0.35)] transition-all duration-200 cursor-pointer"
          >
            <span>Start a project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <a
            href="#work"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-sm font-mono text-[#9ca3af] hover:text-[#f4f4f6] hover:border-white/25 hover:bg-white/[0.03] transition-all duration-200"
          >
            <span>See our work</span>
            <span className="text-[#52525b] group-hover:text-[#ff6200] transition-colors">
              ↓
            </span>
          </a>
        </div>
      </div>

      {/* Bottom Architectural Metadata Bar */}
      <div className="relative z-10 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#52525b]">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-[#ff6200]" />
            EST. 2026
          </span>
          <span className="hidden sm:inline text-white/10">|</span>
          <span className="hidden sm:inline">HIGH-THROUGHPUT ARCHITECTURE</span>
          <span className="hidden sm:inline text-white/10">|</span>
          <span className="hidden sm:inline">AGENTIC AI SYSTEMS</span>
        </div>

        <a
          href="#transition"
          className="inline-flex items-center gap-2 text-[#9ca3af] hover:text-[#f4f4f6] transition-colors"
          aria-label="Scroll to discover our philosophy"
        >
          <span>Explore philosophy</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#ff6200]" />
        </a>
      </div>
    </section>
  );
}
