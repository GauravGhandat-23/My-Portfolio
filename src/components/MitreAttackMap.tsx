
import { useState } from "react";
import { X } from "lucide-react";

// MITRE ATT&CK techniques relevant to SOC projects — clearly a demonstration
const tactics = [
  {
    id: "TA0001", name: "Initial Access", color: "#FF3366",
    techniques: [
      {
        id: "T1190", name: "Exploit Public-Facing Application",
        detection: "Monitor HTTP access logs for injection patterns, unusual URIs, and error spikes",
        logSource: "Apache Access Logs, WAF Logs, Cloudflare Logs",
        splQuery: 'index=web sourcetype=access_combined | where match(uri_query,"(?i)(union|select|drop)") | table _time src_ip uri_query status',
        response: "Block attacking IP, patch vulnerable application, enable WAF rules for SQLi/XSS",
      },
      {
        id: "T1566", name: "Phishing",
        detection: "Email gateway logs, suspicious link analysis, attachment sandboxing",
        logSource: "Email Gateway Logs, Proxy Logs",
        splQuery: 'index=email | where match(subject,"(?i)(urgent|invoice|account suspended)") | stats count by sender',
        response: "Quarantine email, block sender domain, user awareness notification",
      },
    ],
  },
  {
    id: "TA0002", name: "Execution", color: "#FF8C00",
    techniques: [
      {
        id: "T1059", name: "Command and Scripting Interpreter",
        detection: "Monitor for abnormal shell command execution, especially PowerShell with encoded commands",
        logSource: "Windows Event Logs (4688), Linux /var/log/audit",
        splQuery: 'index=wineventlog EventCode=4688 | where match(CommandLine,"(?i)(powershell.*-enc|-hidden|-bypass)") | table _time host CommandLine',
        response: "Isolate host, collect forensic image, check for persistence mechanisms",
      },
    ],
  },
  {
    id: "TA0003", name: "Persistence", color: "#8B5CF6",
    techniques: [
      {
        id: "T1136", name: "Create Account",
        detection: "Monitor for new local/domain account creation outside change management windows",
        logSource: "Windows Event Logs (4720, 4722), Active Directory Logs",
        splQuery: 'index=wineventlog EventCode=4720 | table _time dest_nt_domain src_user user | where NOT [search index=change_mgmt]',
        response: "Disable unauthorized account, review who created it, investigate compromised admin credentials",
      },
      {
        id: "T1053", name: "Scheduled Task/Job",
        detection: "Alert on new scheduled tasks, especially those running PowerShell or executables from temp directories",
        logSource: "Windows Event Logs (4698, 4702), Sysmon",
        splQuery: 'index=wineventlog EventCode=4698 | table _time host TaskName TaskContent',
        response: "Delete malicious task, trace creation context, identify how persistence was established",
      },
    ],
  },
  {
    id: "TA0006", name: "Credential Access", color: "#00D4FF",
    techniques: [
      {
        id: "T1110", name: "Brute Force",
        detection: "Threshold on failed login events per source IP within time window",
        logSource: "Linux /var/log/auth.log, Windows Event 4625, SSH Logs",
        splQuery: 'index=linux_auth action="failed_login" | stats count by src_ip | where count > 10 | sort -count',
        response: "Block source IP, enable account lockout policy, deploy fail2ban, review SSH config",
      },
      {
        id: "T1003", name: "OS Credential Dumping",
        detection: "Monitor for LSASS access, mimikatz signatures, SeDebugPrivilege use",
        logSource: "Windows Event Logs (4656, 4663, 10), Sysmon",
        splQuery: 'index=sysmon EventCode=10 TargetImage="*lsass.exe" | table _time host SourceImage',
        response: "Isolate host, enable Credential Guard, rotate all passwords on domain",
      },
    ],
  },
  {
    id: "TA0007", name: "Discovery", color: "#00FF88",
    techniques: [
      {
        id: "T1046", name: "Network Service Discovery",
        detection: "High-volume port scan from internal host, or single host contacting many ports",
        logSource: "Zeek Conn Logs, Firewall Logs, IDS Alerts",
        splQuery: 'index=zeek sourcetype=conn | stats dc(dest_port) as ports by src_ip | where ports > 50 | sort -ports',
        response: "Identify scanning host, check for compromise, block unauthorized scanning tools",
      },
    ],
  },
  {
    id: "TA0011", name: "Command & Control", color: "#00B4D8",
    techniques: [
      {
        id: "T1071.004", name: "DNS C2 Communication",
        detection: "High-entropy DNS queries, long subdomain names, high query frequency",
        logSource: "Zeek DNS Logs, DNS Resolver Logs",
        splQuery: 'index=zeek sourcetype=dns | eval qlen=len(query) | stats avg(qlen) count by src_ip | where avg(qlen) > 50',
        response: "Block domain at resolver, isolate host, capture memory for malware analysis",
      },
      {
        id: "T1071.001", name: "Web Protocol Beaconing",
        detection: "Regular interval outbound HTTP/S connections to unknown external IPs",
        logSource: "Proxy Logs, Zeek HTTP Logs, Firewall Logs",
        splQuery: 'index=zeek sourcetype=conn | stats count by src_ip dest_ip | where count > 20 | join dest_ip [search index=threatintel]',
        response: "Block C2 IP, isolate host, perform forensic investigation, full malware analysis",
      },
    ],
  },
  {
    id: "TA0010", name: "Exfiltration", color: "#FF8C00",
    techniques: [
      {
        id: "T1048", name: "Exfiltration Over Alternative Protocol",
        detection: "Large outbound DNS payload sizes, ICMP data exfiltration patterns",
        logSource: "DNS Logs, Firewall Logs, Network Flow Data",
        splQuery: 'index=zeek sourcetype=dns | eval payload_size=len(query)+len(answer) | stats sum(payload_size) by src_ip | where sum(payload_size) > 1000000',
        response: "Block exfiltration channel, quantify data loss, notify data protection officer if PII involved",
      },
    ],
  },
];

