"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollTransition from "@/components/ScrollTransition";
import Services from "@/components/Services";
import Engineering from "@/components/Engineering";
import Work from "@/components/Work";
import AISection from "@/components/AISection";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";

export default function Home() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const handleOpenEnquiry = () => setIsEnquiryOpen(true);
  const handleCloseEnquiry = () => setIsEnquiryOpen(false);

  // JSON-LD structured data for Google / Search Engines
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SiliconTechie.ai",
    url: "https://silicontechie.ai",
    logo: "https://silicontechie.ai/favicon.ico",
    description:
      "SiliconTechie.ai builds digital products, scalable software systems and AI-powered solutions for modern businesses.",
    slogan: "We build what comes next.",
    sameAs: [
      "https://github.com",
      "https://linkedin.com",
      "https://x.com",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Autonomous Multi-Agent Systems",
      "High-Throughput Software Architecture",
      "Cloud Infrastructure",
      "Web Applications",
      "Distributed Systems",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@silicontechie.ai",
      contactType: "customer service",
    },
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Thoothukudi",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
    ],
  };

  return (
    <>
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="relative min-h-screen bg-[#060709] text-[#f4f4f6] selection:bg-[#ff6200]/20 selection:text-[#ff6200]">
        {/* Subtle architectural background texture */}
        <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

        {/* Navigation */}
        <Navbar onOpenEnquiry={handleOpenEnquiry} />

        {/* Narrative Flow */}
        <main className="relative z-10">
          {/* 1. Hero */}
          <Hero onOpenEnquiry={handleOpenEnquiry} />

          {/* 2. Philosophy & Continuum */}
          <ScrollTransition />

          {/* 3. Capabilities / What We Build */}
          <Services />

          {/* 4. Engineering Beneath the Interface */}
          <Engineering />

          {/* 5. Selected Work (Concepts) */}
          <Work />

          {/* 6. AI Systems */}
          <AISection />

          {/* 7. Methodology / The SiliconTechie Approach */}
          <Process />

          {/* 8. Contact / Initiation */}
          <Contact onOpenEnquiry={handleOpenEnquiry} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Enquiry Modal */}
        <EnquiryModal isOpen={isEnquiryOpen} onClose={handleCloseEnquiry} />
      </div>
    </>
  );
}
