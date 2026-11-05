import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Shield, Terminal, Server, Activity, Network, Cpu, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import CosmicVortexCanvas from "./CosmicVortexCanvas";

interface ToolItem {
  name: string;
  category: string;
  icon: string;
  color: string;
  experience: string;
  projects: string[];
}

export const StackShowcase = () => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [activeToolIndex, setActiveToolIndex] = useState<number>(0);
  const [selectedTool, setSelectedTool] = useState<ToolItem | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { isDark } = useTheme();

  const tools: ToolItem[] = [
    {
      name: "Splunk Enterprise",
      category: "SIEM & SOC",
      icon: "⚡",
      color: "#00D4FF",
      experience: "Multi-source log indexing, complex SPL queries, real-time alert correlation, custom SOC dashboards.",
      projects: ["Unified Log Analysis", "SOC Monitoring Dashboards"],
    },
    {
      name: "Wireshark",
      category: "Network Forensics",
      icon: "🦈",
      color: "#38BDF8",
      experience: "Deep packet inspection (PCAP), protocol anomaly detection, DNS tunneling, TCP handshake triage.",
      projects: ["Malware Traffic Analysis", "Security Blue Team Cert"],
    },
    {
      name: "Nmap",
      category: "Recon & Discovery",
      icon: "🎯",
      color: "#F59E0B",
      experience: "Host discovery, port scanning, service/version enumeration, script engine (NSE) reconnaissance.",
      projects: ["Vulnerability Assessment Labs", "Edureka Internship"],
    },
    {
      name: "Kali & Linux",
      category: "Defensive OS",
      icon: "🐧",
      color: "#10B981",
      experience: "Linux server administration, secure shell (SSH) hardening, bash scripting, log management.",
      projects: ["Bits & Bytes SysAdmin", "Security Labs"],
    },
    {
      name: "Windows Server",
      category: "Infrastructure",
      icon: "🪟",
      color: "#60A5FA",
      experience: "Active Directory Domain Services, GPO configuration, DNS/DHCP administration, event log auditing.",
      projects: ["Enterprise SysAdmin Experience"],
    },
    {
      name: "Burp Suite",
      category: "App Security",
      icon: "🟠",
      color: "#FB923C",
      experience: "Web application traffic interception, OWASP Top 10 testing, session token analysis.",
      projects: ["Web Security Audits"],
    },
    {
      name: "Active Directory",
      category: "Identity & Access",
      icon: "🛡️",
      color: "#A78BFA",
      experience: "User credential lifecycle, least privilege enforcement, Kerberos/NTLM authentication, security group auditing.",
      projects: ["GPO Hardening Lab", "Bits & Bytes Production"],
    },
    {
      name: "Networking",
      category: "Core Protocols",
      icon: "🌐",
      color: "#38BDF8",
      experience: "Subnetting, TCP/IP, VLAN segmentation, firewall ACLs, LAN/WAN/VPN troubleshooting.",
      projects: ["Production Network Admin"],
    },
  ];

  // Auto-rotate the cylinder gently ONLY when visible in viewport
  useEffect(() => {
    if (isDragging) return;
    const isReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    let isVisible = false;
    let animId: number;

    const loop = () => {
      if (!isVisible || isDragging) return;
      setRotationAngle((prev) => prev + 0.25);
      animId = requestAnimationFrame(loop);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          cancelAnimationFrame(animId);
          animId = requestAnimationFrame(loop);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animId);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    setRotationAngle((prev) => prev + delta * 0.4);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const radius = 320; // 3D cylinder radius in pixels
  const count = tools.length;
  const angleStep = 360 / count;

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`relative min-h-screen py-24 md:py-36 overflow-hidden transition-colors duration-300 ${
        isDark ? "text-white bg-[#03060E]" : "text-slate-900 bg-[#F7F9FC]"
      }`}
      aria-label="Cybersecurity Stack and Technologies"
    >
      <CosmicVortexCanvas variant="ambient" particleCount={250} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Index Marker */}
        <div
          className={`flex items-center justify-between border-b pb-4 mb-12 transition-colors duration-300 ${
            isDark ? "border-white/10" : "border-slate-200"
          }`}
        >
          <div
            className={`font-mono text-xs md:text-sm tracking-widest uppercase flex items-center gap-2 ${
              isDark ? "text-cyan-400" : "text-cyan-700 font-semibold"
            }`}
          >
            <span>(03)</span>
            <span className={isDark ? "text-white/60" : "text-slate-600"}>SKILLS &amp; TECHNICAL ARSENAL</span>
          </div>
          <div className={`font-mono text-xs md:text-sm tracking-wider ${isDark ? "text-white/50" : "text-slate-500"}`}>
            ECOSYSTEM // 8 DOMAINS
          </div>
        </div>

        {/* ── GIANT HEADLINE ── */}
        <div className="mb-14">
          <h2 className="font-headline uppercase text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.88] select-none">
            <span className={`block transition-colors duration-300 ${isDark ? "text-white" : "text-slate-900"}`}>
              TOOLS OF
            </span>
            <span className="block text-outline">
              THE TRADE.
            </span>
          </h2>
        </div>

        {/* ── 3D CYLINDRICAL CAROUSEL ── */}
        <div
          className="relative w-full h-[320px] md:h-[360px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none overflow-hidden my-8"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={(e) => {
            setIsDragging(true);
            setStartX(e.touches[0].clientX);
          }}
          onTouchMove={(e) => {
            if (!isDragging) return;
            const delta = e.touches[0].clientX - startX;
            setRotationAngle((prev) => prev + delta * 0.4);
            setStartX(e.touches[0].clientX);
          }}
          onTouchEnd={() => setIsDragging(false)}
        >
          <div
            className="w-full h-full relative"
            style={{
              perspective: "1000px",
              perspectiveOrigin: "50% 50%",
            }}
          >
            <div
              className="w-full h-full absolute inset-0 flex items-center justify-center"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(${rotationAngle}deg)`,
                transition: isDragging ? "none" : "transform 0.1s linear",
              }}
            >
              {tools.map((tool, idx) => {
                const angle = idx * angleStep;
                return (
                  <div
                    key={tool.name}
                    onClick={() => setSelectedTool(tool)}
                    className={`absolute w-48 md:w-56 h-60 md:h-68 rounded-3xl p-5 border backdrop-blur-2xl flex flex-col justify-between items-center text-center shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group ${
                      isDark
                        ? "bg-[#0A1020]/95 border-white/15 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(0,229,255,0.3)]"
                        : "bg-white/95 border-slate-200 hover:border-cyan-500 hover:shadow-[0_16px_40px_rgba(8,145,178,0.18)]"
                    }`}
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl border flex items-center justify-center text-3xl shadow-inner mt-2 transition-colors ${
                        isDark
                          ? "bg-white/[0.04] border-cyan-400/20 group-hover:border-cyan-400/60"
                          : "bg-slate-50 border-cyan-500/20 group-hover:border-cyan-500/50"
                      }`}
                    >
                      {tool.icon}
                    </div>

                    <div>
                      <div
                        className={`font-headline text-lg md:text-xl uppercase tracking-wider transition-colors ${
                          isDark
                            ? "text-white group-hover:text-cyan-300"
                            : "text-slate-900 group-hover:text-cyan-700"
                        }`}
                      >
                        {tool.name}
                      </div>
                      <div
                        className={`font-mono text-[10px] uppercase tracking-widest mt-1 ${
                          isDark ? "text-teal-300" : "text-teal-700 font-semibold"
                        }`}
                      >
                        {tool.category}
                      </div>
                    </div>

                    <div
                      className={`text-[10px] font-mono tracking-wider flex items-center gap-1 transition-colors ${
                        isDark
                          ? "text-cyan-400/70 group-hover:text-cyan-300"
                          : "text-cyan-700 group-hover:text-cyan-900 font-semibold"
                      }`}
                    >
                      <span>INSPECT ARSENAL</span>
                      <span>→</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Guidance Hint */}
          <div
            className={`absolute bottom-1 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest uppercase pointer-events-none ${
              isDark ? "text-white/40" : "text-slate-500 font-medium"
            }`}
          >
            DRAG TO ROTATE 3D ARSENAL · CLICK CARD TO INSPECT
          </div>
        </div>

        {/* ── SELECTED TOOL MODAL / DETAIL DRAWER ── */}
        {selectedTool && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedTool(null)}
          >
            <div
              className={`w-full max-w-md p-6 rounded-3xl border shadow-2xl transition-all ${
                isDark
                  ? "bg-[#090F1C] border-cyan-400/40 text-white"
                  : "bg-white border-slate-200 text-slate-900"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`flex items-center justify-between pb-4 border-b mb-4 ${
                  isDark ? "border-white/10" : "border-slate-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{selectedTool.icon}</div>
                  <div>
                    <h4
                      className={`font-headline text-2xl uppercase ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {selectedTool.name}
                    </h4>
                    <span
                      className={`font-mono text-xs uppercase ${
                        isDark ? "text-cyan-400" : "text-cyan-700 font-semibold"
                      }`}
                    >
                      {selectedTool.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTool(null)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    isDark
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-sm font-sans">
                <div>
                  <div
                    className={`font-mono text-[11px] uppercase tracking-wider mb-1 ${
                      isDark ? "text-white/50" : "text-slate-500 font-semibold"
                    }`}
                  >
                    Hands-on Practice &amp; Administration
                  </div>
                  <p className={isDark ? "text-gray-300 leading-relaxed" : "text-slate-600 leading-relaxed"}>
                    {selectedTool.experience}
                  </p>
                </div>

                <div>
                  <div
                    className={`font-mono text-[11px] uppercase tracking-wider mb-1 ${
                      isDark ? "text-white/50" : "text-slate-500 font-semibold"
                    }`}
                  >
                    Applied In Projects &amp; Lab Work
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedTool.projects.map((proj) => (
                      <span
                        key={proj}
                        className={`px-2.5 py-1 rounded-md text-xs font-mono border ${
                          isDark
                            ? "bg-cyan-950/40 border-cyan-500/30 text-cyan-300"
                            : "bg-cyan-50 border-cyan-300 text-cyan-800 font-medium"
                        }`}
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 8 INTERACTIVE CYBER STACK DOMAINS ── */}
        <div
          className={`border-t pt-16 transition-colors duration-300 ${
            isDark ? "border-white/10" : "border-slate-200"
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <div
              className={`font-mono text-xs uppercase tracking-widest flex items-center gap-2 ${
                isDark ? "text-cyan-400" : "text-cyan-700 font-semibold"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>INTERACTIVE CORE DOMAINS &amp; COMPETENCIES</span>
            </div>
            <div className={`text-xs font-mono ${isDark ? "text-white/50" : "text-slate-500 font-medium"}`}>
              CLICK LABELS FOR REAL LAB CORRELATIONS
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Security Operations */}
            <div
              className={`p-4 rounded-2xl border transition-all duration-300 space-y-3 ${
                isDark
                  ? "bg-white/[0.02] border-white/10 hover:border-cyan-400/40"
                  : "bg-white border-slate-200 hover:border-cyan-500/50 shadow-md shadow-slate-900/5"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <h4
                  className={`font-headline text-base uppercase tracking-wider ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  SECURITY OPERATIONS
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["SOC Monitoring", "Alert Triage", "Severity Classification", "ITIL ITSM", "Shift Escalation"].map((s) => (
                  <span
                    key={s}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                      isDark
                        ? "bg-white/[0.04] text-white/80 hover:text-cyan-300 hover:bg-cyan-500/10"
                        : "bg-slate-100 text-slate-700 hover:text-cyan-800 hover:bg-cyan-50 font-medium"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* 2. SIEM & Log Analysis */}
            <div
              className={`p-4 rounded-2xl border transition-all duration-300 space-y-3 ${
                isDark
                  ? "bg-white/[0.02] border-white/10 hover:border-blue-400/40"
                  : "bg-white border-slate-200 hover:border-blue-500/50 shadow-md shadow-slate-900/5"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <h4
                  className={`font-headline text-base uppercase tracking-wider ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  SIEM &amp; LOG ANALYSIS
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Splunk Enterprise", "SPL Queries", "Log Parsing", "Syslog Ingestion", "Alert Correlation"].map((s) => (
                  <span
                    key={s}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                      isDark
                        ? "bg-white/[0.04] text-white/80 hover:text-blue-300 hover:bg-blue-500/10"
                        : "bg-slate-100 text-slate-700 hover:text-blue-800 hover:bg-blue-50 font-medium"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* 3. Network Security */}
            <div
              className={`p-4 rounded-2xl border transition-all duration-300 space-y-3 ${
                isDark
                  ? "bg-white/[0.02] border-white/10 hover:border-teal-400/40"
                  : "bg-white border-slate-200 hover:border-teal-500/50 shadow-md shadow-slate-900/5"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400" />
                <h4
                  className={`font-headline text-base uppercase tracking-wider ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  NETWORK SECURITY
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["TCP/IP Suite", "Firewall ACLs", "VLAN Segmentation", "Traffic Forensics", "Packet Capture"].map((s) => (
                  <span
                    key={s}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                      isDark
                        ? "bg-white/[0.04] text-white/80 hover:text-teal-300 hover:bg-teal-500/10"
                        : "bg-slate-100 text-slate-700 hover:text-teal-800 hover:bg-teal-50 font-medium"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. Threat Detection */}
            <div
              className={`p-4 rounded-2xl border transition-all duration-300 space-y-3 ${
                isDark
                  ? "bg-white/[0.02] border-white/10 hover:border-amber-400/40"
                  : "bg-white border-slate-200 hover:border-amber-500/50 shadow-md shadow-slate-900/5"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <h4
                  className={`font-headline text-base uppercase tracking-wider ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  THREAT DETECTION
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Brute Force T1110", "DNS Tunneling", "Beaconing Analysis", "IOC Correlation", "MITRE ATT&CK"].map((s) => (
                  <span
                    key={s}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                      isDark
                        ? "bg-white/[0.04] text-white/80 hover:text-amber-300 hover:bg-amber-500/10"
                        : "bg-slate-100 text-slate-700 hover:text-amber-800 hover:bg-amber-50 font-medium"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* 5. Incident Response */}
            <div
              className={`p-4 rounded-2xl border transition-all duration-300 space-y-3 ${
                isDark
                  ? "bg-white/[0.02] border-white/10 hover:border-red-400/40"
                  : "bg-white border-slate-200 hover:border-red-500/50 shadow-md shadow-slate-900/5"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <h4
                  className={`font-headline text-base uppercase tracking-wider ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  INCIDENT RESPONSE
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Containment Workflows", "Host Isolation", "Forensic Artifacts", "Remediation", "Post-Mortem Reports"].map((s) => (
                  <span
                    key={s}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                      isDark
                        ? "bg-white/[0.04] text-white/80 hover:text-red-300 hover:bg-red-500/10"
                        : "bg-slate-100 text-slate-700 hover:text-red-800 hover:bg-red-50 font-medium"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* 6. Vulnerability Assessment */}
            <div
              className={`p-4 rounded-2xl border transition-all duration-300 space-y-3 ${
                isDark
                  ? "bg-white/[0.02] border-white/10 hover:border-purple-400/40"
                  : "bg-white border-slate-200 hover:border-purple-500/50 shadow-md shadow-slate-900/5"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <h4
                  className={`font-headline text-base uppercase tracking-wider ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  VULNERABILITY ASSESSMENT
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Vulnerability Scans", "OWASP Top 10", "Patch Management", "Surface Minimization", "Reconnaissance"].map((s) => (
                  <span
                    key={s}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                      isDark
                        ? "bg-white/[0.04] text-white/80 hover:text-purple-300 hover:bg-purple-500/10"
                        : "bg-slate-100 text-slate-700 hover:text-purple-800 hover:bg-purple-50 font-medium"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* 7. Linux & Windows */}
            <div
              className={`p-4 rounded-2xl border transition-all duration-300 space-y-3 ${
                isDark
                  ? "bg-white/[0.02] border-white/10 hover:border-emerald-400/40"
                  : "bg-white border-slate-200 hover:border-emerald-500/50 shadow-md shadow-slate-900/5"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <h4
                  className={`font-headline text-base uppercase tracking-wider ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  LINUX &amp; WINDOWS
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Linux Hardening", "Active Directory GPOs", "Windows Server", "PowerShell", "Bash Automation"].map((s) => (
                  <span
                    key={s}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                      isDark
                        ? "bg-white/[0.04] text-white/80 hover:text-emerald-300 hover:bg-emerald-500/10"
                        : "bg-slate-100 text-slate-700 hover:text-emerald-800 hover:bg-emerald-50 font-medium"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* 8. Security Tools */}
            <div
              className={`p-4 rounded-2xl border transition-all duration-300 space-y-3 ${
                isDark
                  ? "bg-white/[0.02] border-white/10 hover:border-amber-500/40"
                  : "bg-white border-slate-200 hover:border-amber-500/50 shadow-md shadow-slate-900/5"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <h4
                  className={`font-headline text-base uppercase tracking-wider ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  SECURITY TOOLS
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Wireshark", "Nmap", "Burp Suite", "Kali Linux", "AWS GuardDuty", "Python Security"].map((s) => (
                  <span
                    key={s}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                      isDark
                        ? "bg-white/[0.04] text-white/80 hover:text-amber-300 hover:bg-amber-500/10"
                        : "bg-slate-100 text-slate-700 hover:text-amber-800 hover:bg-amber-50 font-medium"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default StackShowcase;
