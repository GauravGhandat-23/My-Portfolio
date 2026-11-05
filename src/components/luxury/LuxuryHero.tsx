import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";

export const LuxuryHero = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Interactive Palette Mode: "bw" (Black & White), "color" (Natural Color), "noir" (Cinematic Noir)
  const [paletteMode, setPaletteMode] = useState<"bw" | "color" | "noir">("bw");

  const cyclePalette = () => {
    if (paletteMode === "bw") {
      setPaletteMode("color");
    } else if (paletteMode === "color") {
      setPaletteMode("noir");
    } else {
      setPaletteMode("bw");
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(el, { offset: -80, duration: 1.15 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Filter styles for each palette mode
  const getFilterStyle = () => {
    switch (paletteMode) {
      case "color":
        return "grayscale-0 contrast-[102%] brightness-[101%]";
      case "noir":
        return "grayscale contrast-[142%] brightness-[94%]";
      case "bw":
      default:
        return "grayscale contrast-[112%] brightness-[101%]";
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 bg-[#FFFFFF] overflow-hidden"
      aria-label="Gaurav Ghandat Introduction"
    >
      {/* ── Main Two-Column Luxury Grid (Left: Content, Right: Unique Portrait Frame) ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-center my-auto py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          
          {/* ── Left Column: Editorial Typography & Actions (58% width on desktop) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8"
          >
            {/* Subtle Category Label */}
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-[1.5px] bg-[#D9381E]" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.24em] uppercase text-[#666666] font-semibold">
                CYBERSECURITY | SOC ANALYST | BLUE TEAM
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <div className="text-xs sm:text-sm font-mono tracking-[0.26em] uppercase text-[#666666] font-semibold">
                GAURAV GHANDAT
              </div>
              <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl tracking-[-0.035em] uppercase font-light leading-[0.92] text-[#111111]">
                SECURING<br />
                THE DIGITAL<br />
                <span className="font-semibold">FUTURE.</span>
              </h1>
            </div>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base md:text-lg text-[#555555] font-sans max-w-xl leading-relaxed font-normal">
              Cybersecurity professional focused on security operations, threat detection, and building resilient digital environments.
            </p>

            {/* Luxury CTA Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("projects");
                }}
                className="px-8 py-4 bg-[#111111] text-[#FFFFFF] text-xs font-mono tracking-[0.22em] uppercase transition-all duration-300 hover:bg-[#262626] flex items-center gap-3 group shadow-sm"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact");
                }}
                className="px-8 py-4 bg-[#FFFFFF] border border-[#111111] text-[#111111] text-xs font-mono tracking-[0.22em] uppercase transition-all duration-300 hover:bg-[#F1F1F1]"
              >
                <span>CONTACT ME</span>
              </a>
            </div>

            {/* Subtle Metadata Metrics Row */}
            <div className="pt-6 sm:pt-8 border-t border-[#E5E5E5] grid grid-cols-3 gap-6 sm:gap-10 max-w-lg">
              <div>
                <div className="font-headline text-2xl sm:text-3xl font-light text-[#111111]">
                  SOC L1
                </div>
                <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-[#666666] mt-1 font-medium">
                  OPERATIONS
                </div>
              </div>
              <div>
                <div className="font-headline text-2xl sm:text-3xl font-light text-[#111111]">
                  15+
                </div>
                <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-[#666666] mt-1 font-medium">
                  SYSTEMS &amp; LABS
                </div>
              </div>
              <div>
                <div className="font-headline text-2xl sm:text-3xl font-light text-[#111111]">
                  11
                </div>
                <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-[#666666] mt-1 font-medium">
                  ACCREDITATIONS
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: Unique Architectural Luxury Frame with Interactive B&W / Color Switch ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center w-full"
          >
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[500px] xl:max-w-[520px]">
              
              {/* Floating Architectural Offset Accent Border */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-full h-full border border-[#111111]/25 pointer-events-none transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />

              {/* Main Luxury Frame Box (Clickable Interactive Canvas) */}
              <motion.div
                whileTap={{ scale: 0.985 }}
                onClick={cyclePalette}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    cyclePalette();
                  }
                }}
                className="relative bg-[#FFFFFF] border border-[#111111] p-3 sm:p-4 shadow-xl cursor-pointer select-none group"
                title="Click photo to toggle: Black & White · Natural Color · Cinematic Noir"
                aria-label="Profile photo of Gaurav Ghandat. Click to switch palette modes: Black & White, Natural Color, and Noir."
              >
                {/* 4 Architectural Precision Corner Registration Notches */}
                <span className="absolute -top-1 -left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-[#111111] pointer-events-none" />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 border-t-2 border-r-2 border-[#111111] pointer-events-none" />
                <span className="absolute -bottom-1 -left-1 w-3.5 h-3.5 border-b-2 border-l-2 border-[#111111] pointer-events-none" />
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-[#111111] pointer-events-none" />

                {/* Top Inscription Header */}
                <div className="pb-2.5 px-0.5 flex items-center justify-between text-[10px] font-mono tracking-[0.2em] uppercase text-[#666666] border-b border-[#E5E5E5] mb-2.5">
                  <div className="flex items-center gap-1.5 font-medium text-[#111111]">
                    <span>GAURAV GHANDAT</span>
                    <span className="text-[#999999]">/</span>
                    <span className="text-[#666666]">DEFENSE 01</span>
                  </div>

                  <div className="flex items-center gap-1 text-[9px] text-[#111111] group-hover:text-[#D9381E] transition-colors">
                    <Sparkles size={11} className="transition-transform group-hover:rotate-45" />
                    <span className="hidden sm:inline">TAP TO SWITCH</span>
                  </div>
                </div>

                {/* Photo Viewport with Interactive Transition Filter */}
                <div className="relative w-full aspect-square overflow-hidden bg-[#F8F8F7] border border-[#E5E5E5]/80">
                  <img
                    src="/gaurav-original.jpg"
                    alt="Gaurav Ghandat — Cybersecurity Professional & SOC Analyst"
                    className={`w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-[1.02] ${getFilterStyle()}`}
                    loading="eager"
                  />

                  {/* Mode Change Pulse Overlay */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#111111]/85 text-[#FFFFFF] backdrop-blur-md text-[9px] font-mono tracking-[0.2em] uppercase flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span
                      className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
                      style={{
                        backgroundColor:
                          paletteMode === "color"
                            ? "#D9381E"
                            : paletteMode === "bw"
                            ? "#FFFFFF"
                            : "#A0A0A0",
                      }}
                    />
                    <span>
                      {paletteMode === "color"
                        ? "SPECTRUM COLOR"
                        : paletteMode === "noir"
                        ? "CINEMATIC NOIR"
                        : "CLASSIC B&W"}
                    </span>
                  </div>
                </div>

                {/* Bottom Architectural Caption Bar */}
                <div className="pt-3 px-0.5 flex items-center justify-between text-[10px] font-mono tracking-[0.2em] uppercase text-[#666666]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#111111] font-semibold">
                      {paletteMode === "color"
                        ? "PALETTE: 01 / COLOR"
                        : paletteMode === "noir"
                        ? "PALETTE: 03 / NOIR"
                        : "PALETTE: 02 / MONO"}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9381E]" />
                    <span>NASHIK, IN</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Bottom Section Discovery & Status Bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-6 flex items-center justify-between border-t border-[#E5E5E5] text-[10px] font-mono tracking-[0.22em] uppercase text-[#666666]"
      >
        <div className="flex items-center gap-2">
          <span>PORTFOLIO 2026</span>
          <span>/</span>
          <span>BLUE TEAM DEFENSE · NASHIK, INDIA</span>
        </div>

        <button
          onClick={() => scrollTo("about")}
          className="flex items-center gap-2 hover:text-[#111111] transition-colors cursor-pointer"
        >
          <span>DISCOVER</span>
          <ArrowDown size={12} className="animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
};

export default LuxuryHero;
