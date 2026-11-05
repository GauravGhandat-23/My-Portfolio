import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Shield, Activity, Crosshair, Lock, Eye } from "lucide-react";

export const CinematicHero = () => {
  const [activePersona, setActivePersona] = useState<"defender" | "analyst">("defender");
  const [scannerPos, setScannerPos] = useState({ x: 50, y: 38 });
  const [isHovered, setIsHovered] = useState(false);
  const portraitRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  // Parallax on scroll using GPU transforms without triggering React re-renders
  const { scrollY } = useScroll();
  const bgTextY = useTransform(scrollY, [0, 800], [0, 100]);
  const portraitY = useTransform(scrollY, [0, 800], [0, -45]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!portraitRef.current) return;
    const rect = portraitRef.current.getBoundingClientRect();
    const clientX = e.clientX;
    const clientY = e.clientY;

    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      const x = ((clientX - rect.left) / rect.width) * 100;
      const y = ((clientY - rect.top) / rect.height) * 100;
      setScannerPos({
        x: Math.max(12, Math.min(88, x)),
        y: Math.max(12, Math.min(88, y)),
      });
    });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(el, { offset: -70, duration: 1.15 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const hudColor = activePersona === "defender" ? "#00D4FF" : "#FFA800";
  const hudBadgeText = activePersona === "defender" ? "DEFENSE PROTOCOL: ACTIVE" : "THREAT INTEL: ENGAGED";

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-24 md:pt-28 pb-12 select-none"
      style={{
        background: "radial-gradient(ellipse at 60% 30%, #FF8A00 0%, #FF6A00 32%, #FF2E24 72%, #8C0E08 100%)",
      }}
      aria-label="Cinematic Cybersecurity Hero"
    >
      {/* ── Film Grain & Cinematic Atmosphere Lighting ── */}
      <div className="absolute inset-0 pointer-events-none grain-overlay opacity-30 mix-blend-overlay" />
      <div
        className="absolute top-0 right-1/4 w-[750px] h-[750px] rounded-full pointer-events-none blur-3xl opacity-35"
        style={{
          background: "radial-gradient(circle, rgba(255, 235, 130, 0.65) 0%, rgba(255, 106, 0, 0) 70%)",
        }}
      />
      <div
        className="absolute -bottom-24 -left-20 w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl opacity-45"
        style={{
          background: "radial-gradient(circle, rgba(140, 10, 0, 0.95) 0%, transparent 70%)",
        }}
      />

      {/* ── OVERSIZED BACKGROUND TYPOGRAPHY ("CYBERSECURITY") WITH GPU PARALLAX ── */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 overflow-hidden leading-none px-2"
        style={{
          y: bgTextY,
        }}
        aria-hidden="true"
      >
        <span
          className="font-headline tracking-tighter uppercase block text-white/15 md:text-white/20 select-none transform scale-y-110"
          style={{
            fontSize: "clamp(5.5rem, 17.5vw, 20rem)",
            textShadow: "0 0 80px rgba(255, 255, 255, 0.18)",
            letterSpacing: "-0.035em",
          }}
        >
          CYBERSECURITY
        </span>
      </motion.div>

      {/* ── Main Container ── */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* ── Left Column: Headline & Bio with Staggered Entrance ── */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Identity Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white w-fit shadow-lg shadow-black/20"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono text-[11px] md:text-xs font-semibold tracking-widest uppercase">
                GAURAV GHANDAT — CYBERSECURITY | SOC ANALYST | BLUE TEAM
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-headline uppercase text-white tracking-tight leading-[0.88] text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-5 drop-shadow-md"
            >
              DEFENDING
              <br />
              THE DIGITAL
              <br />
              <span className="text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.45)]">
                FRONTIER.
              </span>
            </motion.h1>

            {/* Sub-Tags */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-2 mb-6"
            >
              <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white font-mono text-xs tracking-wider uppercase font-medium">
                SOC ANALYST
              </span>
              <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white font-mono text-xs tracking-wider uppercase font-medium">
                THREAT DETECTION
              </span>
              <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white font-mono text-xs tracking-wider uppercase font-medium">
                BLUE TEAM DEFENDER
              </span>
            </motion.div>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/95 text-base md:text-lg max-w-lg font-sans font-normal leading-relaxed mb-8 drop-shadow-sm"
            >
              Cybersecurity enthusiast focused on threat detection, security monitoring, incident analysis, and building resilient digital environments.
            </motion.p>

            {/* CTA Buttons with Micro-interactions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.18 }}
                onClick={() => scrollTo("projects")}
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-headline tracking-wider text-sm md:text-base uppercase shadow-2xl shadow-black/40 hover:bg-neutral-100 transition-colors"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown size={16} className="stroke-[2.5] transition-transform duration-200 group-hover:translate-y-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.18 }}
                onClick={() => scrollTo("contact")}
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-black/50 backdrop-blur-md border border-white/30 text-white font-headline tracking-wider text-sm md:text-base uppercase hover:bg-black/70 hover:border-white/60 transition-all shadow-lg"
              >
                <span>CONNECT WITH ME</span>
                <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>
            </motion.div>
          </div>

          {/* ── Right Column: Official Portrait with Holographic Cyber HUD ── */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative mt-6 lg:mt-0">
            
            {/* Portrait Wrapper with Motion GPU Parallax */}
            <motion.div
              ref={portraitRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                y: portraitY,
              }}
              className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl h-[560px] sm:h-[620px] md:h-[680px] lg:h-[750px] flex items-end justify-center cursor-crosshair group"
            >
              {/* Artistic Framed Backdrop Pill with grid ticks */}
              <div className="absolute inset-x-6 sm:inset-x-10 inset-y-2 rounded-[2.8rem] bg-black/25 backdrop-blur-md border border-white/20 pointer-events-none overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
                <div className="absolute top-3 left-1/2 -translate-x-1/2 font-mono text-[9px] text-white/50 tracking-widest uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>OPERATOR_ID // GAURAV_GHANDAT</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>
              </div>

              {/* Ambient Rim Glow behind portrait */}
              <div
                className="absolute inset-x-2 bottom-0 h-4/5 rounded-full pointer-events-none blur-3xl opacity-60"
                style={{
                  background: "radial-gradient(circle, rgba(255, 170, 0, 0.55) 0%, rgba(255, 46, 36, 0.3) 50%, transparent 75%)",
                }}
              />

              {/* ── Foreground Cutout Portrait of Gaurav (Larger, Cinematic Scale) ── */}
              <img
                src="/gaurav-portrait.png"
                alt="Gaurav Ghandat — Professional Cybersecurity SOC Analyst"
                loading="eager"
                decoding="async"
                className="relative z-10 w-auto h-[92%] sm:h-[95%] lg:h-[97%] max-w-none object-contain filter contrast-105 brightness-105 transition-all duration-500 group-hover:scale-[1.02]"
                style={{
                  filter:
                    "drop-shadow(-12px 18px 35px rgba(0, 0, 0, 0.8)) drop-shadow(6px -6px 22px rgba(255, 138, 0, 0.45)) drop-shadow(0 0 20px rgba(0, 229, 255, 0.2))",
                }}
              />

              {/* ── Holographic Security HUD Overlay ── */}
              <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-[2.8rem]">
                
                {/* Laser scanline sweeping across */}
                <div
                  className="absolute left-0 right-0 h-1 opacity-80 animate-scanline"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, ${hudColor} 50%, transparent 100%)`,
                    boxShadow: `0 0 18px ${hudColor}`,
                  }}
                />

                {/* Interactive HUD Scanner Ring that tracks cursor */}
                <div
                  className="absolute w-32 h-32 md:w-40 md:h-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed transition-all duration-150 ease-out flex items-center justify-center backdrop-blur-[2px]"
                  style={{
                    left: `${scannerPos.x}%`,
                    top: `${scannerPos.y}%`,
                    borderColor: `${hudColor}CC`,
                    boxShadow: `0 0 30px ${hudColor}80`,
                    opacity: isHovered ? 1 : 0.85,
                  }}
                >
                  <div
                    className="w-18 h-18 rounded-full border animate-spin flex items-center justify-center"
                    style={{ borderColor: `${hudColor}AA` }}
                  >
                    <Crosshair size={22} style={{ color: hudColor }} className="animate-pulse" />
                  </div>
                  {/* Scanner coordinate tag */}
                  <div
                    className="absolute -top-7 px-2.5 py-0.5 rounded-full bg-black/85 border text-[9px] font-mono tracking-wider shadow-lg"
                    style={{
                      borderColor: `${hudColor}80`,
                      color: hudColor,
                    }}
                  >
                    SCANNER // TARGET LOCK
                  </div>
                </div>

                {/* HUD Framing Corner Brackets */}
                <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2" style={{ borderColor: hudColor }} />
                <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2" style={{ borderColor: hudColor }} />
                <div className="absolute bottom-6 left-4 w-7 h-7 border-b-2 border-l-2" style={{ borderColor: hudColor }} />
                <div className="absolute bottom-6 right-4 w-7 h-7 border-b-2 border-r-2" style={{ borderColor: hudColor }} />

                {/* Telemetry coordinate badges */}
                <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-cyan-400/50 text-cyan-300 font-mono text-[10px] tracking-wider flex items-center gap-1.5 shadow-lg">
                  <Activity size={11} className="text-cyan-400" />
                  <span>LAT 19.9975° N | LON 73.7898° E</span>
                </div>

                <div className="absolute top-6 right-6 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-emerald-400/50 text-emerald-300 font-mono text-[10px] tracking-wider flex items-center gap-1.5 shadow-lg">
                  <Shield size={11} className="text-emerald-400" />
                  <span>SHIELD: 100% | ACTIVE</span>
                </div>

                {/* Bottom Status Ticker */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[10px] font-mono px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-white/80 shadow-lg">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {hudBadgeText}
                  </span>
                  <span className="text-cyan-400 font-semibold">IDENTITY // VERIFIED</span>
                </div>
              </div>
            </motion.div>

            {/* ── Switcher Capsule Toggle Underneath Portrait ── */}
            <div className="mt-4 flex flex-col items-center gap-1.5 z-20">
              <div className="p-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center gap-1 shadow-xl">
                <button
                  onClick={() => setActivePersona("defender")}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                    activePersona === "defender"
                      ? "bg-white text-black font-bold shadow-md shadow-white/30"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  DEFENDER
                </button>
                <button
                  onClick={() => setActivePersona("analyst")}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                    activePersona === "analyst"
                      ? "bg-white text-black font-bold shadow-md shadow-white/30"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  ANALYST
                </button>
              </div>
              <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase">
                HOVER TO SCAN SILHOUETTE · CLICK TO SWITCH MODE
              </span>
            </div>
          </div>
        </div>

        {/* ── Verified Hero Statistics Strip with Staggered Fade ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 p-6 rounded-3xl bg-black/35 backdrop-blur-xl border border-white/15 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6 items-center"
        >
          <div className="border-r border-white/10 pr-4">
            <div className="font-headline text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none flex items-baseline gap-1">
              <span>128K</span>
              <span className="text-amber-400 text-2xl md:text-3xl font-bold">+</span>
            </div>
            <div className="font-mono text-[10px] md:text-xs text-white/75 uppercase tracking-wider mt-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>EVENTS ANALYZED</span>
            </div>
          </div>

          <div className="border-r border-white/10 pr-4">
            <div className="font-headline text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none flex items-baseline gap-1">
              <span>15</span>
              <span className="text-amber-400 text-2xl md:text-3xl font-bold">+</span>
            </div>
            <div className="font-mono text-[10px] md:text-xs text-white/75 uppercase tracking-wider mt-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>DEFENSIVE LABS &amp; TOOLS</span>
            </div>
          </div>

          <div className="border-r border-white/10 pr-4">
            <div className="font-headline text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none flex items-baseline gap-1">
              <span>100</span>
              <span className="text-amber-400 text-2xl md:text-3xl font-bold">%</span>
            </div>
            <div className="font-mono text-[10px] md:text-xs text-white/75 uppercase tracking-wider mt-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>DEFENSIVE READINESS</span>
            </div>
          </div>

          <div>
            <div className="font-headline text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
              <span>24/7</span>
            </div>
            <div className="font-mono text-[10px] md:text-xs text-white/75 uppercase tracking-wider mt-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>SURVEILLANCE READINESS</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CinematicHero;
