
import { useEffect, useRef, useState } from "react";
import { Activity, AlertTriangle, Shield, Network, Lock, Server } from "lucide-react";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from "recharts";

// ─── Sample Data (clearly labeled as simulation) ───
const timelineData = [
  { t: "09:00", events: 1240, alerts: 2 },
  { t: "10:00", events: 3820, alerts: 5 },
  { t: "11:00", events: 2650, alerts: 3 },
  { t: "12:00", events: 4920, alerts: 7 },
  { t: "13:00", events: 6100, alerts: 12 },
  { t: "14:00", events: 5340, alerts: 8 },
  { t: "15:00", events: 7280, alerts: 15 },
];

const authData = [
  { t: "09:00", success: 320, fail: 12 },
  { t: "10:00", success: 480, fail: 8 },
  { t: "11:00", success: 560, fail: 45 },
  { t: "12:00", success: 390, fail: 180 },
  { t: "13:00", success: 420, fail: 240 },
  { t: "14:00", success: 610, fail: 30 },
  { t: "15:00", success: 720, fail: 18 },
];

const threatCategories = [
  { name: "Brute Force", value: 38, color: "#FF3366" },
  { name: "Phishing", value: 24, color: "#FF8C00" },
  { name: "Malware", value: 18, color: "#8B5CF6" },
  { name: "Recon", value: 12, color: "#00D4FF" },
  { name: "Other", value: 8, color: "#6B7A99" },
];

const logEntries = [
  { type: "alert", text: "[ALERT] 192.168.1.45 — Multiple failed SSH authentications (threshold: 10)" },
  { type: "detect", text: "[DETECT] Brute-force pattern identified — T1110.001 Password Guessing" },
  { type: "info", text: "[INFO] SPL query triggered: index=linux_auth failed_login > 10 | table src_ip" },
  { type: "warn", text: "[WARN] DNS anomaly — long subdomain query to unknown TLD from 10.0.0.122" },
  { type: "alert", text: "[ALERT] HTTP POST /admin/config — unusual user-agent detected" },
  { type: "success", text: "[RESOLVED] Source IP 192.168.1.45 blocked — incident ticket #SOC-1042 closed" },
  { type: "detect", text: "[DETECT] Lateral movement indicator — admin login from new host" },
  { type: "info", text: "[INFO] Active Directory change — privileged group membership modified" },
  { type: "alert", text: "[ALERT] Firewall deny — outbound TCP 4444 to 185.234.xx.xx (C2 indicator)" },
  { type: "success", text: "[INFO] Log correlation complete — Splunk dashboard refreshed" },
  { type: "warn", text: "[WARN] Certificate error on internal service — investigate certificate chain" },
  { type: "detect", text: "[DETECT] Beaconing pattern — 30s interval to external IP (malware indicator)" },
];

const logColors: Record<string, string> = {
  alert: "#FF3366",
  detect: "#8B5CF6",
  info: "#00D4FF",
  warn: "#FF8C00",
  success: "#00FF88",
};

const metrics = [
  { icon: <Activity size={20} />, label: "Security Events", value: 128492, display: "128,492", color: "#00D4FF", delta: "+2,341 /hr" },
  { icon: <AlertTriangle size={20} />, label: "Critical Alerts", value: 7, display: "07", color: "#FF3366", delta: "↑ 3 new" },
  { icon: <Shield size={20} />, label: "Threats Detected", value: 24, display: "24", color: "#FF8C00", delta: "Last 24h" },
  { icon: <Lock size={20} />, label: "Failed Logins", value: 1284, display: "1,284", color: "#8B5CF6", delta: "Brute-force" },
  { icon: <AlertTriangle size={20} />, label: "Active Incidents", value: 3, display: "03", color: "#FF3366", delta: "2 escalated" },
  { icon: <Network size={20} />, label: "Network Events", value: 48329, display: "48,329", color: "#00B4D8", delta: "Normal range" },
];

// Animated counter hook
const useCounter = (target: number, duration = 1800) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
};

const MetricCard = ({ metric }: { metric: typeof metrics[0] }) => {
  const { count, ref } = useCounter(metric.value);
  const display = count.toLocaleString();

  return (
    <div ref={ref} className="rounded-xl p-4 flex flex-col gap-2 transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "rgba(13,21,36,0.8)",
        border: `1px solid ${metric.color}22`,
        boxShadow: `0 4px 20px rgba(0,0,0,0.3)`,
      }}
    >
      <div className="flex items-center justify-between">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ background: `${metric.color}12`, border: `1px solid ${metric.color}30`, color: metric.color }}>
          {metric.icon}
        </div>
        <span className="text-xs font-mono px-2 py-0.5 rounded"
          style={{ background: `${metric.color}10`, color: metric.color, border: `1px solid ${metric.color}25` }}>
          {metric.delta}
        </span>
      </div>
      <div className="text-3xl font-bold font-mono" style={{ color: metric.color }}>{display}</div>
      <div className="text-xs uppercase tracking-widest" style={{ color: "rgba(107,122,153,0.8)" }}>{metric.label}</div>
    </div>
  );
};

