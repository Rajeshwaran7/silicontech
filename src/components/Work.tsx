"use client";

import React, { useState } from "react";
import { ArrowUpRight, MessageSquare, ShoppingBag, TrendingUp, Users } from "lucide-react";

interface Project {
  number: string;
  title: string;
  category: string;
  conceptLabel: string;
  description: string;
  stack: string[];
  visualType: "ai-copilot" | "commerce" | "support" | "analytics";
}

const projects: Project[] = [
  {
    number: "01",
    title: "Smart Business Copilot",
    category: "Internal AI Assistant",
    conceptLabel: "Concept",
    description:
      "An intelligent assistant that connects to your company documents, answers employee questions in seconds, and automatically prepares daily reports and summaries without manual effort.",
    stack: ["Instant Answers", "Document Search", "Auto-Summaries", "Workflow Automation"],
    visualType: "ai-copilot",
  },
  {
    number: "02",
    title: "Modern Commerce & Store Platform",
    category: "High-Speed Web & Mobile Store",
    conceptLabel: "Concept",
    description:
      "A lightning-fast online shopping platform engineered for zero friction. Features instant search, personalized product recommendations, and 1-tap checkout that boosts sales.",
    stack: ["Instant 1-Tap Checkout", "Real-Time Inventory", "Mobile & Web App", "Bank-Grade Security"],
    visualType: "commerce",
  },
  {
    number: "03",
    title: "24/7 AI Customer Support Desk",
    category: "Automated Customer Service",
    conceptLabel: "Concept",
    description:
      "An automated customer care assistant that answers inquiries, resolves complaints, and tracks orders 24 hours a day with friendly, human-like accuracy and zero wait time.",
    stack: ["24/7 Instant Responses", "Multi-Language", "Order Status Tracking", "Friendly Tone"],
    visualType: "support",
  },
  {
    number: "04",
    title: "Real-Time Business Pulse Dashboard",
    category: "Executive Insights & Analytics",
    conceptLabel: "Concept",
    description:
      "A single clean visual dashboard that gives business owners complete clarity over sales, revenue, team performance, and inventory trends without messy spreadsheets.",
    stack: ["Live Sales Tracking", "Automatic Weekly Reports", "Inventory Alerts", "Phone & Tablet Ready"],
    visualType: "analytics",
  },
];

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<Record<number, "ui" | "benefits">>({
    0: "ui",
    1: "ui",
    2: "ui",
    3: "ui",
  });

  return (
    <section id="work" className="py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
      {/* Header */}
      <div className="mb-20 sm:mb-28 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[#ff6200] mb-4 flex items-center gap-2">
            <span>{"// 05 CASE CONCEPTS"}</span>
            <span className="w-8 h-[1px] bg-[#ff6200]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#f4f4f6]">
            Selected work
          </h2>
        </div>
        <p className="text-sm font-mono text-[#52525b] uppercase tracking-wider max-w-xs">
          Practical digital products &amp; AI solutions engineered for growing businesses.
        </p>
      </div>

      {/* Asymmetric Project Showcase */}
      <div className="space-y-24 sm:space-y-36">
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 0;
          const isHovered = hoveredIndex === idx;
          const currentTab = activeTab[idx] || "ui";

          return (
            <div
              key={project.number}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Asymmetric Grid */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Visual Preview */}
                <div
                  className={`${
                    isEven ? "lg:col-span-7" : "lg:col-span-7 lg:order-2"
                  } relative`}
                >
                  <div className="rounded-2xl border border-white/[0.08] bg-[#090b10] overflow-hidden transition-all duration-500 shadow-2xl group-hover:border-[#ff6200]/40 group-hover:shadow-[0_0_35px_rgba(255,98,0,0.12)]">
                    {/* Top Interface Bar */}
                    <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06] bg-black/40 text-xs font-mono">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="ml-2 text-[#52525b] text-[11px]">
                          app://project-{project.number}.silicontechie.ai
                        </span>
                      </div>

                      {/* Interactive View Toggle */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            setActiveTab({ ...activeTab, [idx]: "ui" })
                          }
                          className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider transition-colors ${
                            currentTab === "ui"
                              ? "bg-[#ff6200]/15 text-[#ff6200] border border-[#ff6200]/30"
                              : "text-[#52525b] hover:text-[#9ca3af]"
                          }`}
                        >
                          Product Preview
                        </button>
                        <button
                          onClick={() =>
                            setActiveTab({ ...activeTab, [idx]: "benefits" })
                          }
                          className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider transition-colors ${
                            currentTab === "benefits"
                              ? "bg-[#ff6200]/15 text-[#ff6200] border border-[#ff6200]/30"
                              : "text-[#52525b] hover:text-[#9ca3af]"
                          }`}
                        >
                          Key Benefits
                        </button>
                        <span className="ml-2 px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-[10px] text-[#ff6200] font-semibold">
                          {project.conceptLabel}
                        </span>
                      </div>
                    </div>

                    {/* Digital Product Canvas Preview */}
                    <div className="p-6 sm:p-8 min-h-[320px] sm:min-h-[380px] flex flex-col justify-between relative bg-gradient-to-b from-[#0b0e14] to-[#07080b]">
                      {currentTab === "ui" ? (
                        <>
                          {project.visualType === "ai-copilot" && (
                            <div className="space-y-4">
                              <div className="flex items-center justify-between pb-3 border-b border-white/[0.04]">
                                <div className="flex items-center gap-2">
                                  <Users className="w-4 h-4 text-[#ff6200]" />
                                  <span className="text-xs font-mono font-medium text-white">
                                    Company AI Assistant // Active Workspace
                                  </span>
                                </div>
                                <span className="font-mono text-[11px] text-[#ff6200]">
                                  Online • Instant Answer
                                </span>
                              </div>

                              <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                                <div className="p-3 rounded-lg bg-black/40 border border-white/[0.05]">
                                  <div className="text-[10px] text-[#52525b]">RESPONSE TIME</div>
                                  <div className="text-[#f4f4f6] font-medium mt-1">&lt; 1 Second</div>
                                  <div className="text-[10px] text-[#ff6200] mt-0.5">Instant speed</div>
                                </div>
                                <div className="p-3 rounded-lg bg-black/40 border border-white/[0.05]">
                                  <div className="text-[10px] text-[#52525b]">ACCURACY</div>
                                  <div className="text-[#f4f4f6] font-medium mt-1">99.4% Verified</div>
                                  <div className="text-[10px] text-[#ff6200] mt-0.5">Zero guesses</div>
                                </div>
                                <div className="p-3 rounded-lg bg-black/40 border border-white/[0.05]">
                                  <div className="text-[10px] text-[#52525b]">TIME SAVED</div>
                                  <div className="text-[#f4f4f6] font-medium mt-1">15+ hrs/wk</div>
                                  <div className="text-[10px] text-[#ff6200] mt-0.5">Per team member</div>
                                </div>
                              </div>

                              {/* Sample Real World Chat */}
                              <div className="mt-4 p-3.5 rounded-lg bg-black/60 border border-white/[0.05] font-mono text-[11px] text-[#9ca3af] space-y-2">
                                <div className="text-[#52525b]">
                                  <span className="text-white font-medium">Employee:</span> &ldquo;Summarize last month&apos;s sales and list our 3 biggest customer questions.&rdquo;
                                </div>
                                <div className="text-[#ff6200] bg-[#ff6200]/10 p-2.5 rounded border border-[#ff6200]/20">
                                  <span className="font-bold text-white">AI Copilot:</span> Sales reached \$142,000 (+18%). Top 3 queries: 1. Delivery timelines to Chennai, 2. Bulk pricing discounts, 3. Warranty renewals. (Linked to Company Files)
                                </div>
                              </div>
                            </div>
                          )}

                          {project.visualType === "commerce" && (
                            <div className="space-y-4">
                              <div className="flex items-center justify-between pb-3 border-b border-white/[0.04]">
                                <div className="flex items-center gap-2">
                                  <ShoppingBag className="w-4 h-4 text-[#ff6200]" />
                                  <span className="text-xs font-mono font-medium text-white">
                                    Next-Gen Storefront // 0.2s Page Speed
                                  </span>
                                </div>
                                <span className="font-mono text-[11px] text-[#ff6200]">
                                  Zero Checkout Friction
                                </span>
                              </div>

                              <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                                <div className="p-3 rounded-lg bg-black/40 border border-white/[0.05]">
                                  <div className="text-[10px] text-[#52525b]">PAGE SPEED</div>
                                  <div className="text-[#f4f4f6] font-medium mt-1">0.2s Instant</div>
                                  <div className="text-[10px] text-[#ff6200] mt-0.5">Zero lag</div>
                                </div>
                                <div className="p-3 rounded-lg bg-black/40 border border-white/[0.05]">
                                  <div className="text-[10px] text-[#52525b]">SALES INCREASE</div>
                                  <div className="text-[#f4f4f6] font-medium mt-1">+32% More</div>
                                  <div className="text-[10px] text-[#ff6200] mt-0.5">Higher conversion</div>
                                </div>
                                <div className="p-3 rounded-lg bg-black/40 border border-white/[0.05]">
                                  <div className="text-[10px] text-[#52525b]">ABANDONED CARTS</div>
                                  <div className="text-[#f4f4f6] font-medium mt-1">-40% Drop</div>
                                  <div className="text-[10px] text-[#ff6200] mt-0.5">1-tap payment</div>
                                </div>
                              </div>

                              <div className="space-y-2 font-mono text-xs">
                                <div className="flex items-center justify-between p-2.5 rounded bg-black/40 border border-white/[0.05]">
                                  <span className="text-[#9ca3af]">1-Tap Payment Integration (Apple Pay, UPI, Cards)</span>
                                  <span className="text-[#ff6200]">Active</span>
                                </div>
                                <div className="flex items-center justify-between p-2.5 rounded bg-black/40 border border-white/[0.05]">
                                  <span className="text-[#9ca3af]">Live Inventory Sync Between Warehouse &amp; Website</span>
                                  <span className="text-[#ff6200]">Synced</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {project.visualType === "support" && (
                            <div className="space-y-4">
                              <div className="flex items-center justify-between pb-3 border-b border-white/[0.04]">
                                <div className="flex items-center gap-2">
                                  <MessageSquare className="w-4 h-4 text-[#ff6200]" />
                                  <span className="text-xs font-mono font-medium text-white">
                                    24/7 Customer Care Assistant
                                  </span>
                                </div>
                                <span className="font-mono text-[11px] text-[#ff6200]">
                                  0 Seconds Wait Time
                                </span>
                              </div>

                              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                                <div className="p-3 rounded bg-black/40 border border-white/[0.05]">
                                  <div className="text-[#52525b] text-[10px]">RESOLVED AUTOMATICALLY</div>
                                  <div className="text-white mt-1">88% of all inquiries</div>
                                  <div className="text-[10px] text-[#ff6200] mt-0.5">No human needed</div>
                                </div>
                                <div className="p-3 rounded bg-black/40 border border-white/[0.05]">
                                  <div className="text-[#52525b] text-[10px]">CUSTOMER RATING</div>
                                  <div className="text-[#ff6200] mt-1">4.9 / 5.0 Stars</div>
                                  <div className="text-[10px] text-white/60 mt-0.5">Friendly &amp; accurate</div>
                                </div>
                              </div>

                              <div className="p-3.5 rounded-lg bg-black/60 border border-white/[0.05] font-mono text-[11px] text-[#9ca3af] space-y-1.5">
                                <div className="text-[#52525b]">
                                  <span className="text-white">Customer:</span> &ldquo;Can I change my order delivery address to Thoothukudi?&rdquo;
                                </div>
                                <div className="text-[#ff6200]">
                                  <span className="font-bold text-white">Support AI:</span> &ldquo;Done! Your delivery destination has been updated to Thoothukudi. Your delivery tracking link has been updated automatically.&rdquo;
                                </div>
                              </div>
                            </div>
                          )}

                          {project.visualType === "analytics" && (
                            <div className="space-y-4">
                              <div className="flex items-center justify-between pb-3 border-b border-white/[0.04]">
                                <div className="flex items-center gap-2">
                                  <TrendingUp className="w-4 h-4 text-[#ff6200]" />
                                  <span className="text-xs font-mono font-medium text-white">
                                    Business Overview Dashboard
                                  </span>
                                </div>
                                <span className="font-mono text-[11px] text-[#ff6200]">
                                  Live Real-Time Data
                                </span>
                              </div>

                              <div className="grid grid-cols-3 gap-2.5 font-mono text-xs text-center">
                                <div className="p-2.5 rounded bg-black/40 border border-white/[0.05]">
                                  <div className="text-[10px] text-[#52525b]">THIS MONTH SALES</div>
                                  <div className="text-white font-bold mt-1">₹14,80,000</div>
                                  <div className="text-[10px] text-[#ff6200] mt-0.5">+22% Growth</div>
                                </div>
                                <div className="p-2.5 rounded bg-black/40 border border-white/[0.05]">
                                  <div className="text-[10px] text-[#52525b]">NEW CUSTOMERS</div>
                                  <div className="text-[#ff6200] font-bold mt-1">+1,420</div>
                                  <div className="text-[10px] text-white/60 mt-0.5">From web &amp; mobile</div>
                                </div>
                                <div className="p-2.5 rounded bg-black/40 border border-white/[0.05]">
                                  <div className="text-[10px] text-[#52525b]">WEEKLY REPORT</div>
                                  <div className="text-white font-bold mt-1">Auto-Sent</div>
                                  <div className="text-[10px] text-[#ff6200] mt-0.5">Monday 8 AM</div>
                                </div>
                              </div>

                              <div className="p-3 rounded-lg bg-black/60 border border-white/[0.05] font-mono text-[11px] text-[#9ca3af]">
                                <span className="text-[#ff6200]">Smart Alert:</span> Top-selling product is running low. Reorder notification sent to vendor.
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="font-mono text-xs text-[#9ca3af] space-y-3">
                          <div className="text-[#52525b] pb-2 border-b border-white/[0.05]">
                            BUSINESS IMPACT &amp; RETURN ON INVESTMENT:
                          </div>
                          <div className="flex justify-between">
                            <span>HOURS SAVED PER WEEK:</span>
                            <span className="text-white">15 to 25 Hours</span>
                          </div>
                          <div className="flex justify-between">
                            <span>OPERATIONAL COST REDUCTION:</span>
                            <span className="text-[#ff6200]">Up to 40%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>CUSTOMER RESPONSE SPEED:</span>
                            <span className="text-[#ff6200]">Instant (Zero Wait)</span>
                          </div>
                          <div className="flex justify-between">
                            <span>DEVICE COMPATIBILITY:</span>
                            <span className="text-white">Phones, Tablets &amp; Laptops</span>
                          </div>
                        </div>
                      )}

                      {/* Visual footer bar */}
                      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-[#52525b]">
                        <span>SILICONTECHIE PRODUCT DESIGN</span>
                        <span className="text-[#ff6200]">PROVEN BUSINESS VALUE</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Editorial Project Narrative */}
                <div
                  className={`${
                    isEven ? "lg:col-span-5" : "lg:col-span-5 lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-3 font-mono text-xs text-[#ff6200] mb-3">
                    <span>PROJECT {project.number}</span>
                    <span className="text-white/20">/</span>
                    <span className="text-[#9ca3af] uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-medium text-[#f4f4f6] tracking-tight mb-4 transition-transform duration-300 group-hover:translate-x-1.5 flex items-center gap-3">
                    <span>{project.title}</span>
                    <ArrowUpRight
                      className={`w-6 h-6 text-[#ff6200] transition-all duration-300 ${
                        isHovered
                          ? "opacity-100 translate-x-0 translate-y-0"
                          : "opacity-0 -translate-x-2 translate-y-2"
                      }`}
                    />
                  </h3>

                  <p className="text-sm sm:text-base text-[#9ca3af] leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Architecture & Stack Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-[#f4f4f6]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
