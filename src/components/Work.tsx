"use client";

import React, { useState } from "react";
import { ArrowUpRight, Cpu, GitBranch, Terminal } from "lucide-react";

interface Project {
  number: string;
  title: string;
  category: string;
  conceptLabel: string;
  description: string;
  stack: string[];
  visualType: "ai-ops" | "enterprise-flow" | "customer-platform" | "data-pipeline";
}

const projects: Project[] = [
  {
    number: "01",
    title: "AI Operations Platform",
    category: "Autonomous Control Plane",
    conceptLabel: "Concept",
    description:
      "A unified control plane for coordinating multi-agent deployments, monitoring latency degradation, and dynamic token routing across heterogeneous model clusters.",
    stack: ["Next.js", "TypeScript", "Python", "pgvector", "gRPC"],
    visualType: "ai-ops",
  },
  {
    number: "02",
    title: "Enterprise Workflow System",
    category: "Distributed Orchestration",
    conceptLabel: "Concept",
    description:
      "High-throughput state machine and automated event orchestrator handling millions of concurrent financial transactions with zero data loss.",
    stack: ["Node.js", "NestJS", "PostgreSQL", "Kafka", "Docker"],
    visualType: "enterprise-flow",
  },
  {
    number: "03",
    title: "Intelligent Customer Platform",
    category: "Adaptive Interface",
    conceptLabel: "Concept",
    description:
      "Self-synthesizing omnichannel support platform featuring real-time speech transcription, context memory retrieval, and predictive agent handoff.",
    stack: ["React", "WebSockets", "FastAPI", "Redis", "AWS"],
    visualType: "customer-platform",
  },
  {
    number: "04",
    title: "Autonomous Data Pipeline",
    category: "Streaming ETL & Anomaly Engine",
    conceptLabel: "Concept",
    description:
      "Self-healing streaming ETL engine with automated schema migration, continuous anomaly detection, and synthetic test generation.",
    stack: ["Go", "ClickHouse", "Terraform", "Kubernetes", "PyTorch"],
    visualType: "data-pipeline",
  },
];

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<Record<number, "ui" | "telemetry">>({
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
          <div className="font-mono text-xs uppercase tracking-widest text-[#00ea90] mb-4 flex items-center gap-2">
            <span>{"// 05 CASE CONCEPTS"}</span>
            <span className="w-8 h-[1px] bg-[#00ea90]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#f4f4f6]">
            Selected work
          </h2>
        </div>
        <p className="text-sm font-mono text-[#52525b] uppercase tracking-wider max-w-xs">
          Architectural paradigms &amp; product explorations drafted for the future of software.
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
              {/* Asymmetric Grid: Alternating weights for editorial cadence */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Visual Preview: Styled as an authentic high-fidelity digital system interface */}
                <div
                  className={`${
                    isEven ? "lg:col-span-7" : "lg:col-span-7 lg:order-2"
                  } relative`}
                >
                  <div className="rounded-2xl border border-white/[0.08] bg-[#090b10] overflow-hidden transition-all duration-500 shadow-2xl group-hover:border-[#00ea90]/40 group-hover:shadow-[0_0_35px_rgba(0,234,144,0.08)]">
                    {/* Top Interface Bar with concept badge */}
                    <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06] bg-black/40 text-xs font-mono">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="ml-2 text-[#52525b] text-[11px]">
                          sys://project-{project.number}.silicontechie
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
                              ? "bg-[#00ea90]/15 text-[#00ea90] border border-[#00ea90]/30"
                              : "text-[#52525b] hover:text-[#9ca3af]"
                          }`}
                        >
                          Interface
                        </button>
                        <button
                          onClick={() =>
                            setActiveTab({ ...activeTab, [idx]: "telemetry" })
                          }
                          className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider transition-colors ${
                            currentTab === "telemetry"
                              ? "bg-[#00ea90]/15 text-[#00ea90] border border-[#00ea90]/30"
                              : "text-[#52525b] hover:text-[#9ca3af]"
                          }`}
                        >
                          Telemetry
                        </button>
                        <span className="ml-2 px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-[10px] text-[#00ea90] font-semibold">
                          {project.conceptLabel}
                        </span>
                      </div>
                    </div>

                    {/* Digital Product Canvas Preview */}
                    <div className="p-6 sm:p-8 min-h-[320px] sm:min-h-[380px] flex flex-col justify-between relative bg-gradient-to-b from-[#0b0e14] to-[#07080b]">
                      {currentTab === "ui" ? (
                        <>
                          {project.visualType === "ai-ops" && (
                            <div className="space-y-4">
                              <div className="flex items-center justify-between pb-3 border-b border-white/[0.04]">
                                <div className="flex items-center gap-2">
                                  <Cpu className="w-4 h-4 text-[#00ea90]" />
                                  <span className="text-xs font-mono font-medium text-white">
                                    Agent Swarm Router // Cluster 09
                                  </span>
                                </div>
                                <span className="font-mono text-[11px] text-[#00ea90]">
                                  Active • 1,240 tokens/s
                                </span>
                              </div>

                              <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                                <div className="p-3 rounded-lg bg-black/40 border border-white/[0.05]">
                                  <div className="text-[10px] text-[#52525b]">ROUTER INGRESS</div>
                                  <div className="text-[#f4f4f6] font-medium mt-1">99.98% OK</div>
                                  <div className="text-[10px] text-[#00ea90] mt-0.5">p50: 12ms</div>
                                </div>
                                <div className="p-3 rounded-lg bg-black/40 border border-white/[0.05]">
                                  <div className="text-[10px] text-[#52525b]">MODEL CLUSTERS</div>
                                  <div className="text-[#f4f4f6] font-medium mt-1">3 Models Live</div>
                                  <div className="text-[10px] text-[#00ea90] mt-0.5">Auto-Balanced</div>
                                </div>
                                <div className="p-3 rounded-lg bg-black/40 border border-white/[0.05]">
                                  <div className="text-[10px] text-[#52525b]">SEMANTIC RETRIEVAL</div>
                                  <div className="text-[#f4f4f6] font-medium mt-1">0.96 Score</div>
                                  <div className="text-[10px] text-[#00ea90] mt-0.5">Vector Cosine</div>
                                </div>
                              </div>

                              {/* Terminal-like agent dialogue */}
                              <div className="mt-4 p-3.5 rounded-lg bg-black/60 border border-white/[0.05] font-mono text-[11px] text-[#9ca3af] space-y-1.5">
                                <div className="text-[#52525b]">&gt; [AGENT-01] Query parsed: Synthesizing architecture dependency tree...</div>
                                <div className="text-white">&gt; [AGENT-02] Tool invocation: schema_verify() returned status: SUCCESS</div>
                                <div className="text-[#00ea90]">&gt; [ROUTER] Emitted verified response in 184ms</div>
                              </div>
                            </div>
                          )}

                          {project.visualType === "enterprise-flow" && (
                            <div className="space-y-4">
                              <div className="flex items-center justify-between pb-3 border-b border-white/[0.04]">
                                <div className="flex items-center gap-2">
                                  <GitBranch className="w-4 h-4 text-[#00ea90]" />
                                  <span className="text-xs font-mono font-medium text-white">
                                    Transactional DAG Pipeline // Node 14
                                  </span>
                                </div>
                                <span className="font-mono text-[11px] text-[#00ea90]">
                                  0 Retries • Idempotent
                                </span>
                              </div>

                              <div className="space-y-2.5 font-mono text-xs">
                                <div className="flex items-center justify-between p-2.5 rounded bg-black/40 border border-white/[0.05]">
                                  <span className="text-[#9ca3af]">01. Event Queue Ingest</span>
                                  <span className="text-[#00ea90]">54,200 msg/s</span>
                                </div>
                                <div className="flex items-center justify-between p-2.5 rounded bg-black/40 border border-white/[0.05]">
                                  <span className="text-[#9ca3af]">02. Distributed Ledger Sign</span>
                                  <span className="text-[#00ea90]">Verified RSA-4096</span>
                                </div>
                                <div className="flex items-center justify-between p-2.5 rounded bg-black/40 border border-white/[0.05]">
                                  <span className="text-[#9ca3af]">03. Postgres Multi-Master Sync</span>
                                  <span className="text-[#00ea90]">ACID Guaranteed</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {project.visualType === "customer-platform" && (
                            <div className="space-y-4">
                              <div className="flex items-center justify-between pb-3 border-b border-white/[0.04]">
                                <div className="flex items-center gap-2">
                                  <Terminal className="w-4 h-4 text-[#00ea90]" />
                                  <span className="text-xs font-mono font-medium text-white">
                                    Adaptive Semantic Handoff Engine
                                  </span>
                                </div>
                                <span className="font-mono text-[11px] text-[#00ea90]">
                                  Live Context 98.4%
                                </span>
                              </div>

                              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                                <div className="p-3 rounded bg-black/40 border border-white/[0.05]">
                                  <div className="text-[#52525b] text-[10px]">INTENT RESOLUTION</div>
                                  <div className="text-white mt-1">Autonomous Tier 1</div>
                                </div>
                                <div className="p-3 rounded bg-black/40 border border-white/[0.05]">
                                  <div className="text-[#52525b] text-[10px]">AUDIO TRANSCRIPTION</div>
                                  <div className="text-[#00ea90] mt-1">&lt; 140ms Streaming</div>
                                </div>
                              </div>

                              <div className="p-3 rounded-lg bg-black/60 border border-white/[0.05] font-mono text-[11px] text-[#9ca3af]">
                                <span className="text-[#00ea90]">[REAL-TIME VECTOR]</span> Context memory graph hydrated from past 4 sessions.
                              </div>
                            </div>
                          )}

                          {project.visualType === "data-pipeline" && (
                            <div className="space-y-4">
                              <div className="flex items-center justify-between pb-3 border-b border-white/[0.04]">
                                <div className="flex items-center gap-2">
                                  <Cpu className="w-4 h-4 text-[#00ea90]" />
                                  <span className="text-xs font-mono font-medium text-white">
                                    Self-Healing Streaming Engine
                                  </span>
                                </div>
                                <span className="font-mono text-[11px] text-[#00ea90]">
                                  Partition Health 100%
                                </span>
                              </div>

                              <div className="grid grid-cols-3 gap-2.5 font-mono text-xs text-center">
                                <div className="p-2.5 rounded bg-black/40 border border-white/[0.05]">
                                  <div className="text-[10px] text-[#52525b]">THROUGHPUT</div>
                                  <div className="text-white mt-1">1.8 GB/s</div>
                                </div>
                                <div className="p-2.5 rounded bg-black/40 border border-white/[0.05]">
                                  <div className="text-[10px] text-[#52525b]">ANOMALIES</div>
                                  <div className="text-[#00ea90] mt-1">0 Detected</div>
                                </div>
                                <div className="p-2.5 rounded bg-black/40 border border-white/[0.05]">
                                  <div className="text-[10px] text-[#52525b]">SCHEMA EVOLUTION</div>
                                  <div className="text-white mt-1">Auto-Migrated</div>
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="font-mono text-xs text-[#9ca3af] space-y-3">
                          <div className="text-[#52525b] pb-2 border-b border-white/[0.05]">
                            SYSTEM RUNTIME LOGS &amp; DIAGNOSTICS:
                          </div>
                          <div className="flex justify-between">
                            <span>MEMORY UTILIZATION:</span>
                            <span className="text-white">41.2% OF ALLOCATED</span>
                          </div>
                          <div className="flex justify-between">
                            <span>GARBAGE COLLECTION PAUSE:</span>
                            <span className="text-[#00ea90]">&lt; 1.4ms</span>
                          </div>
                          <div className="flex justify-between">
                            <span>REPLICATION LAG:</span>
                            <span className="text-[#00ea90]">0.00ms (SYNC)</span>
                          </div>
                          <div className="flex justify-between">
                            <span>CRYPTO CERT VALIDATION:</span>
                            <span className="text-white">VERIFIED TLS 1.3</span>
                          </div>
                        </div>
                      )}

                      {/* Visual footer bar */}
                      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-[#52525b]">
                        <span>SILICONTECHIE ARCHITECTURAL LABS</span>
                        <span className="text-[#00ea90]">BUILD VERIFIED</span>
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
                  <div className="flex items-center gap-3 font-mono text-xs text-[#00ea90] mb-3">
                    <span>PROJECT {project.number}</span>
                    <span className="text-white/20">/</span>
                    <span className="text-[#9ca3af] uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-medium text-[#f4f4f6] tracking-tight mb-4 transition-transform duration-300 group-hover:translate-x-1.5 flex items-center gap-3">
                    <span>{project.title}</span>
                    <ArrowUpRight
                      className={`w-6 h-6 text-[#00ea90] transition-all duration-300 ${
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
