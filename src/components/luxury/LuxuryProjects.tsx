import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

interface FeaturedProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live?: string | null;
}

interface SecondaryProject {
  title: string;
  description: string;
  category: "soc" | "ai" | "tools";
  categoryLabel: string;
  technologies: string[];
  image: string;
  github: string;
  live?: string | null;
}

export const LuxuryProjects = () => {
  const [filter, setFilter] = useState<"all" | "soc" | "ai" | "tools">("all");

  const featuredProjects: FeaturedProject[] = [
    {
      id: "01",
      title: "UNIFIED LOG ANALYSIS & THREAT DETECTION",
      subtitle: "SOC & SIEM TELEMETRY ENGINE",
      description:
        "Centralized and parsed multi-source security logs including DNS, HTTP, SSH, Apache, and AWS GuardDuty. Engineered complex SPL detection rules for brute-force attacks, DNS tunneling, lateral movement, and web exploitation with automated threshold alerts.",
      technologies: ["Splunk Enterprise", "SPL", "Zeek", "Linux", "AWS GuardDuty", "Sysmon"],
      image: "/project11.png",
      github: "https://github.com/GauravGhandat-23",
      live: null,
    },
    {
      id: "02",
      title: "AI-POWERED PHISHING DETECTION SYSTEM",
      subtitle: "DEFENSIVE MACHINE LEARNING INTERCEPTION",
      description:
        "Real-time threat interception system employing NLP algorithms and machine learning classifiers to dissect inbound emails, URL entropy, lexical anomalies, and header metadata to quarantine malicious campaigns before payload execution.",
      technologies: ["Python", "Streamlit", "scikit-learn", "Pandas", "NLTK"],
      image: "/project1.JPEG",
      github: "https://github.com/GauravGhandat-23/AI-Powered-Phishing-Detection-System",
      live: "https://ai-powered-phishing-detection-system-ples7i6bq2tzkaguiykzzt.streamlit.app/",
    },
    {
      id: "03",
      title: "ADVANCED THREAT INTELLIGENCE PLATFORM",
      subtitle: "GLOBAL TELEMETRY & IOC CORRELATION",
      description:
        "Unified threat correlation console ingesting live global threat feeds, classifying indicators of compromise (IOCs), and visualizing threat actor campaigns with automated risk scoring and actionable defensive recommendations.",
      technologies: ["Python", "Streamlit", "Groq API", "Pandas", "Matplotlib"],
      image: "/project2.png",
      github: "https://github.com/GauravGhandat-23/Advanced-Threat-Intelligence-Platform",
      live: "https://advanced-threat-intelligence-platform-mk7obgez2n4p59zcvziiso.streamlit.app/",
    },
    {
      id: "04",
      title: "MALWARE TRAFFIC ANALYSIS DASHBOARD",
      subtitle: "DEEP PACKET INSPECTION & PCAP FORENSICS",
      description:
        "Deep packet inspection and behavioral analysis suite. Ingests raw PCAP and CSV network traces, extracts protocol statistical signatures via PyShark, and applies trained ML models to isolate Command & Control (C2) beaconing and data exfiltration.",
      technologies: ["Python", "Streamlit", "PyShark", "Scikit-learn", "Pandas", "Wireshark"],
      image: "/project5.png",
      github: "https://github.com/GauravGhandat-23/AI-Powered-Malware-Traffic-Analysis-Dashboard",
      live: "https://ai-powered-malware-traffic-analysis-dashboard-5unhlmqws8fkwirx.streamlit.app/",
    },
  ];

  const secondaryProjects: SecondaryProject[] = [
    {
      title: "Interactive Network Security Assessment",
      description: "Automated network scanning and CVE vulnerability assessment dashboard.",
      category: "tools",
      categoryLabel: "SECURITY TOOLS",
      technologies: ["Python", "Streamlit", "Nmap", "Scapy"],
      image: "/project3.png",
      github: "https://github.com/GauravGhandat-23/Interactive-Network-Security-Assessment-Tool",
      live: "https://interactive-network-security-assessment-tool-7b96v5p54rffeqp8.streamlit.app/",
    },
    {
      title: "Defensive Cyber Attack Simulation Lab",
      description: "Interactive simulation modeling multi-vector adversary scenarios and mitigation tactics.",
      category: "soc",
      categoryLabel: "SOC LAB",
      technologies: ["Python", "Streamlit", "MITRE ATT&CK"],
      image: "/project4.png",
      github: "https://github.com/GauravGhandat-23/Interactive-Cyber-Attack-Simulation-Tool",
      live: "https://interactive-cyber-attack-simulation-tool-q2p8g52y84krhgsp4h.streamlit.app/",
    },
    {
      title: "AI Cybersecurity Threat Forecaster",
      description: "Predictive threat forecasting using time-series ML modeling on threat telemetry.",
      category: "ai",
      categoryLabel: "AI SECURITY",
      technologies: ["Python", "Streamlit", "scikit-learn", "Groq API"],
      image: "/project6.png",
      github: "https://github.com/GauravGhandat-23/AI-Powered-Cybersecurity-Threat-Intelligence-Forecaster",
      live: "https://ai-powered-cybersecurity-threat-intelligence-forecaster-e3.streamlit.app/",
    },
    {
      title: "Cloud Threat Intelligence System",
      description: "Surveillance console for AWS/Azure environments detecting IAM credential abuse.",
      category: "soc",
      categoryLabel: "CLOUD SOC",
      technologies: ["Python", "Streamlit", "Boto3", "Groq API"],
      image: "/project7.png",
      github: "https://github.com/GauravGhandat-23/AI-Powered-Cloud-Threat-Intelligence-System",
      live: "https://ai-powered-cloud-threat-intelligence-system-89p2hps2kkwj6r2d2c.streamlit.app/",
    },
    {
      title: "Cyber Resilience & DR Planner",
      description: "Calculates RTO/RPO metrics and generates automated incident recovery playbooks.",
      category: "soc",
      categoryLabel: "RESILIENCE",
      technologies: ["Python", "Streamlit", "ITIL", "Pandas"],
      image: "/project8.png",
      github: "https://github.com/GauravGhandat-23/Cyber-Resilience-and-Disaster-Recovery-Planning-Tool",
      live: "https://cyber-resilience-and-disaster-recovery-planning-tool-399vuxb.streamlit.app/",
    },
    {
      title: "Dark Web Threat Intelligence",
      description: "Correlates compromised credentials, onion forum chatter, and paste dumps.",
      category: "tools",
      categoryLabel: "THREAT INTEL",
      technologies: ["Python", "Streamlit", "BeautifulSoup", "Groq API"],
      image: "/project9.png",
      github: "https://github.com/GauravGhandat-23/Dark-Web-Threat-Intelligence-Platform",
      live: "https://dark-web-threat-intelligence-platform-x5ptwhn7p7kefzsfvgw9.streamlit.app/",
    },
    {
      title: "Quantum-Resistant AI Cybersecurity",
      description: "AI-driven threat intelligence utilizing post-quantum cryptography concepts.",
      category: "ai",
      categoryLabel: "AI RESEARCH",
      technologies: ["Python", "Streamlit", "Groq API"],
      image: "/project10.png",
      github: "https://github.com/GauravGhandat-23/Quantum-Resistant-AI-Powered-Cybersecurity",
      live: "https://quantum-resistant-ai-powered-cybersecurity-9hos7tozfxhke8sglct.streamlit.app/",
    },
    {
      title: "AI-Powered Log Anomaly Detector",
      description: "Discovers hidden outliers and anomalous sequences in system syslog records using AI.",
      category: "ai",
      categoryLabel: "AI LOGS",
      technologies: ["Python", "Streamlit", "Groq API"],
      image: "/project14.png",
      github: "https://github.com/GauravGhandat-23/AI-Powered-Log-Anomaly-Detector",
      live: null,
    },
    {
      title: "Secure Steganography Suite",
      description: "Hides encrypted payloads within images using AES encryption and LSB steganography.",
      category: "tools",
      categoryLabel: "CRYPTOGRAPHY",
      technologies: ["Python", "Streamlit", "PyCryptodome", "OpenCV"],
      image: "/project15.png",
      github: "https://github.com/GauravGhandat-23",
      live: null,
    },
  ];

  const filteredSecondary =
    filter === "all"
      ? secondaryProjects
      : secondaryProjects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="py-28 md:py-40 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--border-subtle)]"
      aria-label="Selected Cybersecurity Work"
    >
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 md:mb-28">
        <div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-[1px] bg-[#D9381E]" />
            <span className="luxury-section-label !mb-0">
              03 / ENGINEERING &amp; IMPLEMENTATION
            </span>
          </div>
          <h2 className="luxury-section-title mt-3">
            SELECTED WORK
          </h2>
        </div>
        <p className="text-xs md:text-sm font-sans text-[var(--text-secondary)] max-w-md leading-relaxed">
          Production systems, detection engineering pipelines, and investigative security platforms built with uncompromising architectural rigor.
        </p>
      </div>

      {/* ── Featured Projects (Luxury Split-Screen Layout) ── */}
      <div className="space-y-32 md:space-y-44 mb-32">
        {featuredProjects.map((project, idx) => {
          const isReversed = idx % 2 === 1;
          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Media Column (Large, Cinematic Rectangular Treatment) */}
              <div
                className={`lg:col-span-7 ${
                  isReversed ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-2 group shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top grayscale-[20%] contrast-[104%] group-hover:scale-[1.02] group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Narrative & Details Column */}
              <div
                className={`lg:col-span-5 space-y-6 ${
                  isReversed ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#D9381E] font-semibold">
                    {project.id}
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[var(--text-secondary)]">
                    {project.subtitle}
                  </span>
                </div>

                <h3 className="font-headline text-3xl sm:text-4xl uppercase tracking-tight text-[var(--text-primary)] font-light leading-[1.02]">
                  {project.title}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] font-sans leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-mono border border-[var(--border-subtle)] text-[var(--text-primary)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="pt-4 flex items-center gap-6">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="luxury-btn-primary"
                    >
                      <span>LIVE SYSTEM</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxury-link group"
                  >
                    <span>SOURCE CODE</span>
                    <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* ── Additional Defensive Projects (Clean Horizontal List) ── */}
      <div className="pt-20 border-t border-[var(--border-subtle)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div>
            <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[var(--text-secondary)]">
              SECURITY LAB ARCHIVE
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl uppercase tracking-tight text-[var(--text-primary)] mt-1">
              ADDITIONAL DEFENSIVE SYSTEMS
            </h3>
          </div>

          {/* Minimalist Filter Navigation */}
          <div className="flex items-center gap-2 border border-[var(--border-subtle)] p-1">
            {(["all", "soc", "ai", "tools"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 text-[10px] font-mono tracking-[0.18em] uppercase transition-colors cursor-pointer ${
                  filter === cat
                    ? "bg-[var(--text-primary)] text-[var(--bg-main)] font-semibold"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {cat === "all" ? "ALL" : cat === "soc" ? "SOC/SIEM" : cat === "ai" ? "AI SECURITY" : "TOOLS"}
              </button>
            ))}
          </div>
        </div>

        {/* Minimal Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSecondary.map((p) => (
            <div
              key={p.title}
              className="group border border-[var(--border-subtle)] hover:border-[var(--text-primary)] p-6 bg-[var(--bg-surface)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden mb-5 border border-[var(--border-subtle)] bg-[#F8F8F7]">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale-[25%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[var(--text-secondary)] mb-1.5">
                  {p.categoryLabel}
                </div>

                <h4 className="font-headline text-lg uppercase tracking-tight text-[var(--text-primary)] mb-2 font-medium leading-snug">
                  {p.title}
                </h4>

                <p className="text-xs text-[var(--text-secondary)] font-sans leading-relaxed mb-4">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.technologies.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-link"
                >
                  <span>CODE</span>
                  <ArrowUpRight size={12} />
                </a>

                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-primary)] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>LIVE</span>
                    <ArrowUpRight size={12} />
                  </a>
                ) : (
                  <span className="text-[10px] text-[var(--text-secondary)]">LAB ONLY</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryProjects;

