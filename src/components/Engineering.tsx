"use client";

import React, { useState } from "react";
import { ArrowDown, CheckCircle2, Cpu, Database, Globe, Layers, Server } from "lucide-react";

interface ArchitectureLayer {
  id: string;
  number: string;
  name: string;
  role: string;
  protocols: string;
  latencyBudget: string;
  technologies: string[];
  icon: React.ElementType;
  details: string;
}

const architectureLayers: ArchitectureLayer[] = [
  {
    id: "frontend",
    number: "01",
    name: "Frontend",
    role: "Edge Client & Reactive Interface",
    protocols: "HTTP/3 • WebSockets • WASM",
    latencyBudget: "< 50ms Interaction",
    technologies: ["Next.js", "React", "Angular", "TypeScript"],
    icon: Globe,
    details:
      "Deterministic state management, server-side streaming hydration, and responsive layout systems that eliminate frame drops.",
  },
  {
    id: "api",
    number: "02",
    name: "API",
    role: "Ingress & Gateway Security",
    protocols: "gRPC • OpenAPI • JWT • Rate-Limiting",
    latencyBudget: "< 8ms Gateway Overhead",
    technologies: ["Node.js", "NestJS", "Fastify", "GraphQL"],
    icon: Layers,
    details:
      "Type-safe schema contracts, distributed token validation, cryptographic signature verification, and automated traffic throttling.",
  },
  {
    id: "services",
    number: "03",
    name: "Services",
    role: "Distributed Core & Autonomous AI",
    protocols: "Kafka • Event Bus • PyTorch RPC",
    latencyBudget: "< 25ms Processing",
    technologies: ["NestJS", "Node.js", "Python", "AI / PyTorch"],
    icon: Cpu,
    details:
      "Decoupled asynchronous worker nodes, idempotent task queues, multi-agent reasoning loops, and isolated failure domains.",
  },
  {
    id: "database",
    number: "04",
    name: "Database",
    role: "ACID Persistence & Vector Index",
    protocols: "PostgreSQL Wire • Redis PubSub • pgvector",
    latencyBudget: "< 3ms Query Latency",
    technologies: ["PostgreSQL", "Redis", "Vector DBs", "ClickHouse"],
    icon: Database,
    details:
      "Transactional write consistency, read replica sharding, in-memory caching layers, and high-dimensional vector similarity indexing.",
  },
  {
    id: "cloud",
    number: "05",
    name: "Cloud",
    role: "Declarative Infrastructure & Multi-Region",
    protocols: "Terraform • OCI Containers • Envoy Mesh",
    latencyBudget: "99.999% Availability",
    technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
    icon: Server,
    details:
      "Infrastructure defined strictly as reproducible code, automated canary deployments, and isolated zero-trust VPC networks.",
  },
];

