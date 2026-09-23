
import { useState } from "react";
import { Briefcase, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "System Administrator",
    org: "Bits & Bytes Services Pvt. Ltd.",
    period: "June 2025 – Present",
    location: "Nashik, India",
    badge: "CURRENT",
    badgeColor: "#00FF88",
    color: "#00D4FF",
    responsibilities: [
      "Windows Server & Linux server administration in production environment",
      "Active Directory management — users, groups, GPOs, and access control",
      "LAN/WAN/VPN/Wi-Fi troubleshooting and network maintenance",
      "Server deployment, configuration, and storage/backup management",
      "Security hardening — patch management, access control, audit logging",
      "ITIL-based incident management and escalation procedures",
      "Firewall configuration and perimeter security management",
      "System monitoring, alerting, and capacity planning",
    ],
  },
  {
    type: "intern",
    title: "Cybersecurity & Ethical Hacking Intern",
    org: "Edureka",
    period: "Feb 2024 – June 2024",
    location: "Remote",
    badge: "INTERNSHIP",
    badgeColor: "#8B5CF6",
    color: "#8B5CF6",
    responsibilities: [
      "Vulnerability assessment on web applications and network systems",
      "OWASP Top 10 testing — SQL Injection, XSS, authentication vulnerabilities",
      "Network reconnaissance using Nmap, Shodan, and OSINT techniques",
      "Linux hardening and SSH key authentication configuration",
      "SOC alert triage and incident investigation in simulated environments",
      "Web application penetration testing with Burp Suite",
      "Security reporting and documentation of findings",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Engineering — Computer Engineering",
    institution: "Brahma Valley College of Engineering & Research Institute",
    period: "2021–22 to 2024–25",
    grade: "B.E. Graduated",
    icon: "🎓",
  },
  {
    degree: "Maharashtra State Board — Higher Secondary Education",
    institution: "Progressive Science and Commerce Junior College",
    period: "2019 – 2021",
    grade: "HSC",
    icon: "📚",
  },
  {
    degree: "Maharashtra State Board — Secondary Education",
    institution: "Deolali High School",
    period: "2018 – 2019",
    grade: "SSC",
    icon: "🏫",
  },
];

const ExperienceTimeline = () => {
  const [expandedExp, setExpandedExp] = useState<number | null>(0);
  const [showEdu, setShowEdu] = useState(false);

  return (
    <section id="experience" className="py-20 relative"
      style={{ background: "linear-gradient(180deg, #0D1117 0%, #060B14 100%)" }}>
      <div className="container mx-auto px-4">
        <div className="mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-mono"
            style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", color: "#00D4FF" }}>
            <Briefcase size={12} /> EXPERIENCE & EDUCATION
          </div>
          <h2 className="section-title">Career <span>Timeline</span></h2>
          <div className="section-title-line" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase size={16} className="text-cyber-light" />
              <h3 className="text-base font-bold text-white uppercase tracking-wider">Work Experience</h3>
            </div>

            <div className="space-y-4">
              {experiences.map((exp, i) => (
                <div key={i} className="animate-on-scroll" style={{ animationDelay: `${i * 100}ms` }}>
                  <div
                    className="rounded-xl overflow-hidden transition-all duration-300"
                    style={{
                      background: "rgba(13,21,36,0.85)",
                      border: `1px solid ${exp.color}25`,
                    }}
                  >
                    {/* Header */}
                    <button
                      className="w-full p-5 text-left"
                      onClick={() => setExpandedExp(expandedExp === i ? null : i)}
                      aria-expanded={expandedExp === i}
                      aria-label={`${expandedExp === i ? "Collapse" : "Expand"} ${exp.title} details`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold font-mono px-2 py-0.5 rounded"
                              style={{ background: `${exp.badgeColor}12`, border: `1px solid ${exp.badgeColor}35`, color: exp.badgeColor }}>
                              {exp.badge}
                            </span>
                            <span className="text-xs text-gray-600 font-mono">{exp.period}</span>
                          </div>
                          <h4 className="text-base font-bold text-white">{exp.title}</h4>
                          <p className="text-sm mt-0.5" style={{ color: exp.color }}>{exp.org}</p>
                          <p className="text-xs text-gray-600 mt-0.5 font-mono">{exp.location}</p>
                        </div>
                        <div className="ml-2 text-gray-500">
                          {expandedExp === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                      </div>
                    </button>

                    {/* Expanded Responsibilities */}
                    {expandedExp === i && (
                      <div className="px-5 pb-5 pt-0 border-t" style={{ borderColor: `${exp.color}15` }}>
                        <div className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-mono mt-4">Responsibilities</div>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((r, ri) => (
                            <li key={ri} className="flex items-start gap-2 text-sm text-gray-300">
                              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: exp.color }} />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={16} className="text-cyber-light" />
              <h3 className="text-base font-bold text-white uppercase tracking-wider">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="cyber-card animate-on-scroll" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.15)" }}>
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-mono text-cyber-light mb-1">{edu.period}</div>
                      <h4 className="text-sm font-bold text-white leading-snug">{edu.degree}</h4>
                      <p className="text-xs text-gray-400 mt-1">{edu.institution}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Extra Info Card */}
              <div className="cyber-card animate-on-scroll" style={{ animationDelay: "300ms" }}>
                <div className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-3">Continuous Learning</div>
                <div className="flex flex-wrap gap-2">
                  {["Splunk Enterprise", "MITRE ATT&CK", "Blue Team Labs", "TryHackMe", "Security+", "SOC Analyst Path"].map(item => (
                    <span key={item} className="cyber-badge text-xs">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
