"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenEnquiry: () => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Architecture", href: "#engineering" },
    { label: "AI", href: "#ai" },
    { label: "Approach", href: "#approach" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#060709]/80 backdrop-blur-md border-b border-white/[0.06]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Mark */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-wider text-[#f4f4f6] hover:text-[#ff6200] transition-colors"
          aria-label="SiliconTechie.ai Home"
        >
          {/* Custom Silicon Geometric Glyph */}
          <span className="relative flex h-5 w-5 items-center justify-center">
            <span className="absolute inset-0 rounded-[3px] border border-white/20 group-hover:border-[#ff6200]/60 transition-colors" />
            <span className="h-1.5 w-1.5 rounded-[1px] bg-[#ff6200] shadow-[0_0_8px_#ff6200]" />
          </span>
          <span className="font-mono tracking-widest text-[13px] font-bold">
            SILICONTECHIE<span className="text-[#ff6200]">.AI</span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav
          className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide text-[#9ca3af]"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#f4f4f6] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1px] after:bg-[#ff6200] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenEnquiry}
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium tracking-wide text-[#f4f4f6] rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#ff6200]/40 transition-all duration-200 cursor-pointer"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#ff6200] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#9ca3af] hover:text-[#f4f4f6] transition-colors focus:outline-none"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#060709]/95 backdrop-blur-xl px-6 py-6 transition-all">
          <div className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#9ca3af] hover:text-[#f4f4f6] py-1 border-b border-white/[0.03] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[10px] font-mono text-[#52525b]">→</span>
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="mt-3 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#ff6200] text-[#060709] font-mono text-xs font-bold tracking-wide"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
