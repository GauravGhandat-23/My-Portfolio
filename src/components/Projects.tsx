
import { useState } from "react";
import { Github, ExternalLink, Shield, Activity, Filter } from "lucide-react";

// Featured SOC projects go first
const socProjects = [
  {
    title: "Unified Log Analysis & Threat Detection using Splunk",
    description: "Centralized and analyzed multi-source security logs including DNS, HTTP, SSH, Apache, and AWS GuardDuty. Built SPL-based detection rules for brute-force, DNS tunneling, malware beaconing, and web exploitation.",
    technologies: ["Splunk Enterprise", "SPL", "Zeek", "Linux", "AWS GuardDuty"],
    github: "https://github.com/GauravGhandat-23",
    features: ["Brute-force detection", "DNS tunneling detection", "Malware beaconing", "Web exploitation detection", "Log correlation", "Real-time alerting"],
    category: "SOC/SIEM",
    badge: "FEATURED",
    badgeColor: "#00D4FF",
    image: null,
  },
  {
    title: "SOC Monitoring Dashboards using Splunk",
    description: "Interactive SOC dashboards designed for monitoring security events, traffic behavior, authentication anomalies, and attack trends using Splunk Enterprise with real log sources.",
    technologies: ["Splunk Enterprise", "SPL", "Cloudflare Logs", "SSH Logs", "Web Traffic Logs"],
    github: "https://github.com/GauravGhandat-23",
    features: ["Attack trend visualization", "Geographic threat distribution", "Authentication anomaly detection", "Brute-force monitoring", "Web traffic monitoring", "Firewall activity"],
    category: "SOC/SIEM",
    badge: "FEATURED",
    badgeColor: "#00D4FF",
    image: null,
  },
];

