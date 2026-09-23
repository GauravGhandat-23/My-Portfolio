
import { useState } from "react";
import { Shield } from "lucide-react";

const labComponents = [
  {
    id: "kali",
    name: "Kali Linux",
    icon: "🗡️",
    role: "Attack Simulation Platform",
    desc: "Primary platform for security testing, tool execution, and vulnerability assessment in isolated lab environments.",
    tools: ["Nmap", "Metasploit", "Burp Suite", "Wireshark", "Aircrack-ng"],
    color: "#FF3366",
    type: "Attacker Node",
  },
  {
    id: "winserver",
    name: "Windows Server",
    icon: "🖥️",
    role: "Target / Monitor",
    desc: "Windows Server instance configured as an Active Directory domain controller for AD security lab scenarios.",
    tools: ["Active Directory", "Event Viewer", "PowerShell", "Sysmon"],
    color: "#00B4D8",
    type: "Infrastructure",
  },
  {
    id: "linuxserver",
    name: "Linux Server",
    icon: "🐧",
    role: "Web / SSH Target",
    desc: "Ubuntu/CentOS server running web services, SSH, and log-generating workloads for detection scenarios.",
    tools: ["Apache/Nginx", "SSH", "Auditd", "Rsyslog", "Fail2ban"],
    color: "#FF8C00",
    type: "Infrastructure",
  },
  {
    id: "ad",
    name: "Active Directory",
    icon: "🏛️",
    role: "IAM Platform",
    desc: "On-premise Active Directory domain for practicing user management, group policy, and AD attack/defend scenarios.",
    tools: ["AD DS", "Group Policy", "LDAP", "Kerberos", "BloodHound"],
    color: "#00D4FF",
    type: "IAM",
  },
  {
    id: "splunk",
    name: "Splunk SIEM",
    icon: "📊",
    role: "Security Monitoring",
    desc: "Splunk Enterprise free license deployment collecting logs from all lab components for detection and dashboarding.",
    tools: ["Splunk UF", "SPL", "Dashboards", "Alerts", "CIM"],
    color: "#FF8C00",
    type: "SIEM",
  },
  {
    id: "network",
    name: "Network Layer",
    icon: "🌐",
    role: "Network Infrastructure",
    desc: "Virtual network (VirtualBox/VMware) providing isolated lab networking with firewall rules and VLAN segmentation.",
    tools: ["pfSense", "Zeek", "Wireshark", "VirtualBox", "VMware"],
    color: "#8B5CF6",
    type: "Network",
  },
];

