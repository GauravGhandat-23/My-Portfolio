
import { Network } from "lucide-react";

// SVG-based animated network diagram
const NetworkVisualization = () => {
  const nodes = [
    { id: "internet", label: "INTERNET", icon: "🌐", x: 50, y: 8, color: "#FF8C00" },
    { id: "firewall", label: "FIREWALL", icon: "🛡️", x: 50, y: 22, color: "#FF3366" },
    { id: "router", label: "ROUTER", icon: "📡", x: 50, y: 37, color: "#00B4D8" },
    { id: "switch", label: "SWITCH", icon: "🔌", x: 50, y: 52, color: "#00D4FF" },
    { id: "servers", label: "SERVERS", icon: "🖥️", x: 20, y: 67, color: "#8B5CF6" },
    { id: "endpoints", label: "ENDPOINTS", icon: "💻", x: 50, y: 67, color: "#6B7A99" },
    { id: "cloud", label: "CLOUD", icon: "☁️", x: 80, y: 67, color: "#00B4D8" },
    { id: "siem", label: "SPLUNK SIEM", icon: "📊", x: 50, y: 85, color: "#FF8C00" },
  ];

  const edges = [
    { from: "internet", to: "firewall", label: "All Traffic", color: "#FF8C00" },
    { from: "firewall", to: "router", label: "Filtered", color: "#FF3366" },
    { from: "router", to: "switch", label: "LAN", color: "#00B4D8" },
    { from: "switch", to: "servers", label: "Server VLAN", color: "#8B5CF6" },
    { from: "switch", to: "endpoints", label: "Client VLAN", color: "#00D4FF" },
    { from: "switch", to: "cloud", label: "Cloud Traffic", color: "#00B4D8" },
    { from: "servers", to: "siem", label: "Win/Linux Logs", color: "#8B5CF6" },
    { from: "endpoints", to: "siem", label: "Endpoint Logs", color: "#00D4FF" },
    { from: "cloud", to: "siem", label: "AWS GuardDuty", color: "#00B4D8" },
    { from: "firewall", to: "siem", label: "Firewall Logs", color: "#FF3366" },
  ];

  const logSources = [
    { label: "DNS", color: "#00D4FF" },
    { label: "HTTP/S", color: "#00B4D8" },
    { label: "SSH", color: "#8B5CF6" },
    { label: "Auth Events", color: "#FF3366" },
    { label: "Firewall", color: "#FF8C00" },
    { label: "Cloud Logs", color: "#00FF88" },
  ];

  return (
    <section id="network-visualization" className="py-20 relative"
      style={{ background: "linear-gradient(180deg, #0D1117 0%, #060B14 100%)" }}>
      <div className="container mx-auto px-4">
        <div className="mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-mono"
            style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", color: "#00D4FF" }}>
            <Network size={12} /> NETWORK VISUALIZATION
          </div>
          <h2 className="section-title">Enterprise Network <span>Security Architecture</span></h2>
          <div className="section-title-line" />
          <p className="text-gray-500 text-sm mt-4">
            Visualizing how security logs flow from network sources to the SIEM for monitoring and detection
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* SVG Network Diagram */}
          <div className="animate-on-scroll">
            <div className="rounded-xl p-4" style={{ background: "rgba(13,21,36,0.8)", border: "1px solid rgba(0,212,255,0.15)" }}>
              <svg viewBox="0 0 100 100" className="w-full" style={{ maxHeight: "500px" }} role="img" aria-label="Enterprise network security architecture diagram">
                <defs>
                  <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                    <polygon points="0 0, 6 3, 0 6" fill="rgba(0,212,255,0.5)" />
                  </marker>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
                    <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>

                {/* Edges */}
                {[
                  { x1: 50, y1: 12, x2: 50, y2: 20, color: "#FF8C00" },
                  { x1: 50, y1: 25, x2: 50, y2: 34, color: "#FF3366" },
                  { x1: 50, y1: 40, x2: 50, y2: 49, color: "#00B4D8" },
                  { x1: 50, y1: 55, x2: 25, y2: 64, color: "#8B5CF6" },
                  { x1: 50, y1: 55, x2: 50, y2: 64, color: "#00D4FF" },
                  { x1: 50, y1: 55, x2: 75, y2: 64, color: "#00B4D8" },
                  { x1: 22, y1: 70, x2: 45, y2: 83, color: "#8B5CF6" },
                  { x1: 50, y1: 70, x2: 50, y2: 83, color: "#00D4FF" },
                  { x1: 78, y1: 70, x2: 55, y2: 83, color: "#00B4D8" },
                  { x1: 50, y1: 25, x2: 50, y2: 83, color: "rgba(255,51,102,0.3)", dasharray: "1,2" },
                ].map((edge, i) => (
                  <line
                    key={i}
                    x1={edge.x1} y1={edge.y1} x2={edge.x2} y2={edge.y2}
                    stroke={edge.color}
                    strokeWidth="0.4"
                    strokeOpacity="0.6"
                    strokeDasharray={edge.dasharray || ""}
                    markerEnd="url(#arrowhead)"
                    filter="url(#glow)"
                  />
                ))}

                {/* Animated data packets */}
                {[
                  { x1: 50, y1: 12, x2: 50, y2: 83, dur: "2s", color: "#00D4FF" },
                  { x1: 22, y1: 68, x2: 48, y2: 83, dur: "3s", color: "#8B5CF6", delay: "1s" },
                  { x1: 78, y1: 68, x2: 52, y2: 83, dur: "2.5s", color: "#00B4D8", delay: "0.5s" },
                ].map((packet, i) => (
                  <circle key={i} r="0.8" fill={packet.color} filter="url(#glow)">
                    <animateMotion
                      path={`M${packet.x1},${packet.y1} L${packet.x2},${packet.y2}`}
                      dur={packet.dur}
                      begin={packet.delay || "0s"}
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}

                {/* Nodes */}
                {nodes.map(node => (
                  <g key={node.id}>
                    <rect
                      x={node.x - 8} y={node.y - 3}
                      width="16" height="6"
                      rx="1.5"
                      fill={`${node.color}12`}
                      stroke={node.color}
                      strokeWidth="0.4"
                      strokeOpacity="0.6"
                      filter="url(#glow)"
                    />
                    <text x={node.x} y={node.y + 1} textAnchor="middle" fontSize="1.8"
                      fill={node.color} fontFamily="monospace" fontWeight="bold">
                      {node.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* Log Sources & Info */}
          <div className="space-y-6 animate-on-scroll" style={{ animationDelay: "150ms" }}>
            <div className="cyber-card">
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Log Sources → SIEM</h3>
              <div className="space-y-3">
                {logSources.map(src => (
                  <div key={src.label} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: src.color, boxShadow: `0 0 6px ${src.color}` }} />
                    <div className="flex-1 h-1.5 rounded-full overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.05)" }}>
                      <div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${src.color}, transparent)`,
                          width: `${Math.random() * 40 + 50}%`,
                          animation: "gradient-x 3s ease infinite",
                        }}
                      />
                    </div>
                    <span className="text-xs font-mono text-gray-400 w-24 text-right">{src.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="cyber-card">
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Architecture Notes</h3>
              <div className="space-y-2 text-xs text-gray-400 leading-relaxed">
                <p>• All network traffic passes through the <span className="text-cyber-light">firewall</span> before entering the internal network</p>
                <p>• The <span className="text-cyber-light">SIEM (Splunk)</span> aggregates logs from all network layers</p>
                <p>• Log correlation enables detection of <span className="text-cyber-light">lateral movement</span> and <span className="text-cyber-light">C2 communication</span></p>
                <p>• <span className="text-cyber-light">AWS GuardDuty</span> findings are ingested into Splunk via log forwarding</p>
                <p>• Network segmentation (VLANs) limits blast radius of compromise</p>
              </div>
            </div>

            <div className="cyber-card">
              <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Detection Coverage</h3>
              <div className="flex flex-wrap gap-2">
                {["Brute Force", "DNS Tunneling", "C2 Beaconing", "Lateral Movement", "Data Exfiltration", "Web Attacks", "Privilege Escalation"].map(item => (
                  <span key={item} className="cyber-badge text-xs">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkVisualization;
