"use client";

import React, { useState, useEffect } from "react";
import { Check, Send, X } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const scopes = [
  "AI & Autonomous Systems",
  "Full-Stack Web Application",
  "Mobile Application (iOS/Android)",
  "Cloud & Infrastructure Architecture",
  "System Audit & Refactoring",
];

const budgets = ["$25k – $50k", "$50k – $100k", "$100k+", "Undetermined"];

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [selectedScope, setSelectedScope] = useState<string>(scopes[0]);
  const [selectedBudget, setSelectedBudget] = useState<string>(budgets[1]);
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl rounded-2xl border border-white/[0.1] bg-[#090b10] p-6 sm:p-8 shadow-2xl text-[#f4f4f6]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#9ca3af] hover:text-white hover:bg-white/[0.05] transition-colors focus:outline-none"
          aria-label="Close enquiry modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#ff6200]/10 border border-[#ff6200]/40 text-[#ff6200] flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-medium tracking-tight text-[#f4f4f6]">
              Transmission Received
            </h3>
            <p className="text-sm text-[#9ca3af] max-w-md mx-auto leading-relaxed">
              Our engineering team has received your project parameters. We will review
              your architecture requirements and reply within 24 business hours to{" "}
              <span className="text-[#ff6200] font-mono">{email}</span>.
            </p>
            <div className="pt-6">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-xs font-mono text-white transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="font-mono text-[11px] text-[#ff6200] uppercase tracking-wider mb-1">
                PROJECT INITIATION
              </div>
              <h2
                id="enquiry-modal-title"
                className="text-2xl sm:text-3xl font-medium tracking-tight text-[#f4f4f6]"
              >
                Start a project
              </h2>
              <p className="text-xs sm:text-sm text-[#9ca3af] mt-1">
                Tell us what you want to build. We architect from the ground up.
              </p>
            </div>

            {/* Scope selection */}
            <div>
              <label className="block text-xs font-mono text-[#52525b] uppercase tracking-wider mb-2">
                01 // Select Core Domain
              </label>
              <div className="flex flex-wrap gap-2">
                {scopes.map((scope) => (
                  <button
                    type="button"
                    key={scope}
                    onClick={() => setSelectedScope(scope)}
                    className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                      selectedScope === scope
                        ? "bg-[#ff6200] text-[#060709] font-semibold"
                        : "bg-white/[0.03] border border-white/[0.08] text-[#9ca3af] hover:text-white hover:border-white/20"
                    }`}
                  >
                    {scope}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget tier */}
            <div>
              <label className="block text-xs font-mono text-[#52525b] uppercase tracking-wider mb-2">
                02 // Target Investment Tier
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {budgets.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setSelectedBudget(b)}
                    className={`py-2 px-3 rounded-lg text-xs font-mono text-center transition-all ${
                      selectedBudget === b
                        ? "bg-white/[0.1] border border-[#ff6200] text-[#ff6200] font-semibold"
                        : "bg-white/[0.02] border border-white/[0.06] text-[#9ca3af] hover:text-white"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Email input */}
            <div>
              <label
                htmlFor="enquiry-email"
                className="block text-xs font-mono text-[#52525b] uppercase tracking-wider mb-2"
              >
                03 // Your Work Email
              </label>
              <input
                id="enquiry-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/[0.08] text-sm text-white placeholder-[#52525b] focus:outline-none focus:border-[#ff6200] transition-colors"
              />
            </div>

            {/* Brief specification */}
            <div>
              <label
                htmlFor="enquiry-details"
                className="block text-xs font-mono text-[#52525b] uppercase tracking-wider mb-2"
              >
                04 // Project Brief (Optional)
              </label>
              <textarea
                id="enquiry-details"
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Describe the system, target timeline, or architectural constraints..."
                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/[0.08] text-sm text-white placeholder-[#52525b] focus:outline-none focus:border-[#ff6200] transition-colors resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#52525b]">
                ENCRYPTED TLS // NO SPAM
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff6200] text-[#060709] font-mono text-xs font-bold tracking-wide hover:bg-[#ff771a] hover:shadow-[0_0_20px_rgba(255,98,0,0.4)] transition-all disabled:opacity-50 cursor-pointer"
              >
                <span>{isSubmitting ? "Transmitting..." : "Send Brief"}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
