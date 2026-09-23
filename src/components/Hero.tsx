
import { useEffect, useRef, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, FileText, ChevronRight } from "lucide-react";

// Simulated log entries for the SOC panel
const logEntries = [
  { type: "alert", text: "[ALERT] Multiple failed SSH auth attempts — 192.168.1.45" },
  { type: "detect", text: "[DETECT] Possible brute-force — T1110 Credential Access" },
  { type: "info", text: "[INFO] DNS query anomaly — unusual subdomain pattern" },
  { type: "warn", text: "[WARN] Suspicious HTTP POST to /admin/login" },
  { type: "success", text: "[RESOLVED] Authentication incident contained" },
  { type: "info", text: "[INFO] Splunk alert triggered — threshold exceeded" },
  { type: "detect", text: "[DETECT] Lateral movement indicator observed" },
  { type: "alert", text: "[ALERT] Firewall rule violation — outbound port 4444" },
  { type: "success", text: "[INFO] Log correlation complete — 0 critical findings" },
  { type: "warn", text: "[WARN] AD anomaly — privileged group modification" },
];

const logColors: Record<string, string> = {
  alert: "#FF3366",
  detect: "#8B5CF6",
  info: "#00D4FF",
  warn: "#FF8C00",
  success: "#00FF88",
};

// Typing animation hook
const useTypingEffect = (text: string, speed = 50) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return displayed;
};

