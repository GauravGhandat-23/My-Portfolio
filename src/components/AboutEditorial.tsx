import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Server, Network, Activity, Award, Briefcase, GraduationCap, MapPin, Download, ChevronRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import CyberBustCanvas from "./CyberBustCanvas";
import CosmicVortexCanvas from "./CosmicVortexCanvas";

export const AboutEditorial = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "experience" | "education">("overview");
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className="relative min-h-screen py-28 md:py-36 overflow-hidden transition-colors duration-300"
      style={{
        background: isDark
          ? "linear-gradient(180deg, #1A0704 0%, #060B14 25%, #050811 100%)"
          : "linear-gradient(180deg, rgba(220, 50, 20, 0.08) 0%, #F7F9FC 18%, #F7F9FC 100%)",
      }}
      aria-label="About and Professional Position"
    >
      {/* ── Cosmic Particle Vortex Background ── */}
      <CosmicVortexCanvas variant="vortex" particleCount={380} />

      {/* Subtle top edge transition overlay */}
      <div
        className={`absolute top-0 left-0 right-0 h-32 pointer-events-none transition-colors duration-300 ${
          isDark
            ? "bg-gradient-to-b from-[#9E100A]/30 to-transparent"
            : "bg-gradient-to-b from-[#FF6A00]/10 to-transparent"
        }`}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Index Marker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`flex items-center justify-between border-b pb-4 mb-12 transition-colors duration-300 ${
            isDark ? "border-white/10" : "border-slate-200"
          }`}
        >
          <div
            className={`font-mono text-xs md:text-sm tracking-widest uppercase flex items-center gap-2 ${
              isDark ? "text-cyan-400" : "text-cyan-700 font-semibold"
            }`}
          >
            <span>(01)</span>
            <span className={isDark ? "text-white/60" : "text-slate-600"}>POSITION &amp; IDENTITY</span>
          </div>
          <div className={`font-mono text-xs md:text-sm tracking-wider ${isDark ? "text-white/50" : "text-slate-500"}`}>
            01 / 04
          </div>
        </motion.div>

        {/* ── GIANT EDITORIAL HEADLINE WITH VIEWPORT REVEAL ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <h2 className="font-headline uppercase text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.88] select-none">
            <span className={`block transition-colors duration-300 ${isDark ? "text-white" : "text-slate-900"}`}>
              DEFENDER BY PASSION.
            </span>
            <span className="block text-outline">
              ANALYST BY INSTINCT.
            </span>
            <span className={`block transition-colors duration-300 ${isDark ? "text-white" : "text-slate-900"}`}>
              BUILDER BY CHOICE.
            </span>
          </h2>
        </motion.div>

        {/* ── Two Column Editorial Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Bio & Career Trajectory */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <p
              className={`text-lg md:text-xl font-sans leading-relaxed transition-colors duration-300 ${
                isDark ? "text-white/95" : "text-slate-800"
              }`}
            >
              I am{" "}
              <strong className={`font-semibold ${isDark ? "text-white" : "text-slate-950 font-bold"}`}>
                Gaurav Ghandat
              </strong>
              , a dedicated cybersecurity professional and SOC Analyst focused on defensive security engineering, real-time threat detection, and active incident response.
            </p>

            <div
              className={`p-4 rounded-2xl border backdrop-blur-md space-y-2 transition-all duration-300 ${
                isDark
                  ? "bg-white/[0.03] border-cyan-400/20 hover:border-cyan-400/40"
                  : "bg-white/90 border-cyan-500/25 shadow-md shadow-slate-900/5 hover:border-cyan-500/50"
              }`}
            >
              <div
                className={`text-xs font-mono uppercase tracking-widest flex items-center gap-1.5 font-semibold ${
                  isDark ? "text-cyan-400" : "text-cyan-700"
                }`}
              >
                <Shield size={14} />
                <span>CYBERSECURITY SPECIALIZATION</span>
              </div>
              <p
                className={`text-sm font-sans leading-relaxed ${
                  isDark ? "text-gray-300" : "text-slate-600"
                }`}
              >
                Specialized in Security Operations Center (SOC) workflows, enterprise SIEM engineering with Splunk, log correlation across multi-tier vectors, network traffic forensics with Wireshark/Zeek, and threat intelligence mapping using the MITRE ATT&amp;CK matrix.
              </p>
            </div>

            <p
              className={`text-sm md:text-base font-sans leading-relaxed transition-colors duration-300 ${
                isDark ? "text-gray-300" : "text-slate-600"
              }`}
            >
              Currently working as a{" "}
              <strong className={isDark ? "text-white" : "text-slate-900 font-semibold"}>
                System Administrator at Bits &amp; Bytes Services Pvt. Ltd.
              </strong>
              , I actively administer enterprise Windows Server &amp; Linux environments, enforce Active Directory Group Policies (GPOs), minimize attack surfaces, and lead ITIL-aligned incident containment.
            </p>

            <div
              className={`p-4 rounded-2xl border space-y-2 transition-all duration-300 ${
                isDark
                  ? "bg-black/40 border-white/10 hover:border-amber-400/30"
                  : "bg-white/90 border-amber-500/25 shadow-md shadow-slate-900/5 hover:border-amber-500/50"
              }`}
            >
              <div
                className={`text-xs font-mono uppercase tracking-widest flex items-center gap-1.5 font-semibold ${
                  isDark ? "text-amber-400" : "text-amber-700"
                }`}
              >
                <Activity size={14} />
                <span>PROFESSIONAL MISSION &amp; GOALS</span>
              </div>
              <p
                className={`text-sm font-sans leading-relaxed ${
                  isDark ? "text-gray-300" : "text-slate-600"
                }`}
              >
                Dedicated to advancing resilient Blue Team capabilities, automating threat hunting pipelines, and safeguarding critical organizational digital infrastructure from emerging global threat actors.
              </p>
            </div>

            {/* Quick Stats & Credentials Pills with Micro-Interactions */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ duration: 0.2 }}
                className={`p-3.5 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
                  isDark
                    ? "bg-white/[0.03] border-white/10 hover:border-cyan-400/40"
                    : "bg-white border-slate-200 shadow-sm shadow-slate-900/5 hover:border-cyan-500/40"
                }`}
              >
                <div className={`flex items-center gap-2 mb-1 ${isDark ? "text-cyan-400" : "text-cyan-700"}`}>
                  <Briefcase size={15} />
                  <span className={`font-mono text-[10px] uppercase tracking-wider ${isDark ? "text-white/60" : "text-slate-500"}`}>
                    Role
                  </span>
                </div>
                <div className={`text-xs font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                  SOC Analyst &amp; SysAdmin
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ duration: 0.2 }}
                className={`p-3.5 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
                  isDark
                    ? "bg-white/[0.03] border-white/10 hover:border-amber-400/40"
                    : "bg-white border-slate-200 shadow-sm shadow-slate-900/5 hover:border-amber-500/40"
                }`}
              >
                <div className={`flex items-center gap-2 mb-1 ${isDark ? "text-amber-400" : "text-amber-700"}`}>
                  <GraduationCap size={15} />
                  <span className={`font-mono text-[10px] uppercase tracking-wider ${isDark ? "text-white/60" : "text-slate-500"}`}>
                    Education
                  </span>
                </div>
                <div className={`text-xs font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                  B.E. Computer Engg.
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ duration: 0.2 }}
                className={`p-3.5 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
                  isDark
                    ? "bg-white/[0.03] border-white/10 hover:border-emerald-400/40"
                    : "bg-white border-slate-200 shadow-sm shadow-slate-900/5 hover:border-emerald-500/40"
                }`}
              >
                <div className={`flex items-center gap-2 mb-1 ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>
                  <MapPin size={15} />
                  <span className={`font-mono text-[10px] uppercase tracking-wider ${isDark ? "text-white/60" : "text-slate-500"}`}>
                    Location
                  </span>
                </div>
                <div className={`text-xs font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                  Nashik, India
                </div>
              </motion.div>
            </div>

            {/* Resume Button with Micro-Interaction */}
            <div className="pt-2 flex items-center gap-4 flex-wrap">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.18 }}
                href="/resume.pdf"
                download
                className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full font-headline tracking-wider text-xs md:text-sm uppercase shadow-xl transition-all duration-200 ${
                  isDark
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/15"
                }`}
              >
                <Download size={14} className="stroke-[2.5] transition-transform group-hover:translate-y-0.5" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </motion.a>

              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("skills");
                  if (el) {
                    const lenis = (window as any).__lenis;
                    if (lenis) lenis.scrollTo(el, { offset: -70, duration: 1.15 });
                    else el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`group inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase transition-colors ${
                  isDark ? "text-cyan-400 hover:text-cyan-300" : "text-cyan-700 hover:text-cyan-900 font-semibold"
                }`}
              >
                <span>EXPLORE TECHNICAL STACK</span>
                <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: 3D Holographic Particle Human Silhouette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            <div
              className={`relative w-full max-w-sm aspect-square rounded-3xl border backdrop-blur-xl p-4 flex flex-col items-center justify-center shadow-2xl overflow-hidden group transition-all duration-300 ${
                isDark
                  ? "bg-black/40 border-white/10"
                  : "bg-white border-slate-200 shadow-xl shadow-slate-900/5"
              }`}
            >
              {/* Corner tech indicators */}
              <div
                className={`absolute top-3 left-3 text-[9px] font-mono tracking-wider font-semibold ${
                  isDark ? "text-cyan-400" : "text-cyan-700"
                }`}
              >
                NEURAL_SURVEILLANCE // ONLINE
              </div>
              <div
                className={`absolute top-3 right-3 text-[9px] font-mono tracking-wider font-semibold ${
                  isDark ? "text-emerald-400" : "text-emerald-700"
                }`}
              >
                DEFENSE_LEVEL: OPTIMAL
              </div>

              {/* 3D Particle Head / Bust Canvas */}
              <div className="w-full h-full">
                <CyberBustCanvas particleCount={1100} />
              </div>

              {/* Bottom metadata tag */}
              <div className="absolute bottom-3 text-center">
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest ${
                    isDark ? "text-white/50" : "text-slate-500 font-medium"
                  }`}
                >
                  CYBERNETIC POINT CLOUD · 60 FPS
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutEditorial;
