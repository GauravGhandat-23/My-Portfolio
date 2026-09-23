
import { useState } from "react";
import { X, AlertTriangle, Shield, Activity, Search, Clock } from "lucide-react";

// All case studies clearly labeled as "Lab / Project Simulation"
const caseStudies = [
  {
    id: "cs1",
    title: "SSH Brute Force Detection",
    subtitle: "Credential Access — Lab Simulation",
    severity: "HIGH",
    severityColor: "#FF3366",
    status: ["DETECTED", "INVESTIGATED", "CONTAINED"],
    attack: "Multiple failed SSH authentication attempts from a single source IP in a compressed timeframe, exceeding normal thresholds.",
    dataSource: "Linux SSH Logs (/var/log/auth.log)",
    detection: "SPL threshold correlation: index=linux_auth action=failed_login | stats count by src_ip | where count > 10",
    mitre: { id: "T1110", tactic: "Credential Access", technique: "Brute Force — Password Guessing" },
    investigation: [
      "Identify source IP from failed auth events",
      "Review authentication attempt timestamps and frequency",
      "Check targeted user accounts",
      "Correlate with network logs for source context",
      "Determine if any successful logins followed failures",
    ],
    response: [
      "Block source IP at firewall level",
      "Reset credentials for targeted accounts",
      "Review all successful logins post-incident",
      "Harden SSH configuration (fail2ban, key-auth only)",
      "Document in incident ticket and update detection rules",
    ],
    splQuery: 'index=linux_auth action="failed_login" | stats count by src_ip, user | where count > 10 | sort -count',
    logSource: "Linux /var/log/auth.log",
    label: "Lab Environment — Not a Real Incident",
  },
  {
    id: "cs2",
    title: "DNS Tunneling Detection",
    subtitle: "Command & Control — Lab Simulation",
    severity: "HIGH",
    severityColor: "#FF8C00",
    status: ["DETECTED", "INVESTIGATED", "CONTAINED"],
    attack: "Unusually long DNS subdomain queries with high entropy payloads detected from an internal host, indicating potential data exfiltration or C2 communication.",
    dataSource: "DNS Logs, Zeek DNS Logs",
    detection: "SPL entropy query on DNS request length: index=zeek sourcetype=dns | eval qlen=len(query) | stats avg(qlen) by src_ip | where avg(qlen) > 50",
    mitre: { id: "T1071.004", tactic: "Command & Control", technique: "Application Layer Protocol — DNS" },
    investigation: [
      "Identify host generating high-volume/long DNS queries",
      "Analyze DNS query entropy and subdomain patterns",
      "Check destination domain reputation",
      "Review process responsible for DNS queries",
      "Correlate with network traffic for exfiltration indicators",
    ],
    response: [
      "Block suspicious DNS domains at resolver/firewall",
      "Isolate affected host from network",
      "Perform memory forensics on suspicious process",
      "Update DNS filtering rules",
      "Escalate to senior analyst for malware analysis",
    ],
    splQuery: 'index=zeek sourcetype=dns | eval qlen=len(query) | stats count avg(qlen) by src_ip | where avg(qlen) > 50 | sort -count',
    logSource: "Zeek DNS Logs / Splunk Stream",
    label: "Lab Environment — Not a Real Incident",
  },
  {
    id: "cs3",
    title: "Web Application Attack Detection",
    subtitle: "Initial Access — Lab Simulation",
    severity: "MEDIUM",
    severityColor: "#FF8C00",
    status: ["DETECTED", "INVESTIGATED", "CONTAINED"],
    attack: "Suspicious HTTP POST requests with SQL injection payloads detected in Apache access logs, targeting the login endpoint.",
    dataSource: "Apache Access Logs, HTTP Logs",
    detection: "SPL pattern match on URI for injection keywords: index=web sourcetype=access_combined | search uri_path=\"*admin*\" OR uri_query=\"*UNION*OR*1=1*\"",
    mitre: { id: "T1190", tactic: "Initial Access", technique: "Exploit Public-Facing Application" },
    investigation: [
      "Extract source IP and targeted endpoint from access logs",
      "Review HTTP request payloads and user-agent strings",
      "Check for successful authentication following attack",
      "Identify affected application and input validation gaps",
      "Correlate with WAF logs for additional context",
    ],
    response: [
      "Block attacking IP at WAF/firewall",
      "Review web application for SQL injection vulnerabilities",
      "Apply input sanitization patches",
      "Enable WAF rules for SQLi/XSS patterns",
      "Notify development team for code review",
    ],
    splQuery: 'index=web sourcetype=access_combined | where match(uri_query, "(?i)(union|select|1=1|drop|--|script)") | table _time src_ip uri_path uri_query status',
    logSource: "Apache Access Logs / Cloudflare Logs",
    label: "Lab Environment — Not a Real Incident",
  },
  {
    id: "cs4",
    title: "Malware Beaconing Detection",
    subtitle: "Command & Control — Lab Simulation",
    severity: "CRITICAL",
    severityColor: "#FF3366",
    status: ["DETECTED", "INVESTIGATED", "CONTAINED"],
    attack: "Regular interval network connections from an internal host to an unknown external IP, with consistent 30-second beacon timing suggesting C2 malware activity.",
    dataSource: "Zeek Connection Logs, Firewall Logs",
    detection: "SPL interval analysis: index=zeek sourcetype=conn | stats count by dest_ip | where count > 20 | join dest_ip [search index=threatintel]",
    mitre: { id: "T1071.001", tactic: "Command & Control", technique: "Application Layer Protocol — Web Protocols" },
    investigation: [
      "Identify source host and destination IP from network logs",
      "Measure inter-connection intervals for regularity (beaconing)",
      "Check destination IP against threat intelligence feeds",
      "Identify process making outbound connections (EDR/SIEM)",
      "Determine scope — lateral movement, other infected hosts",
    ],
    response: [
      "Immediately isolate infected host from network",
      "Block C2 IP at perimeter firewall and DNS",
      "Collect forensic image of affected system",
      "Submit malware sample for analysis",
      "Conduct enterprise-wide scan for indicators",
    ],
    splQuery: 'index=zeek sourcetype=conn dest_port=443 | stats count min(_time) as first max(_time) as last range(_time) as duration by src_ip dest_ip | where count > 20 AND (duration/count) < 35',
    logSource: "Zeek Connection Logs / Palo Alto Firewall Logs",
    label: "Lab Environment — Not a Real Incident",
  },
];

