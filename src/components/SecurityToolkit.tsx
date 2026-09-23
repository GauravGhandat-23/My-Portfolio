
import { Cpu } from "lucide-react";

// Security toolkit with text-based icons (no licensing issues)
const tools = [
  { name: "Splunk", icon: "📊", desc: "Enterprise SIEM", color: "#FF8C00", category: "SIEM" },
  { name: "Linux", icon: "🐧", desc: "Server Administration", color: "#FF8C00", category: "OS" },
  { name: "Windows Server", icon: "🖥️", desc: "Server Administration", color: "#00B4D8", category: "OS" },
  { name: "Active Directory", icon: "🏛️", desc: "Identity & Access", color: "#00B4D8", category: "IAM" },
  { name: "Python", icon: "🐍", desc: "Security Automation", color: "#00FF88", category: "Dev" },
  { name: "PowerShell", icon: "⚡", desc: "Windows Automation", color: "#00D4FF", category: "Dev" },
  { name: "Wireshark", icon: "🔍", desc: "Packet Analysis", color: "#8B5CF6", category: "Tools" },
  { name: "Nmap", icon: "📡", desc: "Network Scanning", color: "#8B5CF6", category: "Tools" },
  { name: "Burp Suite", icon: "🕷️", desc: "Web App Testing", color: "#FF3366", category: "Tools" },
  { name: "Metasploit", icon: "💣", desc: "Exploitation Framework", color: "#FF3366", category: "Tools" },
  { name: "Kali Linux", icon: "🗡️", desc: "Security Platform", color: "#8B5CF6", category: "OS" },
  { name: "AWS", icon: "☁️", desc: "Cloud & GuardDuty", color: "#FF8C00", category: "Cloud" },
  { name: "Zeek", icon: "🦓", desc: "Network Analysis", color: "#00D4FF", category: "Tools" },
  { name: "SQL", icon: "🗄️", desc: "Data Querying", color: "#00FF88", category: "Dev" },
  { name: "Git / GitHub", icon: "🔧", desc: "Version Control", color: "#6B7A99", category: "Dev" },
];

const SecurityToolkit = () => {
  return (
    <section id="security-toolkit" className="py-20 relative"
      style={{ background: "linear-gradient(180deg, #060B14 0%, #0D1117 100%)" }}>
      <div className="container mx-auto px-4">
        <div className="mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-mono"
            style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", color: "#00D4FF" }}>
            <Cpu size={12} /> SECURITY TOOLKIT
          </div>
          <h2 className="section-title">Security <span>Toolkit</span></h2>
          <div className="section-title-line" />
          <p className="text-gray-500 text-sm mt-4">Technologies and tools used across SOC operations, security analysis, and infrastructure management</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-on-scroll">
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className="group rounded-xl p-4 text-center transition-all duration-300 cursor-default"
              style={{
                background: "rgba(13,21,36,0.8)",
                border: `1px solid ${tool.color}18`,
                animationDelay: `${i * 40}ms`,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${tool.color}50`;
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 20px ${tool.color}15`;
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${tool.color}18`;
                (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                (e.currentTarget as HTMLDivElement).style.transform = "";
              }}
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {tool.icon}
              </div>
              <div className="text-sm font-semibold text-white mb-1">{tool.name}</div>
              <div className="text-xs text-gray-500 mb-2">{tool.desc}</div>
              <div className="inline-block text-xs px-2 py-0.5 rounded font-mono"
                style={{ background: `${tool.color}10`, border: `1px solid ${tool.color}25`, color: tool.color }}>
                {tool.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityToolkit;
