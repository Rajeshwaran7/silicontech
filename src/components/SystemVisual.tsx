"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  layer: number;
  type: "core" | "logic" | "state" | "io";
  pulsePhase: number;
}

interface Packet {
  sourceIndex: number;
  targetIndex: number;
  progress: number;
  speed: number;
}

export default function SystemVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Handle high DPI
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Generate Architectural Network Nodes
    const nodeCount = 38;
    const nodes: Node[] = [];
    const layers = 5;

    for (let i = 0; i < nodeCount; i++) {
      const layer = i % layers;
      // Distribute somewhat organically across the canvas area with slight bias toward horizontal flow
      const xNorm = 0.15 + (layer / (layers - 1)) * 0.7 + (Math.random() - 0.5) * 0.12;
      const yNorm = 0.18 + Math.random() * 0.64;
      const x = xNorm * width;
      const y = yNorm * height;

      nodes.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() > 0.8 ? 2.5 : 1.75,
        layer,
        type: i % 4 === 0 ? "core" : i % 3 === 0 ? "state" : i % 2 === 0 ? "logic" : "io",
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Dynamic Connections between adjacent layer nodes
    const connections: [number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const layerDiff = Math.abs(nodes[i].layer - nodes[j].layer);

        // Connect if reasonably close and related in pipeline layer
        if ((dist < 140 && layerDiff <= 1) || (dist < 100 && layerDiff <= 2)) {
          connections.push([i, j]);
        }
      }
    }

    // Data packets traversing along connections
    const packets: Packet[] = [];
    for (let k = 0; k < 12; k++) {
      const connIndex = Math.floor(Math.random() * connections.length);
      if (connections[connIndex]) {
        packets.push({
          sourceIndex: connections[connIndex][0],
          targetIndex: connections[connIndex][1],
          progress: Math.random(),
          speed: 0.003 + Math.random() * 0.004,
        });
      }
    }

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.015;

      // 1. Update node physics
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!prefersReducedMotion) {
          // Micro drift around home position
          node.x += node.vx;
          node.y += node.vy;

          const distFromBase = Math.hypot(node.x - node.baseX, node.y - node.baseY);
          if (distFromBase > 18) {
            node.vx = -node.vx * 0.8;
            node.vy = -node.vy * 0.8;
          }

          // Subtle mouse deflection
          if (mouse.active) {
            const mdx = node.x - mouse.x;
            const mdy = node.y - mouse.y;
            const mDist = Math.hypot(mdx, mdy);
            if (mDist < 120 && mDist > 0) {
              const force = (1 - mDist / 120) * 1.5;
              node.x += (mdx / mDist) * force;
              node.y += (mdy / mDist) * force;
            }
          }
        }
      }

      // 2. Draw Connections
      for (let c = 0; c < connections.length; c++) {
        const [i, j] = connections[c];
        const nA = nodes[i];
        const nB = nodes[j];

        const dist = Math.hypot(nA.x - nB.x, nA.y - nB.y);
        const maxDist = 150;
        if (dist > maxDist) continue;

        // Proximity to mouse enhances visibility
        let alpha = (1 - dist / maxDist) * 0.14;
        let isNearMouse = false;

        if (mouse.active) {
          const midX = (nA.x + nB.x) / 2;
          const midY = (nA.y + nB.y) / 2;
          const mouseDist = Math.hypot(midX - mouse.x, midY - mouse.y);
          if (mouseDist < 100) {
            alpha += (1 - mouseDist / 100) * 0.35;
            isNearMouse = true;
          }
        }

        ctx.beginPath();
        ctx.moveTo(nA.x, nA.y);
        ctx.lineTo(nB.x, nB.y);
        ctx.strokeStyle = isNearMouse
          ? `rgba(255, 98, 0, ${alpha})`
          : `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = isNearMouse ? 1.2 : 0.75;
        ctx.stroke();
      }

      // 3. Draw Traversing Packets
      if (!prefersReducedMotion) {
        for (let p = 0; p < packets.length; p++) {
          const pkt = packets[p];
          pkt.progress += pkt.speed;
          if (pkt.progress >= 1) {
            pkt.progress = 0;
            const newConn = Math.floor(Math.random() * connections.length);
            pkt.sourceIndex = connections[newConn][0];
            pkt.targetIndex = connections[newConn][1];
          }

          const nA = nodes[pkt.sourceIndex];
          const nB = nodes[pkt.targetIndex];
          if (!nA || !nB) continue;

          const px = nA.x + (nB.x - nA.x) * pkt.progress;
          const py = nA.y + (nB.y - nA.y) * pkt.progress;

          // Packet glow
          ctx.beginPath();
          ctx.arc(px, py, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = "#ff6200";
          ctx.shadowColor = "#ff6200";
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      }

      // 4. Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const pulse = Math.sin(time * 2 + node.pulsePhase);
        const radius = node.radius + (pulse > 0 ? pulse * 0.5 : 0);

        // Check mouse proximity
        let hoverFactor = 0;
        if (mouse.active) {
          const mDist = Math.hypot(node.x - mouse.x, node.y - mouse.y);
          if (mDist < 80) {
            hoverFactor = 1 - mDist / 80;
          }
        }

        // Geometric Node rendering (square for core, circle for logic/state)
        ctx.save();
        ctx.translate(node.x, node.y);

        if (node.type === "core" || hoverFactor > 0.4) {
          // Precision square node
          const size = radius * 2.2 + hoverFactor * 2;
          ctx.fillStyle = hoverFactor > 0 ? "#ff6200" : "rgba(255, 255, 255, 0.7)";
          ctx.fillRect(-size / 2, -size / 2, size, size);

          // Subtle surrounding bracket
          if (hoverFactor > 0.2) {
            ctx.strokeStyle = `rgba(255, 98, 0, ${hoverFactor * 0.8})`;
            ctx.lineWidth = 0.8;
            ctx.strokeRect(-size, -size, size * 2, size * 2);
          }
        } else {
          // Micro circular node
          ctx.beginPath();
          ctx.arc(0, 0, radius, 0, Math.PI * 2);
          ctx.fillStyle =
            node.layer === 4
              ? "rgba(255, 98, 0, 0.6)"
              : "rgba(255, 255, 255, 0.45)";
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Window resize handler
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
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-auto overflow-hidden opacity-85 transition-opacity duration-700"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-crosshair"
        title="Interactive System Architecture Visualization"
      />
      {/* Subtle radial ambient vignette overlay so the visual blends cleanly into the dark canvas */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,#060709_90%)]" />
    </div>
  );
}
