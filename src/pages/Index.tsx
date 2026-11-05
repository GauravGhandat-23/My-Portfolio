import { useEffect } from "react";
import Lenis from "lenis";
import LuxuryNav from "@/components/luxury/LuxuryNav";
import LuxuryHero from "@/components/luxury/LuxuryHero";
import LuxuryAbout from "@/components/luxury/LuxuryAbout";
import LuxuryExpertise from "@/components/luxury/LuxuryExpertise";
import LuxuryProjects from "@/components/luxury/LuxuryProjects";
import LuxuryCertifications from "@/components/luxury/LuxuryCertifications";
import LuxuryContact from "@/components/luxury/LuxuryContact";
import AmbientCursor from "@/components/AmbientCursor";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  useEffect(() => {
    document.title = "Gaurav Ghandat — Cybersecurity & Defensive Security Operations";

    // Lenis Smooth Scrolling Engine
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis: Lenis | null = null;
    let rafId: number;

    if (!prefersReduced) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.1,
        infinite: false,
      });

      (window as any).__lenis = lenis;

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) {
        lenis.destroy();
        delete (window as any).__lenis;
      }
    };
  }, []);

  return (
    <div className="min-h-screen text-[var(--text-primary)] bg-[var(--bg-main)] selection:bg-[var(--text-primary)] selection:text-[var(--bg-main)] relative transition-colors duration-300">
      {/* Precision luxury ambient pointer cursor */}
      <AmbientCursor />

      {/* Skip to main content — Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--text-primary)] focus:text-[var(--bg-main)] focus:font-mono focus:text-xs tracking-wider"
      >
        Skip to main content
      </a>

      {/* Jaguar-Inspired Minimal Navigation */}
      <LuxuryNav />

      {/* Main Luxury Content Flow */}
      <main id="main-content">
        {/* Full-Screen Asymmetric Editorial Hero */}
        <LuxuryHero />

        {/* 01: About & Identity — "ORIGINAL THINKING. SECURE EXECUTION." */}
        <LuxuryAbout />

        {/* 02: Areas of Expertise — Clean Minimal Horizontal Typography Rows */}
        <LuxuryExpertise />

        {/* 03: Selected Work — Luxury Product Composition Showcase */}
        <LuxuryProjects />

        {/* 04: Professional Development — 11 Authentic Accreditations */}
        <LuxuryCertifications />

        {/* 05: Contact & Dialogue — "LET'S CREATE A MORE SECURE FUTURE." */}
        <LuxuryContact />
      </main>

      <ScrollToTop />
    </div>
  );
};

export default Index;