const Hero = () => {
  const [currentLog, setCurrentLog] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState<typeof logEntries>([]);
  const logRef = useRef<HTMLDivElement>(null);

  // Rotate logs
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLog(prev => {
        const next = (prev + 1) % logEntries.length;
        setVisibleLogs(logs => {
          const updated = [...logs, logEntries[next]].slice(-6);
          return updated;
        });
        return next;
      });
    }, 2200);
    // Init with first 3 logs
    setVisibleLogs(logEntries.slice(0, 3));
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll logs
  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [visibleLogs]);

  const subtitle = useTypingEffect("SOC Analyst – Level 1 | Blue Team Defender | SIEM & Threat Detection", 35);

  const metrics = [
    { label: "Security Events", value: "128,492", color: "#00D4FF" },
    { label: "Critical Alerts", value: "07", color: "#FF3366" },
    { label: "Threats Detected", value: "24", color: "#FF8C00" },
    { label: "Active Incidents", value: "03", color: "#8B5CF6" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-16"
      style={{ background: "linear-gradient(135deg, #060B14 0%, #0A0F1E 60%, #0D1524 100%)" }}
      aria-label="Hero section"
    >
      {/* Background cyber grid */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300D4FF' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}
        />
        {/* Subtle radial glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)" }} />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-16">

          {/* ── LEFT: Text Content ── */}
          <div className="w-full xl:w-1/2 text-center xl:text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-medium"
              style={{ background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.25)" }}>
              <span className="status-dot" aria-hidden="true" />
              <span className="font-mono tracking-wider" style={{ color: "#00FF88" }}>
                OPEN TO CYBERSECURITY OPPORTUNITIES
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3">
              <span className="text-white">GAURAV</span>
              <br />
              <span className="text-gradient">UTTAM GHANDAT</span>
            </h1>

            {/* Typing subtitle */}
            <div className="h-8 mb-6 flex items-center justify-center xl:justify-start">
              <p className="text-sm md:text-base font-mono text-cyber-muted">
                {subtitle}
                <span className="animate-blink ml-0.5 text-cyber-light">|</span>
              </p>
            </div>

            {/* Bio */}
            <p className="text-gray-400 mb-8 max-w-xl leading-relaxed text-sm md:text-base mx-auto xl:mx-0">
              Cybersecurity professional focused on SOC operations, threat detection, SIEM monitoring,
              incident response, Linux &amp; Windows administration, and secure infrastructure.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 justify-center xl:justify-start mb-8">
              <a href="#projects" className="btn-primary">
                <ChevronRight size={16} />
                View Projects
              </a>
              <a href="/resume.pdf" download className="btn-secondary">
                <FileText size={16} />
                Download Resume
              </a>
              <a href="#contact" className="btn-ghost">
                <Mail size={16} />
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center xl:justify-start">
              <span className="text-xs text-gray-600 font-mono">CONNECT:</span>
              <a
                href="https://github.com/GauravGhandat-23"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyber-light transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/gaurav-ghandat-68a5a22b4/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyber-light transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:gauravghandat23@gmail.com"
                aria-label="Send Email"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyber-light transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* ── RIGHT: SOC Dashboard Panel ── */}
          <div className="w-full xl:w-1/2 flex justify-center xl:justify-end" aria-label="SOC monitoring simulation panel" aria-hidden="false">
            <div className="w-full max-w-lg">

              {/* SOC Panel Header */}
              <div className="rounded-t-xl px-4 py-2 flex items-center justify-between"
                style={{ background: "#0A0F1E", border: "1px solid rgba(0,212,255,0.2)", borderBottom: "none" }}>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF3366" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF8C00" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#00FF88" }} />
                </div>
                <span className="text-xs font-mono" style={{ color: "rgba(0,212,255,0.6)" }}>
                  SOC MONITOR — SIMULATION
                </span>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00FF88", boxShadow: "0 0 4px #00FF88", animation: "pulse 2s infinite" }} />
                  <span className="text-xs font-mono" style={{ color: "#00FF88" }}>LIVE</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-2 p-3"
                style={{ background: "#060B14", border: "1px solid rgba(0,212,255,0.15)", borderTop: "none", borderBottom: "none" }}>
                {metrics.map((m) => (
                  <div key={m.label} className="rounded-lg p-3 text-center"
                    style={{ background: "rgba(0,212,255,0.03)", border: `1px solid ${m.color}22` }}>
                    <div className="text-xl font-bold font-mono" style={{ color: m.color }}>{m.value}</div>
                    <div className="text-xs mt-1 uppercase tracking-wider" style={{ color: "rgba(107,122,153,0.8)" }}>{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Log Stream */}
              <div className="rounded-b-xl"
                style={{ background: "#060B14", border: "1px solid rgba(0,212,255,0.15)", borderTop: "1px solid rgba(0,212,255,0.08)" }}>
                <div className="px-3 py-2 flex items-center justify-between"
                  style={{ borderBottom: "1px solid rgba(0,212,255,0.08)" }}>
                  <span className="text-xs font-mono font-bold" style={{ color: "#00D4FF" }}>EVENT LOG STREAM</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded"
                    style={{ background: "rgba(255,51,102,0.1)", border: "1px solid rgba(255,51,102,0.3)", color: "#FF3366" }}>
                    ⚠ SAMPLE DATA
                  </span>
                </div>
                <div ref={logRef} className="p-3 h-36 overflow-y-auto space-y-1.5 font-mono text-xs">
                  {visibleLogs.map((log, i) => (
                    <div
                      key={i}
                      className="leading-relaxed"
                      style={{
                        color: logColors[log.type],
                        opacity: i === visibleLogs.length - 1 ? 1 : 0.6 + (i / visibleLogs.length) * 0.4,
                        animation: i === visibleLogs.length - 1 ? "fade-in 0.4s ease-out" : "none",
                      }}
                    >
                      {log.text}
                    </div>
                  ))}
                  <div className="flex items-center gap-1 mt-1">
                    <span style={{ color: "#00FF88" }}>gaurav@soc:~$</span>
                    <span className="animate-blink" style={{ color: "#00D4FF" }}>█</span>
                  </div>
                </div>
              </div>

              {/* Bottom label */}
              <p className="text-center text-xs font-mono mt-3" style={{ color: "rgba(107,122,153,0.6)" }}>
                ★ Interactive SOC Simulation — Not real-time data
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 group"
        style={{ color: "rgba(0,212,255,0.5)" }}
      >
        <span className="text-xs font-mono group-hover:text-cyber-light transition-colors">SCROLL</span>
        <ArrowDown size={18} className="animate-bounce group-hover:text-cyber-light transition-colors" />
      </a>
    </section>
  );
};

export default Hero;
