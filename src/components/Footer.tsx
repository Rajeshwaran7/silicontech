"use client";

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#050608] py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col justify-between gap-12">
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-4 w-4 items-center justify-center">
                <span className="absolute inset-0 rounded-[2px] border border-white/20" />
                <span className="h-1 w-1 bg-[#ff6200]" />
              </span>
              <span className="font-mono tracking-widest text-xs font-bold text-[#f4f4f6]">
                SILICONTECHIE<span className="text-[#ff6200]">.AI</span>
              </span>
            </div>

            <p className="text-sm font-mono text-[#9ca3af]">
              &ldquo;Software • Systems • AI&rdquo;
            </p>

            <p className="text-xs text-[#52525b] max-w-sm leading-relaxed">
              Engineering modern software architectures, high-concurrency backends, and
              autonomous AI systems for global businesses.
            </p>

            <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-[#52525b]">
              <span>STUDIO LOCATIONS:</span>
              <span className="text-[#9ca3af]">CHENNAI • THOOTHUKUDI</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs font-mono">
            <div className="space-y-3">
              <span className="text-[#52525b] uppercase tracking-wider block">Index</span>
              <ul className="space-y-2 text-[#9ca3af]">
                <li>
                  <a href="#work" className="hover:text-[#ff6200] transition-colors">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#ff6200] transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#engineering" className="hover:text-[#ff6200] transition-colors">
                    Architecture
                  </a>
                </li>
                <li>
                  <a href="#ai" className="hover:text-[#ff6200] transition-colors">
                    AI Systems
                  </a>
                </li>
                <li>
                  <a href="#approach" className="hover:text-[#ff6200] transition-colors">
                    Approach
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[#52525b] uppercase tracking-wider block">Connect</span>
              <ul className="space-y-2 text-[#9ca3af]">
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ff6200] transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ff6200] transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ff6200] transition-colors"
                  >
                    X / Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@silicontechie.ai"
                    className="hover:text-[#ff6200] transition-colors"
                  >
                    Direct Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Operational Status Box */}
          <div className="md:col-span-3 p-4 rounded-xl border border-white/[0.06] bg-black/40 font-mono text-xs space-y-2">
            <div className="flex items-center gap-2 text-[#ff6200]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6200] animate-pulse" />
              <span className="font-semibold text-[11px]">ALL SYSTEMS RUNNING</span>
            </div>
            <p className="text-[11px] text-[#52525b] leading-relaxed">
              Global latency nominal. High-throughput edge mesh actively routing across 3 continents.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#52525b]">
          <div className="flex items-center gap-3">
            <span>&copy; {currentYear} SILICONTECHIE.AI. ALL RIGHTS RESERVED.</span>
            <span className="text-white/10 hidden sm:inline">•</span>
            <span className="text-[#9ca3af] hidden sm:inline">CHENNAI &amp; THOOTHUKUDI</span>
          </div>
          <div className="text-[11px] text-[#9ca3af]">
            WE BUILD WHAT COMES NEXT.
          </div>
        </div>
      </div>
    </footer>
  );
}