const SecurityLab = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const selectedComponent = labComponents.find(c => c.id === selected);

  return (
    <section id="security-lab" className="py-20 relative"
      style={{ background: "linear-gradient(180deg, #060B14 0%, #0D1117 100%)" }}>
      <div className="container mx-auto px-4">
        <div className="mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-mono"
            style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", color: "#00D4FF" }}>
            <Shield size={12} /> SECURITY LAB
          </div>
          <h2 className="section-title">My <span>Security Lab</span></h2>
          <div className="section-title-line" />
          <p className="text-gray-500 text-sm mt-4">
            ⚠️ Lab Environment — A personal cybersecurity lab for practicing detection, analysis, and incident response.
            Click any component to see details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Architecture Visual */}
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="rounded-xl p-6" style={{ background: "rgba(13,21,36,0.8)", border: "1px solid rgba(0,212,255,0.15)" }}>
              <div className="text-xs font-mono text-gray-500 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: "#00FF88" }} />
                Lab Architecture — Click components to explore
              </div>

              {/* Architecture Flow */}
              <div className="flex flex-col items-center gap-3">

                {/* Top Row: Kali */}
                <button
                  onClick={() => setSelected(selected === "kali" ? null : "kali")}
                  className="rounded-xl px-6 py-3 transition-all duration-200 text-center"
                  style={{
                    background: selected === "kali" ? "rgba(255,51,102,0.15)" : "rgba(255,51,102,0.06)",
                    border: `1px solid ${selected === "kali" ? "#FF3366" : "rgba(255,51,102,0.25)"}`,
                    transform: selected === "kali" ? "scale(1.02)" : "scale(1)",
                  }}
                  aria-label="Kali Linux — Attack Simulation Platform"
                >
                  <div className="text-xl mb-1">🗡️</div>
                  <div className="text-xs font-bold text-white font-mono">Kali Linux</div>
                  <div className="text-xs text-gray-500 mt-0.5">Attack Platform</div>
                </button>

                {/* Arrow down */}
                <div className="w-0.5 h-6" style={{ background: "linear-gradient(to bottom, rgba(255,51,102,0.5), rgba(0,212,255,0.5))" }} />

                {/* Network */}
                <button
                  onClick={() => setSelected(selected === "network" ? null : "network")}
                  className="rounded-xl px-8 py-3 w-full max-w-sm transition-all duration-200 text-center"
                  style={{
                    background: selected === "network" ? "rgba(139,92,246,0.15)" : "rgba(139,92,246,0.06)",
                    border: `1px solid ${selected === "network" ? "#8B5CF6" : "rgba(139,92,246,0.25)"}`,
                  }}
                  aria-label="Network Layer"
                >
                  <div className="text-xl mb-1">🌐</div>
                  <div className="text-xs font-bold text-white font-mono">Network Layer (Virtual)</div>
                  <div className="text-xs text-gray-500 mt-0.5">pfSense / Zeek / Wireshark</div>
                </button>

                <div className="w-0.5 h-6" style={{ background: "linear-gradient(to bottom, rgba(139,92,246,0.5), rgba(0,212,255,0.5))" }} />

                {/* Middle Row: Servers */}
                <div className="flex gap-4 w-full justify-center">
                  {[
                    { id: "winserver", icon: "🖥️", name: "Windows Server", sub: "AD Domain Controller", color: "#00B4D8" },
                    { id: "linuxserver", icon: "🐧", name: "Linux Server", sub: "Web / SSH Target", color: "#FF8C00" },
                    { id: "ad", icon: "🏛️", name: "Active Directory", sub: "IAM Platform", color: "#00D4FF" },
                  ].map(node => (
                    <button
                      key={node.id}
                      onClick={() => setSelected(selected === node.id ? null : node.id)}
                      className="flex-1 rounded-xl p-3 transition-all duration-200 text-center max-w-32"
                      style={{
                        background: selected === node.id ? `${node.color}15` : `${node.color}06`,
                        border: `1px solid ${selected === node.id ? node.color : `${node.color}30`}`,
                      }}
                      aria-label={node.name}
                    >
                      <div className="text-lg mb-1">{node.icon}</div>
                      <div className="text-xs font-bold text-white font-mono leading-tight">{node.name}</div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-tight">{node.sub}</div>
                    </button>
                  ))}
                </div>

                {/* Arrow down to SIEM */}
                <div className="flex items-end justify-center gap-8 w-full">
                  <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, rgba(0,212,255,0.4), rgba(255,140,0,0.8))" }} />
                </div>

                {/* SIEM */}
                <button
                  onClick={() => setSelected(selected === "splunk" ? null : "splunk")}
                  className="rounded-xl px-8 py-4 w-full max-w-sm transition-all duration-200 text-center"
                  style={{
                    background: selected === "splunk" ? "rgba(255,140,0,0.15)" : "rgba(255,140,0,0.08)",
                    border: `2px solid ${selected === "splunk" ? "#FF8C00" : "rgba(255,140,0,0.35)"}`,
                    boxShadow: selected === "splunk" ? "0 0 20px rgba(255,140,0,0.2)" : "",
                  }}
                  aria-label="Splunk SIEM — Security Monitoring"
                >
                  <div className="text-2xl mb-1">📊</div>
                  <div className="text-sm font-bold text-white font-mono">Splunk SIEM</div>
                  <div className="text-xs mt-0.5" style={{ color: "#FF8C00" }}>Security Monitoring & Detection</div>
                </button>
              </div>
            </div>
          </div>

          {/* Component Detail Panel */}
          <div className="animate-on-scroll" style={{ animationDelay: "150ms" }}>
            <div className="cyber-card h-full">
              {selectedComponent ? (
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="text-3xl">{selectedComponent.icon}</div>
                    <div>
                      <h3 className="text-base font-bold text-white">{selectedComponent.name}</h3>
                      <span className="text-xs font-mono px-2 py-0.5 rounded"
                        style={{ background: `${selectedComponent.color}12`, border: `1px solid ${selectedComponent.color}30`, color: selectedComponent.color }}>
                        {selectedComponent.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">{selectedComponent.desc}</p>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-mono">Tools / Components</div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedComponent.tools.map(t => <span key={t} className="cyber-badge text-xs">{t}</span>)}
                    </div>
                  </div>
                  <div className="mt-5 p-3 rounded-lg"
                    style={{ background: "rgba(255,140,0,0.04)", border: "1px solid rgba(255,140,0,0.15)" }}>
                    <p className="text-xs text-gray-500">⚠️ Lab Environment — All activity in isolated virtual network</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="text-4xl mb-4">🔬</div>
                  <h3 className="text-sm font-bold text-white mb-2">Select a Component</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Click any lab component in the architecture diagram to see its role, tools, and description.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityLab;
