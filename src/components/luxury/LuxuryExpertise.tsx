import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

interface ExpertiseItem {
  number: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  deliverables: string[];
}

export const LuxuryExpertise = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const expertiseList: ExpertiseItem[] = [
    {
      number: "01",
      title: "SECURITY OPERATIONS",
      summary: "24/7 telemetry monitoring, alert triage, shift escalation, and ITIL-aligned defense orchestration.",
      description:
        "Execution of disciplined SOC workflows including triage prioritization, true/false positive verification, severity escalation matrices, and maintaining unbroken situational awareness across hybrid cloud and on-premise perimeters.",
      technologies: ["SOC Workflow", "ITIL ITSM", "Alert Correlation", "Shift Handoff", "ServiceNow", "Runbooks"],
      deliverables: ["Alert Triage Matrices", "Shift Escalation Playbooks", "SLA Incident Containment"],
    },
    {
      number: "02",
      title: "THREAT DETECTION",
      summary: "Adversary behavioral analytics mapped against the MITRE ATT&CK framework and IOC feeds.",
      description:
        "Engineered detection rules targeting brute-force attempts (T1110), DNS tunneling (T1071), suspicious PowerShell execution, privilege escalation anomalies, and adversary command-and-control beaconing signatures.",
      technologies: ["MITRE ATT&CK", "Sysmon", "Threat Intel Feeds", "IOC Correlation", "Behavioral Heuristics"],
      deliverables: ["Custom Detection Rules", "Adversary TTP Mapping", "Zero-False-Negative Tuning"],
    },
    {
      number: "03",
      title: "NETWORK SECURITY",
      summary: "Deep packet inspection, perimeter firewall zoning, VLAN segmentation, and traffic forensics.",
      description:
        "Comprehensive packet dissection using Wireshark and Zeek to isolate exfiltration streams, rogue protocols, unauthorized DNS tunnels, and anomalous TCP/UDP handshakes across segmented corporate subnets.",
      technologies: ["Wireshark", "Zeek", "TCP/IP Suite", "Firewall ACLs", "VLAN Segmentation", "PyShark"],
      deliverables: ["PCAP Forensics Reports", "Network Isolation Baselines", "Traffic Protocol Signatures"],
    },
    {
      number: "04",
      title: "INCIDENT RESPONSE",
      summary: "Rapid containment protocols, evidence preservation, host isolation, and post-incident recovery.",
      description:
        "Structured execution of containment procedures to halt active adversary movement. Preserving volatile forensic evidence, terminating unauthorized processes, enforcing quarantine ACLs, and drafting comprehensive root-cause analysis.",
      technologies: ["Incident Containment", "Host Isolation", "Forensic Artifacts", "Remediation", "Post-Mortems"],
      deliverables: ["Containment Runbooks", "RCA Documentation", "Remediation Verification"],
    },
    {
      number: "05",
      title: "VULNERABILITY ASSESSMENT",
      summary: "Attack surface minimization, host discovery, CVE triage, and proactive patch hygiene.",
      description:
        "Targeted host discovery and network reconnaissance with Nmap, identification of outdated services, web application vulnerability mapping against OWASP Top 10, and risk-weighted patch deployment prioritization.",
      technologies: ["Nmap", "Burp Suite", "CVE Databases", "OWASP Top 10", "Attack Surface Auditing"],
      deliverables: ["Asset Vulnerability Reports", "Remediation Roadmaps", "Security Posture Audits"],
    },
    {
      number: "06",
      title: "SIEM & LOG ANALYSIS",
      summary: "Enterprise log ingestion, complex SPL query authorship, and high-visibility SOC dashboards.",
      description:
        "Centralizing and parsing multi-source log streams across Apache, Linux syslogs, Windows Security Events, DNS, and AWS GuardDuty. Crafting sophisticated Splunk SPL search queries and establishing calibrated threshold alerts.",
      technologies: ["Splunk Enterprise", "SPL Syntax", "Log Ingestion", "Dashboard Design", "Threshold Alerts"],
      deliverables: ["Production SOC Dashboards", "Automated Correlation Rules", "Historical Log Audits"],
    },
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="expertise"
      className="py-28 md:py-40 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--border-subtle)]"
      aria-label="Areas of Cybersecurity Expertise"
    >
      {/* ── Section Label & Title ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
        <div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-[1px] bg-[#D9381E]" />
            <span className="luxury-section-label !mb-0">
              02 / DOMAINS &amp; DISCIPLINE
            </span>
          </div>
          <h2 className="luxury-section-title mt-3">
            AREAS OF EXPERTISE
          </h2>
        </div>
        <p className="text-xs md:text-sm font-sans text-[var(--text-secondary)] max-w-md leading-relaxed">
          Refined defensive capabilities developed through production systems administration, rigorous lab simulations, and certified security coursework.
        </p>
      </div>

      {/* ── Minimalist Horizontal Rows with Thin Separators ── */}
      <div className="border-t border-[var(--border-subtle)]">
        {expertiseList.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.number}
              className="border-b border-[var(--border-subtle)] transition-colors duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-8 md:py-10 flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12">
                  <span className="font-mono text-xs tracking-[0.2em] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                    {item.number}
                  </span>
                  <span className="font-headline text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[var(--text-primary)] font-light group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                  </span>
                </div>

                <div className="flex items-center gap-6">
                  <span className="hidden lg:block text-xs font-sans text-[var(--text-secondary)] max-w-xs text-right truncate">
                    {item.summary}
                  </span>
                  <div className="w-8 h-8 rounded-none border border-[var(--border-subtle)] group-hover:border-[var(--text-primary)] flex items-center justify-center text-[var(--text-primary)] transition-colors">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </div>
              </button>

              {/* Expandable Editorial Detail */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden pb-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-4 pl-0 md:pl-16">
                      <div className="md:col-span-7 space-y-4">
                        <p className="text-sm md:text-base text-[var(--text-secondary)] font-sans leading-relaxed">
                          {item.description}
                        </p>
                        <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono tracking-wider text-[var(--text-secondary)]">
                          {item.deliverables.map((del) => (
                            <span key={del} className="flex items-center gap-1.5 text-[var(--text-primary)]">
                              <span className="w-1 h-1 rounded-full bg-[#D9381E]" />
                              {del}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="md:col-span-5 space-y-3">
                        <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[var(--text-secondary)]">
                          TECHNICAL PROFICIENCIES
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-mono border border-[var(--border-subtle)] text-[var(--text-primary)] bg-[var(--bg-surface)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LuxuryExpertise;

