
import { useState } from "react";
import { Clock, ChevronDown, ChevronUp } from "lucide-react";

// Incident timeline — labeled as simulation
const timelineEvents = [
  { time: "09:21", severity: "warn", title: "Suspicious Login Detected", description: "User account 'admin' login from unrecognized IP address (185.234.x.x). Geo-location mismatch — source is outside normal operating region.", action: "Splunk alert triggered", color: "#FF8C00" },
  { time: "09:22", severity: "alert", title: "Multiple Authentication Failures Observed", description: "22 failed login attempts in 60 seconds from same source IP. Failed SSH authentication threshold exceeded.", action: "Alert escalated to SOC queue", color: "#FF3366" },
  { time: "09:24", severity: "detect", title: "Source IP Identified & Correlated", description: "Source IP 185.234.xx.xx identified. Threat intel lookup: IP flagged in 3 public threat feeds. Historical activity: mass scanning.", action: "IOC enrichment complete", color: "#8B5CF6" },
  { time: "09:26", severity: "alert", title: "Related Network Activity Correlated", description: "Zeek logs show outbound connection attempts to port 4444. Pattern matches known C2 framework signatures. DNS queries to unusual subdomains.", action: "Network isolation decision initiated", color: "#FF3366" },
  { time: "09:28", severity: "warn", title: "Alert Escalated to Senior Analyst", description: "Incident ticket #SOC-1042 created. Severity: HIGH. All evidence collected: log extracts, IP reputation, network captures submitted.", action: "IR runbook activated", color: "#FF8C00" },
  { time: "09:31", severity: "success", title: "Incident Contained", description: "Source IP blocked at firewall and WAF. Affected user account password reset and MFA enforced. SSH key-based authentication enforced on all servers.", action: "Containment confirmed", color: "#00FF88" },
  { time: "09:35", severity: "success", title: "Investigation Completed", description: "Root cause identified: compromised credentials via phishing email (unrelated prior incident). No data exfiltration confirmed. Post-incident report filed.", action: "Ticket #SOC-1042 closed", color: "#00D4FF" },
];

const IncidentTimeline = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="incident-timeline" className="py-20 relative"
      style={{ background: "linear-gradient(180deg, #060B14 0%, #0D1117 100%)" }}>
      <div className="container mx-auto px-4">
        <div className="mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-mono"
            style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", color: "#00D4FF" }}>
            <Clock size={12} /> SOC INVESTIGATION TIMELINE
          </div>
          <h2 className="section-title">Incident <span>Investigation Timeline</span></h2>
          <div className="section-title-line" />
          <p className="text-gray-500 text-sm mt-4">
            ⚠️ Interactive SOC Simulation — This timeline demonstrates incident investigation methodology.
            Based on lab environment scenarios.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {timelineEvents.map((event, i) => (
            <div key={i} className="flex gap-4 animate-on-scroll" style={{ animationDelay: `${i * 80}ms` }}>

              {/* Timeline column */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-all duration-300 text-xs font-mono font-bold z-10 relative"
                  style={{
                    borderColor: event.color,
                    background: expanded === i ? event.color : "#060B14",
                    color: expanded === i ? "#060B14" : event.color,
                    boxShadow: expanded === i ? `0 0 16px ${event.color}60` : `0 0 6px ${event.color}30`,
                  }}
                  aria-label={`Expand event at ${event.time}`}
                  aria-expanded={expanded === i}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
                {i < timelineEvents.length - 1 && (
                  <div className="w-0.5 h-12 mt-1 flex-shrink-0 transition-all duration-300"
                    style={{
                      background: `linear-gradient(to bottom, ${event.color}60, ${timelineEvents[i + 1].color}20)`,
                    }} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-mono font-bold" style={{ color: event.color }}>{event.time}</span>
                  <div className="h-px flex-1" style={{ background: `${event.color}20` }} />
                </div>
                <div
                  className="rounded-xl p-4 cursor-pointer transition-all duration-200"
                  style={{
                    background: expanded === i ? `${event.color}08` : "rgba(13,21,36,0.6)",
                    border: `1px solid ${expanded === i ? event.color + "35" : "rgba(0,212,255,0.1)"}`,
                  }}
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-white">{event.title}</h3>
                      {!expanded || expanded !== i ? (
                        <p className="text-xs text-gray-500 mt-1 font-mono">{event.action}</p>
                      ) : null}
                    </div>
                    <button
                      className="ml-2 text-gray-500 hover:text-white transition-colors flex-shrink-0"
                      aria-label={expanded === i ? "Collapse" : "Expand"}
                    >
                      {expanded === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>

                  {expanded === i && (
                    <div className="mt-3 pt-3 border-t" style={{ borderColor: `${event.color}20` }}>
                      <p className="text-sm text-gray-300 leading-relaxed mb-3">{event.description}</p>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: event.color }} />
                        <span className="text-xs font-mono text-gray-500">{event.action}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncidentTimeline;