const TechniqueModal = ({ technique, tactic, onClose }: {
  technique: typeof tactics[0]["techniques"][0];
  tactic: typeof tactics[0];
  onClose: () => void;
}) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    style={{ background: "rgba(6,11,20,0.9)", backdropFilter: "blur(16px)" }}
    role="dialog"
    aria-modal="true"
    aria-label={`MITRE technique: ${technique.name}`}
    onClick={onClose}
  >
    <div
      className="w-full max-w-2xl rounded-2xl"
      style={{ background: "#0D1524", border: `1px solid ${tactic.color}40` }}
      onClick={e => e.stopPropagation()}
    >
      <div className="p-6 border-b flex items-start justify-between" style={{ borderColor: "rgba(0,212,255,0.1)" }}>
        <div>
          <div className="text-xs font-mono px-2 py-1 rounded mb-3 inline-block"
            style={{ background: `${tactic.color}15`, border: `1px solid ${tactic.color}30`, color: tactic.color }}>
            {tactic.name} — {tactic.id}
          </div>
          <h3 className="text-xl font-bold text-white">{technique.id}: {technique.name}</h3>
        </div>
        <button onClick={onClose} className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white"
          style={{ background: "rgba(255,255,255,0.05)" }} aria-label="Close">
          <X size={16} />
        </button>
      </div>

      <div className="p-6 space-y-5">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
          style={{ background: "rgba(255,140,0,0.06)", border: "1px solid rgba(255,140,0,0.2)", color: "#FF8C00" }}>
          ⚠️ Demonstration — Based on SOC lab projects and research
        </div>

        <div>
          <div className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-2">Detection Method</div>
          <p className="text-sm text-gray-300 leading-relaxed">{technique.detection}</p>
        </div>
        <div>
          <div className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-2">Log Source</div>
          <p className="text-sm text-gray-300">{technique.logSource}</p>
        </div>
        <div>
          <div className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-2">SPL Detection Query</div>
          <div className="rounded-lg p-3 font-mono text-xs leading-relaxed overflow-x-auto"
            style={{ background: "#060B14", border: "1px solid rgba(0,212,255,0.15)", color: "#00D4FF" }}>
            {technique.splQuery}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-2">Recommended Response</div>
          <p className="text-sm text-gray-300 leading-relaxed">{technique.response}</p>
        </div>
      </div>
    </div>
  </div>
);

const MitreAttackMap = () => {
  const [selected, setSelected] = useState<{ technique: typeof tactics[0]["techniques"][0]; tactic: typeof tactics[0] } | null>(null);

  return (
    <>
      {selected && <TechniqueModal technique={selected.technique} tactic={selected.tactic} onClose={() => setSelected(null)} />}

      <section id="mitre-map" className="py-20 relative"
        style={{ background: "linear-gradient(180deg, #0D1117 0%, #060B14 100%)" }}>
        <div className="container mx-auto px-4">
          <div className="mb-12 animate-on-scroll">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-mono"
              style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)", color: "#8B5CF6" }}>
              🎯 MITRE ATT&CK
            </div>
            <h2 className="section-title">MITRE ATT&CK <span>Threat Map</span></h2>
            <div className="section-title-line" />
            <p className="text-gray-500 text-sm mt-4">
              Click any technique to view detection method, log source, SPL query, and response.
              Based on SOC lab projects and research — not real-world incidents.
            </p>
          </div>

          {/* Overflow scroll container for mobile */}
          <div className="overflow-x-auto pb-4 animate-on-scroll">
            <div className="min-w-[700px]">
              {/* Tactic Headers */}
              <div className="grid gap-2 mb-2" style={{ gridTemplateColumns: `repeat(${tactics.length}, 1fr)` }}>
                {tactics.map(tactic => (
                  <div key={tactic.id} className="mitre-tactic-header text-xs" style={{
                    background: `${tactic.color}12`,
                    border: `1px solid ${tactic.color}35`,
                    color: tactic.color,
                  }}>
                    <div className="font-mono text-xs opacity-70">{tactic.id}</div>
                    <div className="font-bold text-xs mt-0.5 leading-tight">{tactic.name}</div>
                  </div>
                ))}
              </div>

              {/* Techniques Grid — align by column */}
              <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${tactics.length}, 1fr)` }}>
                {tactics.map(tactic => (
                  <div key={tactic.id} className="space-y-2">
                    {tactic.techniques.map(tech => (
                      <button
                        key={tech.id}
                        className="mitre-cell w-full text-left"
                        style={{ borderColor: `${tactic.color}20` }}
                        onClick={() => setSelected({ technique: tech, tactic })}
                        aria-label={`View details for ${tech.id}: ${tech.name}`}
                      >
                        <div className="text-xs font-mono opacity-60 mb-0.5">{tech.id}</div>
                        <div className="text-xs leading-tight">{tech.name}</div>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-gray-600 font-mono mt-6">
            Partial MITRE ATT&CK matrix — based on SOC lab simulations and Splunk detection projects
          </p>
        </div>
      </section>
    </>
  );
};

export default MitreAttackMap;
