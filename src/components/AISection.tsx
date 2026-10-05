"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

interface AIService {
  id: string;
  number: string;
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  vectorCluster: { x: number; y: number }[];
}

const aiServices: AIService[] = [
  {
    id: "ai-applications",
    number: "01",
    title: "AI Applications",
    description:
      "End-to-end intelligent products powered by foundation models. Designed with strict state validation, streaming UI responses, and localized caching.",
    metrics: [
      { label: "STREAMING TTFT", value: "< 180ms" },
      { label: "EVALUATION HARNESS", value: "Automated CI" },
    ],
    vectorCluster: [
      { x: 0.35, y: 0.4 },
      { x: 0.38, y: 0.48 },
      { x: 0.42, y: 0.38 },
      { x: 0.46, y: 0.44 },
    ],
  },
  {
    id: "llm-integration",
    number: "02",
    title: "LLM Integration",
    description:
      "Production-grade pipeline integration. Dynamic prompt templating, fine-tuned token budgeting, fallback failover models, and latency optimization.",
    metrics: [
      { label: "TOKEN REDUCTION", value: "Up to 45%" },
      { label: "CLUSTER RESILIENCY", value: "Multi-Provider" },
    ],
    vectorCluster: [
      { x: 0.6, y: 0.3 },
      { x: 0.65, y: 0.35 },
      { x: 0.58, y: 0.4 },
      { x: 0.7, y: 0.32 },
    ],
  },
  {
    id: "rag",
    number: "03",
    title: "RAG Architecture",
    description:
      "High-density hybrid retrieval architectures combining dense vector similarity with sparse BM25 indexing and reciprocal rank fusion for zero hallucination.",
    metrics: [
      { label: "INDEX LATENCY", value: "Sub-12ms" },
      { label: "COSINE TOP-K", value: "Deterministic" },
    ],
    vectorCluster: [
      { x: 0.3, y: 0.65 },
      { x: 0.36, y: 0.72 },
      { x: 0.28, y: 0.78 },
      { x: 0.42, y: 0.68 },
    ],
  },
  {
    id: "ai-agents",
    number: "04",
    title: "AI Agents",
    description:
      "Autonomous agent swarms executing multi-turn tool calling, reflective verification loops, and sandboxed code execution with human-in-the-loop gates.",
    metrics: [
      { label: "TOOL VALIDATION", value: "100% Typed" },
      { label: "SELF-CORRECTION", value: "Loop Cap 3" },
    ],
    vectorCluster: [
      { x: 0.62, y: 0.62 },
      { x: 0.68, y: 0.58 },
      { x: 0.74, y: 0.68 },
      { x: 0.66, y: 0.74 },
    ],
  },
  {
    id: "workflow-automation",
    number: "05",
    title: "Workflow Automation",
    description:
      "Autonomous background orchestrations replacing fragile human manual operational flows with deterministic, self-healing event triggers.",
    metrics: [
      { label: "CYCLE VELOCITY", value: "10x Baseline" },
      { label: "DRIFT AUDITING", value: "Real-Time" },
    ],
    vectorCluster: [
      { x: 0.5, y: 0.5 },
      { x: 0.48, y: 0.55 },
      { x: 0.54, y: 0.46 },
      { x: 0.52, y: 0.58 },
    ],
  },
];

