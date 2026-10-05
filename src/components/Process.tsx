"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

interface Step {
  number: string;
  title: string;
  statement: string;
  duration: string;
  deliverable: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Understand",
    statement: "Find the real problem before writing code.",
    duration: "Week 01",
    deliverable: "Problem Definition & Requirements Map",
  },
  {
    number: "02",
    title: "Architect",
    statement: "Design systems that can grow with the business.",
    duration: "Weeks 02-03",
    deliverable: "RFC Specification, Data Schemas & Tech Stack",
  },
  {
    number: "03",
    title: "Build",
    statement: "Turn ideas into reliable software.",
    duration: "Weeks 04-08",
    deliverable: "Production Codebase, Automated Tests & Integrations",
  },
  {
    number: "04",
    title: "Ship",
    statement: "Move from development to production.",
    duration: "Week 09",
    deliverable: "Zero-Downtime Deployment & Canary Verification",
  },
  {
    number: "05",
    title: "Scale",
    statement: "Improve, monitor and evolve.",
    duration: "Ongoing",
    deliverable: "Continuous Telemetry, Latency Auditing & Upgrades",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="approach" className="py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
      {/* Header */}
      <div className="mb-20 sm:mb-28">
        <div className="font-mono text-xs uppercase tracking-widest text-[#00ea90] mb-4 flex items-center gap-2">
          <span>{"// 07 METHODOLOGY"}</span>
          <span className="w-8 h-[1px] bg-[#00ea90]/40" />
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#f4f4f6]">
          The SiliconTechie approach
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#9ca3af] max-w-xl font-normal">
          A disciplined engineering cadence built on mathematical clarity and zero guesswork.
        </p>
      </div>

      {/* Editorial Timeline */}
      <div className="relative">
        {/* Continuous background trace */}
        <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-[1px] bg-white/[0.08] z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            const isCompleted = idx < activeStep;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
                className="group cursor-pointer transition-all duration-300"
              >
                {/* Node Milestone Indicator */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-7 h-7 rounded-full border flex items-center justify-center font-mono text-xs transition-all duration-300 ${
                      isSelected
                        ? "bg-[#00ea90] border-[#00ea90] text-[#060709] font-bold shadow-[0_0_15px_rgba(0,234,144,0.4)]"
                        : isCompleted
                        ? "bg-white/10 border-[#00ea90]/50 text-[#00ea90]"
                        : "bg-[#060709] border-white/20 text-[#52525b] group-hover:border-white/50"
                    }`}
                  >
                    {isCompleted ? <Check className="w-3.5 h-3.5" /> : step.number}
                  </div>

                  <span className="font-mono text-[11px] text-[#52525b] uppercase tracking-wider">
                    {step.duration}
                  </span>
                </div>

                {/* Step Title & Statement */}
                <div className="space-y-3">
                  <h3
                    className={`text-xl sm:text-2xl font-medium tracking-tight transition-colors duration-200 ${
                      isSelected ? "text-[#f4f4f6]" : "text-[#9ca3af] group-hover:text-[#f4f4f6]"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#9ca3af] font-normal leading-relaxed">
                    {step.statement}
                  </p>

                  <div className="pt-3 border-t border-white/[0.06]">
                    <span className="font-mono text-[10px] uppercase text-[#52525b] block mb-1">
                      Deliverable:
                    </span>
                    <span className="text-xs font-mono text-[#00ea90]/90">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
