"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  schematicType: "web" | "mobile" | "backend" | "cloud" | "ai";
}

const servicesData: ServiceItem[] = [
  {
    id: "web-apps",
    number: "01",
    title: "Web Applications",
    tagline: "Sub-second interaction, deterministic state, modern SSR.",
    description:
      "We build high-performance web platforms that feel like instantaneous desktop software. Zero layout shift, sub-second hydration, responsive architecture, and bulletproof security.",
    deliverables: [
      "Custom Web Applications",
      "Interactive Digital Products",
      "Real-Time Collaborative UIs",
      "Design Systems & Component Libraries",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WebSockets"],
    schematicType: "web",
  },
  {
    id: "mobile-apps",
    number: "02",
    title: "Mobile Applications",
    tagline: "Tactile haptics, offline synchronization, 120Hz fluid gestures.",
    description:
      "Native and cross-platform applications engineered with uncompromising craft. Smooth 120 FPS gesture physics, local-first encrypted storage, and seamless background sync pipelines.",
    deliverables: [
      "iOS & Android Applications",
      "Offline-First Data Synchronization",
      "Native Platform Integrations",
      "Hardware & Sensor Bridges",
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "SQLite"],
    schematicType: "mobile",
  },
  {
    id: "backend-systems",
    number: "03",
    title: "Backend Systems",
    tagline: "Distributed microservices, typed RPCs, fault-tolerant queues.",
    description:
      "Resilient, horizontally scalable backends designed to survive extreme concurrency spikes. Event-driven streaming, ACID transaction boundaries, and sub-millisecond cache layers.",
    deliverables: [
      "High-Throughput Distributed APIs",
      "Event-Driven Streaming Architecture",
      "Typed gRPC & GraphQL Systems",
      "Database Modeling & Sharding",
    ],
    techStack: ["Node.js", "NestJS", "Go", "PostgreSQL", "Redis", "Kafka"],
    schematicType: "backend",
  },
  {
    id: "cloud-infra",
    number: "04",
    title: "Cloud Infrastructure",
    tagline: "Declarative IaC, multi-region failover, automated deployment.",
    description:
      "Zero-downtime cloud systems configured as immutable code. Multi-region automated replication, zero-trust security architecture, and automated canary rollouts.",
    deliverables: [
      "Terraform Infrastructure as Code",
      "Kubernetes & Container Orchestration",
      "Automated CI/CD Pipelines",
      "Observability & Telemetry Meshes",
    ],
    techStack: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Cloudflare"],
    schematicType: "cloud",
  },
  {
    id: "ai-automation",
    number: "05",
    title: "AI & Automation",
    tagline: "Autonomous agentic swarms, enterprise RAG, deterministic tool use.",
    description:
      "Practical AI that transforms business operations. We build custom multi-agent architectures, fine-tuned language pipelines, and contextual retrieval engines that work reliably in production.",
    deliverables: [
      "Production LLM Orchestration",
      "Enterprise Hybrid RAG Pipelines",
      "Autonomous Multi-Agent Swarms",
      "Custom Embedding & Classification",
    ],
    techStack: ["Python", "PyTorch", "LangChain", "pgvector", "Claude", "Gemini"],
    schematicType: "ai",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<ServiceItem>(servicesData[0]);

  return (
    <section id="services" className="py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16 sm:mb-24">
        <div className="font-mono text-xs uppercase tracking-widest text-[#ff6200] mb-4 flex items-center gap-2">
          <span>{"// 03 CAPABILITIES"}</span>
          <span className="w-8 h-[1px] bg-[#ff6200]/40" />
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#f4f4f6] max-w-3xl leading-[1.12]">
          We turn complex ideas into simple products.
        </h2>
      </div>

      {/* Main Layout: Editorial Typography List on the Left, Live Schematic Visual on the Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Editorial List */}
        <div className="lg:col-span-7 flex flex-col divide-y divide-white/[0.08]">
          {servicesData.map((service) => {
            const isActive = activeService.id === service.id;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveService(service)}
                onClick={() => setActiveService(service)}
                className="group py-8 sm:py-10 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-4 sm:gap-8">
                    <span
                      className={`font-mono text-xs sm:text-sm tracking-wider transition-colors duration-200 ${
                        isActive ? "text-[#ff6200]" : "text-[#52525b] group-hover:text-[#9ca3af]"
                      }`}
                    >
                      {service.number} /
                    </span>
                    <h3
                      className={`text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight transition-all duration-300 ${
                        isActive
                          ? "text-[#f4f4f6] translate-x-2"
                          : "text-[#9ca3af] group-hover:text-[#f4f4f6] group-hover:translate-x-1"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <ArrowUpRight
                    className={`w-5 h-5 transition-all duration-300 ${
                      isActive
                        ? "text-[#ff6200] opacity-100 translate-x-0"
                        : "text-[#52525b] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}
                  />
                </div>

                {/* Animated Description & Deliverables for Active State */}
                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    isActive ? "max-h-96 opacity-100 mt-6 pl-10 sm:pl-16" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm sm:text-base text-[#9ca3af] font-normal leading-relaxed max-w-xl mb-4">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-[#ff6200]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Schematic Visual Panel */}
        <div className="lg:col-span-5 sticky top-28 hidden lg:block">
          <div className="rounded-2xl border border-white/[0.08] bg-[#0b0d13]/80 backdrop-blur-md p-6 overflow-hidden relative shadow-2xl">
            {/* Top Bar of Schematic */}
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-6 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff6200] animate-pulse" />
                <span className="text-[#f4f4f6] font-semibold tracking-wider">
                  SPECIFICATION: {activeService.number}
                </span>
              </div>
              <span className="text-[#52525b]">{activeService.id.toUpperCase()}</span>
            </div>

            {/* Schematic Graphic per service */}
            <div className="min-h-[280px] flex flex-col justify-center relative">
              {activeService.schematicType === "web" && (
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-black/40 border border-white/[0.06] font-mono text-xs">
                    <div className="flex items-center justify-between text-[#52525b] mb-2 pb-1 border-b border-white/[0.04]">
                      <span>EDGE HYDRATION LOOP</span>
                      <span className="text-[#ff6200]">18ms TTFB</span>
                    </div>
                    <div className="space-y-1.5 text-[#9ca3af]">
                      <div className="flex justify-between">
                        <span>[SSR] Server Stream</span>
                        <span className="text-white">Active</span>
                      </div>
                      <div className="flex justify-between">
                        <span>[DOM] Incremental Diff</span>
                        <span className="text-white">0 Layout Shift</span>
                      </div>
                      <div className="flex justify-between">
                        <span>[CACHE] Edge Invalidation</span>
                        <span className="text-[#ff6200]">Global Synced</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono text-center">
                    <div className="p-3 rounded bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-[#ff6200] text-sm font-bold">100/100</div>
                      <div className="text-[10px] text-[#52525b] mt-1">Lighthouse Score</div>
                    </div>
                    <div className="p-3 rounded bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-[#ff6200] text-sm font-bold">120 FPS</div>
                      <div className="text-[10px] text-[#52525b] mt-1">Motion Framerate</div>
                    </div>
                  </div>
                </div>
              )}

              {activeService.schematicType === "mobile" && (
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-black/40 border border-white/[0.06] font-mono text-xs">
                    <div className="flex items-center justify-between text-[#52525b] mb-2 pb-1 border-b border-white/[0.04]">
                      <span>CLIENT SYNC ENGINE</span>
                      <span className="text-[#ff6200]">OFFLINE FIRST</span>
                    </div>
                    <div className="space-y-1.5 text-[#9ca3af]">
                      <div className="flex justify-between">
                        <span>[LOCAL] SQLite Vector Store</span>
                        <span className="text-white">Encrypted AES-256</span>
                      </div>
                      <div className="flex justify-between">
                        <span>[QUEUE] Optimistic Mutations</span>
                        <span className="text-[#ff6200]">Auto-Replay</span>
                      </div>
                      <div className="flex justify-between">
                        <span>[RENDER] ProMotion 120Hz</span>
                        <span className="text-white">Zero Jitter</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono text-center">
                    <div className="p-3 rounded bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-[#ff6200] text-sm font-bold">0ms</div>
                      <div className="text-[10px] text-[#52525b] mt-1">UI Perceived Latency</div>
                    </div>
                    <div className="p-3 rounded bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-[#ff6200] text-sm font-bold">100%</div>
                      <div className="text-[10px] text-[#52525b] mt-1">Offline Reliability</div>
                    </div>
                  </div>
                </div>
              )}

              {activeService.schematicType === "backend" && (
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-black/40 border border-white/[0.06] font-mono text-xs">
                    <div className="flex items-center justify-between text-[#52525b] mb-2 pb-1 border-b border-white/[0.04]">
                      <span>DISTRIBUTED EVENT BROKER</span>
                      <span className="text-[#ff6200]">50K RPS</span>
                    </div>
                    <div className="space-y-1.5 text-[#9ca3af]">
                      <div className="flex justify-between">
                        <span>[RPC] gRPC Protobuf Mesh</span>
                        <span className="text-white">HTTP/2 Multiplex</span>
                      </div>
                      <div className="flex justify-between">
                        <span>[DB] Connection Pooler</span>
                        <span className="text-[#ff6200]">Sub-5ms Query</span>
                      </div>
                      <div className="flex justify-between">
                        <span>[STATE] Redis Sentinel Cluster</span>
                        <span className="text-white">HA In-Memory</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono text-center">
                    <div className="p-3 rounded bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-[#ff6200] text-sm font-bold">99.999%</div>
                      <div className="text-[10px] text-[#52525b] mt-1">Target SLA</div>
                    </div>
                    <div className="p-3 rounded bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-[#ff6200] text-sm font-bold">&lt; 4ms</div>
                      <div className="text-[10px] text-[#52525b] mt-1">p99 Read Latency</div>
                    </div>
                  </div>
                </div>
              )}

              {activeService.schematicType === "cloud" && (
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-black/40 border border-white/[0.06] font-mono text-xs">
                    <div className="flex items-center justify-between text-[#52525b] mb-2 pb-1 border-b border-white/[0.04]">
                      <span>MULTI-REGION INFRASTRUCTURE</span>
                      <span className="text-[#ff6200]">CANARY BLUE/GREEN</span>
                    </div>
                    <div className="space-y-1.5 text-[#9ca3af]">
                      <div className="flex justify-between">
                        <span>[IaC] Declarative Terraform</span>
                        <span className="text-white">Version Locked</span>
                      </div>
                      <div className="flex justify-between">
                        <span>[SEC] Zero-Trust IAM Policy</span>
                        <span className="text-[#ff6200]">Strict Enforce</span>
                      </div>
                      <div className="flex justify-between">
                        <span>[SCALE] Elastic Kubernetes Autoscaler</span>
                        <span className="text-white">0→N Pods</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono text-center">
                    <div className="p-3 rounded bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-[#ff6200] text-sm font-bold">3 Regions</div>
                      <div className="text-[10px] text-[#52525b] mt-1">Active Topology</div>
                    </div>
                    <div className="p-3 rounded bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-[#ff6200] text-sm font-bold">0 Downtime</div>
                      <div className="text-[10px] text-[#52525b] mt-1">Deployment Target</div>
                    </div>
                  </div>
                </div>
              )}

              {activeService.schematicType === "ai" && (
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-black/40 border border-white/[0.06] font-mono text-xs">
                    <div className="flex items-center justify-between text-[#52525b] mb-2 pb-1 border-b border-white/[0.04]">
                      <span>AGENT REASONING PIPELINE</span>
                      <span className="text-[#ff6200]">AUTONOMOUS SWARM</span>
                    </div>
                    <div className="space-y-1.5 text-[#9ca3af]">
                      <div className="flex justify-between">
                        <span>[VECTOR] pgvector Cosine Top-K</span>
                        <span className="text-white">1536-dim Index</span>
                      </div>
                      <div className="flex justify-between">
                        <span>[ROUTING] Dynamic Token Dist</span>
                        <span className="text-[#ff6200]">Cost &amp; Speed Opt</span>
                      </div>
                      <div className="flex justify-between">
                        <span>[EXEC] Sandboxed Tool Invocation</span>
                        <span className="text-white">Strict JSON Schema</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono text-center">
                    <div className="p-3 rounded bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-[#ff6200] text-sm font-bold">0.96</div>
                      <div className="text-[10px] text-[#52525b] mt-1">Retrieval Precision</div>
                    </div>
                    <div className="p-3 rounded bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-[#ff6200] text-sm font-bold">Structured</div>
                      <div className="text-[10px] text-[#52525b] mt-1">Deterministic Output</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Deliverables summary */}
            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <div className="text-[11px] font-mono text-[#52525b] uppercase mb-2">
                Core Deliverables:
              </div>
              <ul className="space-y-1 text-xs text-[#9ca3af]">
                {activeService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[#ff6200] text-[10px]">■</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
