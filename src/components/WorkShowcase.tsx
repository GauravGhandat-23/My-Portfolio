import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Shield, Activity, Terminal, ArrowUpRight, ChevronRight, Eye } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import CosmicVortexCanvas from "./CosmicVortexCanvas";

export const WorkShowcase = () => {
  const [filter, setFilter] = useState<"all" | "soc" | "ai" | "tools">("all");
  const { isDark } = useTheme();

  const featuredProjects = [
    {
      id: "01",
      title: "UNIFIED LOG ANALYSIS & THREAT DETECTION",
      category: "SOC / SIEM PLATFORM",
      description:
        "Centralized and parsed multi-source security logs including DNS, HTTP, SSH, Apache, and AWS GuardDuty. Engineered complex SPL detection rules for brute-force attacks, DNS tunneling, lateral movement, and web exploitation with automated threshold alerts.",
      role: "SOC Analyst & Detection Engineer",
      technologies: ["Splunk Enterprise", "SPL", "Zeek", "Linux", "AWS GuardDuty", "Sysmon"],
      github: "https://github.com/GauravGhandat-23",
      live: null,
      image: "/project11.png",
      impact: "Zero false-negative rate on calibrated lab brute-force scenarios",
    },
    {
      id: "02",
      title: "AI-POWERED PHISHING DETECTION SYSTEM",
      category: "AI DEFENSIVE SECURITY",
      description:
        "Real-time threat interception system employing NLP algorithms and machine learning classifiers to dissect inbound emails, URL entropy, lexical anomalies, and header metadata to quarantine malicious campaigns before payload execution.",
      role: "Security Engineer & ML Developer",
      technologies: ["Python", "Streamlit", "scikit-learn", "Pandas", "NLTK"],
      github: "https://github.com/GauravGhandat-23/AI-Powered-Phishing-Detection-System",
      live: "https://ai-powered-phishing-detection-system-ples7i6bq2tzkaguiykzzt.streamlit.app/",
      image: "/project1.JPEG",
      impact: "High accuracy detection of obfuscated credential-harvesting URLs",
    },
    {
      id: "03",
      title: "ADVANCED THREAT INTELLIGENCE PLATFORM",
      category: "THREAT INTEL & ANALYTICS",
      description:
        "Unified threat correlation console ingesting live global threat feeds, classifying indicators of compromise (IOCs), and visualizing threat actor campaigns with automated risk scoring and actionable defensive recommendations.",
      role: "Threat Intelligence Analyst",
      technologies: ["Python", "Streamlit", "Groq API", "Pandas", "Matplotlib"],
      github: "https://github.com/GauravGhandat-23/Advanced-Threat-Intelligence-Platform",
      live: "https://advanced-threat-intelligence-platform-mk7obgez2n4p59zcvziiso.streamlit.app/",
      image: "/project2.png",
      impact: "Real-time threat feed triage and automated IOC scoring",
    },
    {
      id: "04",
      title: "MALWARE TRAFFIC ANALYSIS DASHBOARD",
      category: "NETWORK PACKET INSPECTION",
      description:
        "Deep packet inspection and behavioral analysis suite. Ingests raw PCAP and CSV network traces, extracts protocol statistical signatures via PyShark, and applies trained ML models to isolate Command & Control (C2) beaconing and data exfiltration.",
      role: "Network Security Analyst",
      technologies: ["Python", "Streamlit", "PyShark", "Scikit-learn", "Pandas", "Wireshark"],
      github: "https://github.com/GauravGhandat-23/AI-Powered-Malware-Traffic-Analysis-Dashboard",
      live: "https://ai-powered-malware-traffic-analysis-dashboard-5unhlmqws8fkwirx.streamlit.app/",
      image: "/project5.png",
      impact: "Automated PCAP parsing and behavioral anomaly identification",
    },
  ];

  const secondaryProjects = [
    {
      title: "Interactive Network Security Assessment",
      description: "Automated network scanning and CVE vulnerability assessment dashboard.",
      category: "tools",
      technologies: ["Python", "Streamlit", "Nmap", "Scapy"],
      github: "https://github.com/GauravGhandat-23/Interactive-Network-Security-Assessment-Tool",
      live: "https://interactive-network-security-assessment-tool-7b96v5p54rffeqp8.streamlit.app/",
      image: "/project3.png",
    },
    {
      title: "Defensive Cyber Attack Simulation Lab",
      description: "Interactive simulation modeling multi-vector adversary scenarios and mitigation tactics.",
      category: "soc",
      technologies: ["Python", "Streamlit", "MITRE ATT&CK"],
      github: "https://github.com/GauravGhandat-23/Interactive-Cyber-Attack-Simulation-Tool",
      live: "https://interactive-cyber-attack-simulation-tool-q2p8g52y84krhgsp4h.streamlit.app/",
      image: "/project4.png",
    },
    {
      title: "AI Cybersecurity Threat Forecaster",
      description: "Predictive threat forecasting using time-series ML modeling on threat telemetry.",
      category: "ai",
      technologies: ["Python", "Streamlit", "scikit-learn", "Groq API"],
      github: "https://github.com/GauravGhandat-23/AI-Powered-Cybersecurity-Threat-Intelligence-Forecaster",
      live: "https://ai-powered-cybersecurity-threat-intelligence-forecaster-e3.streamlit.app/",
      image: "/project6.png",
    },
    {
      title: "Cloud Threat Intelligence System",
      description: "Surveillance console for AWS/Azure environments detecting IAM credential abuse.",
      category: "soc",
      technologies: ["Python", "Streamlit", "Boto3", "Groq API"],
      github: "https://github.com/GauravGhandat-23/AI-Powered-Cloud-Threat-Intelligence-System",
      live: "https://ai-powered-cloud-threat-intelligence-system-89p2hps2kkwj6r2d2c.streamlit.app/",
      image: "/project7.png",
    },
    {
      title: "Cyber Resilience & DR Planner",
      description: "Calculates RTO/RPO metrics and generates automated incident recovery playbooks.",
      category: "soc",
      technologies: ["Python", "Streamlit", "ITIL", "Pandas"],
      github: "https://github.com/GauravGhandat-23/Cyber-Resilience-and-Disaster-Recovery-Planning-Tool",
      live: "https://cyber-resilience-and-disaster-recovery-planning-tool-399vuxb.streamlit.app/",
      image: "/project8.png",
    },
    {
      title: "Dark Web Threat Intelligence",
      description: "Scrapes and correlates compromised credentials, onion forum chatter, and paste dumps.",
      category: "tools",
      technologies: ["Python", "Streamlit", "BeautifulSoup", "Groq API"],
      github: "https://github.com/GauravGhandat-23/Dark-Web-Threat-Intelligence-Platform",
      live: "https://dark-web-threat-intelligence-platform-x5ptwhn7p7kefzsfvgw9.streamlit.app/",
      image: "/project9.png",
    },
    {
      title: "Quantum-Resistant AI Cybersecurity",
      description: "AI-driven threat intelligence utilizing post-quantum cryptography concepts.",
      category: "ai",
      technologies: ["Python", "Streamlit", "Groq API"],
      github: "https://github.com/GauravGhandat-23/Quantum-Resistant-AI-Powered-Cybersecurity",
      live: "https://quantum-resistant-ai-powered-cybersecurity-9hos7tozfxhke8sglct.streamlit.app/",
      image: "/project10.png",
    },
    {
      title: "AI-Powered Log Anomaly Detector",
      description: "Discovers hidden outliers and anomalous sequences in system syslog records using AI.",
      category: "ai",
      technologies: ["Python", "Streamlit", "Groq API"],
      github: "https://github.com/GauravGhandat-23/AI-Powered-Log-Anomaly-Detector",
      live: null,
      image: "/project14.png",
    },
    {
      title: "Secure Steganography Suite",
      description: "Hides encrypted payloads within images using AES encryption and LSB steganography.",
      category: "tools",
      technologies: ["Python", "Streamlit", "PyCryptodome", "OpenCV"],
      github: "https://github.com/GauravGhandat-23",
      live: null,
      image: "/project15.png",
    },
  ];

  const filteredSecondary =
    filter === "all"
      ? secondaryProjects
      : secondaryProjects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className={`relative min-h-screen py-24 md:py-36 overflow-hidden transition-colors duration-300 ${
        isDark ? "text-white bg-[#03060E]" : "text-slate-900 bg-[#F7F9FC]"
      }`}
      aria-label="Work and Cybersecurity Projects"
    >
      <CosmicVortexCanvas variant="ambient" particleCount={300} />

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
            <span>(04)</span>
            <span className={isDark ? "text-white/60" : "text-slate-600"}>SELECTED WORK &amp; ENGINEERING</span>
          </div>
          <div className={`font-mono text-xs md:text-sm tracking-wider ${isDark ? "text-white/50" : "text-slate-500"}`}>
            PROJECTS // 15 DEFENSIVE SYSTEMS
          </div>
        </div>

        {/* ── GIANT HEADLINE ── */}
        <div className="mb-16">
          <h2 className="font-headline uppercase text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.88] select-none">
            <span className={`block transition-colors duration-300 ${isDark ? "text-white" : "text-slate-900"}`}>
              ENGINEERING SECURITY.
            </span>
            <span className="block text-outline">
              BUILDING RESILIENCE.
            </span>
          </h2>
        </div>

        {/* ── FEATURED ASYMMETRICAL PROJECT PANELS ── */}
        <div className="space-y-24 md:space-y-36 mb-28">
          {featuredProjects.map((project, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className={`rounded-[2.5rem] border backdrop-blur-2xl p-6 sm:p-8 md:p-12 shadow-2xl overflow-hidden transition-all duration-300 group relative ${
                  isDark
                    ? "bg-[#050914]/85 border-white/15 hover:border-cyan-500/40 hover:shadow-[0_20px_60px_rgba(0,212,255,0.08)]"
                    : "bg-white/95 border-slate-200 hover:border-cyan-500/50 hover:shadow-[0_20px_60px_rgba(8,145,178,0.12)] shadow-slate-900/5"
                }`}
              >
                {/* Subtle cyber background glow */}
                <div
                  className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-colors ${
                    isDark
                      ? "bg-cyan-500/5 group-hover:bg-cyan-500/10"
                      : "bg-cyan-500/8 group-hover:bg-cyan-500/15"
                  }`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Project Details Column */}
                  <div className={`lg:col-span-6 space-y-5 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-sm font-bold px-3 py-1 rounded-full border ${
                          isDark
                            ? "bg-cyan-950/40 border-cyan-500/30 text-cyan-400"
                            : "bg-cyan-50 border-cyan-300 text-cyan-800"
                        }`}
                      >
                        // {project.id}
                      </span>
                      <span
                        className={`font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full border ${
                          isDark
                            ? "bg-white/5 border-white/10 text-white/70"
                            : "bg-slate-100 border-slate-200 text-slate-700 font-medium"
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>

                    <h3
                      className={`font-headline text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[0.95] transition-colors ${
                        isDark
                          ? "text-white group-hover:text-cyan-300"
                          : "text-slate-950 group-hover:text-cyan-700"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`text-sm md:text-base leading-relaxed font-sans transition-colors ${
                        isDark ? "text-white/90" : "text-slate-600"
                      }`}
                    >
                      {project.description}
                    </p>

                    <div
                      className={`p-4 rounded-2xl border space-y-2 font-mono text-xs transition-colors ${
                        isDark
                          ? "bg-black/40 border-white/10"
                          : "bg-slate-50 border-slate-200"
                      }`}
                    >
                      <div className="flex items-baseline gap-2">
                        <span className={`uppercase tracking-wider min-w-[70px] ${isDark ? "text-white/50" : "text-slate-500 font-semibold"}`}>
                          ROLE:
                        </span>
                        <span className={`font-medium ${isDark ? "text-white" : "text-slate-900"}`}>
                          {project.role}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className={`uppercase tracking-wider min-w-[70px] ${isDark ? "text-white/50" : "text-slate-500 font-semibold"}`}>
                          IMPACT:
                        </span>
                        <span className={`font-semibold ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>
                          {project.impact}
                        </span>
                      </div>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className={`px-3 py-1 rounded-full text-xs font-mono border transition-colors ${
                            isDark
                              ? "bg-white/[0.04] border-white/10 text-white/90 group-hover:border-cyan-500/30"
                              : "bg-white border-slate-200 text-slate-800 shadow-xs group-hover:border-cyan-500/40 font-medium"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions / Links */}
                    <div className="pt-3 flex flex-wrap items-center gap-4">
                      {project.live && (
                        <motion.a
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.96 }}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-headline tracking-wider text-xs md:text-sm uppercase shadow-xl transition-colors group/btn ${
                            isDark
                              ? "bg-white text-black hover:bg-neutral-200"
                              : "bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/15"
                          }`}
                        >
                          <span>LIVE DEMO</span>
                          <ArrowUpRight size={15} className="stroke-[2.5] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </motion.a>
                      )}
                      <motion.a
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-headline tracking-wider text-xs md:text-sm uppercase transition-all border ${
                          isDark
                            ? "bg-black/50 text-white border-white/15 hover:bg-white/10 hover:border-white/30"
                            : "bg-white text-slate-800 border-slate-300 hover:bg-slate-100 shadow-xs"
                        }`}
                      >
                        <Github size={15} />
                        <span>VIEW REPOSITORY</span>
                      </motion.a>
                    </div>
                  </div>

                  {/* Visual Mockup Column */}
                  <div
                    className={`lg:col-span-6 relative rounded-2xl sm:rounded-3xl overflow-hidden border aspect-[16/10] flex items-center justify-center transition-all duration-500 shadow-2xl ${
                      isDark
                        ? "border-white/15 bg-black/50 group-hover:border-cyan-400/50"
                        : "border-slate-300 bg-slate-100 group-hover:border-cyan-500/50"
                    } ${isReversed ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Corner Reticles */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400/60 pointer-events-none" />
                    <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400/60 pointer-events-none" />
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400/60 pointer-events-none" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400/60 pointer-events-none" />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── CATALOGUE OF FULL DEFENSIVE PROJECTS ── */}
        <div
          className={`border-t pt-16 transition-colors duration-300 ${
            isDark ? "border-white/10" : "border-slate-200"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div>
              <span
                className={`font-mono text-xs tracking-widest uppercase font-semibold ${
                  isDark ? "text-cyan-400" : "text-cyan-700"
                }`}
              >
                SECURITY LAB REPOSITORY
              </span>
              <h3
                className={`font-headline text-3xl md:text-4xl uppercase mt-1 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                ALL 15 DEFENSIVE SYSTEMS &amp; TOOLS
              </h3>
            </div>

            {/* Filter Pills */}
            <div
              className={`flex items-center gap-2 p-1 rounded-full border ${
                isDark ? "bg-black/60 border-white/10" : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              {(["all", "soc", "ai", "tools"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-colors ${
                    filter === cat
                      ? isDark
                        ? "bg-white text-black font-semibold"
                        : "bg-slate-900 text-white font-semibold shadow-xs"
                      : isDark
                      ? "text-white/60 hover:text-white"
                      : "text-slate-600 hover:text-slate-900 font-medium"
                  }`}
                >
                  {cat === "all" ? "ALL" : cat === "soc" ? "SOC/SIEM" : cat === "ai" ? "AI SECURITY" : "TOOLS"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSecondary.map((p, pIdx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (pIdx % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className={`p-6 rounded-3xl border backdrop-blur-md flex flex-col justify-between transition-all duration-300 group ${
                  isDark
                    ? "bg-[#060B18]/80 border-white/15 hover:border-cyan-400/50 hover:bg-[#091126] hover:shadow-[0_12px_40px_rgba(0,212,255,0.08)]"
                    : "bg-white border-slate-200 hover:border-cyan-500/50 shadow-md shadow-slate-900/5 hover:shadow-xl"
                }`}
              >
                <div>
                  <div
                    className={`aspect-[16/9] rounded-2xl overflow-hidden mb-4 border relative ${
                      isDark ? "bg-black/50 border-white/10" : "bg-slate-100 border-slate-200"
                    }`}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 group-hover:brightness-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <h4
                    className={`font-headline text-xl uppercase tracking-wider mb-2 transition-colors ${
                      isDark
                        ? "text-white group-hover:text-cyan-300"
                        : "text-slate-900 group-hover:text-cyan-700"
                    }`}
                  >
                    {p.title}
                  </h4>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed font-sans mb-4 transition-colors ${
                      isDark ? "text-white/85" : "text-slate-600"
                    }`}
                  >
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-mono border ${
                          isDark
                            ? "bg-white/[0.06] text-white/90 border-white/10"
                            : "bg-slate-100 text-slate-800 border-slate-200 font-medium"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`pt-4 border-t flex items-center justify-between ${
                    isDark ? "border-white/10" : "border-slate-200"
                  }`}
                >
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs font-mono flex items-center gap-1.5 transition-colors font-semibold ${
                      isDark ? "text-cyan-400 hover:text-cyan-300" : "text-cyan-700 hover:text-cyan-900"
                    }`}
                  >
                    <Github size={14} />
                    <span>CODE</span>
                  </a>

                  {p.live ? (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs font-mono flex items-center gap-1.5 transition-colors px-3 py-1 rounded-full border ${
                        isDark
                          ? "text-white/90 hover:text-white bg-white/10 hover:bg-white/20 border-white/15"
                          : "text-slate-800 hover:text-black bg-slate-100 hover:bg-slate-200 border-slate-300 font-medium"
                      }`}
                    >
                      <span>LIVE</span>
                      <ArrowUpRight size={13} />
                    </motion.a>
                  ) : (
                    <span className={`text-[10px] font-mono ${isDark ? "text-white/40" : "text-slate-400"}`}>
                      LAB ENVIRONMENT
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkShowcase;