export default function Engineering() {
  const [activeLayer, setActiveLayer] = useState<string>("services");

  const currentLayer =
    architectureLayers.find((l) => l.id === activeLayer) || architectureLayers[2];

  return (
    <section id="engineering" className="py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
      {/* Section Header */}
      <div className="mb-16 sm:mb-20">
        <div className="font-mono text-xs uppercase tracking-widest text-[#00ea90] mb-4 flex items-center gap-2">
          <span>{"// 04 ARCHITECTURE"}</span>
          <span className="w-8 h-[1px] bg-[#00ea90]/40" />
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#f4f4f6] max-w-2xl leading-[1.12]">
          Built beneath the interface.
        </h2>
        <p className="mt-6 text-base sm:text-lg text-[#9ca3af] max-w-xl font-normal leading-relaxed">
          We don&apos;t merely craft polished interfaces. We architect the fault-tolerant,
          resilient distributed systems operating underneath them.
        </p>
      </div>

      {/* Interactive System Flow Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left Column: Minimalist Vertical Architecture Flow */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
          {architectureLayers.map((layer, index) => {
            const isSelected = activeLayer === layer.id;
            const Icon = layer.icon;

            return (
              <React.Fragment key={layer.id}>
                <div
                  onClick={() => setActiveLayer(layer.id)}
                  onMouseEnter={() => setActiveLayer(layer.id)}
                  className={`group relative p-5 sm:p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#0b0d13] border-[#00ea90]/50 shadow-[0_0_20px_rgba(0,234,144,0.06)]"
                      : "bg-white/[0.015] border-white/[0.06] hover:border-white/20 hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-xs transition-colors ${
                          isSelected ? "text-[#00ea90]" : "text-[#52525b]"
                        }`}
                      >
                        {layer.number}
                      </span>

                      <div
                        className={`p-2 rounded-lg border transition-colors ${
                          isSelected
                            ? "bg-[#00ea90]/10 border-[#00ea90]/30 text-[#00ea90]"
                            : "bg-white/[0.02] border-white/[0.06] text-[#9ca3af]"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-medium text-[#f4f4f6] tracking-tight">
                          {layer.name}
                        </h3>
                        <p className="text-xs text-[#9ca3af] hidden sm:block">
                          {layer.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] text-[#52525b] hidden md:inline">
                        {layer.latencyBudget}
                      </span>
                      <span
                        className={`w-2 h-2 rounded-full transition-all ${
                          isSelected ? "bg-[#00ea90] shadow-[0_0_8px_#00ea90]" : "bg-white/10"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Subtly Animated Downward Pipeline Arrow */}
                {index < architectureLayers.length - 1 && (
                  <div className="flex justify-center py-0.5">
                    <ArrowDown className="w-3.5 h-3.5 text-[#52525b] animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Right Column: Layer Telemetry & Deep Blueprint Inspector */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="h-full rounded-2xl border border-white/[0.08] bg-[#0b0d13] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Top status */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-6">
                <span className="font-mono text-xs text-[#00ea90] uppercase tracking-wider">
                  LAYER TELEMETRY // {currentLayer.number}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-[#9ca3af]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00ea90]" />
                  SYNCED
                </span>
              </div>

              {/* Large layer title */}
              <h4 className="text-2xl sm:text-3xl font-medium text-[#f4f4f6] mb-2 tracking-tight">
                {currentLayer.name} Architecture
              </h4>
              <p className="font-mono text-xs text-[#00ea90] mb-4">
                {currentLayer.role}
              </p>
              <p className="text-sm text-[#9ca3af] leading-relaxed mb-8">
                {currentLayer.details}
              </p>

              {/* Technical Specifications */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-black/40 border border-white/[0.04] flex items-center justify-between">
                  <span className="text-[#52525b]">PROTOCOLS</span>
                  <span className="text-[#f4f4f6]">{currentLayer.protocols}</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/[0.04] flex items-center justify-between">
                  <span className="text-[#52525b]">BENCHMARK TARGET</span>
                  <span className="text-[#00ea90]">{currentLayer.latencyBudget}</span>
                </div>
              </div>
            </div>

            {/* Subtle Tech Stack Showcase */}
            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <div className="text-[11px] font-mono text-[#52525b] uppercase tracking-wider mb-3">
                Core Stack Technologies:
              </div>
              <div className="flex flex-wrap gap-2">
                {currentLayer.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#f4f4f6]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global subtle stack ticker: clean, typography-focused, elegant */}
      <div className="mt-16 pt-8 border-t border-white/[0.06]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-mono text-xs text-[#52525b] uppercase tracking-wider">
            Verified Stack:
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#9ca3af]">
            <span>Next.js</span>
            <span className="text-white/10">•</span>
            <span>React</span>
            <span className="text-white/10">•</span>
            <span>Angular</span>
            <span className="text-white/10">•</span>
            <span>Node.js</span>
            <span className="text-white/10">•</span>
            <span>NestJS</span>
            <span className="text-white/10">•</span>
            <span>PostgreSQL</span>
            <span className="text-white/10">•</span>
            <span>AWS</span>
            <span className="text-white/10">•</span>
            <span>Azure</span>
            <span className="text-white/10">•</span>
            <span>Docker</span>
            <span className="text-white/10">•</span>
            <span className="text-[#00ea90]">Autonomous AI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