const SOCCommandCenter = () => {
  const [visibleLogs, setVisibleLogs] = useState(logEntries.slice(0, 4));
  const [logIdx, setLogIdx] = useState(4);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogIdx(prev => {
        const next = (prev + 1) % logEntries.length;
        setVisibleLogs(logs => [...logs, logEntries[next]].slice(-8));
        return next;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [visibleLogs]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null;
    return (
      <div className="rounded-lg px-3 py-2 text-xs font-mono"
        style={{ background: "#0A0F1E", border: "1px solid rgba(0,212,255,0.3)" }}>
        <div className="text-gray-400 mb-1">{label}</div>
        {payload.map((p: any) => (
          <div key={p.dataKey} style={{ color: p.color }}>{p.name}: {p.value.toLocaleString()}</div>
        ))}
      </div>
    );
  };

  return (
    <section id="soc-command-center" className="py-20 relative"
      style={{ background: "linear-gradient(180deg, #0D1117 0%, #060B14 100%)" }}>

      {/* Scanner line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute left-0 right-0 h-px opacity-10"
          style={{ background: "linear-gradient(90deg, transparent, #00D4FF, transparent)", animation: "scan-line 6s linear infinite" }} />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-mono"
            style={{ background: "rgba(255,51,102,0.08)", border: "1px solid rgba(255,51,102,0.2)", color: "#FF3366" }}>
            <Activity size={12} className="animate-pulse" />
            LIVE SOC COMMAND CENTER
          </div>
          <h2 className="section-title">SOC <span>Command Center</span></h2>
          <div className="section-title-line" />
          <p className="text-gray-500 text-sm mt-4 font-mono">
            ⚠️ Interactive SOC Simulation — All metrics and events shown are sample demonstration data
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8 animate-on-scroll">
          {metrics.map((m) => (
            <MetricCard key={m.label} metric={m} />
          ))}
        </div>

        {/* Charts + Log Window */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Security Events Timeline */}
          <div className="cyber-card animate-on-scroll">
            <h3 className="text-sm font-semibold text-white mb-1">Security Events Timeline</h3>
            <p className="text-xs text-gray-600 mb-4 font-mono">Sample 7-hour window</p>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={timelineData}>
                <XAxis dataKey="t" tick={{ fill: "#6B7A99", fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="events" name="Events" stroke="#00D4FF" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="alerts" name="Alerts" stroke="#FF3366" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Authentication Activity */}
          <div className="cyber-card animate-on-scroll" style={{ animationDelay: "100ms" }}>
            <h3 className="text-sm font-semibold text-white mb-1">Authentication Activity</h3>
            <p className="text-xs text-gray-600 mb-4 font-mono">Success vs. Failed logins</p>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={authData} barSize={8}>
                <XAxis dataKey="t" tick={{ fill: "#6B7A99", fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="success" name="Success" fill="#00FF88" radius={[2, 2, 0, 0]} fillOpacity={0.7} />
                <Bar dataKey="fail" name="Failed" fill="#FF3366" radius={[2, 2, 0, 0]} fillOpacity={0.8} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Threat Categories Pie */}
          <div className="cyber-card animate-on-scroll" style={{ animationDelay: "200ms" }}>
            <h3 className="text-sm font-semibold text-white mb-1">Threat Categories</h3>
            <p className="text-xs text-gray-600 mb-2 font-mono">Distribution by type</p>
            <div className="flex items-center gap-4">
              <ResponsiveContainer width={120} height={120}>
                <PieChart>
                  <Pie data={threatCategories} cx="50%" cy="50%" innerRadius={30} outerRadius={55} dataKey="value" strokeWidth={0}>
                    {threatCategories.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} fillOpacity={0.8} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-1.5 flex-1">
                {threatCategories.map((cat) => (
                  <div key={cat.name} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-sm" style={{ background: cat.color }} />
                      <span className="text-gray-400">{cat.name}</span>
                    </div>
                    <span className="font-mono font-medium" style={{ color: cat.color }}>{cat.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Log Terminal */}
        <div className="mt-6 animate-on-scroll" style={{ animationDelay: "300ms" }}>
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-3 text-xs font-mono" style={{ color: "rgba(0,212,255,0.5)" }}>
                gaurav@soc-platform:~$ tail -f /var/log/security/events.log
              </span>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono text-green-400">STREAMING</span>
                <span className="text-xs font-mono text-gray-600 ml-2">— SAMPLE DATA</span>
              </div>
            </div>
            <div ref={logRef} className="terminal-body h-48 overflow-y-auto space-y-1">
              {visibleLogs.map((log, i) => (
                <div key={i} className="text-xs font-mono leading-relaxed"
                  style={{
                    color: logColors[log.type],
                    opacity: i === visibleLogs.length - 1 ? 1 : 0.55 + (i / visibleLogs.length) * 0.45,
                    animation: i === visibleLogs.length - 1 ? "fade-in 0.3s ease-out" : "none",
                  }}>
                  <span className="text-gray-600 mr-2 select-none">{new Date().toLocaleTimeString('en-GB')}</span>
                  {log.text}
                </div>
              ))}
              <div className="flex items-center gap-1">
                <span className="text-green-400 text-xs font-mono">gaurav@soc:~$</span>
                <span className="animate-blink text-cyber-light text-xs">█</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SOCCommandCenter;
