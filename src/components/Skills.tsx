
import { useState } from "react";
import { X, Code2, Shield, Terminal, Server, Cpu, Activity, Network } from "lucide-react";

interface Skill {
  name: string;
  proficiency: number; // 1-5
  description: string;
  usage: string;
  projects: string[];
  related: string[];
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "siem",
    title: "SIEM & Monitoring",
    icon: <Activity size={20} />,
    color: "#00D4FF",
    skills: [
      { name: "Splunk Enterprise", proficiency: 5, description: "Enterprise SIEM platform for security monitoring and log aggregation.", usage: "Configured dashboards, created SPL queries for threat detection, and built real-time alerting rules.", projects: ["Unified Log Analysis", "SOC Dashboards"], related: ["SPL", "Dashboards", "Alerting"] },
      { name: "SPL Queries", proficiency: 5, description: "Splunk Processing Language for searching and correlating security events.", usage: "Wrote complex SPL queries for brute-force detection, anomaly identification, and log correlation.", projects: ["Unified Log Analysis", "SOC Dashboards"], related: ["Splunk", "Log Analysis"] },
      { name: "Log Analysis", proficiency: 4, description: "Parsing and analyzing logs from multiple sources (SSH, HTTP, DNS, Windows).", usage: "Analyzed DNS logs, Apache access logs, Linux auth logs, and AWS GuardDuty findings.", projects: ["Unified Log Analysis"], related: ["Splunk", "Zeek", "Linux"] },
      { name: "SOC Dashboards", proficiency: 4, description: "Interactive monitoring dashboards for real-time security visibility.", usage: "Built attack trend, geographic threat, and authentication anomaly dashboards in Splunk.", projects: ["SOC Dashboards"], related: ["Splunk", "SPL", "Cloudflare Logs"] },
      { name: "Alerting & Correlation", proficiency: 4, description: "Creating threshold-based and correlation-based alert rules.", usage: "Configured multi-source correlation alerts for incident escalation.", projects: ["Unified Log Analysis"], related: ["Splunk", "SIEM", "SPL"] },
    ],
  },
  {
    id: "soc",
    title: "SOC Operations",
    icon: <Shield size={20} />,
    color: "#FF8C00",
    skills: [
      { name: "Alert Triage", proficiency: 4, description: "Prioritizing and classifying security alerts by severity and impact.", usage: "Performed alert triage during internship — distinguished true positives from false positives.", projects: ["SOC Internship", "Edureka Internship"], related: ["SIEM", "Incident Response"] },
      { name: "Incident Response", proficiency: 4, description: "Following structured workflows to detect, contain, and recover from incidents.", usage: "Applied incident response procedures during lab environments and job role.", projects: ["Case Studies", "Security Lab"], related: ["MITRE ATT&CK", "Containment", "Forensics"] },
      { name: "Threat Detection", proficiency: 4, description: "Identifying indicators of compromise and attack patterns in log data.", usage: "Detected brute-force, DNS tunneling, and beaconing using SPL queries and Splunk.", projects: ["Unified Log Analysis"], related: ["SPL", "MITRE ATT&CK", "Zeek"] },
      { name: "Log Correlation", proficiency: 4, description: "Cross-referencing logs from multiple sources to identify attack chains.", usage: "Correlated SSH, DNS, HTTP, and cloud logs to build end-to-end attack timelines.", projects: ["Unified Log Analysis", "SOC Dashboards"], related: ["Splunk", "SPL"] },
    ],
  },
  {
    id: "tools",
    title: "Security Tools",
    icon: <Terminal size={20} />,
    color: "#8B5CF6",
    skills: [
      { name: "Wireshark", proficiency: 4, description: "Network protocol analyzer for deep packet inspection.", usage: "Captured and analyzed network traffic for malware indicators and protocol anomalies.", projects: ["Network Analysis", "Security Blue Team Cert"], related: ["Network Security", "PCAP", "Protocols"] },
      { name: "Nmap", proficiency: 4, description: "Network scanner for host discovery and service/version enumeration.", usage: "Performed network scanning during vulnerability assessment and OSINT tasks.", projects: ["Edureka Internship", "VA Labs"], related: ["Reconnaissance", "Port Scanning", "OSINT"] },
      { name: "Burp Suite", proficiency: 3, description: "Web application security testing proxy.", usage: "Intercepted and analyzed HTTP requests for OWASP Top 10 vulnerability testing.", projects: ["Edureka Internship"], related: ["Web Security", "OWASP", "HTTP"] },
      { name: "Metasploit", proficiency: 3, description: "Exploitation framework for penetration testing.", usage: "Used in controlled lab environments for understanding attack techniques.", projects: ["Ethical Hacking Labs"], related: ["Exploitation", "Kali Linux", "Payloads"] },
      { name: "Kali Linux", proficiency: 4, description: "Security-focused Linux distribution with 600+ tools.", usage: "Primary OS for security testing, tool execution, and lab environments.", projects: ["Security Lab", "Edureka Internship"], related: ["Linux", "Nmap", "Metasploit"] },
    ],
  },
  {
    id: "systems",
    title: "Systems & Infrastructure",
    icon: <Server size={20} />,
    color: "#00B4D8",
    skills: [
      { name: "Windows Server", proficiency: 4, description: "Microsoft Windows Server administration and configuration.", usage: "Managing Windows Server at Bits & Bytes — deployment, patch management, access control.", projects: ["Bits & Bytes Sysadmin"], related: ["Active Directory", "PowerShell", "ITIL"] },
      { name: "Linux Administration", proficiency: 4, description: "Linux server administration, scripting, and hardening.", usage: "Administering Linux servers, configuring SSH, applying security hardening.", projects: ["Bits & Bytes Sysadmin", "Security Lab"], related: ["Bash", "SSH", "Kali Linux"] },
      { name: "Active Directory", proficiency: 4, description: "Microsoft Active Directory for identity and access management.", usage: "Managing users, groups, GPOs, and applying access control in AD environment.", projects: ["Bits & Bytes Sysadmin", "Security Lab"], related: ["Windows Server", "IAM", "PowerShell"] },
      { name: "TCP/IP & Networking", proficiency: 4, description: "Core networking protocols and enterprise network architecture.", usage: "Troubleshooting LAN/WAN/VPN/Wi-Fi and understanding network traffic flows.", projects: ["Bits & Bytes Sysadmin", "Network Labs"], related: ["DNS", "VPN", "Wireshark"] },
    ],
  },
  {
    id: "automation",
    title: "Automation",
    icon: <Code2 size={20} />,
    color: "#00FF88",
    skills: [
      { name: "Python", proficiency: 4, description: "General-purpose programming for security automation and tooling.", usage: "Built 15+ cybersecurity tools including IDS, threat detection, phishing detection.", projects: ["AI Security Projects"], related: ["Scripting", "Automation", "ML"] },
      { name: "PowerShell", proficiency: 3, description: "Windows automation and administrative scripting.", usage: "Automating Windows Server tasks, user management, and security policy enforcement.", projects: ["Bits & Bytes Sysadmin"], related: ["Windows Server", "Active Directory"] },
      { name: "Shell Scripting", proficiency: 3, description: "Bash/shell scripting for Linux automation.", usage: "Automating log rotation, backup tasks, and system hardening scripts.", projects: ["Security Lab", "Linux Labs"], related: ["Linux", "Bash", "Automation"] },
      { name: "SQL", proficiency: 3, description: "Structured Query Language for database querying.", usage: "Used in security projects for data analysis and threat data storage.", projects: ["AI Security Projects"], related: ["Database", "Data Analysis"] },
    ],
  },
  {
    id: "frameworks",
    title: "Security Frameworks",
    icon: <Cpu size={20} />,
    color: "#FF3366",
    skills: [
      { name: "MITRE ATT&CK", proficiency: 4, description: "Framework for classifying adversary tactics, techniques, and procedures.", usage: "Mapped detected threats to MITRE techniques in case studies and SPL queries.", projects: ["Case Studies", "Unified Log Analysis"], related: ["Threat Intelligence", "SOC", "Incident Response"] },
      { name: "OWASP Top 10", proficiency: 4, description: "Top 10 most critical web application security risks.", usage: "Tested applications for OWASP Top 10 during internship — SQLi, XSS, auth bypass.", projects: ["Edureka Internship"], related: ["Web Security", "Burp Suite", "SQLi"] },
      { name: "ITIL", proficiency: 3, description: "IT service management framework for incident and change management.", usage: "Applying ITIL-based incident management in current System Administrator role.", projects: ["Bits & Bytes Sysadmin"], related: ["Incident Management", "ITSM"] },
    ],
  },
];

