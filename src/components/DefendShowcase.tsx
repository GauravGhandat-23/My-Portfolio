import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Activity, Terminal, Cpu, Lock, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import CosmicVortexCanvas from "./CosmicVortexCanvas";

export const DefendShowcase = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { isDark } = useTheme();

  const capabilities = [
    {
      id: "01",
      tag: "SOC & SIEM OPERATIONS",
      subtitle: "From log ingestion to real-time incident alerting.",
      title: "SIEM & SOC MONITORING",
      description:
        "Centralized security telemetry orchestration using Splunk Enterprise. Deep expertise crafting sophisticated SPL search strings, building custom dashboards, correlating disparate event streams (DNS, SSH, Apache, Cloudflare, AWS GuardDuty), and reducing alert fatigue through precise threshold tuning.",
      lifecycle: ["INGEST", "CORRELATE", "DETECT", "ALERT"],
      technologies: ["Splunk Enterprise", "SPL", "Zeek", "Sysmon", "AWS GuardDuty", "Cloudflare Logs"],
      statLabel: "Log Volume Parsed in Labs",
      statValue: "128,492+",
      splQuery: "index=security sourcetype=access_combined status=401\n| stats count by src_ip, user\n| where count > 10\n| eval risk_score=count*1.5\n| sort - risk_score",
      mockLog: [
        { time: "14:22:01.402", type: "info", text: "index=security sourcetype=access_combined status=401", tag: "INGEST" },
        { time: "14:22:02.115", type: "warn", text: "| stats count by src_ip, user | where count > 10", tag: "CORRELATE" },
        { time: "14:22:02.490", type: "alert", text: "[ALERT] T1110.001 Brute Force Threshold Exceeded: 192.168.1.45", tag: "TRIGGER" },
        { time: "14:22:03.010", type: "success", text: "[DEFENSE] Firewall ACL rule applied · Host quarantined", tag: "ACTION" },
      ],
    },
    {
      id: "02",
      tag: "BLUE TEAM OPERATIONS",
      subtitle: "From adversary indicator to rapid threat containment.",
      title: "THREAT HUNTING & IR",
      description:
        "Systematic adversary analysis mapped against the MITRE ATT&CK matrix. Investigating initial access vectors, lateral movement indicators, DNS tunneling, credential dumping, and malware beaconing. Executing disciplined containment protocols to neutralize attacks before compromise expansion.",
      lifecycle: ["TRIAGE", "INVESTIGATE", "CONTAIN", "RECOVER"],
      technologies: ["MITRE ATT&CK", "Wireshark", "Nmap", "Burp Suite", "Kali Linux", "PCAP Analysis"],
      statLabel: "Adversary Tactics Mapped",
      statValue: "14 MITRE Tactics",
      splQuery: "index=network sourcetype=zeek_dns query_type=TXT\n| eval query_len=len(query)\n| where query_len > 60\n| stats count by id.orig_h, query\n| table id.orig_h, query, query_len",
      mockLog: [
        { time: "14:28:10.082", type: "info", text: "DNS entropy anomaly: High byte randomness in TXT lookup", tag: "INSPECT" },
        { time: "14:28:10.420", type: "alert", text: "[DETECT] T1071.004 C2 DNS Tunneling pattern matched", tag: "MATCH" },
        { time: "14:28:11.104", type: "warn", text: "Isolating compromised endpoint: MAC 00:1A:2B:3C:4D:5E", tag: "ISOLATE" },
        { time: "14:28:12.000", type: "success", text: "[CONTAINED] Outbound C2 egress blocked at DNS resolver", tag: "MITIGATE" },
      ],
    },
    {
      id: "03",
      tag: "SYSTEM RESILIENCE",
      subtitle: "From system architecture to zero-trust defensive hardening.",
      title: "DEFENSIVE HARDENING",
      description:
        "Enterprise-grade infrastructure defense honed through production System Administrator responsibilities at Bits & Bytes Services. Enforcing Active Directory Group Policy Objects (GPOs), least-privilege RBAC, SSH key hygiene, multi-tier firewall zoning, patch compliance, and ITIL incident handling.",
      lifecycle: ["ASSESS", "HARDEN", "ENFORCE", "AUDIT"],
      technologies: ["Active Directory", "Windows Server", "Linux Hardening", "PowerShell", "ITIL ITSM", "TCP/IP"],
      statLabel: "Production Uptime Maintained",
      statValue: "99.98%",
      splQuery: "# Active Directory GPO Verification Script\nGet-GPOReport -All -ReportType Html -Path C:\\Audits\\GPO_Report.html\nTest-ComputerSecureChannel -Verbose\nAuditpol /get /category:* | Select-String 'Failure|Success'",
      mockLog: [
        { time: "09:00:15.110", type: "info", text: "GPO applied: Enforce NTLMv2, disable SMBv1 across domain", tag: "POLICY" },
        { time: "09:00:16.420", type: "success", text: "SSH config verified: PermitRootLogin no, PubkeyAuthentication yes", tag: "HARDEN" },
        { time: "09:00:18.005", type: "info", text: "Firewall rule updated: Deny outbound TCP/4444, TCP/8888", tag: "PERIMETER" },
        { time: "09:00:20.900", type: "success", text: "[COMPLIANCE] Infrastructure audit score: 100% Passed", tag: "AUDIT" },
      ],
    },
  ];

  const current = capabilities[activeTab];

  return (
    <section
      id="defend"
      className={`relative min-h-screen py-24 md:py-32 overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-[#050811] text-white" : "bg-[#F7F9FC] text-slate-900"
      }`}
      aria-label="Defensive Security Capabilities"
    >
      {/* ── Background Particle Atmosphere ── */}
      <CosmicVortexCanvas variant="ambient" particleCount={250} />

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col justify-between">
        
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
            <span>(02)</span>
            <span className={isDark ? "text-white/60" : "text-slate-600"}>CORE DISCIPLINE — DEFEND</span>
          </div>
          <div className={`font-mono text-xs md:text-sm tracking-wider ${isDark ? "text-white/50" : "text-slate-500"}`}>
            02 / 04
          </div>
        </div>

        {/* ── Main Capability Showcase Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16"
        >
          {/* Left Column: Typography & Narrative with Smooth Fade on Switch */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <span
                  className={`font-mono text-xs md:text-sm tracking-wider uppercase mb-2 block ${
                    isDark ? "text-cyan-400" : "text-cyan-700 font-semibold"
                  }`}
                >
                  {current.subtitle}
                </span>

                <h3
                  className={`font-headline uppercase text-4xl sm:text-5xl md:text-7xl lg:text-7.5xl tracking-tight leading-[0.9] mb-6 transition-colors duration-300 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {current.title}
                </h3>

                <p
                  className={`font-sans text-sm md:text-base leading-relaxed mb-6 transition-colors duration-300 ${
                    isDark ? "text-gray-300" : "text-slate-600"
                  }`}
                >
                  {current.description}
                </p>

                {/* Lifecycle Flow */}
                <div
                  className={`flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-6 flex-wrap ${
                    isDark ? "text-white/70" : "text-slate-600"
                  }`}
                >
                  {current.lifecycle.map((step, idx) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{step}</span>
                      {idx < current.lifecycle.length - 1 && (
                        <span className={isDark ? "text-cyan-400" : "text-cyan-600 font-bold"}>―</span>
                      )}
                    </span>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {current.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-mono border transition-colors ${
                        isDark
                          ? "bg-white/[0.04] border-white/15 text-white/90 hover:border-cyan-400/50 hover:text-cyan-300"
                          : "bg-white border-slate-200 text-slate-800 shadow-sm hover:border-cyan-500/50 hover:text-cyan-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Metric Card */}
                <div
                  className={`p-4 rounded-2xl border backdrop-blur-md flex items-center justify-between max-w-sm transition-all duration-300 ${
                    isDark
                      ? "bg-black/40 border-white/10"
                      : "bg-white border-slate-200 shadow-md shadow-slate-900/5"
                  }`}
                >
                  <div>
                    <div className={`text-[10px] font-mono uppercase tracking-wider ${isDark ? "text-white/50" : "text-slate-500"}`}>
                      {current.statLabel}
                    </div>
                    <div
                      className={`text-2xl font-headline tracking-wider mt-0.5 ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {current.statValue}
                    </div>
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                      isDark
                        ? "bg-cyan-400/10 border-cyan-400/30 text-cyan-400"
                        : "bg-cyan-50 border-cyan-300 text-cyan-700"
                    }`}
                  >
                    <Shield size={18} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: High-Tech Telemetry Terminal Panel */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full max-w-lg rounded-2xl border backdrop-blur-2xl shadow-2xl p-6 relative overflow-hidden transition-all duration-300 ${
                  isDark
                    ? "bg-black/75 border-white/15"
                    : "bg-[#0B1220] border-cyan-500/30 shadow-xl shadow-cyan-950/20"
                }`}
              >
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="font-mono text-xs text-white/90 ml-2 tracking-wider font-semibold">
                    SPLUNK_ENTERPRISE // {current.tag}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  LOG CORRELATION
                </span>
              </div>

              {/* SPL Logic Block */}
              <div className="mb-4 p-3 rounded-xl bg-black/60 border border-cyan-500/30">
                <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-1.5">
                  <span>DETECTION_QUERY // SPL</span>
                  <span className="text-white/40">SYNTAX // VERIFIED</span>
                </div>
                <pre className="font-mono text-xs text-cyan-200/90 whitespace-pre-wrap leading-relaxed overflow-x-auto">
                  {current.splQuery}
                </pre>
              </div>

              {/* Correlated Event Logs */}
              <div className="space-y-2.5 font-mono text-xs">
                {current.mockLog.map((log, idx) => (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-xl border transition-all ${
                      log.type === "alert"
                        ? "bg-red-950/30 border-red-500/40 text-red-300"
                        : log.type === "warn"
                        ? "bg-amber-950/30 border-amber-500/40 text-amber-300"
                        : log.type === "success"
                        ? "bg-emerald-950/30 border-emerald-500/40 text-emerald-300"
                        : "bg-white/[0.03] border-white/10 text-cyan-300"
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="text-[10px] text-white/40 mt-0.5 flex-shrink-0">
                        {log.time}
                      </span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/70 uppercase flex-shrink-0 font-bold">
                        {log.tag}
                      </span>
                      <span className="leading-relaxed break-words font-medium">
                        {log.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Telemetry Footer */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/50">
                <span>BUFFER: 100% NOMINAL</span>
                <span>LATENCY: 12ms</span>
                <span className="text-emerald-400">STATUS: MITRE ATT&amp;CK VERIFIED</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </motion.div>

        {/* ── Bottom Horizontal Switcher Bar ── */}
        <div
          className={`border-t pt-6 grid grid-cols-1 md:grid-cols-3 gap-4 transition-colors duration-300 ${
            isDark ? "border-white/15" : "border-slate-200"
          }`}
        >
          {capabilities.map((cap, index) => {
            const isActive = activeTab === index;
            return (
              <motion.button
                key={cap.id}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(index)}
                className={`text-left p-4 rounded-xl transition-all duration-300 relative border ${
                  isActive
                    ? isDark
                      ? "bg-white/[0.06] border-cyan-400/50 shadow-lg shadow-cyan-950/30"
                      : "bg-white border-cyan-500/40 shadow-md shadow-slate-900/5"
                    : isDark
                    ? "bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/10"
                    : "bg-transparent border-transparent hover:bg-slate-100 hover:border-slate-200"
                }`}
              >
                {/* Active Indicator Line */}
                {isActive && (
                  <motion.div
                    layoutId="activeDefendTab"
                    className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-amber-400"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <div
                  className={`font-mono text-xs mb-1 font-semibold ${
                    isDark ? "text-cyan-400" : "text-cyan-700"
                  }`}
                >
                  {cap.id} — {cap.tag}
                </div>
                <div
                  className={`font-headline text-lg uppercase tracking-wider ${
                    isActive
                      ? isDark
                        ? "text-white"
                        : "text-slate-950"
                      : isDark
                      ? "text-white/70"
                      : "text-slate-600"
                  }`}
                >
                  {cap.title}
                </div>
              </motion.button>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DefendShowcase;
