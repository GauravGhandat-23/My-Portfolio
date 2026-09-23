
import { useEffect, useRef, useState } from "react";
import { Terminal, HelpCircle } from "lucide-react";

interface HistoryEntry {
  type: "input" | "output" | "error";
  text: string;
}

const COMMANDS: Record<string, string | (() => string)> = {
  help: () => `
Available commands:
  about         — Who I am
  skills        — My cybersecurity skill set
  projects      — Featured projects
  certifications— My certifications
  experience    — Work experience
  contact       — How to reach me
  github        — Open GitHub profile
  linkedin      — Open LinkedIn profile
  resume        — Download resume
  clear         — Clear terminal
  whoami        — Display identity

Type any command and press Enter.
`,
  whoami: `gaurav@soc: SOC Analyst — Level 1 | Blue Team Defender | SIEM & Threat Detection`,
  about: `
[PROFILE] Gaurav Uttam Ghandat
Role       : SOC Analyst – Level 1
Spec       : Blue Team / Defensive Security
Location   : Nashik, India
Email      : gauravghandat23@gmail.com

Focus Areas:
  ✓ SOC Operations & Alert Triage
  ✓ SIEM Monitoring (Splunk)
  ✓ Threat Detection & Incident Response
  ✓ Linux & Windows Server Administration
  ✓ Active Directory & Networking
`,
  skills: `
[SKILLS] Cybersecurity Skill Matrix

SIEM & Monitoring
  ▸ Splunk Enterprise  ▸ SPL Queries  ▸ Log Analysis
  ▸ SOC Dashboards     ▸ Alerting & Correlation

SOC Operations
  ▸ Alert Triage       ▸ Incident Response
  ▸ Threat Detection   ▸ Log Correlation

Security Tools
  ▸ Wireshark          ▸ Nmap         ▸ Burp Suite
  ▸ Metasploit         ▸ Kali Linux

Systems & Infrastructure
  ▸ Windows Server     ▸ Linux        ▸ Active Directory
  ▸ TCP/IP & DNS       ▸ VPN

Automation
  ▸ Python             ▸ PowerShell   ▸ Shell Scripting

Security Frameworks
  ▸ MITRE ATT&CK       ▸ OWASP Top 10  ▸ ITIL
`,
  projects: `
[PROJECTS] Featured Work

★ Unified Log Analysis & Threat Detection (Splunk)
  Multi-source log analysis: DNS, HTTP, SSH, Apache, GuardDuty
  Detects: Brute-force, DNS tunneling, beaconing, web attacks
  Tools: Splunk Enterprise, SPL, Zeek, Linux, AWS GuardDuty

★ SOC Monitoring Dashboards (Splunk)
  Real-time SOC dashboards for auth anomalies, attack trends
  Tools: Splunk, SPL, Cloudflare Logs, SSH Logs

+ 15 AI-Powered Security Projects on GitHub
  github.com/GauravGhandat-23
`,
  certifications: `
[CERTIFICATIONS] ${new Date().getFullYear()} Status

  ✓ Google Professional Cybersecurity Certificate
  ✓ Cisco — Introduction to Cybersecurity
  ✓ Security Blue Team — Network Analysis
  ✓ arcX — Foundation Level Threat Intelligence Analyst
  ✓ Reliance Foundation — Cyber Security Associate
  ✓ Tech Mahindra — Cybersecurity Programme
  ✓ Edureka — Linux Fundamentals
  ✓ Edureka — Cybersecurity & Ethical Hacking Internship
  ✓ Microsoft — Computers, OS & Security (Coursera)
  + 12 more industry simulations (Forage)

Total Certifications: 21
`,
  experience: `
[EXPERIENCE] Career Timeline

  System Administrator
  Company  : Bits & Bytes Services Pvt. Ltd.
  Period   : June 2025 – Present
  Skills   : Windows Server, Linux, Active Directory, VPN, ITIL

  Cybersecurity & Ethical Hacking Intern
  Company  : Edureka
  Period   : Feb 2024 – June 2024
  Skills   : OWASP, Nmap, Burp Suite, Linux Hardening, SOC Triage

  Education:
  B.E. Computer Engineering — Brahma Valley College (2021–2025)
`,
  contact: `
[CONTACT] Reach Out

  Email    : gauravghandat23@gmail.com
  GitHub   : github.com/GauravGhandat-23
  LinkedIn : linkedin.com/in/gaurav-ghandat-68a5a22b4
  Location : Nashik, Maharashtra, India

  Status   : 🟢 OPEN TO CYBERSECURITY OPPORTUNITIES
`,
  github: () => {
    window.open("https://github.com/GauravGhandat-23", "_blank");
    return "Opening GitHub profile in a new tab...";
  },
  linkedin: () => {
    window.open("https://www.linkedin.com/in/gaurav-ghandat-68a5a22b4/", "_blank");
    return "Opening LinkedIn profile in a new tab...";
  },
  resume: () => {
    const a = document.createElement("a");
    a.href = "/resume.pdf";
    a.download = "Gaurav_Ghandat_Resume.pdf";
    a.click();
    return "Downloading resume...";
  },
};