const allProjects = [
  {
    title: "AI-Powered Phishing Detection System",
    description: "Advanced phishing detection using machine learning algorithms to identify and flag potentially malicious emails and websites. Utilizes NLP techniques to analyze content, URLs, and metadata for real-time protection.",
    technologies: ["Python", "Streamlit", "scikit-learn", "pandas", "nltk"],
    github: "https://github.com/GauravGhandat-23/AI-Powered-Phishing-Detection-System",
    live: "https://ai-powered-phishing-detection-system-ples7i6bq2tzkaguiykzzt.streamlit.app/",
    category: "AI Security",
    image: "/project1.JPEG",
  },
  {
    title: "Advanced Threat Intelligence Platform",
    description: "All-in-one solution to analyze, classify, and visualize cybersecurity threats in real-time. Leverages ML models and live threat feeds for powerful insights to detect malicious activities.",
    technologies: ["Python", "Streamlit", "pandas", "matplotlib", "scikit-learn"],
    github: "https://github.com/GauravGhandat-23/Advanced-Threat-Intelligence-Platform",
    live: "https://advanced-threat-intelligence-platform-mk7obgez2n4p59zcvziiso.streamlit.app/",
    category: "AI Security",
    image: "/project2.png",
  },
  {
    title: "AI-Powered Malware Traffic Analysis Dashboard",
    description: "Dashboard for analyzing network traffic and detecting malware. Upload PCAP or CSV files, train a ML model, and visualize classification results.",
    technologies: ["Python", "Streamlit", "Scikit-learn", "PyShark", "Pandas", "Matplotlib"],
    github: "https://github.com/GauravGhandat-23/AI-Powered-Malware-Traffic-Analysis-Dashboard",
    live: "https://ai-powered-malware-traffic-analysis-dashboard-5unhlmqws8fkwirx.streamlit.app/",
    category: "AI Security",
    image: "/project5.png",
  },
  {
    title: "AI-Powered Intrusion Detection System (IDS)",
    description: "Advanced threat detection tool leveraging Machine Learning and the Groq API to analyze network traffic in real-time, identifying suspicious activities with high accuracy.",
    technologies: ["Python", "Streamlit", "Groq API", "pandas", "scikit-learn"],
    github: "https://github.com/GauravGhandat-23/AI-Powered-Intrusion-Detection-System",
    live: "https://ai-powered-intrusion-detection-system-fu9hleq57yva3bqcxxr2hb.streamlit.app/",
    category: "AI Security",
    image: "/project11.png",
  },
  {
    title: "AI-Powered Threat Hunting & Vulnerability Assessment Dashboard",
    description: "Real-time threat detection, vulnerability scanning, and log analysis with ML-based anomaly detection in network traffic.",
    technologies: ["Python", "Streamlit", "Scikit-learn", "Pandas", "wordcloud", "matplotlib"],
    github: "https://github.com/GauravGhandat-23/AI-Powered-Threat-Hunting-and-Vulnerability-Assessment-Dashboard",
    live: "https://ai-powered-threat-hunting-and-vulnerability-assessment-dashboa.streamlit.app/",
    category: "AI Security",
    image: "/project7.png",
  },
  {
    title: "AI-Powered Cybersecurity Threat Detection System",
    description: "AI-powered tool that analyzes text-based threats such as phishing emails, malicious network logs, and insider threats using the Groq API.",
    technologies: ["Python", "Streamlit", "Groq API", "pandas", "json"],
    github: "https://github.com/GauravGhandat-23/AI-Powered-Cybersecurity-Threat-Detection-System",
    live: "https://ai-powered-cybersecurity-threat-detection-system-bmnk8azbop2jd.streamlit.app/",
    category: "AI Security",
    image: "/project12.png",
  },
  {
    title: "AI-Powered Honeypot",
    description: "Cutting-edge honeypot designed to detect and analyze suspicious login attempts using AI for real-time threat analysis and response intelligence.",
    technologies: ["Python", "Streamlit", "Groq API"],
    github: "https://github.com/GauravGhandat-23/AI-Powered-Honeypot",
    live: "https://ai-powered-honeypot-rcepzhgotza5t5ruqnejz7.streamlit.app/",
    category: "AI Security",
    image: "/project13.png",
  },
  {
    title: "AI-Powered Zero-Trust Access Control",
    description: "Leverages machine learning to assess user trust in real time based on device, location, activity, and risk score for adaptive security policies.",
    technologies: ["Python", "Streamlit", "Groq API", "pandas", "scikit-learn"],
    github: "https://github.com/GauravGhandat-23/AI-Powered-Zero-Trust-Access-Control",
    live: "https://ai-powered-zero-trust-access-control-jkduzc6ennjgf98hdyr44y.streamlit.app/",
    category: "AI Security",
    image: "/project9.png",
  },
  {
    title: "AI-Powered Secure Coding Practices Analyzer",
    description: "Identifies and resolves common vulnerabilities in source code — SQL Injection, XSS, Command Injection, Insecure API Usage, and more.",
    technologies: ["Python", "Streamlit", "fpdf", "Groq API"],
    github: "https://github.com/GauravGhandat-23/AI-Powered-Secure-Coding-Practices-Analyzer",
    live: "https://ai-powered-secure-coding-practices-analyzer-d9gda3rgrdxfnsijkd.streamlit.app/",
    category: "Tools",
    image: "/project8.png",
  },
  {
    title: "Quantum-Resistant AI-Powered Cybersecurity",
    description: "AI-powered cybersecurity tool using Groq AI for threat analysis with post-quantum encryption for enhanced security.",
    technologies: ["Python", "Streamlit", "json", "Groq API"],
    github: "https://github.com/GauravGhandat-23/Quantum-Resistant-AI-Powered-Cybersecurity",
    live: "https://quantum-resistant-ai-powered-cybersecurity-9hos7tozfxhke8sglct.streamlit.app/",
    category: "AI Security",
    image: "/project10.png",
  },
  {
    title: "AI-Powered Log Anomaly Detector",
    description: "Detects suspicious patterns in system logs using AI and NLP via the Groq API for automated threat identification.",
    technologies: ["Python", "Streamlit", "Groq API", "argparse"],
    github: "https://github.com/GauravGhandat-23/AI-Powered-Log-Anomaly-Detector",
    category: "AI Security",
    image: "/project14.png",
  },
  {
    title: "AI-Powered Password Manager",
    description: "Secure application to store, manage, and retrieve passwords using Fernet encryption. All data remains encrypted at all times.",
    technologies: ["Python", "Streamlit", "cryptography", "sqlite3"],
    github: "https://github.com/GauravGhandat-23/AI-Powered-Password-Manager",
    live: "https://ai-powered-password-manager-nxmseazjnqwkgmwj3mxtht.streamlit.app/",
    category: "Tools",
    image: "/project3.png",
  },
  {
    title: "AI-Powered Password Strength Checker",
    description: "Evaluates password strength based on length, complexity, entropy, and provides AI-powered recommendations for improvement.",
    technologies: ["Python", "Streamlit", "Groq API"],
    github: "https://github.com/GauravGhandat-23/AI-powered-Password-Strength-Checker",
    live: "https://ai-powered-password-strength-checker-cbpcstehlbpiqkgldwpeed.streamlit.app/",
    category: "Tools",
    image: "/project4.png",
  },
  {
    title: "SMS Spam Detection System using NLP",
    description: "Machine learning-based application using Naive Bayes classifier and NLP to classify SMS messages as spam or legitimate.",
    technologies: ["Python", "Streamlit", "Scikit-learn", "numpy", "nltk", "matplotlib"],
    github: "https://github.com/GauravGhandat-23/SMS-Spam-Detection-System-using-NLP",
    live: "https://sms-spam-detection-system-using-nlp-gtuczas9epkwavddqnjx8s.streamlit.app/",
    category: "AI Security",
    image: "/project6.png",
  },
  {
    title: "Secure Data Hiding in Images using Steganography",
    description: "Python app enabling users to securely hide messages within images using AES encryption and LSB steganography via an intuitive Streamlit UI.",
    technologies: ["Python", "Streamlit", "numpy", "opencv-python-headless", "pycryptodome"],
    github: "https://github.com/GauravGhandat-23/ACITE-PROJECT-Steganography",
    live: "https://steganography-7dvxmx9kaewhhsh7c3aayn.streamlit.app/",
    category: "Tools",
    image: "/project15.png",
  },
];