const severityBadge = (severity: string, color: string) => (
  <span className="text-xs font-bold font-mono px-2 py-0.5 rounded"
    style={{ background: `${color}15`, border: `1px solid ${color}40`, color }}>
    ● {severity}
  </span>
);

const StatusBadge = ({ status }: { status: string }) => (
  <span className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded"
    style={{ background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.25)", color: "#00FF88" }}>
    <span>✓</span> {status}
  </span>
);

const CaseStudyModal = ({ cs, onClose }: { cs: typeof caseStudies[0]; onClose: () => void }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
    style={{ background: "rgba(6,11,20,0.9)", backdropFilter: "blur(16px)" }}
    role="dialog"
    aria-modal="true"
    aria-label={`Case study: ${cs.title}`}
    onClick={onClose}
  >
    <div
      className="w-full max-w-2xl rounded-2xl my-4"
      style={{ background: "#0D1524", border: `2px solid ${cs.severityColor}30` }}
      onClick={e => e.stopPropagation()}
    >
      {/* Modal Header */}
      <div className="p-6 border-b" style={{ borderColor: "rgba(0,212,255,0.1)" }}>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {severityBadge(cs.severity, cs.severityColor)}
              <span className="text-xs text-gray-500 font-mono">MITRE {cs.mitre.id}</span>
            </div>
            <h3 className="text-xl font-bold text-white">{cs.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{cs.subtitle}</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white"
            style={{ background: "rgba(255,255,255,0.05)" }} aria-label="Close case study">
            <X size={16} />
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {cs.status.map(s => <StatusBadge key={s} status={s} />)}
        </div>
      </div>

      <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
        {/* Simulation Label */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
          style={{ background: "rgba(255,140,0,0.06)", border: "1px solid rgba(255,140,0,0.2)", color: "#FF8C00" }}>
          ⚠️ {cs.label}
        </div>

        {/* Attack / Data Source */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-2">Attack Description</div>
            <p className="text-sm text-gray-300 leading-relaxed">{cs.attack}</p>
          </div>
          <div>
            <div className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-2">Data Source</div>
            <p className="text-sm text-gray-300">{cs.dataSource}</p>
            <div className="mt-3">
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-2">MITRE ATT&CK</div>
              <div className="text-xs rounded px-2 py-1.5 font-mono"
                style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)", color: "#8B5CF6" }}>
                {cs.mitre.id} — {cs.mitre.technique}
              </div>
            </div>
          </div>
        </div>

        {/* SPL Query */}
        <div>
          <div className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-2">Detection Query (SPL)</div>
          <div className="rounded-lg p-3 font-mono text-xs leading-relaxed overflow-x-auto"
            style={{ background: "#060B14", border: "1px solid rgba(0,212,255,0.15)", color: "#00D4FF" }}>
            {cs.splQuery}
          </div>
        </div>

        {/* Investigation & Response */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-3">Investigation Steps</div>
            <ol className="space-y-1.5">
              {cs.investigation.map((step, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                  <span className="font-mono font-bold flex-shrink-0" style={{ color: "#00D4FF" }}>{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <div className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-3">Response Actions</div>
            <ol className="space-y-1.5">
              {cs.response.map((step, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                  <span className="font-mono font-bold flex-shrink-0" style={{ color: "#00FF88" }}>{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CaseStudies = () => {
  const [selected, setSelected] = useState<typeof caseStudies[0] | null>(null);

  return (
    <>
      {selected && <CaseStudyModal cs={selected} onClose={() => setSelected(null)} />}

      <section id="case-studies" className="py-20 relative"
        style={{ background: "linear-gradient(180deg, #060B14 0%, #0D1117 100%)" }}>
        <div className="container mx-auto px-4">
          <div className="mb-12 animate-on-scroll">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-mono"
              style={{ background: "rgba(255,51,102,0.08)", border: "1px solid rgba(255,51,102,0.2)", color: "#FF3366" }}>
              <Search size={12} /> SECURITY CASE STUDIES
            </div>
            <h2 className="section-title">Security <span>Case Studies</span></h2>
            <div className="section-title-line" />
            <p className="text-gray-500 text-sm mt-4">
              ⚠️ All scenarios are documented lab/project simulations and demonstrate SOC investigation methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <div key={cs.id}
                className="cyber-card group cursor-pointer animate-on-scroll"
                style={{ animationDelay: `${i * 100}ms` }}
                onClick={() => setSelected(cs)}
                role="button"
                tabIndex={0}
                aria-label={`View case study: ${cs.title}`}
                onKeyDown={e => e.key === "Enter" && setSelected(cs)}
              >
                <div className="flex items-start justify-between mb-4">
                  {severityBadge(cs.severity, cs.severityColor)}
                  <span className="text-xs font-mono text-gray-600">{cs.mitre.id}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-cyber-light transition-colors">
                  {cs.title}
                </h3>
                <p className="text-xs text-gray-500 mb-4 font-mono">{cs.subtitle}</p>
                <p className="text-sm text-gray-400 leading-relaxed mb-5 line-clamp-2">{cs.attack}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cs.status.map(s => <StatusBadge key={s} status={s} />)}
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-gray-600">{cs.logSource}</span>
                  <span className="text-cyber-light group-hover:underline">View Case Study →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
