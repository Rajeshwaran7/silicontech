"use client";

import React, { useState } from "react";
import { ArrowRight, Check, Copy } from "lucide-react";

interface ContactProps {
  onOpenEnquiry: () => void;
}

export default function Contact({ onOpenEnquiry }: ContactProps) {
  const [copied, setCopied] = useState(false);
  const email = "hello@silicontechie.ai";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-32 sm:py-44 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_bottom,rgba(0,234,144,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        {/* Monospace Indicator */}
        <div className="font-mono text-xs uppercase tracking-widest text-[#00ea90] mb-8 flex items-center gap-2">
          <span>{"// 08 INITIATION"}</span>
          <span className="w-8 h-[1px] bg-[#00ea90]/40" />
        </div>

        {/* Large Typography Question & Direct Invitation */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#f4f4f6] leading-[1.08] mb-4">
          Have something worth building?
        </h2>
        <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#f4f4f6] via-[#f4f4f6] to-[#00ea90] mb-12 sm:mb-16">
          Let&apos;s talk.
        </div>

        {/* Primary CTA Button */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 mb-16">
          <button
            onClick={onOpenEnquiry}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#00ea90] text-[#060709] font-mono text-sm font-semibold tracking-wide hover:bg-[#1aff9e] hover:shadow-[0_0_28px_rgba(0,234,144,0.4)] transition-all duration-200 cursor-pointer"
          >
            <span>Start a project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          {/* Interactive Email Copy Button */}
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${email}`}
              className="text-base sm:text-lg font-mono text-[#9ca3af] hover:text-[#f4f4f6] transition-colors"
            >
              {email}
            </a>
            <button
              onClick={handleCopyEmail}
              title="Copy email to clipboard"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-[#52525b] hover:text-[#00ea90] transition-colors"
              aria-label="Copy email address"
            >
              {copied ? (
                <Check className="w-4 h-4 text-[#00ea90]" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
            {copied && (
              <span className="font-mono text-xs text-[#00ea90] animate-fadeIn">
                [COPIED]
              </span>
            )}
          </div>
        </div>

        {/* Minimal Understated Availability Status */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs text-[#52525b]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00ea90] animate-ping" />
            <span className="text-[#9ca3af]">NOW BOOKING Q2/Q3 CYCLES</span>
          </div>
          <div>BENGALURU • SAN FRANCISCO • GLOBAL</div>
          <div>DIRECT ADVISORY AVAILABLE</div>
        </div>
      </div>
    </section>
  );
}