export default function AISection() {
  const [activeAI, setActiveAI] = useState<AIService>(aiServices[3]); // Default to AI Agents
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Canvas Vector Space Visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    let time = 0;

    // Generate random background ambient embedding points
    const bgPoints: { x: number; y: number; baseAlpha: number }[] = [];
    for (let i = 0; i < 45; i++) {
      bgPoints.push({
        x: 0.15 + Math.random() * 0.7,
        y: 0.15 + Math.random() * 0.7,
        baseAlpha: 0.1 + Math.random() * 0.25,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      // 1. Draw subtle background vector coordinate grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      const step = 45;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw ambient background points
      for (let i = 0; i < bgPoints.length; i++) {
        const p = bgPoints[i];
        const px = p.x * width;
        const py = p.y * height;
        ctx.beginPath();
        ctx.arc(px, py, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.baseAlpha})`;
        ctx.fill();
      }

      // 3. Draw active cluster connection vectors & pulsing centroids
      const cluster = activeAI.vectorCluster;
      const centroidX =
        (cluster.reduce((acc, curr) => acc + curr.x, 0) / cluster.length) * width;
      const centroidY =
        (cluster.reduce((acc, curr) => acc + curr.y, 0) / cluster.length) * height;

      // Centroid glow circle
      const pulse = Math.sin(time * 3) * 6;
      ctx.beginPath();
      ctx.arc(centroidX, centroidY, 32 + pulse, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 98, 0, 0.15)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw cluster interconnected edges
      for (let i = 0; i < cluster.length; i++) {
        const ptA = cluster[i];
        const ax = ptA.x * width + Math.sin(time + i) * 3;
        const ay = ptA.y * height + Math.cos(time + i) * 3;

        // Line to centroid
        ctx.beginPath();
        ctx.moveTo(centroidX, centroidY);
        ctx.lineTo(ax, ay);
        ctx.strokeStyle = "rgba(255, 98, 0, 0.4)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Cross connects
        for (let j = i + 1; j < cluster.length; j++) {
          const ptB = cluster[j];
          const bx = ptB.x * width + Math.sin(time + j) * 3;
          const by = ptB.y * height + Math.cos(time + j) * 3;

          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.strokeStyle = "rgba(255, 98, 0, 0.25)";
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }

        // Vector node dot
        ctx.beginPath();
        ctx.arc(ax, ay, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#ff6200";
        ctx.shadowColor = "#ff6200";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw centroid label
      ctx.fillStyle = "#f4f4f6";
      ctx.font = "10px monospace";
      ctx.fillText(
        `CLUSTER: ${activeAI.id.toUpperCase()}`,
        centroidX + 15,
        centroidY - 15
      );

      animId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeAI]);

  return (
    <section id="ai" className="py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
      {/* Header */}
      <div className="mb-20 sm:mb-24">
        <div className="font-mono text-xs uppercase tracking-widest text-[#ff6200] mb-4 flex items-center gap-2">
          <span>{"// 06 ARTIFICIAL INTELLIGENCE"}</span>
          <span className="w-8 h-[1px] bg-[#ff6200]/40" />
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#f4f4f6] leading-[1.08] max-w-3xl">
          Software is changing. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4f4f6] to-[#ff6200]">
            So are we.
          </span>
        </h2>

        <p className="mt-8 text-base sm:text-xl text-[#9ca3af] max-w-2xl font-normal leading-relaxed">
          We combine software engineering with AI to build intelligent products,
          automation and next-generation workflows.
        </p>
      </div>

      {/* Visually Distinctive Layout: Pure Typographic Interactive Index + Vector Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Typographic Capability Selector without Generic Cards */}
        <div className="lg:col-span-7 flex flex-col divide-y divide-white/[0.08]">
          {aiServices.map((svc) => {
            const isActive = activeAI.id === svc.id;

            return (
              <div
                key={svc.id}
                onClick={() => setActiveAI(svc)}
                onMouseEnter={() => setActiveAI(svc)}
                className="group py-6 sm:py-8 cursor-pointer transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span
                      className={`font-mono text-xs transition-colors ${
                        isActive ? "text-[#ff6200]" : "text-[#52525b]"
                      }`}
                    >
                      {svc.number}
                    </span>
                    <h3
                      className={`text-xl sm:text-2xl md:text-3xl font-medium tracking-tight transition-all duration-300 ${
                        isActive
                          ? "text-[#f4f4f6] translate-x-2"
                          : "text-[#9ca3af] group-hover:text-[#f4f4f6]"
                      }`}
                    >
                      {svc.title}
                    </h3>
                  </div>

                  <span
                    className={`font-mono text-xs transition-colors ${
                      isActive ? "text-[#ff6200]" : "text-[#52525b] group-hover:text-[#9ca3af]"
                    }`}
                  >
                    {isActive ? "[ACTIVE]" : "→"}
                  </span>
                </div>

                {/* Subtitle / Description reveal */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isActive ? "max-h-48 opacity-100 mt-4 pl-8 sm:pl-10" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-[#9ca3af] leading-relaxed max-w-xl mb-4 font-normal">
                    {svc.description}
                  </p>

                  <div className="flex items-center gap-6 font-mono text-xs">
                    {svc.metrics.map((m, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-[#52525b] text-[10px]">{m.label}:</span>
                        <span className="text-[#ff6200] font-semibold">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Vector Space Visualization Canvas */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-2xl border border-white/[0.08] bg-[#0a0c12] p-6 relative overflow-hidden shadow-2xl">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4 text-xs font-mono">
              <div className="flex items-center gap-2 text-[#9ca3af]">
                <Sparkles className="w-3.5 h-3.5 text-[#ff6200]" />
                <span>SEMANTIC VECTOR PROJECTION</span>
              </div>
              <span className="text-[#52525b]">1536-D EMBEDDING</span>
            </div>

            {/* Canvas Container */}
            <div className="relative w-full h-[320px] rounded-lg bg-black/50 border border-white/[0.04] overflow-hidden">
              <canvas ref={canvasRef} className="w-full h-full block" />
            </div>

            {/* Micro Details under visualization */}
            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-[#52525b]">
              <span>ACTIVE DOMAIN: {activeAI.title.toUpperCase()}</span>
              <span className="text-[#ff6200]">REAL-TIME CONTEXT ENGINE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