const categories = ["All", "SOC/SIEM", "AI Security", "Tools"];

const FeaturedProjectCard = ({ project }: { project: typeof socProjects[0] }) => (
  <div className="cyber-card group relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-0.5"
      style={{ background: "linear-gradient(90deg, transparent, #00D4FF, transparent)" }} />
    <div className="flex items-start justify-between mb-4">
      <span className="cyber-badge text-xs font-bold">⭐ {project.badge}</span>
      <span className="text-xs font-mono px-2 py-0.5 rounded"
        style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)", color: "#8B5CF6" }}>
        {project.category}
      </span>
    </div>
    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyber-light transition-colors">
      {project.title}
    </h3>
    <p className="text-gray-400 text-sm mb-5 leading-relaxed">{project.description}</p>

    {/* Features */}
    <div className="mb-5">
      <div className="text-xs uppercase tracking-wider text-gray-600 mb-2 font-mono">Capabilities</div>
      <div className="flex flex-wrap gap-1.5">
        {project.features.map(f => (
          <span key={f} className="text-xs px-2 py-0.5 rounded"
            style={{ background: "rgba(0,255,136,0.06)", border: "1px solid rgba(0,255,136,0.2)", color: "#00FF88" }}>
            ✓ {f}
          </span>
        ))}
      </div>
    </div>

    {/* Technologies */}
    <div className="flex flex-wrap gap-1.5 mb-5">
      {project.technologies.map(t => <span key={t} className="cyber-badge">{t}</span>)}
    </div>

    <a href={project.github} target="_blank" rel="noopener noreferrer"
      className="btn-ghost text-xs"
      aria-label={`View ${project.title} on GitHub`}>
      <Github size={14} /> GitHub
    </a>
  </div>
);

const ProjectCard = ({ project }: { project: typeof allProjects[0] }) => (
  <div className="cyber-card group">
    {project.image && (
      <div className="aspect-video mb-4 overflow-hidden rounded-lg"
        style={{ border: "1px solid rgba(0,212,255,0.1)" }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    )}
    <div className="flex items-center justify-between mb-3">
      <span className="text-xs font-mono px-2 py-0.5 rounded"
        style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)", color: "#8B5CF6" }}>
        {project.category}
      </span>
    </div>
    <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyber-light transition-colors line-clamp-2">
      {project.title}
    </h3>
    <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>
    <div className="flex flex-wrap gap-1.5 mb-4">
      {project.technologies.slice(0, 4).map(t => <span key={t} className="cyber-badge">{t}</span>)}
      {project.technologies.length > 4 && (
        <span className="cyber-badge">+{project.technologies.length - 4}</span>
      )}
    </div>
    <div className="flex gap-3">
      <a href={project.github} target="_blank" rel="noopener noreferrer"
        className="btn-ghost text-xs" aria-label={`View ${project.title} code on GitHub`}>
        <Github size={14} /> Code
      </a>
      {project.live && (
        <a href={project.live} target="_blank" rel="noopener noreferrer"
          className="btn-ghost text-xs" aria-label={`Live demo of ${project.title}`}>
          <ExternalLink size={14} /> Demo
        </a>
      )}
    </div>
  </div>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? allProjects
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative"
      style={{ background: "linear-gradient(180deg, #0D1117 0%, #060B14 100%)" }}>
      <div className="container mx-auto px-4">
        <div className="mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-mono"
            style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", color: "#00D4FF" }}>
            <Shield size={12} /> PROJECTS
          </div>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <div className="section-title-line" />
        </div>

        {/* Featured SOC Projects */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(0,212,255,0.3), transparent)" }} />
            <span className="text-xs font-mono px-3 py-1 rounded-full"
              style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)", color: "#00D4FF" }}>
              SOC / SIEM PROJECTS
            </span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.3))" }} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {socProjects.map((p, i) => <FeaturedProjectCard key={i} project={p} />)}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-3 mb-8 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono mr-2">
            <Filter size={12} /> FILTER:
          </div>
          {categories.filter(c => c !== "SOC/SIEM").map(cat => (
            <button key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
              style={activeFilter === cat ? {
                background: "rgba(0,212,255,0.15)", border: "1px solid rgba(0,212,255,0.4)", color: "#00D4FF"
              } : {
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#6B7A99"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-on-scroll">
          {filtered.map((p, i) => <ProjectCard key={i} project={p} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