const SkillDetailModal = ({ skill, categoryColor, onClose }: { skill: Skill; categoryColor: string; onClose: () => void }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    style={{ background: "rgba(6,11,20,0.85)", backdropFilter: "blur(12px)" }}
    role="dialog"
    aria-modal="true"
    aria-label={`${skill.name} skill details`}
    onClick={onClose}
  >
    <div
      className="w-full max-w-lg rounded-2xl p-6 relative"
      style={{ background: "#0D1524", border: `1px solid ${categoryColor}40` }}
      onClick={e => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
        style={{ background: "rgba(255,255,255,0.05)" }}
        aria-label="Close skill details"
      >
        <X size={16} />
      </button>

      <div className="flex items-center gap-1 mb-4">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className="w-5 h-1.5 rounded-full" style={{ background: i <= skill.proficiency ? categoryColor : "rgba(255,255,255,0.1)" }} />
        ))}
        <span className="ml-2 text-xs text-gray-500 font-mono">
          {skill.proficiency === 5 ? "Expert" : skill.proficiency === 4 ? "Proficient" : skill.proficiency === 3 ? "Competent" : "Developing"}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white mb-4">{skill.name}</h3>

      <div className="space-y-4">
        <div>
          <div className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-mono">What It Is</div>
          <p className="text-sm text-gray-300">{skill.description}</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-mono">How I Use It</div>
          <p className="text-sm text-gray-300">{skill.usage}</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-mono">Related Projects</div>
          <div className="flex flex-wrap gap-2">
            {skill.projects.map(p => <span key={p} className="cyber-badge-violet text-xs">{p}</span>)}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-mono">Related Technologies</div>
          <div className="flex flex-wrap gap-2">
            {skill.related.map(r => <span key={r} className="cyber-badge text-xs">{r}</span>)}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<{ skill: Skill; color: string } | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <>
      {selectedSkill && (
        <SkillDetailModal
          skill={selectedSkill.skill}
          categoryColor={selectedSkill.color}
          onClose={() => setSelectedSkill(null)}
        />
      )}

      <section id="skills" className="py-20 relative"
        style={{ background: "linear-gradient(180deg, #060B14 0%, #0D1117 100%)" }}>
        <div className="container mx-auto px-4">
          <div className="mb-12 animate-on-scroll">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-mono"
              style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", color: "#00D4FF" }}>
              <Network size={12} /> SKILL MATRIX
            </div>
            <h2 className="section-title">Cybersecurity <span>Skill Matrix</span></h2>
            <div className="section-title-line" />
            <p className="text-gray-500 text-sm mt-4">Click any skill to see details, usage, and related projects</p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 animate-on-scroll">
            <button
              onClick={() => setActiveCategory(null)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
              style={activeCategory === null ? {
                background: "rgba(0,212,255,0.15)", border: "1px solid rgba(0,212,255,0.4)", color: "#00D4FF"
              } : {
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#6B7A99"
              }}
            >
              All
            </button>
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id === activeCategory ? null : cat.id)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
                style={activeCategory === cat.id ? {
                  background: `${cat.color}18`, border: `1px solid ${cat.color}50`, color: cat.color
                } : {
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#6B7A99"
                }}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Skill Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {skillCategories
              .filter(cat => !activeCategory || cat.id === activeCategory)
              .map((category, idx) => (
                <div
                  key={category.id}
                  className="cyber-card animate-on-scroll"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: `${category.color}12`, border: `1px solid ${category.color}30`, color: category.color }}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{category.title}</h3>
                      <p className="text-xs text-gray-600 font-mono">{category.skills.length} skills</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {category.skills.map(skill => (
                      <button
                        key={skill.name}
                        onClick={() => setSelectedSkill({ skill, color: category.color })}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-all duration-200 group"
                        style={{ background: `${category.color}06`, border: `1px solid ${category.color}15` }}
                        aria-label={`View details for ${skill.name}`}
                      >
                        <div className="flex items-center gap-2">
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map(i => (
                              <div key={i} className="w-1 h-1 rounded-full"
                                style={{ background: i <= skill.proficiency ? category.color : "rgba(255,255,255,0.1)" }} />
                            ))}
                          </div>
                          <span className="text-sm text-white group-hover:text-white/90 transition-colors">{skill.name}</span>
                        </div>
                        <span className="text-xs text-gray-600 group-hover:text-cyber-light transition-colors">›</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