const InteractiveTerminal = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([
    { type: "output", text: `Welcome to Gaurav's SOC Terminal v1.0.0\nType 'help' to see available commands.` },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [history]);

  const execute = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory: HistoryEntry[] = [
      ...history,
      { type: "input", text: `gaurav@soc:~$ ${cmd}` },
    ];

    if (!trimmed) {
      setHistory(newHistory);
      return;
    }

    if (trimmed === "clear") {
      setHistory([{ type: "output", text: "Terminal cleared." }]);
      return;
    }

    const handler = COMMANDS[trimmed];
    if (handler) {
      const output = typeof handler === "function" ? handler() : handler;
      setHistory([...newHistory, { type: "output", text: output }]);
    } else {
      setHistory([...newHistory, {
        type: "error",
        text: `Command not found: '${trimmed}'. Type 'help' to see available commands.`,
      }]);
    }

    setCmdHistory(prev => [cmd, ...prev].slice(0, 50));
    setHistoryIdx(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      execute(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(historyIdx + 1, cmdHistory.length - 1);
      setHistoryIdx(next);
      setInput(cmdHistory[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = historyIdx - 1;
      if (next < 0) {
        setHistoryIdx(-1);
        setInput("");
      } else {
        setHistoryIdx(next);
        setInput(cmdHistory[next] ?? "");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const matches = Object.keys(COMMANDS).filter(c => c.startsWith(input.toLowerCase()));
      if (matches.length === 1) setInput(matches[0]);
    }
  };

  return (
    <section id="terminal" className="py-20 relative"
      style={{ background: "linear-gradient(180deg, #0D1117 0%, #060B14 100%)" }}>
      <div className="container mx-auto px-4">
        <div className="mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-mono"
            style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", color: "#00D4FF" }}>
            <Terminal size={12} /> INTERACTIVE TERMINAL
          </div>
          <h2 className="section-title">Interactive <span>Terminal</span></h2>
          <div className="section-title-line" />
          <p className="text-gray-500 text-sm mt-4">
            A portfolio terminal — type commands to explore. Try: <code className="text-cyber-light font-mono">help</code>, <code className="text-cyber-light font-mono">skills</code>, <code className="text-cyber-light font-mono">projects</code>
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-on-scroll">
          <div className="terminal-window">
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-dot" style={{ background: "#FF3366" }} />
              <div className="terminal-dot" style={{ background: "#FF8C00" }} />
              <div className="terminal-dot" style={{ background: "#00FF88" }} />
              <span className="ml-3 text-xs font-mono" style={{ color: "rgba(0,212,255,0.6)" }}>
                GAURAV@SOC:~$
              </span>
              <div className="ml-auto flex items-center gap-2 text-xs text-gray-600 font-mono">
                <HelpCircle size={12} />
                type 'help'
              </div>
            </div>

            {/* Terminal Body */}
            <div
              ref={bodyRef}
              className="p-4 font-mono text-sm overflow-y-auto cursor-text"
              style={{ minHeight: "400px", maxHeight: "500px" }}
              onClick={() => inputRef.current?.focus()}
              role="log"
              aria-label="Terminal output"
              aria-live="polite"
            >
              {history.map((entry, i) => (
                <div key={i} className="mb-1 whitespace-pre-wrap leading-relaxed">
                  {entry.type === "input" && (
                    <span className="text-green-400">{entry.text}</span>
                  )}
                  {entry.type === "output" && (
                    <span style={{ color: "#00D4FF" }}>{entry.text}</span>
                  )}
                  {entry.type === "error" && (
                    <span style={{ color: "#FF3366" }}>{entry.text}</span>
                  )}
                </div>
              ))}

              {/* Active Input Line */}
              <div className="flex items-center gap-1 mt-1">
                <span className="text-green-400">gaurav@soc:~$</span>
                <span className="text-white ml-1">{input}</span>
                <span className="animate-blink ml-0.5" style={{ color: "#00D4FF" }}>█</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="absolute opacity-0 w-0 h-0"
                  aria-label="Terminal command input"
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
            </div>

            {/* Footer hint */}
            <div className="px-4 py-2 flex items-center gap-4 text-xs font-mono"
              style={{ background: "#0A0F1E", borderTop: "1px solid rgba(0,212,255,0.08)", color: "rgba(107,122,153,0.6)" }}>
              <span>↑↓ history</span>
              <span>Tab autocomplete</span>
              <span>Enter execute</span>
              <span className="ml-auto">Portfolio terminal — no OS access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTerminal;
